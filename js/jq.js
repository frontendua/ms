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


var instaFeed = new Instafeed({
    get:'user',
    userId:'1980766588',
    accessToken: '1980766588.1677ed0.91f95d035930455dac64be033727eacf',
    limit: '12',
    resolution: 'low_resolution',
    template: '<div class="col-md-3 mb-3"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"class="img-fluid"/></a></div>'
});



instaFeed.run();


// -------------------------


})
