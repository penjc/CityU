const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

const NEWS_URL = 'https://www.cityu.edu.hk/media/news';
const OUTPUT_FILE = './news.json';

// 格式化日期为 YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // 只保留 "YYYY-MM-DD"
}

async function fetchNews() {
    try {
        const { data } = await axios.get(NEWS_URL);
        const $ = cheerio.load(data);

        const newsItems = [];
        $('.views-row').each((index, element) => {
            if (index >= 6) return; // 仅抓取前4条新闻
            const title = $(element).find('.views-field-title a').text().trim();
            const description = $(element).find('.views-field-field-cityu-news-summary').text().trim();
            const date = $(element).find('.views-field-created time').attr('datetime');
            const link = 'https://www.cityu.edu.hk' + $(element).find('.views-field-title a').attr('href');
            const image = 'https://www.cityu.edu.hk' + $(element).find('.views-field-field-cityu-news-thumbnail img').attr('src');

            // 格式化日期
            const formattedDate = formatDate(date);

            newsItems.push({
                title,
                description,
                date: formattedDate, // 保存格式化后的日期
                link,
                image
            });
        });

        // 保存到 JSON 文件
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(newsItems, null, 2), 'utf-8');
        console.log('抓取到的新闻已保存！');
    } catch (error) {
        console.error('抓取新闻时出错:', error);
    }
}

fetchNews();
