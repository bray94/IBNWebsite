//IBN.js

var sections = ["index", "shared-profits", "audits", "faq", "support"];
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

function imageSize(){
	var index = document.getElementById("index");
	var shared = document.getElementById("shared-profits");
	var audits = document.getElementById("audits");
	var faq = document.getElementById("faq");
	var support = document.getElementById("support");

	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	document.body.height = windowHeight + 'px';
	document.body.width = windowWidth + 'px';


};



var current = 0;

function pageScroll(link) {
	if (signInFlag){
		closeMyIbn(link);
	}

	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var currentY = window.pageYOffset;

	var wrapper = parseInt($('#wrapper').css('left'));
	var slider = parseInt($('#slider').css('margin-left'));

	var distance = (link - current) * windowWidth;
	var sliderDistance = (link - current) * 160;
	var time = Math.abs(link - current)  * 1000;
	current = link;

	$("#wrapper").animate({
		left: wrapper - distance + 'px'
	}, time);

	$("#slider").animate({
		marginLeft: slider + sliderDistance + 'px'
	}, time);	


}

var signInFlag = false;

function myIbn(){
	signInFlag = true;
	var currentSection = '#' + sections[current] + '-text';

	document.getElementById("sign-in-wrapper").style.left = 20 * current + '%';
	$(currentSection).fadeOut(900, function(){$("#sign-in-wrapper").fadeIn(900);});
}

function closeMyIbn(){
	signInFlag = false;
	var currentSection = '#' + sections[current] + '-text';

	$("#sign-in-wrapper").fadeOut(50, function(){$(currentSection).fadeIn(500);});
}

$(document).ready(function() {
    $('#password').keydown(function(event) {
        if (event.keyCode == 13) {
            this.form.submit();
            return false;
         }
    });
});







