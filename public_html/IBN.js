//IBN.js


var sections = ["index", "shared-profits", "audits", "faq", "support"];
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;


function init(){
	//$(document).ready(function($){
		pageScroll();
		questions();
		sectionSize();
		infoBlock();
		arrow();
		topBar();

		// window.addEventListener("resize", function(){
		// 	sectionSize();
		// 	infoBlock();
		// }, false);

		// For mobile
		window.addEventListener(orientationEvent, function(){
			sectionSize();
		}, false);
	//})
}

function arrow(){

	var arrowTopStart = windowHeight * .85 + 'px';
	var arrowTopEnd = windowHeight * .83 + 'px';
	$("#header-arrow").css("top", arrowTopStart);
	$(document).ready(function($){
		$("#header-arrow").animate( {top: arrowTopEnd}, 'slow', function(){
			$("#header-arrow").animate( {top: arrowTopStart}, 'slow', function(){
				arrow();
			});
		});
	});
}
function parallax(){
	var top = $(window).scrollTop()
    var headerTop = -1 * top * .05 + 'px';
	$(".parallax").css("top", headerTop);
}

function pageScroll(){
	$(document).ready(function($){
		$(window).scroll(function () {

			parallax();

			var windowHeight = window.innerHeight;
			if($(window).scrollTop() >= windowHeight - 50){
				//$("#topbar").css({"background-color": "rgba(24,33,40,.9)", "border-bottom":"black solid 1px"});
				$("#topbar").css({"background-color": "rgba(225,225,225,.95)", "border-bottom":"black solid 1px"});
				$(".toplink").css("color", "rgb(30,30,30)");
				$("#logo").attr("src", "Images/logo-black.svg");

			}
			else if($(window).scrollTop() <= 0){
				$("#topbar").css({"background-color":"rgba(0,0,0,0)", "border-bottom":"black solid 0px", "color":"white"});
				$(".toplink").css("color", "rgb(225,225,225)");
				$("#logo").attr("src", "Images/logo.svg");
				$("#header-arrow").css("display", "initial");
			}
			else{
				$("#topbar").css({"background-color":"rgba(0,0,0,0)", "border-bottom":"black solid 0px"});
				$(".toplink").css("color", "rgb(225,225,225)");
				$("#logo").attr("src", "Images/logo.svg");
				$("#header-arrow").css("display", "none");
				var opacity = (windowHeight-100 - $(window).scrollTop())/(windowHeight-100);
				$(".headerText").css("opacity", opacity);
				var background = "rgba(0,0,0," + (($(window).scrollTop())/(windowHeight + 500) + 0) + ")";
				$(".parallax").css("background", background);
			}
		    
		});
	});
}

function topBar(){

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
	$(document).ready(function($){
		var windowHeight = window.innerHeight;
		var windowWidth = window.innerWidth;

		var width = windowWidth + 'px';
		var height = windowHeight + 'px';
		var mobileHeight = windowHeight * .4 + 'px';

		if(windowHeight > windowWidth){
			$(".currentHeader").css({"width": width , "height" : mobileHeight});
			$("header-arrow").css("top", "34%");
			$(".currentPage").css("top", "40%");
			$(".full-pages").css("background-size", "200% 100%");
			$("a.navlink:link, a.navlink:visited").css({"font-size": "60px", "width" : "700px"});
		}
		else{
			$(".currentHeader").css({"width": width , "height" : height});
			$("header-arrow").css("top", "85%");
			$(".currentPage").css("top", "100%");
			$(".full-pages").css("background-size", "100% 100%");
			$("a.navlink:link, a.navlink:visited").css({"font-size": "18px", "width": "140px"});
		}
	});
}

function infoBlock(){
	var width = windowWidth/4 - 2 +'px';
	$(".info-block").css('height', width);
	$(".info-block").css('width', width);

	var iconWidth = windowWidth/16 + 'px';
	$(".info-block-icon").height(iconWidth);


	var texts = ["#solar-text-inner", "#market-text-inner", "#finance-text-inner", "#audits-faq-text-inner"];
	var texts2 = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

	for (var i = texts.length - 1; i >= 0; i--) {
		$(texts[i]).css("height", "20%");
	};

	for (var i = texts2.length - 1; i >= 0; i--) {
	 	$(texts2[i]).css("width", width);
	 };

	last = null;
	infoBlockFade();

}

function infoBlockFade(){
	$(document).ready(function($){
		$(".info-block").on('click', '*', function() {

			var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

			for (var i = blocks.length - 1; i >= 0; i--) {
				$(blocks[i]).css("background", "rgba(0,0,0,0)");
			};

			var id = (event.target.id + "");

			if("-inner" == id.substring(id.length-6)){
				id=id.substring(0, id.length-6);
			}

			$("#"+id).css("background", "rgba(0,0,0,.7)");

			id = id.substring(0, id.length-5);

			if(last == "#"+id + "-textbox") {
				return;
			};

			if(last != null){
				var heightOfBox = $("#"+id + "-textbox").css("height");
				
				$(last).fadeOut('slow', function(){
					$("#textbox-container").animate({height: heightOfBox}, function(){
						$("#"+id + "-textbox").fadeIn('slow');
					});
				});
			}
			else{
				var heightOfBox = $("#"+id + "-textbox").css("height");
				$("#textbox-container").animate({height: heightOfBox}, function(){
					$("#"+id + "-textbox").fadeIn('slow');
				});
			}
			last = "#"+id + "-textbox";
		});

		$("body").click(function(event){

			var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

	    	if(event.target.className !== "info-block"){
	    		for (var i = blocks.length - 1; i >= 0; i--) {
					$(blocks[i]).css("background", "rgba(0,0,0,0)");
				};
				$(last).fadeOut('slow', function(){
					$("#textbox-container").animate({height: "0px"});
				});
				last = null;
	    	}


	  	});

	});
}

function closeTextbox(){
	$("body").click(function(event){

		var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

    	if(event.target.className !== "info-block"){
    		for (var i = blocks.length - 1; i >= 0; i--) {
				$(blocks[i]).css("background", "rgba(0,0,0,0)");
			};
			$(last).fadeOut('slow', function(){
				$("#textbox-container").animate({height: "0px"});
			});
			last = null;
    	}


  	});
}



var surveyFlag = false;

function survey(){
	$("#survey-wrapper").on('click', function() {
		var id = (event.target.id + "");
		if(id == "survey-wrapper") closeSurvey();
	});
	$("body").css("overflow", "hidden");
	surveyFlag = true;

	$("#survey-wrapper").fadeIn(900);
}

function closeSurvey(){
	surveyFlag = false;

	$("#survey-wrapper").fadeOut(500);

	$("body").css("overflow", "visible");
}

function submitSurvey(){
	document.getElementById("form").submit();
	$("#questions").fadeOut(500, function(){$("#thank-you").fadeIn(500);});
}

function submitQuestion(){
	document.getElementById("faq-question").submit();
}

function techVideoTopBar(){
	$(document).ready(function($){
		$(window).scroll(function () {
			if($(window).scrollTop() <= 0){
				$("#topbar").css({"background-color":"rgba(0,0,0,0)", "border-bottom":"black solid 0px"});
			}
			else{
				$("#topbar").css({"background-color": "rgba(30,30,30,.9)", "border-bottom":"black solid 1px"});
			}
		});
	});
}




