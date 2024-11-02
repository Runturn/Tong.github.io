// 多语言支持
const translations = {
    zh: {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.skills': '技能',
        'nav.contact': '联系我',
        'nav.friends': '朋友',
        'nav.resources': '资源',
        'nav.affiliation': '关联',
        'home.name': 'HE RUNTONG',
        'home.title': '一个不愿意雨天赶路的行人',
        'about.title': '关于我',
        'about.description': '我叫何润桐。我毕业于武汉科技大学，获得学士学位。目前，我正在会津大学计算机科学与工程研究生院攻读硕士学位。 出生日期: 2000/06/24 身高: 182 厘米 体重：一直在变化。事实上我也不知道。 语言：中文、英语、日语 爱好：阅读 阅读',
        'skills.title': '我的技能',
        'skills.web.title': '常用语言',
        'skills.web.description': 'HTML, CSS, JavaScript，Java, Python， Go， C',
        'skills.design.title': '其他学习',
        'skills.design.description': '机器学习，区块链学习',
        'skills.responsive.title': '项目经历',
        'skills.responsive.description': 'JPHACKS',
        'contact.title': '联系我',
        'contact.submit': '发送消息'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'nav.friends': 'Friends',
        'nav.resources': 'Resources',
        'nav.affiliation': 'Affiliation',
        'home.name': 'HE RUNTONG',
        'home.title': 'A pedestrian who does not want to rush on a rainy day',
        'about.title': 'About Me',
        'about.description': 'My name is HE Runtong. I graduated with a Bachelor’s degree from Wuhan University of Science and Technology. Currently, I am pursuing a Master’s degree at the Graduate School of Computer Science and Engineering at the University of Aizu.Date of Birth: 2000/06/24Height: 182cmWeight：It’s always changing. It’s a secret to me, too.Language：Chinese，English，JapaneseHobbies: Reading',
        'skills.title': 'My Skills',
        'skills.web.title': 'Computer language',
        'skills.web.description': 'HTML, CSS, JavaScript，Java, Python， Go， C',
        'skills.design.title': 'Other studies',
        'skills.design.description': 'Machine Learning, Blockchain Learning',
        'skills.responsive.title': 'Project experience',
        'skills.responsive.description': 'JPHACKS',
        'contact.title': 'Contact Me',
        'contact.submit': 'Send Message'
    },
    ja: {
        'nav.home': 'ホーム',
        'nav.about': '私について',
        'nav.skills': 'スキル',
        'nav.contact': '連絡先',
        'nav.friends': '友達',
        'nav.resources': 'リソース',
        'nav.affiliation': '所属',
        'home.name': 'HE RUNTONG',
        'home.title': '雨の中を急ぎたくない歩行者',
        'about.title': '私について',
        'about.description': '私の名前は何潤桐です。武漢科技大学を卒業し、学士号を取得しました。現在、会津大学大学院コンピュータ理工学研究科修士課程に在籍しています。生年月日：2000年6月24日身長：182cm体重：常に変化しています。僕にも秘密です。言語：中国語、英語、日本語趣味：読書',
        'skills.title': '私のスキル',
        'skills.web.title': 'コンピュータ言語',
        'skills.web.description': 'HTML, CSS, JavaScript，Java, Python， Go， C',
        'skills.design.title': 'その他の関連学習',
        'skills.design.description': '機械学習、ブロックチェーン',
        'skills.responsive.title': 'プロジェクト経験',
        'skills.responsive.description': 'JPHACKS',
        'contact.title': '連絡先',
        'contact.submit': '送信する'
    }
};

// 搜索数据库
const searchDatabase = {
    'home': [
        { title: 'HE RUNTONG', url: '#home', content: '一个不愿意雨天赶路的行人' }
    ],
    'about': [
        { title: '关于我', url: '#about', content: '我叫何润桐。我毕业于武汉科技大学，获得学士学位。目前，我正在会津大学计算机科学与工程研究生院攻读硕士学位。出生日期: 2000/06/24身高: 182 厘米体重：一直在变化。事实上我也不知道。语言：中文、英语、日语爱好：阅读 阅读' }
    ],
    'skills': [
        { title: '常用语言', url: '#skills', content: 'HTML, CSS, JavaScript，Java, Python， Go， C' },
        { title: '其他学习', url: '#skills', content: '机器学习，区块链' },
        { title: '项目经历', url: '#skills', content: 'JPHACKS' }
    ],
    'contact': [
        { title: '联系方式', url: '#contact', content: '邮件联系' }
    ]
};

// 更新语言
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    
    // 更新文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新按钮状态
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// 语言切换事件监听
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

// 搜索功能
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    
    for (const [section, items] of Object.entries(searchDatabase)) {
        items.forEach(item => {
            if (item.title.toLowerCase().includes(searchTerm) || 
                item.content.toLowerCase().includes(searchTerm)) {
                const result = document.createElement('a');
                result.href = item.url;
                result.textContent = `${item.title} (${section})`;
                searchResults.appendChild(result);
            }
        });
    }

    // 显示搜索结果
    const existingResults = document.querySelector('.search-results');
    if (existingResults) existingResults.remove();
    if (searchTerm) document.body.appendChild(searchResults);
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
        // 当前打开的菜单ID
        let currentOpenMenu = null;

        // 切换菜单显示/隐藏
        function toggleMenu(menuId) {
            const menu = document.getElementById(menuId);
            
            // 如果已经有打开的菜单，且不是当前点击的菜单，则关闭它
            if (currentOpenMenu && currentOpenMenu !== menu) {
                currentOpenMenu.style.display = "none";
            }
            
            // 切换当前菜单的显示状态
            if (menu.style.display === "block") {
                menu.style.display = "none";
                currentOpenMenu = null;
            } else {
                menu.style.display = "block";
                currentOpenMenu = menu;
                
                // 调整菜单位置
                const button = event.currentTarget;
                const buttonRect = button.getBoundingClientRect();
                menu.style.top = (buttonRect.bottom + window.scrollY) + "px";
                menu.style.left = buttonRect.left + "px";
            }
        }

        // 点击页面其他地方关闭菜单
        window.onclick = function(event) {
            if (!event.target.matches('.nav-button')) {
                const menus = document.getElementsByClassName("menu-content");
                for (let menu of menus) {
                    if (menu.style.display === "block") {
                        menu.style.display = "none";
                    }
                }
                currentOpenMenu = null;
            }
        }