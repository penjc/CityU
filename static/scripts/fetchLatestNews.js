const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');
const translate = require('google-translate-api-x'); // 使用新的翻译库

const NEWS_URL = 'https://www.cityu.edu.hk/media/news';
const OUTPUT_FILE = './news.json';

// 格式化日期为 YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // 只保留 "YYYY-MM-DD"
}

// 翻译文本
async function translateText(text) {
    try {
        const translated = await translate(text, { to: 'zh-CN' }); // 将文本翻译为中文
        return translated.text;
    } catch (error) {
        console.error('翻译失败:', error);
        return text; // 如果翻译失败，返回原始文本
    }
}

async function fetchNews() {
    try {
        const { data } = await axios.get(NEWS_URL);
        const $ = cheerio.load(data);

        const newsItems = [];

        // 使用 Promise.all 来等待所有翻译操作完成
        const promises = $('.views-row').map(async (index, element) => {
            if (index >= 6) return; // 仅抓取前6条新闻
            const title = $(element).find('.views-field-title a').text().trim();
            const description = $(element).find('.views-field-field-cityu-news-summary').text().trim();
            const date = $(element).find('.views-field-created time').attr('datetime');
            const link = 'https://www.cityu.edu.hk' + $(element).find('.views-field-title a').attr('href');
            const image = 'https://www.cityu.edu.hk' + $(element).find('.views-field-field-cityu-news-thumbnail img').attr('src');

            const formattedDate = formatDate(date);

            // 翻译标题和描述
            const translatedTitle = await translateText(title);
            const translatedDescription = await translateText(description);

            // 把每一项 newsItems 作为 Promise 返回
            newsItems.push({
                title: translatedTitle,
                description: translatedDescription,
                date: formattedDate, // 保存格式化后的日期
                link,
                image
            });
        }).get();

        // 等待所有翻译完成
        await Promise.all(promises);

        // 按照日期降序排列，最新的新闻排在最前面
        newsItems.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA; // 降序排列
        });

        // 保存到 JSON 文件
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2), 'utf-8');
        console.log('抓取到的新闻已保存！');
    } catch (error) {
        console.error('抓取新闻时出错:', error);
    }
}

fetchNews();
