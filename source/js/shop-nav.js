const shopNav = document.querySelector('.shop-nav__list');
const navToggle = document.querySelector('.user-nav__toggle');

const getSwitcher = () => {
  shopNav.classList.remove('shop-nav__list--nojs');

  navToggle.addEventListener('click', () => {
    if (shopNav.classList.contains('shop-nav__list--closed')) {
      shopNav.classList.remove('shop-nav__list--closed');
      shopNav.classList.add('shop-nav__list--opened');
    } else {
      shopNav.classList.add('shop-nav__list--closed');
      shopNav.classList.remove('shop-nav__list--opened');
    }
  });
};

export { getSwitcher };
