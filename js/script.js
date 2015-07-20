var aboveHeight = $('.navbar').outerHeight();

$(window).scroll(function(){
	if ($(window).scrollTop() > aboveHeight){
	$('.logo').addClass('logo_small')

}else{
	$('.logo').removeClass('logo_small');
}

});

var HomePositionFromTop = $('.jumbotron').offset().top;
var WorkPositionFromTop = ($('#work').offset().top);
var AboutPositionFromTop = $('#aboutme').offset().top;


// $(window).scroll(function(){
//   if ($(window).scrollTop() < WorkPositionFromTop){
//     $(".nav_home").parent().addClass("active")
//   } else {
//     $(".nav_home").parent().removeClass("active")
//   }
// });

// $(window).scroll(function(){
//   if (($(window).scrollTop() > WorkPositionFromTop) && ($(window).scrollTop() < AboutPositionFromTop)){
//     $(".nav_work").parent().addClass("active")
//   } else {
//     $(".nav_work").parent().removeClass("active")
//   }
// });


// $(window).scroll(function(){
//   if ($(window).scrollTop() > AboutPositionFromTop){
//     $(".nav_about").parent().addClass("active")
//   } else {
//     $(".nav_about").parent().removeClass("active")
//   }
// });


// Active Nav Item

$(".nav_home").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
   $('body').animate({ scrollTop: (HomePositionFromTop + 1) + 'px'});
});

$(".nav_work").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
   $('body').animate({ scrollTop: (WorkPositionFromTop - 30) + 'px'});
});

$(".nav_about").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
   $('body').animate({ scrollTop: (AboutPositionFromTop + 1) + 'px'});
});
