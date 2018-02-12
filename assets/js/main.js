var w = $(window).width();
// $(document).ready(function() {
 
// });

$(window).bind("load", function() {
  // init();
  InitCarouselHome();
  initSticky();
  muncul();
});

// responsive function
if(w > 756){
	$(".hoverable").hover(function() {
		var span = $(this).find('span')
		var dom = span[0]
		var begin = function(){

		}
		var show = function(){
			var img = span.find('img');
			//img.velocity({opacity:1},{duration:250},[0.165, 0.84, 0.44, 1])
			TweenMax.to(img,.25,{opacity:1})
			
		}
		var tl = new TimelineLite({force3D:true});
		tl.set(span, {display:'inline-block'})
		tl.to(span,.25,{width:90,marginLeft:10,opacity:1,onComplete:show})
	}, function() {
		var span = $(this).find('span')
		var hide = function(){
			var img = span.find('img')
			TweenMax.to(img,.25,{opacity:0})
		}
		var block = function(){
			TweenMax.set(span,{dispay:'none'})
		}
		var tl = new TimelineLite();
		tl.to(span,.25, {width:0,marginLeft:0,opacity:0,onStart:hide,onComplete:block})
	});
}else{

}

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
	var top;
	var w = $(window).width();
	if($(".sticky").length && w > 765){
		top = $(".sticky").offset();
		$(".sticky").stick_in_parent({offset_top: top.top});
	}
	
	if ($(".sticky-single").length && w > 756){
		var top = $(".sticky-single").offset();
		console.log(top)
		$(".sticky-single").stick_in_parent({offset_top: top.top,inner_scrolling:false});
	}
}




$(".direction-product a").click(function(event) {
	event.preventDefault();

	var target = $(this).data('targetSimilar')
	$(".direction-product a").removeClass('active')
	$(".similar-product").removeClass('active')
	$(".similar-product[data-target-similar='"+target+"']").addClass('active')
	$(this).addClass('active')
	
	
});

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