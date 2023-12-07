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

const accordion = document.getElementsByClassName('q-and-a');
//const questions = document.getElementsByClassName('question');
//onst answers = document.getElementsByClassName('answer');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.querySelector('.answer').classList.toggle('answer-hidden');
    this.querySelector('.question').classList.toggle('closed');
    this.querySelector('.question').classList.toggle('open');
  });
  accordion[i].addEventListener('touchstart', function () {
    answers[i].classList.toggle('answer-hidden');
    questions[i].classList.toggle('closed');
    questions[i].classList.toggle('open');
  });
}
