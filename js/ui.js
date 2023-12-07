
/*** mobile menu from left ***/
const mobileBtn = document.querySelector('.header__mobile-menu-btn');

function showMenu(event) {
  const menu = document.querySelector('div.mobile-menu');
  const mobileBtn = document.querySelector('.header__mobile-menu-btn');
  menu.classList.toggle('active');
  mobileBtn.classList.toggle('open');
}

mobileBtn.addEventListener('click', showMenu, false);
mobileBtn.addEventListener('touchstart', showMenu, false);

/*** accordion in FAQs ***/