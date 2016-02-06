//IBN.js


var sections = ["index", "shared-profits", "audits", "faq", "support"];
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;



function init(){
	topBar();
	questions();
	sectionSize();
	infoBlock();
	arrow();

	window.addEventListener("resize", function(){
		sectionSize();
		infoBlock();
	}, false);

	// For mobile
	window.addEventListener(orientationEvent, function(){
		sectionSize();
	}, false);
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

function topBar(){
	$(document).ready(function($){
		$(window).scroll(function () {

			var windowHeight = window.innerHeight;
			if($(window).scrollTop() >= windowHeight-50){
				$("#topbar").css({"background-color": "rgba(0,0,0,.6)", "border-bottom":"black solid 1px"});

			}
			else if($(window).scrollTop() <= 0){
				$("#topbar").css({"background-color":"rgba(0,0,0,0)", "border-bottom":"black solid 0px"});
				$("#header-arrow").css("display", "initial");
				//arrow();
			}
			else{
				$("#topbar").css({"background-color":"rgba(0,0,0,0)", "border-bottom":"black solid 0px"});
				//$("#topbar").stop();
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
		$(".currentHeader").css({"width": "100%" , "height" : "40%"});
		$(".currentPage").css("top", "40%");
		$("#index").css("background-size", "200% 100%");
		$("#myibn-page").css("background-size", "200% 100%");
		$("#myibn-login-page").css("background-size", "200% 100%");
		$("a.navlink:link, a.navlink:visited").css({"font-size": "60px", "width" : "700px"});
	}
	else{
		$(".currentHeader").css({"width": "100%" , "height" : "100%"});
		$(".currentPage").css("top", "100%");
		$("#index").css("background-size", "100% 100%");
		$("#myibn-page").css("background-size", "100% 100%");
		$("#myibn-login-page").css("background-size", "100% 100%");
		$("a.navlink:link, a.navlink:visited").css({"font-size": "18px", "width": "140px"});
	}
}

function infoBlock(){
	var width = $(".info-block").css("width");
	$(".info-block").css('height', width);

	var texts = ["#solar-text-inner", "#market-text-inner", "#finance-text-inner", "#audits-faq-text-inner"];

	for (var i = texts.length - 1; i >= 0; i--) {
		$(texts[i]).css("height", "20%");
	};

	last = null;
	infoBlockFade();

}

function infoBlockFade(){

	$(".info-block").on('click', '*', function() {

		var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

		for (var i = blocks.length - 1; i >= 0; i--) {
			$(blocks[i]).css("background", "rgba(0,0,0,.7)");
			$(blocks[i].substring(0, blocks[i].length-5)).css("-webkit-filter", "blur(3px)");
			$(blocks[i].substring(0, blocks[i].length-5)).css("filter", "blur(3px)");
		};

		var id = (event.target.id + "");

		if("-inner" == id.substring(id.length-6)){
			id=id.substring(0, id.length-6);
		}

		$("#"+id).css("background", "rgba(0,0,0,.8)");

		id = id.substring(0, id.length-5);
		$("#"+id).css("-webkit-filter", "blur(0px)");
		$("#"+id).css("filter", "blur(0px)");

		if(last == "#"+id + "-textbox") {
			// var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

  	// 		for (var i = blocks.length - 1; i >= 0; i--) {
			// 	$(blocks[i]).css("background", "rgba(0,0,0,.7)");
			// 	$(blocks[i].substring(0, blocks[i].length-5)).css("-webkit-filter", "blur(0px)");
			// 	$(blocks[i].substring(0, blocks[i].length-5)).css("filter", "blur(0px)");
			// };
			// $(last).fadeOut('slow', function(){
			// 	$("#textbox-container").animate({height: "0px"});
			// 	last = null;
  	// 	  });
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
				$(blocks[i]).css("background", "rgba(0,0,0,.7)");
				$(blocks[i].substring(0, blocks[i].length-5)).css("-webkit-filter", "blur(0px)");
				$(blocks[i].substring(0, blocks[i].length-5)).css("filter", "blur(0px)");
			};
			$(last).fadeOut('slow', function(){
				$("#textbox-container").animate({height: "0px"});
			});
			last = null;
    	}


  	});

	
}

function closeTextbox(){
	$("body").click(function(event){

		var blocks = ["#solar-text", "#market-text", "#finance-text", "#audits-faq-text"];

    	if(event.target.className !== "info-block"){
    		for (var i = blocks.length - 1; i >= 0; i--) {
				$(blocks[i]).css("background", "rgba(0,0,0,.7)");
				$(blocks[i].substring(0, blocks[i].length-5)).css("-webkit-filter", "blur(0px)");
				$(blocks[i].substring(0, blocks[i].length-5)).css("filter", "blur(0px)");
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
	surveyFlag = true;

	$("#survey-wrapper").fadeIn(900);
}

function closeSurvey(){
	surveyFlag = false;

	$("#survey-wrapper").fadeOut(50);
}

function submitSurvey(){
	document.getElementById("form").submit();
	$("#questions").fadeOut(500, function(){$("#thank-you").fadeIn(500);});
}

function submitQuestion(){
	document.getElementById("faq-question").submit();
}




