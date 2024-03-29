let pause = document.querySelectorAll('.pause').forEach(function(pau){
  pau.addEventListener('click', function(){
  pau.classList.toggle('btn-active')
  });

});

let play = document.querySelectorAll('.card-content__btnplay').forEach(function(pla) {
  pla.addEventListener('click', function() {
    pla.classList.toggle('btnplay--active');
  })
})

let headerSearchIcon = document.querySelector('.header__search-icon');
let headerSearchInput = document.querySelector('.header__search-input');

headerSearchIcon.addEventListener('click', function(){

headerSearchInput.classList.toggle('header__search-input-activ')

 })


 const headerModalBtn = document.querySelector('.header__modal-btn');
 const headerModal = document.querySelector('.header__modal');
 const headerModalClose = document.querySelector('.header__modal-close');

 headerModalBtn.addEventListener('click', function(){
  headerModal.classList.add('header__modal-activ');
  document.body.classList.add('stop__scroll');
 });

 headerModalClose.addEventListener('click', function(){

  headerModal.classList.remove('header__modal-activ');
  document.body.classList.remove('stop__scroll');

  headerModalClose.classList.toggle('header__modal-toclose');

 });


 let podcastBtn = document.querySelector(".podcast__btn");
 let podcastItem = document.querySelectorAll(".podcast__item");

 podcastBtn.addEventListener('click', function(){
  podcastItem.forEach(function(item){
    item.classList.toggle('podcast__item--visibility');
  });
 });

 podcastBtn.addEventListener('click', function(){
  podcastBtn.innerHTML =
  (podcastBtn.innerHTML === 'Скрыть подкасты') ? podcastBtn.innerHTML = 'Ещё подкасты' : podcastBtn.innerHTML = 'Скрыть подкасты';
 });


// tab guests
const guestsIistBtn = document.querySelectorAll('.guests-list__btn');
const guestsContentItem = document.querySelectorAll('.guests__content-item');

guestsIistBtn.forEach(function(ele){
ele.addEventListener('click', function(e) {
const path = e.currentTarget.dataset.path;

guestsContentItem.forEach(function(ele){
ele.classList.remove('guests__content--active')
});
document.querySelector(`[data-target="${path}"]`).classList.add('guests__content--active');
});
});


const element = document.querySelector('.transfers__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
});

// selector transfers

const transfersSelect = document.querySelector('.transfers__select');

let listDima = document.querySelector('#dima');
let listTanya = document.querySelector('#tanya');
let listAnna = document.querySelector('#anna');
let listPetya = document.querySelector('#petya');


transfersSelect.addEventListener('change', function() {

  document.querySelector('.transfers__list--active.transfers__list').classList.remove('transfers__list--active');

  if (this.value == 'dima') {
    listDima.classList.add('transfers__list--active');
  }
  else if (this.value == 'tanya') {
    listTanya.classList.add('transfers__list--active');
  }
   else if (this.value == 'anna') {
    listAnna.classList.add('transfers__list--active');
  }
   else if (this.value == 'petya') {
    listPetya.classList.add('transfers__list--active');
  }
});


$(".guests__accordion-list").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true,
  icons: false
  });


  const slider = document.querySelector('.with-us__swiper');
  let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    speed: 600,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
      autoplay: {
        delay: 5000
      },
  });



  new window.JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      email: {
        required: true,
        email: true
      },
      sumitHandler: function(form) {
        let formData = new formData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);

        xhr.send(formData);

        form.reset();
      }
    },
    colorWrong: '#D52B1E',
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Имя должно содержать не менее двух символов'
      },

      email: {
        required: 'Вы не ввели e-mail',
        email: 'Введите корректный email'
      }

    }
  });

const filterItem = document.querySelectorAll('.palylists__content-item');

document.querySelector('.palylists__form').addEventListener('click', event => {
  if (event.target.tagName !== 'SPAN') return false;

  let filterClass = event.target.dataset['f'];


  filterItem.forEach(elem => {
    elem.classList.remove('palylists__content-itemhide');
    if (!elem.classList.contains(filterClass)) {
      elem.classList.toggle('palylists__content-itemhide');
    }
  });
});


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav ');
const menuBottom = document.querySelector('.header__bottom-list');
const menuLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('header__burger-active');

  menu.classList.toggle('nav-active');

  menuBottom.classList.toggle('nav-active');

  document.body.classList.toggle('stop__scroll');
});

menuLink.forEach(function(link){
  link.addEventListener('click', function(){

    burger.classList.remove('header__burger-active');

    menu.classList.remove('nav-active');

    menuBottom.classList.remove('nav-active');

    document.body.classList.remove('stop__scroll');

  })
});

const panel = document.querySelector('.header__bottom-reveal');
const players = document.querySelector('.header__bottom-players');
const svgPlus = document.querySelector('.header__bottom-plus');

panel.addEventListener('click', () => {
  players.classList.toggle('header__players-active');

  svgPlus.classList.toggle('header__bottom-plus-active');
});




