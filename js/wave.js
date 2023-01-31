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


const element = document.querySelector('.transfers__select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
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
