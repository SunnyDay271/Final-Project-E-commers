// toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping.cart')
document.querySelector('#shopping-cart-button').onclick = () => {
    shoppingCart.classList.toggle('active');
    e.preventDefault
};

// klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
})