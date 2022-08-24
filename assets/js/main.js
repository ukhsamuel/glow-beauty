

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.e1');
    var $elem2 = $('.e2');
    var $elem3 = $('.e3');
    var $elem4 = $('.e4');

    if (isElementInViewport($elem)) {
        // Start the animation
        // $elem.addClass('animate__animated  animate__zoomIn animate__slow');
    } else if( isElementInViewport($elem2)){
        // $elem.addClass('animate__animated  animate__slideInDown animate__slow');

        // $elem.removeClass('start');
    }  
    
    if( isElementInViewport($elem3)){
        console.log(344343)
        $elem.addClass('animate__animated  animate__slideInUp ');
    } 
    
    if( isElementInViewport($elem4)){
        $elem.addClass('animate__animated  animate__slideInRight ');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});
