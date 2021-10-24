$(function(){
	 $('.for_inf').width($('.inf-h').innerWidth());
	 $('.for_help').width($('.help-h').innerWidth());

	 $('.i')
	 	.mouseenter(function(){
	 		$('.for_inf')
	 			.css('visibility', 'visible')
	 			.mouseenter(function(){$('.for_inf').css('visibility', 'visible');$('.i').css({'text-decoration': 'underline'})})
	 			.mouseleave(function(){$('.for_inf').css('visibility', 'hidden');$('.i').css({'text-decoration': 'none'})})})
	 	.mouseleave(function(){$('.for_inf').css('visibility', 'hidden')});
	 $('.h')
	 	.mouseenter(function(){
	 		$('.for_help')
	 		.css('visibility', 'visible')
	 		.mouseenter(function(){$('.for_help').css('visibility', 'visible');$('.h').css({'text-decoration': 'underline'})})
	 		.mouseleave(function(){$('.for_help').css('visibility', 'hidden');$('.h').css({'text-decoration': 'none'})})})
	 	.mouseleave(function(){$('.for_help').css('visibility', 'hidden')});

	 $('.base').click(function() { location.href = 'main/base.html'});
	 $('.more').click(function() { location.href = 'main/more.html'});
	 $('.cov').click(function() { location.href = 'main/cover.html'});
	 $('.ex').click(function() { location.href = 'main/ex.html'});
	 
	 $('.header').css('padding-top', function() {
	 	return $('.all_the_text').innerHeight()/4;
	 });

	$(window).scroll(function(){
		if($(window).scrollTop()>950){
			$('.ease-L').transition({x:'0px','opacity':'1'}, {duration: 2000});
			$('.ease-R').transition({x:'0px','opacity':'1'}, {duration: 2000});
		}
		if ($(window).scrollTop()>1150){
			$('.hard-L').transition({x:'0px','opacity':'1'}, {duration: 2000});
			$('.hard-R').transition({x:'0px','opacity':'1'}, {duration: 2000});
		}
	});
	$('img','.down_img')
		.hover(function(){
			$('img','.down_img').transition({'scale':'1'}, {duration: 500})
		})
		.mouseout(function(){
			$('img','.down_img').transition({'scale':'0.5'}, {duration: 500})
		})

	});