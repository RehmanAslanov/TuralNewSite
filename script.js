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
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sorgularınız göndərildi! Tezliklə sizinlə əlaqə saxlanacağıq.');
        form.reset();
    });
}

// Language switcher
document.querySelectorAll('.language-switcher a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.language-switcher a').forEach(l => {
            l.classList.remove('active');
        });
        link.classList.add('active');
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
        playerTrigger.setAttribute('aria-label', 'Videonu oynat');

        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = 'YouTube video preview';
        img.className = 'video-thumbnail';
        img.loading = 'lazy';

        const badge = document.createElement('span');
        badge.className = 'video-play-badge';
        badge.textContent = 'Play';

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

replaceYouTubeEmbedsWithThumbnails();
