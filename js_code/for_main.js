$(function() {
	$(document).ready(function(){
	    setTimeout(function(){
	        window.scrollTo(0, 0);
	    }, 1);
	    if ($(window).scrollTop()=0) {$('.hide').css('opacity':'0')}
		$(window).scroll(function(){
			if($(window).scrollTop()>150){
				$('.hide').transition({'opacity':'1'}, {duration: 1000});
			}
		});
	});
});