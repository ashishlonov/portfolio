const translations = {
    ru: {
        // Навигация
        'nav.about': 'О себе',
        'nav.skills': 'Навыки',
        'nav.experience': 'Опыт',
        'nav.projects': 'Проекты',
        'nav.contact': 'Контакты',
        
        // Герой
        'hero.name': 'Шишлонов Александр',
        'hero.title': 'Backend Java Developer',
        'hero.description': 'Постоянно учусь и внедряю лучшие практики в свои проекты.',
        
        // Инфо
        'info.age': 'Возраст',
        'info.location': 'Местоположение',
        'info.locationValue': 'Россия, Саранск',
        'info.education': 'Образование',
        'info.educationValue': 'МГУ им. Н.П.Огарёва',
        'info.educationLevel': 'Бакалавриат - 4 курс',
        'info.experience': 'Опыт',
        'info.experienceValue': 'Пока только прохождение практик и pet-проекты',
        
        // Навыки
        'skills.title': 'Технические навыки',
        'skills.backend': 'Backend',
        'skills.tools': 'Инструменты',
        'skills.soft': 'Soft Skills',
        'skills.java': 'Java',
        'skills.spring': 'Spring Boot',
        'skills.postgres': 'PostgreSQL',
        'skills.docker': 'Docker',
        'skills.git': 'Git',
        'skills.kubernetes': 'Kubernetes',
        'skills.teamwork': 'Командная работа',
        'skills.problemSolving': 'Решение проблем',
        'skills.communication': 'Общение',
        'skills.hardWork': 'Трудолюбие',
        
        // Опыт
        'experience.title': 'Опыт',
        'experience.sdetTitle': 'SDET - практика',
        'experience.sdetDescription': 'Автоматизация интеграционного тестирования CI/CD-пайплайнов.',
        'experience.backendTitle': 'Backend - практика',
        'experience.backendDescription': 'Разработка микросервисной архитектуры на Spring Boot для приложения "доска объявлений".',
        
        // Мероприятия
        'events.title': 'Участие в мероприятиях',
        'events.event1Title': 'IV всероссийская школа НЦФМ и ИТМФ по математическому моделированию на супер-ЭВМ эска- и зеттафлопсной производительности',
        'events.event1Description': 'Выступал с докладом "Применение схемы "кабаре" для моделирования динамики двухфазных гравитирующих сред".',
        'events.event2Title': 'LIV Огарёвские чтения',
        'events.event2Description': 'Агентное моделирование процесса обслуживания точек питания (Java)',
        
        // Проекты
        'projects.title': 'Pet-проекты',
        'projects.projectTitle': 'Идет разработка онлайн-игры',
        
        // Контакты
        'contact.title': 'Контакты',
        
        // Футер
        'footer': '∫ 2025 Шишлонов Александр'
    },
    en: {
        // Навигация
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        
        // Герой
        'hero.name': 'Alexander Shishlonov',
        'hero.title': 'Backend Java Developer',
        'hero.description': 'Continuously learning and implementing best practices in my projects.',
        
        // Инфо
        'info.age': 'Age',
        'info.location': 'Location',
        'info.locationValue': 'Russia, Saransk',
        'info.education': 'Education',
        'info.educationValue': 'Ogarev Mordovia State University',
        'info.educationLevel': 'Bachelor\'s Degree - 4th year',
        'info.experience': 'Experience',
        'info.experienceValue': 'Currently only internships and pet-projects',
        
        // Навыки
        'skills.title': 'Technical Skills',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools',
        'skills.soft': 'Soft Skills',
        'skills.java': 'Java',
        'skills.spring': 'Spring Boot',
        'skills.postgres': 'PostgreSQL',
        'skills.docker': 'Docker',
        'skills.git': 'Git',
        'skills.kubernetes': 'Kubernetes',
        'skills.teamwork': 'Teamwork',
        'skills.problemSolving': 'Problem Solving',
        'skills.communication': 'Communication',
        'skills.hardWork': 'Hard Work',
        
        // Опыт
        'experience.title': 'Experience',
        'experience.sdetTitle': 'SDET - Internship',
        'experience.sdetDescription': 'Automation of integration testing for CI/CD pipelines.',
        'experience.backendTitle': 'Backend - Internship',
        'experience.backendDescription': 'Development of microservice architecture on Spring Boot for a "bulletin board" application.',
        
        // Мероприятия
        'events.title': 'Event Participation',
        'events.event1Title': 'IV All-Russian School of NCFM and ITMF on Mathematical Modeling on Supercomputers of Exa- and Zettaflops Performance',
        'events.event1Description': 'Presented a report "Application of the "cabaret" scheme for modeling the dynamics of two-phase gravitating media".',
        'events.event2Title': 'LIV Ogarev Readings',
        'events.event2Description': 'Agent-based modeling of food service point processes (Java)',
        
        // Проекты
        'projects.title': 'Pet Projects',
        'projects.projectTitle': 'Online game in development',
        
        // Контакты
        'contact.title': 'Contacts',
        
        // Футер
        'footer': '∫ 2025 Alexander Shishlonov'
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            const hasHTML = element.innerHTML !== element.textContent;
            
            if (hasHTML) {
                const tempElement = document.createElement('div');
                tempElement.innerHTML = translations[lang][key];
                element.innerHTML = element.innerHTML.replace(element.textContent, tempElement.textContent);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
    
    updateAgeText(lang);
}

function updateAgeText(lang) {
    const ageElement = document.getElementById('age');
    const birthDate = new Date(2004, 6, 18);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    if (lang === 'en') {
        ageElement.textContent = age + ' years';
    } else {
        let ageText;
        if (age % 10 === 1 && age % 100 !== 11) {
            ageText = ' год';
        } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
            ageText = ' года';
        } else {
            ageText = ' лет';
        }
        ageElement.textContent = age + ageText;
    }
}

function toggleLanguage() {
    const body = document.body;
    const currentLang = body.getAttribute('data-lang') || 'ru';
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    
    body.setAttribute('data-lang', newLang);
    translatePage(newLang);
    localStorage.setItem('language', newLang);
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const currentLang = body.getAttribute('data-lang') || 'ru';
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = currentLang === 'ru' ? 'Светлая' : 'Light';
        localStorage.setItem('theme', 'dark');
        updateFavicon('dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = currentLang === 'ru' ? 'Темная' : 'Dark';
        localStorage.setItem('theme', 'light');
        updateFavicon('light');

    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    body.setAttribute('data-theme', savedTheme);
    
    const savedLang = localStorage.getItem('language') || 'ru';
    body.setAttribute('data-lang', savedLang);
    
    translatePage(savedLang);
    
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.lang-toggle');
    
    themeToggle.textContent = savedTheme === 'dark' 
        ? (savedLang === 'ru' ? 'Светлая' : 'Light') 
        : (savedLang === 'ru' ? 'Темная' : 'Dark');
    
    langToggle.textContent = savedLang === 'ru' ? 'EN' : 'RU';
    
    const birthDate = new Date(2004, 6, 18);
    updateAgeText(savedLang);
    updateFavicon(savedTheme);
});

function updateFavicon(theme) {
    const oldFavicon = document.getElementById('dynamic-favicon');
    if (oldFavicon) {
        oldFavicon.remove();
    }
    const existingFavicons = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
    existingFavicons.forEach(link => {
        if (!link.id.includes('static')) { 
            link.remove();
        }
    });
    const newFavicon = document.createElement('link');
    newFavicon.id = 'dynamic-favicon';
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/png';
    
    if (theme === 'dark') {
        newFavicon.href = 'img/ASdark.png?t=' + Date.now();
    } else {
        newFavicon.href = 'img/ASlight.png?t=' + Date.now();
    }
    
    document.head.appendChild(newFavicon);
    
    setTimeout(() => {
        const tempLink = document.createElement('link');
        tempLink.rel = 'icon';
        tempLink.href = newFavicon.href + '&force=' + Math.random();
        document.head.appendChild(tempLink);
        setTimeout(() => tempLink.remove(), 100);
    }, 100);
}

function initAgeCalculator(elementId, birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}