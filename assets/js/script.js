$(document).ready(function(){

	function parallax() {
		var scrolled = $(window).scrollTop();
    	$(".moon-img").css("top", -(scrolled * 0.4) + "px");
    	// so if you've scrolled 100 down the webpage, the parallax container moves 0.4 times the speed you've scrolled
    }

    $(window).scroll(function() {
        parallax();
    });

    // function disappear() {
    // 	var scrolled = $(window).scrollTop();
    // 	$(".name").css("opacity", 1 - )
    // }

    // how to fade out more smoothly?
 //    $('.name').waypoint(function(direction){
	// 	if (direction == "down") {
	// 		$('.name').fadeOut(1000);
	// 	} else {
	// 		$('.name').fadeIn(1000);
	// 	}
	// });

	$('.content-container').waypoint(function(direction) {
		if (direction == 'down') {
			$('#nav').addClass('sticky');
		} else {
			$('#nav').removeClass('sticky');
		}
	});

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

	// $(window).scroll(function(){
	// 	/* This function tells you how far you have 
	// 	scrolled from the top off the page */
	// 	var offsetY = $(window).scrollTop();
	// 	console.log(offsetY);
		
	// });

	//  Add waypoints code here 
	// $('#nav').waypoint(function(direction) {
	// 	if (direction == 'down') {
	// 		$('#nav').addClass('sticky');
	// 	} else {
	// 		$('#nav').removeClass('sticky');
	// 	}
	// });

	$("a").click(function() {
	    $('html, body').animate({
	      scrollTop: $( $.attr(this, 'href')).offset().top
	    }, 300);
	    return false;
	});
	
});