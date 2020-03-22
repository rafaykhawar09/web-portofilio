console.log(window)

$(window).scroll(function(){
     
     if($(window).scrollTop() > 100){
          $(".navbar").css("background-color", "black")
     }
     else{
          $(".navbar").css("background-color", "transparent")
     }
})