const menuBurger = document.getElementById('menu-burger');
const closeMenu = document.getElementById('close-menu');
const openedMenu = document.querySelector('.responsive_menu');

menuBurger.addEventListener('click', () => {
    openedMenu.classList.add('menu_active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    openedMenu.classList.remove('menu_active');
    document.body.style.overflow = 'auto';
});
