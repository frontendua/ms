jQuery(document).ready(function(){

    $("#preloader-area").delay(400).fadeOut(400);


$(window).scroll(function(){
    if($(window).scrollTop() >150){
        $('.header-top-area').addClass('header-top-area-scroll');
    }
    else{
        $('.header-top-area').removeClass('header-top-area-scroll')
    }
})

console.log($('.header-top-area ul').html());


$('.header-top-area ul li a').on("click",function(e){
   var azzz = $(this);

  $('html','body').stop().animate({
    scrollTop: $(azzz.attr('href')).offset().top - 50
        },1000);
        e.preventDefault();
})


})