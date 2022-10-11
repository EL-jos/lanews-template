const btnOpenMenu = document.querySelector('.el-reseaux button');
const menuPhoneBackdrop = document.querySelector('#menu-phone-backdrop');
const btnCloseMenu = document.querySelector('.el-menu-phone .el-btn-close-menu-phone');

btnOpenMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    menuPhoneBackdrop.classList.add('el-active');
});

btnCloseMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    menuPhoneBackdrop.classList.remove('el-active');
});