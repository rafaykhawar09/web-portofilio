
let navbar = $(".navbar");


$(window).scroll(function(){

     if($(window).scrollTop() > 700){
          navbar.addClass("after-scroll");
     }
     else{
         navbar.removeClass("after-scroll");
     }
})