//IBN.js

$ = jQuery;



var sections = ["index", "shared-profits", "audits", "faq", "support"];
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

window.addEventListener("resize", function(){
	sectionSize();
}, false);

function init(){
	topBar();
	questions();
	sectionSize();
}

function topBar(){
	$(document).ready(function($){
		$(window).scroll(function () {

			var windowHeight = window.innerHeight;
			if($(window).scrollTop() >= windowHeight){
				$("#topbar").css("background-color", "rgba(0,0,0,.6)");

			}
			else if($(window).scrollTop() <= 0){
				$("#topbar").css("background-color", "rgba(0,0,0,0)");
				$("#header-arrow").css("display", "inline");
			}
			else{
				$("#topbar").css("background-color", "rgba(0,0,0,.2)");
				$("#header-arrow").css("display", "none");
			}
		    
		});
	});
}

function questions(){
	$(document).ready(function($){
		$("#questions").scroll(function () {
			if($("#questions").scrollTop() >= $("#questions").innerHeight()){
				$("#questions > #down-arrow").css("display", "none");
			}
			else{
				$("#questions > #down-arrow").css("display", "inline");
			}
		});
			
	});
}

function sectionSize(){
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	if(windowHeight > windowWidth){
		$("#currentHeader").css({"width": "100%" , "height" : "20%"});
	}
	

}

var signInFlag = false;

function myIbn(){
	signInFlag = true;

	$("#sign-in-wrapper").fadeIn(900);
}

function closeMyIbn(){
	signInFlag = false;
	var currentSection = '#' + sections[current] + '-text';

	$("#sign-in-wrapper").fadeOut(50);
}


var surveyFlag = false;

function survey(){
	surveyFlag = true;

	$("#survey-wrapper").fadeIn(900);
}

function closeSurvey(){
	surveyFlag = false;

	$("#survey-wrapper").fadeOut(50);
}

function submitSurvey(){
	$("#questions").fadeOut(500, function(){$("#thank-you").fadeIn(500);});
}






