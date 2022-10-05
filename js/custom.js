// swap words

let words=document.querySelectorAll(".hero .animated-info span");
let i=1;
setInterval(()=>{
  words.forEach(word =>{
    if(word.classList.contains("active")){
      word.classList.remove("active");
    };

  })
  words[i].classList.add("active");
  ++i;
  if(i==3){
    i=0
  }
},2500)



// owl carsouse

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        items:3,
    margin:10,
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoPlaySpeed:100,
    center:true,
    autoplayHoverPause:true,
    responsiveClass:true,

    responsive:{
      0:{
        items:1,
        margin:0
      },
      1000:{
        items:3,
      }
    }
  });
});


// var owl = $('.owl-carousel');
// owl.owlCarousel({
//   items:3,
//   loop:true,
//   margin:10,
//   autoplay:true,
//   autoplayTimeout:1000,
//   autoplayHoverPause:true
// });



// activate links

let links=document.querySelectorAll(".navbar-nav li a");
let home=document.querySelector("#home")
let about=document.querySelector("#about");
let timeline=document.querySelector("#timeline");
let testimonials=document.querySelector("#testimonials");
let booking=document.querySelector("#book");
let footer=document.querySelector("#footer");
let halfScreen=window.innerHeight /2;

document.addEventListener('scroll',activateLinks);
function activateLinks(){
  
  if(window.scrollY >= home.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[0].classList.add("active")
  }
  if(window.scrollY >= about.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[1].classList.add("active")
  }
  if(window.scrollY >= timeline.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[2].classList.add("active")
  }
  if(window.scrollY >= testimonials.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[3].classList.add("active")
  }
  if(window.scrollY >= booking.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[4].classList.add("active")
  }
  if(window.scrollY >= footer.offsetTop - halfScreen){
    links.forEach(link=>{
      link.classList.remove("active")
    })
    links[5].classList.add("active")
  }
}