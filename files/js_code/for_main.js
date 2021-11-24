$(function() {

		$('.hide').fadeOut(0);

		$(window).scroll(function(){
			if ($(this).scrollTop() > 350){
				$('.hide').fadeIn();
			} else{
				$('.hide').fadeOut();
			}
			});
		
		$('.hide').click(function (){
			$('body,html').animate({
				scrollTop:0
			}, 800);
			return false;
		});

		$('.back')
			.click(function(){
				location.href = '../../index.html'
			})

		$(document).ready(function(){
	    	setTimeout(function(){
	        	window.scrollTo(0, 0);
	    }, 1);
	});
});