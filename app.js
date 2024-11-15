// app.js
document.addEventListener('DOMContentLoaded', () => {
    const websites = [
        { name: 'Google', url: 'https://google.com', description: '全球最受欢迎的搜索引擎', category: 'technology' },
        { name: 'YouTube', url: 'https://youtube.com', description: '全球最大的视频平台', category: 'entertainment' },
        { name: 'Wikipedia', url: 'https://wikipedia.org', description: '自由的百科全书', category: 'education' },
        { name: 'Amazon', url: 'https://amazon.com', description: '全球最大的电商平台', category: 'shopping' },
        { name: 'Stack Overflow', url: 'https://stackoverflow.com', description: '技术问题的问答社区', category: 'technology' },
        { name: 'Netflix', url: 'https://netflix.com', description: '视频流媒体平台', category: 'entertainment' },
        { name: 'Twitter', url: 'https://twitter.com', description: '社交媒体平台', category: 'entertainment' },
        { name: 'Instagram', url: 'https://instagram.com', description: '图片和视频分享平台', category: 'entertainment' },
        { name: 'GitHub', url: 'https://github.com', description: '开源代码托管平台', category: 'technology' },
        { name: 'Reddit', url: 'https://reddit.com', description: '社交新闻和讨论平台', category: 'entertainment' },
        { name: 'LinkedIn', url: 'https://linkedin.com', description: '职业社交平台', category: 'technology' },
        { name: 'Coursera', url: 'https://coursera.org', description: '在线教育平台，提供大学课程', category: 'education' },
        { name: 'Spotify', url: 'https://spotify.com', description: '全球领先的音乐流媒体平台', category: 'entertainment' },
        { name: 'Pinterest', url: 'https://pinterest.com', description: '图片和创意灵感分享平台', category: 'entertainment' },
        { name: 'Etsy', url: 'https://etsy.com', description: '手工艺品和独立设计商品', category: 'shopping' },
        { name: 'Duolingo', url: 'https://duolingo.com', description: '免费语言学习平台', category: 'education' },
        { name: 'TikTok', url: 'https://tiktok.com', description: '短视频分享平台', category: 'entertainment' },
        { name: 'Twitch', url: 'https://twitch.tv', description: '游戏视频直播平台', category: 'entertainment' },
        { name: 'Slack', url: 'https://slack.com', description: '团队协作工具', category: 'technology' },
        { name: 'Zoom', url: 'https://zoom.us', description: '视频会议和通讯平台', category: 'technology' },
        { name: 'Dropbox', url: 'https://dropbox.com', description: '文件存储和共享平台', category: 'technology' },
        { name: 'Hulu', url: 'https://hulu.com', description: '视频流媒体平台', category: 'entertainment' },
        { name: 'Yahoo', url: 'https://yahoo.com', description: '门户网站，提供搜索和新闻', category: 'technology' },
        { name: 'Airbnb', url: 'https://airbnb.com', description: '全球民宿短租平台', category: 'shopping' },
        { name: 'WhatsApp', url: 'https://whatsapp.com', description: '即时通讯平台', category: 'technology' },
        { name: 'Apple', url: 'https://apple.com', description: '全球科技公司，制造消费电子产品', category: 'technology' },
        { name: 'Microsoft', url: 'https://microsoft.com', description: '全球领先的科技公司', category: 'technology' },
        { name: 'Best Buy', url: 'https://bestbuy.com', description: '电子产品零售商', category: 'shopping' },
        { name: 'Newegg', url: 'https://newegg.com', description: '计算机硬件和电子产品零售商', category: 'shopping' },
        { name: 'Shopify', url: 'https://shopify.com', description: '电子商务平台，帮助卖家创建在线商店', category: 'shopping' },
        { name: 'Walmart', url: 'https://walmart.com', description: '全球零售商', category: 'shopping' },
        { name: 'PayPal', url: 'https://paypal.com', description: '在线支付平台', category: 'technology' },
        { name: 'Stripe', url: 'https://stripe.com', description: '在线支付解决方案', category: 'technology' },
        { name: 'Bing', url: 'https://bing.com', description: '微软的搜索引擎', category: 'technology' },
        { name: 'Spotify', url: 'https://spotify.com', description: '全球流行的音乐流媒体平台', category: 'entertainment' },
        { name: 'Ebay', url: 'https://ebay.com', description: '在线拍卖和购物平台', category: 'shopping' },
        { name: 'Coinbase', url: 'https://coinbase.com', description: '加密货币交易平台', category: 'technology' },
        { name: 'Bitbucket', url: 'https://bitbucket.org', description: 'Git托管平台', category: 'technology' },
        { name: 'Instacart', url: 'https://instacart.com', description: '网上超市平台', category: 'shopping' },
        { name: 'Wix', url: 'https://wix.com', description: '创建网站的平台', category: 'technology' },
        { name: 'Shopify', url: 'https://shopify.com', description: '电商平台，帮助用户建立自己的网店', category: 'shopping' },
        { name: 'Fiverr', url: 'https://fiverr.com', description: '自由职业者服务平台', category: 'technology' },
        { name: 'Airbnb', url: 'https://airbnb.com', description: '短期租赁平台', category: 'shopping' },
        { name: 'ZoomInfo', url: 'https://zoominfo.com', description: '商业数据和信息提供商', category: 'technology' },
        { name: 'SurveyMonkey', url: 'https://surveymonkey.com', description: '在线调查平台', category: 'technology' },
        { name: 'Buffer', url: 'https://buffer.com', description: '社交媒体管理工具', category: 'technology' },
        { name: 'Slack', url: 'https://slack.com', description: '团队沟通和协作平台', category: 'technology' },
        { name: 'Reddit', url: 'https://reddit.com', description: '社区讨论平台', category: 'entertainment' },
        { name: 'GitLab', url: 'https://gitlab.com', description: '开源的Git托管平台', category: 'technology' },
        { name: 'HackerRank', url: 'https://hackerrank.com', description: '编程挑战平台', category: 'technology' },
        { name: 'Product Hunt', url: 'https://producthunt.com', description: '最新产品发现平台', category: 'technology' },
        { name: 'Notion', url: 'https://notion.so', description: '笔记和组织工具', category: 'technology' },
        { name: 'Asana', url: 'https://asana.com', description: '任务和项目管理工具', category: 'technology' },
        { name: 'Trello', url: 'https://trello.com', description: '看板式项目管理工具', category: 'technology' },
        { name: 'Basecamp', url: 'https://basecamp.com', description: '团队项目管理工具', category: 'technology' },
        { name: 'Dropbox', url: 'https://dropbox.com', description: '文件存储和共享平台', category: 'technology' },
        { name: 'Google Drive', url: 'https://drive.google.com', description: '谷歌的云存储服务', category: 'technology' },
        { name: 'OneDrive', url: 'https://onedrive.live.com', description: '微软的云存储服务', category: 'technology' },
        { name: 'Evernote', url: 'https://evernote.com', description: '笔记和组织管理平台', category: 'technology' },
        { name: 'Miro', url: 'https://miro.com', description: '在线白板和协作工具', category: 'technology' },
        { name: 'Google Docs', url: 'https://docs.google.com', description: '谷歌的在线文档编辑平台', category: 'technology' },
        { name: 'Notion', url: 'https://notion.so', description: '全能笔记和任务管理工具', category: 'technology' },

    ];

    const websiteListElement = document.getElementById('website-list');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // 函数：加载网站并根据分类筛选
    function loadWebsites(category = 'all') {
        websiteListElement.innerHTML = '';  // 清空现有的内容
        const filteredWebsites = category === 'all' ? websites : websites.filter(website => website.category === category);

        filteredWebsites.forEach(website => {
            const websiteItem = document.createElement('div');
            websiteItem.classList.add('website-item');

            websiteItem.innerHTML = `
                <h4>${website.name}</h4>
                <p>${website.description}</p>
            `;

            websiteItem.addEventListener('click', () => {
                window.open(website.url, '_blank'); // 点击时直接跳转到新页面
            });

            websiteListElement.appendChild(websiteItem);
        });
    }

    // 监听分类按钮点击事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedCategory = event.target.getAttribute('data-category');
            loadWebsites(selectedCategory);
        });
    });

    // 初始加载所有网站
    loadWebsites();
});
