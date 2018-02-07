$(document).ready(function() {
 		
 
});

$(window).bind("load", function() {
  // init();
  InitCarouselHome();
  initSticky();
  muncul();
});

function muncul(){
	$(".content, .nav-item").velocity({opacity:1},{duration:500,delay:1000})
}

function init(){
	
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