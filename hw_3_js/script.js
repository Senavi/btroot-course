document.addEventListener('DOMContentLoaded', () => {
    const headerData = {
        logo: {
            url: '/home',
            text: 'logo',
        },
        nav: {
            1: {
                url: '/home',
                text: 'Home',
            },
            2: {
                url: '/about',
                text: 'About',
            },
            3: {
                url: '/portfolio',
                text: 'Portfolio',
            },
            4: {
                url: '/contacts',
                text: 'Contacts',
            }
        },
        btn: ['LogIn', 'LogOut'],
    };

    // Створення header елементу
    const header = document.createElement('header');
    header.style.backgroundColor = '#f3f3f3';
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.textAlign = 'center';
    header.style.justifyContent = 'space-between';

    // Створення логотипу
    const logo = document.createElement('a');
    logo.href = headerData.logo.url;
    logo.textContent = headerData.logo.text;
    logo.style.fontSize = '24px';
    logo.style.marginRight = '20px';
    header.appendChild(logo);

    // Створення навігації
    const nav = document.createElement('nav');
    Object.values(headerData.nav).forEach(item => {
        const navItem = document.createElement('a');
        navItem.href = item.url;
        navItem.textContent = item.text;
        navItem.style.margin = '0 10px';
        nav.appendChild(navItem);
    });
    header.appendChild(nav);

    // Створення кнопок
    headerData.btn.forEach(btnText => {
        const button = document.createElement('button');
        button.textContent = btnText;
        button.style.marginLeft = '20px';
        header.appendChild(button);
    });

    // Додавання header до body
    document.body.prepend(header);
});
