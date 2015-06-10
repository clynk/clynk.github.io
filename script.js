
var aboveHeight = $('.top_bar').outerHeight();
$(window).scroll(function(){
	if ($(window).scrollTop() > aboveHeight){
	$('.top_bar').addClass('fixednav');
//add padding to header so nav bar doesn't jump
//turn off fixed nav @420 for mobile

}else{
	$('.top_bar').removeClass('fixednav');
}});


var clickStayConnected
var clickProjects
var clickHome

var connectedPositionFromTop = $('.contact').offset().top;
var projectsPositionFromTop = $('.main_page').offset().top;
var homePositionFromTop = $('header').offset().top;

$('.nav_connected').click(function () {
 $('body').animate({ scrollTop: (connectedPositionFromTop + 1) + 'px'});
  clickStayConnected = true;
});

$('.nav_projects').click(function () {
 $('body').animate({ scrollTop: (projectsPositionFromTop - 80) + 'px'});
  clickProjects = true;
});

$('.nav_home').click(function () {
 $('body').animate({ scrollTop: (homePositionFromTop) + 'px'});
  clickProjects = true;
});

$('#mobileNav').click(function(){
	$('.mobileNavList').toggle();
});