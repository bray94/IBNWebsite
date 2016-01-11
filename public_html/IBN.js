//IBN.js

$ = jQuery;



var sections = ["index", "shared-profits", "audits", "faq", "support"];
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

window.addEventListener("resize", function(){
	
}, false);

function init(){
	topBar();
	questions();
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
	var index = document.getElementById("index-header");
	var shared = document.getElementById("shared-profits-header");
	var audits = document.getElementById("audits-header");
	var faq = document.getElementById("faq-header");
	var support = document.getElementById("support-header");

	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;

	document.body.height = windowHeight + 'px';
	document.body.width = windowWidth + 'px';

	index.style.width = shared.style.width = audits.style.width = faq.style.width = support.style.width = "100%";
	index.style.height = shared.style.height = audits.style.height = faq.style.height = support.style.height = "100%";
	

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






