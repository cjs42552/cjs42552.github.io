$(function(){
	$(".drop_menu").hide();
	$("#nav, .drop_menu").hover(function(){
		$(".drop_menu").stop().slideToggle(500);
	});	
});