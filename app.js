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
        { name: 'Instagram', url: 'https://instagram.com', description: '图片和视频分享平台', category: 'entertainment' }
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
