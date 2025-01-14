const cron = require('node-cron');
const fetchLatestNews = require('./fetchLatestNews'); // 导入抓取新闻的脚本
const fs = require('fs');

// 设置定时任务：每天6点抓取新闻
cron.schedule('0 6 * * *', async () => {
    try {
        console.log('Running scheduled task to fetch news...');
        fetchLatestNews();  // 调用抓取新闻的函数
    } catch (error) {
        console.error('Error fetching news:', error);
    }
});
