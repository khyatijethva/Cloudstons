$(document).ready(function () {

    $("body").addClass('page-loaded');
    
    var windowSize = $(window).width();
    if (windowSize > 1199) {
        $('#fullpage').fullpage({ 
            anchors: ['home', 'about', 'founder', 'what-we-do', 'what-we-tabs', 'our-clients', 'testimonials', 'review', 'why-us', 'contact']
        });
    }


    $('#review-slider').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        autoWidth: true,
        margin: 20,
        nav: false
    });

    $('.tab-menu li a').on('click', function () {
        var target = $(this).attr('data-rel');
        $('.tab-menu li a').removeClass('active');
        $(this).addClass('active');
        $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
        return false;
    });
    // close menu when click outsite
    $(document).on('mouseup', function(e) {
      let targetEle = $('.mobile-menu');
      if (!$(e.target).is(targetEle) && targetEle.has(e.target).length === 0) {
        $('body').removeClass('menu-open');
      }
    });
    
    jQuery(".humberg-menu").on("click", function (e) {
        jQuery("body").toggleClass("menu-open");
    });

    jQuery(".mobile-menu").on("click", function (e) {
        e.stopPropagation();
    });

});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10);
        } else counter.innerText = target;
    };
    updateCounter();
});


$(window).on('scroll', function () {
    var header = $('.site-header');
    if (window.pageYOffset > 1) {
        header.addClass("sticky");
    } else {
        header.removeClass("sticky");
    }
}); 
