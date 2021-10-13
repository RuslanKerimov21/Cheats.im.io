$('#triger').on('click', function (event){
	$('.list-dropdown-menu-block').toggleClass('show-block');
  $('.overlay').toggleClass('show-block');
  $('body').toggleClass('lock');
});

const swiper = new Swiper('.swiper-1',{
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});