const puppeteer = require('puppeteer');
const fs = require('fs');

const NEWS_URL = 'https://www.cityu.edu.hk/zh-cn/media/news';
const OUTPUT_FILE = './news.json';

// 格式化日期为 YYYY-MM-DD
function formatDate(dateString) {
    if (!dateString || dateString.trim() === '') {
        console.log('日期字符串为空，使用当前日期');
        return new Date().toISOString().split('T')[0];
    }
    
    try {
        // 处理中文日期格式，如 "2025年9月22日"
        if (dateString.includes('年') && dateString.includes('月') && dateString.includes('日')) {
            const match = dateString.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
            if (match) {
                const [, year, month, day] = match;
                const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                return formattedDate;
            }
        }
        
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.log(`无效的日期字符串: ${dateString}，使用当前日期`);
            return new Date().toISOString().split('T')[0];
        }
        return date.toISOString().split('T')[0];
    } catch (error) {
        console.log(`日期解析错误: ${error.message}，使用当前日期`);
        return new Date().toISOString().split('T')[0];
    }
}

// 由于直接抓取中文页面，不需要翻译功能

async function fetchNews() {
    let browser = null;
    try {
        console.log('启动浏览器...');
        
        // 检测是否在CI环境中
        const isCI = process.env.CI || process.env.GITHUB_ACTIONS;
        console.log(`运行环境: ${isCI ? 'CI/GitHub Actions' : '本地'}`);
        
        browser = await puppeteer.launch({
            headless: true, // 无头模式
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu',
                '--disable-web-security',
                '--disable-features=VizDisplayCompositor',
                '--disable-background-timer-throttling',
                '--disable-backgrounding-occluded-windows',
                '--disable-renderer-backgrounding',
                '--disable-extensions',
                '--disable-plugins',
                '--disable-default-apps',
                '--disable-hang-monitor',
                '--disable-prompt-on-repost',
                '--disable-sync',
                '--metrics-recording-only',
                '--no-default-browser-check',
                '--safebrowsing-disable-auto-update',
                '--disable-background-networking'
            ],
            // 在CI环境中设置超时
            timeout: 60000
        });

        const page = await browser.newPage();
        
        // 设置视口和用户代理
        await page.setViewport({ width: 1366, height: 768 });
        await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        // 设置额外的请求头
        await page.setExtraHTTPHeaders({
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
        });

        console.log('正在访问新闻页面...');
        
        // 访问页面，等待网络空闲
        await page.goto(NEWS_URL, { 
            waitUntil: 'networkidle2',
            timeout: 60000 
        });

        // 等待页面完全加载
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('页面加载完成，开始提取新闻数据...');

        // 在页面上下文中执行脚本来提取新闻数据
        const newsData = await page.evaluate(() => {
            const newsItems = [];
            
            // 尝试多种可能的选择器
            let newsElements = document.querySelectorAll('.views-row');
            
            if (newsElements.length === 0) {
                // 如果没找到 .views-row，尝试其他选择器
                newsElements = document.querySelectorAll('.news-item, .article-item, [class*="news"], [class*="article"]');
            }
            
            if (newsElements.length === 0) {
                // 尝试更通用的选择器
                newsElements = document.querySelectorAll('article, .item, .post');
            }

            console.log(`找到 ${newsElements.length} 个新闻元素`);

            for (let i = 0; i < Math.min(newsElements.length, 6); i++) {
                const element = newsElements[i];
                
                // 尝试多种方式提取标题
                let title = '';
                const titleSelectors = [
                    '.views-field-title a',
                    '.title a',
                    'h2 a',
                    'h3 a',
                    '.news-title a',
                    'a[href*="/news/"]'
                ];
                
                for (const selector of titleSelectors) {
                    const titleEl = element.querySelector(selector);
                    if (titleEl && titleEl.textContent.trim()) {
                        title = titleEl.textContent.trim();
                        break;
                    }
                }

                // 尝试多种方式提取描述
                let description = '';
                const descSelectors = [
                    '.views-field-field-cityu-news-summary',
                    '.summary',
                    '.excerpt',
                    '.description',
                    '.content',
                    'p'
                ];
                
                for (const selector of descSelectors) {
                    const descEl = element.querySelector(selector);
                    if (descEl && descEl.textContent.trim()) {
                        description = descEl.textContent.trim();
                        break;
                    }
                }

                // 尝试多种方式提取日期
                let date = '';
                const dateSelectors = [
                    '.views-field-created time',
                    'time',
                    '.date',
                    '.published',
                    '[datetime]',
                    '.views-field-created',
                    '.field-content'
                ];
                
                for (const selector of dateSelectors) {
                    const dateEl = element.querySelector(selector);
                    if (dateEl) {
                        date = dateEl.getAttribute('datetime') || dateEl.textContent.trim();
                        if (date) break;
                    }
                }
                
                // 如果还是没找到日期，尝试从文本中提取日期模式
                if (!date) {
                    const textContent = element.textContent;
                    const datePattern = /(\d{4}年\d{1,2}月\d{1,2}日)/;
                    const match = textContent.match(datePattern);
                    if (match) {
                        date = match[1];
                    }
                }

                // 尝试多种方式提取链接
                let link = '';
                const linkSelectors = [
                    '.views-field-title a',
                    '.title a',
                    'h2 a',
                    'h3 a',
                    'a[href*="/news/"]'
                ];
                
                for (const selector of linkSelectors) {
                    const linkEl = element.querySelector(selector);
                    if (linkEl && linkEl.href) {
                        link = linkEl.href;
                        break;
                    }
                }

                // 尝试多种方式提取图片
                let image = '';
                const imgSelectors = [
                    '.views-field-field-cityu-news-thumbnail img',
                    '.thumbnail img',
                    '.image img',
                    'img'
                ];
                
                for (const selector of imgSelectors) {
                    const imgEl = element.querySelector(selector);
                    if (imgEl && imgEl.src) {
                        image = imgEl.src;
                        break;
                    }
                }

                // 只有当我们至少有标题时才添加新闻项
                if (title) {
                    newsItems.push({
                        title: title,
                        description: description,
                        date: date,
                        link: link.startsWith('http') ? link : `https://www.cityu.edu.hk${link}`,
                        image: image.startsWith('http') ? image : (image ? `https://www.cityu.edu.hk${image}` : '')
                    });
                }
            }

            return newsItems;
        });

        console.log(`成功提取到 ${newsData.length} 条新闻`);

        if (newsData.length === 0) {
            console.warn('未能提取到新闻数据，可能网站结构已发生变化');
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf-8');
            return;
        }

        // 处理新闻数据（无需翻译，直接使用中文内容）
        const processedNews = [];
        for (const item of newsData) {
            const formattedDate = formatDate(item.date);

            processedNews.push({
                title: item.title,
                description: item.description,
                date: formattedDate,
                link: item.link,
                image: item.image
            });
        }

        // 按照日期降序排列
        processedNews.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });

        // 保存到 JSON 文件
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(processedNews, null, 2), 'utf-8');
        console.log(`成功抓取并保存了 ${processedNews.length} 条新闻！`);

    } catch (error) {
        console.error('抓取新闻时出错:', error);
        // 创建空文件避免程序崩溃
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2), 'utf-8');
    } finally {
        if (browser) {
            await browser.close();
            console.log('浏览器已关闭');
        }
    }
}

fetchNews();