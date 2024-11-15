// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// 模拟数据库中的推荐网站数据
const websites = [
    { id: 1, name: 'Google', url: 'https://google.com', description: '全球最受欢迎的搜索引擎', category: '搜索引擎', recommend_date: '2024-11-15' },
    { id: 2, name: 'YouTube', url: 'https://youtube.com', description: '全球最大的视频平台', category: '娱乐', recommend_date: '2024-11-14' },
    { id: 3, name: 'Wikipedia', url: 'https://wikipedia.org', description: '自由的百科全书', category: '教育', recommend_date: '2024-11-13' },
];

// 获取推荐网站数据的API
app.get('/api/recommended-websites', (req, res) => {
    res.json(websites);
});

app.listen(PORT, () => {
    console.log(`服务器正在运行，访问 http://localhost:${PORT}`);
});
