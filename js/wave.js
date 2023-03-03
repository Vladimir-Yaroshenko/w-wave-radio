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


 let headerModalBtn = document.querySelector('.header__modal-btn');
 let headerModal = document.querySelector('.header__modal');
 let headerModalClose = document.querySelector('.header__modal-close');

 headerModalBtn.addEventListener('click', function(){
  headerModal.classList.add('header__modal-activ');
 });

 headerModalClose.addEventListener('click', function(){

  headerModal.classList.remove('header__modal-activ');
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
  console.log(this.value);
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


$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true,
  icons: false
  });


  let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
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
  })

