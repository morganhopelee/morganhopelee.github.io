$(document).ready(function(){

	/* Parallax Function */
	function parallax() {
		var scrolled = $(window).scrollTop();
    	$(".moon-img").css("top", -(scrolled * 0.4) + "px");
    }

    $(window).scroll(function() {
        parallax();
    });

	/* Fixed Navbar Function */
	$('.content-container').waypoint(function(direction) {
		if (direction == 'down') {
			$('#nav').addClass('sticky');
		} else {
			$('#nav').removeClass('sticky');
		}
	});

	/* Quote Popover Function */
	$('.toggle').click(function() {
		var parent = $(this).parent();
		var popover = parent.find('.popover');
		if (popover.hasClass('popover-active')) {
			popover.removeClass('popover-active');
			setTimeout(function(){
				popover.hide();
			}, 400);	
		} else {
			popover.show();
			setTimeout(function(){
				popover.addClass('popover-active');
			}, 0);
		}
	});

	$('.popover').click(function() {
		$('.popover').removeClass('popover-active');
		setTimeout(function(){
			$('.popover').hide();
		}, 400);
	});

	/* Navbar Scroll Function */
	$("a").click(function() {
	    $('html, body').animate({
	      scrollTop: $( $.attr(this, 'href')).offset().top
	    }, 300);
	    return false;
	});
	
});