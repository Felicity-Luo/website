document.addEventListener('DOMContentLoaded', () => {
    // 网站数据数组，每个对象包含网站的名称、URL、描述、类别和标签
    const websites = [
        { name: 'Daydoku', url: 'https://www.daydoku.com/', description: '赛博Puzzle网站', category: 'entertainment', label: 'vol.01' },
        { name: 'Window-Swap', url: 'https://www.window-swap.com/', description: '在世界的某个地方打开一扇窗', category: 'entertainment', label: 'vol.02' },
        { name: 'Hotkey Cheatsheet', url: 'https://hotkeycheatsheet.com/', description: '快捷键备忘录', category: 'tool', label: 'vol.03' },
        { name: 'Human Benchmark', url: 'https://humanbenchmark.com/', description: '人类基准测试', category: 'tool', label: 'vol.04' },
    ];

    // 获取网站列表的DOM元素
    const websiteListElement = document.getElementById('website-list');
    // 获取所有分类按钮
    const categoryButtons = document.querySelectorAll('.category-btn');

    // 加载网站列表，根据选择的类别进行过滤
    function loadWebsites(category = 'all') {
        websiteListElement.innerHTML = ''; // 清空现有的内容
        const filteredWebsites = category === 'all' ? websites : websites.filter(website => website.category === category);

        // 为每个过滤后的网站创建卡片并添加到DOM中
        filteredWebsites.forEach(website => {
            const websiteItem = createWebsiteCard(website);
            websiteListElement.appendChild(websiteItem);
        });
    }

    // 创建网站卡片
    function createWebsiteCard(website) {
        const card = document.createElement('div');
        card.className = 'website-card';

        // 创建并添加标签元素
        const label = document.createElement('div');
        label.className = 'card-label';
        label.textContent = website.label; // 使用每个网站的 label 属性
        card.appendChild(label);

        // 添加网站名称和描述
        card.innerHTML += `
            <h4>${website.name}</h4>
            <p>${website.description}</p>
        `;

        // 添加点击事件，点击卡片时打开新页面
        card.addEventListener('click', () => {
            window.open(website.url, '_blank');
        });

        return card;
    }

    // 为每个分类按钮添加点击事件监听器
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedCategory = event.target.getAttribute('data-category');
            loadWebsites(selectedCategory);
        });
    });

    // 初始加载所有网站
    loadWebsites();

    // 确保加载 Color4Bg 库后
    let colorbg = new Color4Bg.BlurGradientBg({
        dom: "box",
        colors: ["#f9dfcd", "#EBFAFF", "#fcffd6", "#BEE1FA"],
        loop: true
    });
});
