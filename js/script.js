var aboveHeight = $('.navbar').outerHeight();

$(window).scroll(function(){
	if ($(window).scrollTop() > aboveHeight){
	$('.logo').addClass('logo_small')

}else{
	$('.logo').removeClass('logo_small');
}

});

// Active Nav Item

$(".nav_about").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$(".nav_work").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

var clickAbout

var AboutmePositionFromTop = $('.Abouttitle').offset().top;

$('.nav_about').click(function () {
 $('body').animate({ scrollTop: (AboutmePositionFromTop - 100) + 'px'});
  clickAbout = true;
  console.log(1);
});

var clickWork

var WorkPositionFromTop = $('#work').offset().top;

$('.nav_work').click(function () {
 $('body').animate({ scrollTop: (WorkPositionFromTop - 50) + 'px'});
  clickWork = true;
  console.log(1);
});