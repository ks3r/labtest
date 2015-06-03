$(document).ready(function(){
	$("#button1").click(function(){
		$("#logo1").toggle();
		$("#logo2").toggle();
		
	});
	
	$("#button2").click(function(){
		$("#button1").css("color","green");
		$("#button1").css("font-family","Verdana","sans-serif");
		$("#button2").css("color","blue");
		$("#button3").css("color","yellow");
		
	});
	
	$("#button3").click(function(){
		$("#mainnav").animate({
			opacity: '0.75',
			width: '800px'
		});
	});
			
});