// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = true;
let currentLanguage = 'az';

const i18nData = {
    az: {
        'meta.title': 'TURAL HUSEYN - Kinematoqrafiya',
        'header.logo': 'TURAL · HÜSEYN',
        'nav.films': 'FİLMLƏR',
        'nav.portfolio': 'PORTFOLİO',
        'nav.loveStory': 'SEVGİ HEKAYƏSİ',
        'nav.about': 'HAQQIMDA',
        'nav.contact': 'ƏLAQƏ',
        'hero.imageAlt': 'Toy',
        'hero.label': 'TOY KİNEMATOQRAFİYASI',
        'hero.title': 'Ruhla çəkilən hekayələr',
        'hero.subtitle': 'Toyunuz sadəcə xatirələrdən ibarət olmamalıdır. O, bir filmə layiqdir.',
        'hero.primaryBtn': 'FİLMLƏRƏ BAX',
        'hero.secondaryBtn': 'HEKAYƏYƏ BAŞLA',
        'films.title': 'Seçilmiş Toy Filmləri',
        'films.subtitle': 'Hər kadrda - hər ürək döyüntüsü.',
        'films.card1': 'Alfonso & Nigar toy filmi',
        'films.card2': 'Laman & Daniel qısametrajlı film',
        'portfolio.title': 'Bütün Toy Filmləri',
        'portfolio.subtitle': 'Arxivə nəzər salın - hər toy, hər fəsil.',
        'portfolio.card1': 'Ağalar & Anastasiya toy filmi',
        'portfolio.card2': 'Veysel & Umran',
        'portfolio.card3': 'Emil & Emiliya toy filmi',
        'portfolio.card4': 'Cavid & Fira toy filmi',
        'loveStory.title': 'Sevgi Hekayəsi Filmləri',
        'loveStory.subtitle': 'Sakit günortalar, qızılı axşamlar və böyük gündən əvvəlki anlar.',
        'loveStory.card1': 'Türkan & Tural nişanöncəsi filmi',
        'loveStory.card2': 'Nigar & Tamerlan sevgi hekayəsi',
        'loveStory.card3': 'Alena Kaporeyko & Delec Oruclu',
        'about.imageAlt': 'Tural Hüseyn',
        'about.label': 'TOYDAN ƏVVƏL',
        'about.title': 'Hər sevgi hekayəsi eyni deyil.',
        'about.text': 'Hissləri trenddən üstün tutanlar, mənanı səs-küydən daha vacib sayanlar və adi videolardan daha çox zamansız xatirələr istəyənlər üçün buradayıq. Biz toy gününü sadəcə çəkmirik, onu yenidən hiss ediləcək bir xatirəyə çeviririk.',
        'about.quote': '"Çünki bəzi sevgi hekayələri standart kadrlara sığmır. Onlar kinoya layiqdir."',
        'about.stat1': 'TOYLAR',
        'about.stat2Value': '13 il',
        'about.stat2': 'KİNEMATOQRAFİYA',
        'contact.label': 'BAŞLA',
        'contact.title': 'Hekayənizi Birgə<br>Anladaq',
        'contact.subtitle': 'Dünyanın hər yerində toy çəkilişləri üçün əlçatımlıyam. Yazın və birlikdə zamansız bir əsər yaradaq.',
        'contact.location': 'Azərbaycan və dünya üzrə',
        'form.nameLabel': 'ADINIZ',
        'form.namePlaceholder': 'Adınız',
        'form.phoneLabel': 'TELEFON',
        'form.dateLabel': 'TOY TARİXİ',
        'form.emailLabel': 'E-POÇT',
        'form.emailPlaceholder': 'email@unvan.com',
        'form.locationLabel': 'MƏKAN',
        'form.locationPlaceholder': 'Toy yeri, əlavə məlumatlar',
        'form.submit': 'SORĞU GÖNDƏR',
        'form.success': 'Sorğunuz göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
        'footer.copyright': '© 2024 TURAL HUSEYN - Kinematik Toy Filmləri',
        'video.ariaLabel': 'Videonu oynat',
        'video.alt': 'YouTube video önizləməsi',
        'video.play': 'Oynat'
    },
    en: {
        'meta.title': 'TURAL HUSEYN - Cinematography',
        'header.logo': 'TURAL · HUSEYN',
        'nav.films': 'FILMS',
        'nav.portfolio': 'PORTFOLIO',
        'nav.loveStory': 'LOVE STORY',
        'nav.about': 'ABOUT',
        'nav.contact': 'CONTACT',
        'hero.imageAlt': 'Wedding',
        'hero.label': 'WEDDING CINEMATOGRAPHY',
        'hero.title': 'Stories captured with soul',
        'hero.subtitle': 'Your wedding deserves more than memories. It deserves a film.',
        'hero.primaryBtn': 'WATCH FILMS',
        'hero.secondaryBtn': 'START YOUR STORY',
        'films.title': 'Featured Wedding Films',
        'films.subtitle': 'Every frame, every heartbeat.',
        'films.card1': 'Alfonso & Nigar wedding film',
        'films.card2': 'Laman & Daniel short film',
        'portfolio.title': 'All Wedding Films',
        'portfolio.subtitle': 'Browse the archive - every wedding, every season.',
        'portfolio.card1': 'Agalar & Anastasia wedding film',
        'portfolio.card2': 'Veysel & Umran',
        'portfolio.card3': 'Emil & Emiliya wedding film',
        'portfolio.card4': 'Javid & Fira wedding film',
        'loveStory.title': 'Love Story Films',
        'loveStory.subtitle': 'Quiet afternoons, golden evenings, and moments before the big day.',
        'loveStory.card1': 'Turkan & Tural pre-wedding film',
        'loveStory.card2': 'Nigar & Tamerlan love story',
        'loveStory.card3': 'Alena Kaporeyko & Delec Oruclu',
        'about.imageAlt': 'Tural Huseyn',
        'about.label': 'BEFORE THE WEDDING',
        'about.title': 'Every love story is unique.',
        'about.text': 'We are here for those who value emotion over trends, meaning over noise, and timeless memories over ordinary videos. We do not just film a wedding day, we turn it into a memory you can feel again.',
        'about.quote': '"Because some love stories do not fit into standard shots. They deserve cinema."',
        'about.stat1': 'WEDDINGS',
        'about.stat2Value': '13 yrs',
        'about.stat2': 'FILMMAKING',
        'contact.label': 'START',
        'contact.title': 'Let Us Tell<br>Your Story',
        'contact.subtitle': 'Available for wedding films worldwide. Write to me and let us create a timeless piece together.',
        'contact.location': 'Azerbaijan & Worldwide',
        'form.nameLabel': 'YOUR NAME',
        'form.namePlaceholder': 'Your name',
        'form.phoneLabel': 'PHONE',
        'form.dateLabel': 'WEDDING DATE',
        'form.emailLabel': 'EMAIL',
        'form.emailPlaceholder': 'your@email.com',
        'form.locationLabel': 'LOCATION',
        'form.locationPlaceholder': 'Wedding venue, additional details',
        'form.submit': 'SEND INQUIRY',
        'form.success': 'Your inquiry has been sent! We will contact you shortly.',
        'footer.copyright': '© 2024 TURAL HUSEYN - Cinematic Wedding Films',
        'video.ariaLabel': 'Play video',
        'video.alt': 'YouTube video preview',
        'video.play': 'Play'
    },
    ru: {
        'meta.title': 'TURAL HUSEYN - Кинематография',
        'header.logo': 'TURAL · HUSEYN',
        'nav.films': 'ФИЛЬМЫ',
        'nav.portfolio': 'ПОРТФОЛИО',
        'nav.loveStory': 'LOVE STORY',
        'nav.about': 'ОБО МНЕ',
        'nav.contact': 'КОНТАКТЫ',
        'hero.imageAlt': 'Свадьба',
        'hero.label': 'СВАДЕБНАЯ КИНЕМАТОГРАФИЯ',
        'hero.title': 'Истории, снятые с душой',
        'hero.subtitle': 'Ваша свадьба заслуживает большего, чем просто воспоминания. Она заслуживает фильма.',
        'hero.primaryBtn': 'СМОТРЕТЬ ФИЛЬМЫ',
        'hero.secondaryBtn': 'НАЧАТЬ ИСТОРИЮ',
        'films.title': 'Избранные свадебные фильмы',
        'films.subtitle': 'Каждый кадр - каждый удар сердца.',
        'films.card1': 'Свадебный фильм Alfonso и Nigar',
        'films.card2': 'Короткометражный фильм Laman и Daniel',
        'portfolio.title': 'Все свадебные фильмы',
        'portfolio.subtitle': 'Откройте архив - каждая свадьба, каждый сезон.',
        'portfolio.card1': 'Свадебный фильм Agalar и Anastasia',
        'portfolio.card2': 'Veysel & Umran',
        'portfolio.card3': 'Свадебный фильм Emil и Emiliya',
        'portfolio.card4': 'Свадебный фильм Javid и Fira',
        'loveStory.title': 'Фильмы Love Story',
        'loveStory.subtitle': 'Тихие дни, золотые вечера и моменты перед главным днем.',
        'loveStory.card1': 'Предсвадебный фильм Turkan и Tural',
        'loveStory.card2': 'Love Story Nigar и Tamerlan',
        'loveStory.card3': 'Alena Kaporeyko & Delec Oruclu',
        'about.imageAlt': 'Tural Huseyn',
        'about.label': 'ПЕРЕД СВАДЬБОЙ',
        'about.title': 'Каждая история любви уникальна.',
        'about.text': 'Я работаю для тех, кто выбирает чувства вместо трендов, смысл вместо шума и вечные воспоминания вместо обычных видео. Я не просто снимаю свадьбу, а превращаю этот день в историю, которую можно переживать снова.',
        'about.quote': '"Потому что некоторые истории любви не помещаются в стандартные кадры. Они достойны кино."',
        'about.stat1': 'СВАДЕБ',
        'about.stat2Value': '13 лет',
        'about.stat2': 'КИНЕМАТОГРАФИИ',
        'contact.label': 'НАЧАТЬ',
        'contact.title': 'Расскажем Вашу<br>Историю',
        'contact.subtitle': 'Снимаю свадьбы по всему миру. Напишите мне, и мы вместе создадим вневременной фильм.',
        'contact.location': 'Азербайджан и весь мир',
        'form.nameLabel': 'ВАШЕ ИМЯ',
        'form.namePlaceholder': 'Ваше имя',
        'form.phoneLabel': 'ТЕЛЕФОН',
        'form.dateLabel': 'ДАТА СВАДЬБЫ',
        'form.emailLabel': 'E-MAIL',
        'form.emailPlaceholder': 'your@email.com',
        'form.locationLabel': 'ЛОКАЦИЯ',
        'form.locationPlaceholder': 'Место свадьбы, дополнительные детали',
        'form.submit': 'ОТПРАВИТЬ ЗАЯВКУ',
        'form.success': 'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.',
        'footer.copyright': '© 2024 TURAL HUSEYN - Кинематографичные свадебные фильмы',
        'video.ariaLabel': 'Воспроизвести видео',
        'video.alt': 'Превью YouTube видео',
        'video.play': 'Смотреть'
    }
};

function t(key) {
    return (i18nData[currentLanguage] && i18nData[currentLanguage][key]) || key;
}

function applyLanguage(lang) {
    if (!i18nData[lang]) {
        return;
    }

    currentLanguage = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((node) => {
        const key = node.getAttribute('data-i18n');
        const value = t(key);
        node.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
        const key = node.getAttribute('data-i18n-html');
        const value = t(key);
        node.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        const key = node.getAttribute('data-i18n-placeholder');
        node.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
        const key = node.getAttribute('data-i18n-alt');
        node.setAttribute('alt', t(key));
    });

    document.querySelectorAll('.language-switcher a').forEach((link) => {
        link.classList.toggle('active', link.dataset.lang === lang);
    });

    document.querySelectorAll('.video-thumb-link').forEach((btn) => {
        btn.setAttribute('aria-label', t('video.ariaLabel'));
        const image = btn.querySelector('.video-thumbnail');
        const badge = btn.querySelector('.video-play-badge');
        if (image) {
            image.alt = t('video.alt');
        }
        if (badge) {
            badge.textContent = t('video.play');
        }
    });

    localStorage.setItem('siteLang', lang);

    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.history.replaceState({}, '', currentUrl.toString());
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }
});

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
const form = document.querySelector('.contact-form form');
const weddingDateInput = document.querySelector('.contact-form input[type="date"]');

if (weddingDateInput) {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    weddingDateInput.value = today.toISOString().split('T')[0];
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(t('form.success'));
        form.reset();
    });
}

// Language switcher
document.querySelectorAll('.language-switcher a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        applyLanguage(link.dataset.lang || 'az');
    });
});

// Replace YouTube iframes with click-to-play thumbnails for in-page playback
function replaceYouTubeEmbedsWithThumbnails() {
    const youtubeIframes = document.querySelectorAll('.video-container iframe[src*="youtube.com/embed/"]');

    youtubeIframes.forEach((iframe) => {
        if (iframe.dataset.inlinePlay === 'true') {
            return;
        }

        const src = iframe.getAttribute('src') || '';
        const match = src.match(/\/embed\/([^?&#/]+)/);
        if (!match) {
            return;
        }

        const videoId = match[1];
        const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

        const playerTrigger = document.createElement('button');
        playerTrigger.type = 'button';
        playerTrigger.className = 'video-thumb-link';
        playerTrigger.setAttribute('aria-label', t('video.ariaLabel'));

        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = t('video.alt');
        img.className = 'video-thumbnail';
        img.loading = 'lazy';

        const badge = document.createElement('span');
        badge.className = 'video-play-badge';
        badge.textContent = t('video.play');

        const playIcon = document.createElement('span');
        playIcon.className = 'video-play-icon';
        playIcon.textContent = '▶';

        playerTrigger.addEventListener('click', () => {
            window.open(watchUrl, '_blank', 'noopener,noreferrer');
        });

        playerTrigger.appendChild(img);
        playerTrigger.appendChild(playIcon);
        playerTrigger.appendChild(badge);

        const container = iframe.parentElement;
        if (container) {
            container.replaceChildren(playerTrigger);
        }
    });
}

const urlLang = new URLSearchParams(window.location.search).get('lang');
const savedLanguage = localStorage.getItem('siteLang');
const initialLanguage = (urlLang && i18nData[urlLang])
    ? urlLang
    : (savedLanguage && i18nData[savedLanguage] ? savedLanguage : 'az');

applyLanguage(initialLanguage);

replaceYouTubeEmbedsWithThumbnails();
