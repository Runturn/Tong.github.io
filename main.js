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
        'home.name': '你的名字',
        'home.title': '网页开发者 | 设计师 | 创造者',
        'about.title': '关于我',
        'about.description': '这里是关于你的介绍。分享你的经历、兴趣和目标。让访问者了解真实的你。',
        'skills.title': '我的技能',
        'skills.web.title': 'Web开发',
        'skills.web.description': 'HTML, CSS, JavaScript',
        'skills.design.title': '设计',
        'skills.design.description': 'UI/UX, Photoshop',
        'skills.responsive.title': '响应式设计',
        'skills.responsive.description': '移动端优先',
        'contact.title': '联系我',
        'contact.name': '你的名字',
        'contact.email': '你的邮箱',
        'contact.message': '你的留言',
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
        'home.name': 'Your Name',
        'home.title': 'Web Developer | Designer | Creator',
        'about.title': 'About Me',
        'about.description': 'This is your introduction. Share your experiences, interests, and goals. Let visitors know the real you.',
        'skills.title': 'My Skills',
        'skills.web.title': 'Web Development',
        'skills.web.description': 'HTML, CSS, JavaScript',
        'skills.design.title': 'Design',
        'skills.design.description': 'UI/UX, Photoshop',
        'skills.responsive.title': 'Responsive Design',
        'skills.responsive.description': 'Mobile First',
        'contact.title': 'Contact Me',
        'contact.name': 'Your Name',
        'contact.email': 'Your Email',
        'contact.message': 'Your Message',
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
        'home.name': 'あなたの名前',
        'home.title': 'Web開発者 | デザイナー | クリエイター',
        'about.title': '私について',
        'about.description': 'ここにあなたの紹介文を入れてください。経験、興味、目標を共有し、訪問者にあなたの本質を伝えましょう。',
        'skills.title': '私のスキル',
        'skills.web.title': 'Web開発',
        'skills.web.description': 'HTML, CSS, JavaScript',
        'skills.design.title': 'デザイン',
        'skills.design.description': 'UI/UX, Photoshop',
        'skills.responsive.title': 'レスポンシブデザイン',
        'skills.responsive.description': 'モバイルファースト',
        'contact.title': '連絡先',
        'contact.name': 'お名前',
        'contact.email': 'メールアドレス',
        'contact.message': 'メッセージ',
        'contact.submit': '送信する'
    }
};

// 滚动动画
const fadeInElements = document.querySelectorAll('.skill-card, .about-content');

const fadeInOnScroll = () => {
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// 语言切换功能
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 语言按钮事件监听
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        updateLanguage(lang);
    });
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