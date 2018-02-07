// $(document).ready(function() {
// });

$(window).bind("load", function() {
  // init();
  InitCarouselHome();
  initSticky();
});

function muncul(el){
	$(".first-hide").velocity({opacity:1},{duration:1000, easing: [0.165, 0.84, 0.44, 1]})
	setTimeout(function(){
		$(".second-hide").velocity({opacity:1}, {duration:700, easing: [.67,.01,.34,1]})
	},1000)
}

function init(){
	$('.nav-up .nav-item:not(:nth-last-child(2)) a').append(', &nbsp;')
	$('.nav-up .nav-item').first().find('a').prepend('&nbsp;')
	var vx = $(".nav-right").position().left - 65
	var vy = $(".nav-right").position().top - 3
	$(".second").velocity({translateY:vy},{duration: 700,delay:300,easing: [.67,.01,.34,1]})
	.velocity({translateX:vx},{duration: 700,delay:300,easing: [.67,.01,.34,1], complete:function(){muncul()}})
}



function InitCarouselHome(){
	if ($(".hero-carousel").length){
		var navC = 'wa';
		var nav = 'we';
		var option = {
            margin:0,
            dots:false,
            navContainer: navC,
            navText: nav,
            items: 1,
            onInitialized: initCar,
        }
		$(".hero-carousel").owlCarousel(option)
		$(".hero-carousel").on('changed.owl.carousel', function(event) {
			var parent = $(event.target).parent()
			var counter = $(parent).find('.counter-carousel')
			var items     = event.item.count;     
		    var item      = event.item.index > 10 ? event.item.index + 1 : '0' + (event.item.index + 1);  
		    counter.children('span:first-child').html(item)
		})

	}
}
function initCar(event) {
	var parent = $(event.target).parent()
	var counter = $(parent).find('.counter-carousel')
	var el = $(event.target).find(".caption-hero")
	var items = event.item.count > 10 ? event.item.count : '0'+event.item.count;    
	var max = -1;
	$(el).each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$(parent).find('.counter-carousel').css('bottom', max);
    counter.children('span:last-child').html(items)
}

function initSticky(){

	var w = $(window).width();
	if($(".sticky").length && w > 765){
		$(".sticky").stick_in_parent({offset_top: 65});
	}
	
	if ($(".sticky-single").length && w > 756){
		$(".sticky-single").stick_in_parent({offset_top: 100});
	}
}

$(".item-hero-carousel .wrapper-img-hero").bind('mousemove', function(e) {
	var parentOffset = $(this).offset(); 
	var relX = e.pageX - parentOffset.left;
	var left = $(this).width() / 2
	var right = left * 2
	if (relX < left){
		$(this).find('a').css('cursor', 'url("../assets/img/arrow-l.png"), auto')
	}
	else
		$(this).find('a').css('cursor', 'url("../assets/img/arrow-r.png"), auto')

});