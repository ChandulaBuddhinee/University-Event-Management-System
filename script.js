let menu = document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');

menu.onclick = ()=>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

windo.onscroll = ()=>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
}



 var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });