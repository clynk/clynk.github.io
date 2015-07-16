var aboveHeight = $('.navbar').outerHeight();

$(window).scroll(function(){
	if ($(window).scrollTop() > aboveHeight){
	$('.logo').addClass('logo_small')

}else{
	$('.logo').removeClass('logo_small');
}

});

var clickViewCase

var CasestudyPositionFromTop = $('.casestudy').offset().top;

$('.viewcase').click(function () {
 $('body').animate({ scrollTop: (CasestudyPositionFromTop - 50) + 'px'});
  clickViewCase = true;
  console.log(1);
});