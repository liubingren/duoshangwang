$(function(){
	$(".loadhead").load("commonhead.html?="+Math.random());
	$(".loadfoot").load("commonfoot.html?="+Math.random());
	
	$(".head_wrap .bottom a").click(function(){
		$(this).parent().parent().parent().parent().parent().next.css("display","block");
		
	})
//	$(".head_wrap .bottom a").mouseout(function(){
//		$('.slide_wrap').css("display","none");
//		
//	})
	
	
})
