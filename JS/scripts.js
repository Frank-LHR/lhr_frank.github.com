(function ($) {
    "use strict";


    $(window).on("load", function () {

        /***************** Loading Screen ******************/

        $('.loader').fadeOut('slow'); // End Loader
        $('body').css('overflow', 'auto');

        /***************** Isotope Filter ******************/
        $(function () {
            $("[data-toggle='tooltip']").tooltip();
        });
        $(function () {
            $("[data-toggle='popover']").popover();
        });

        $(".filter li a").on("click", function () {
            var selector = $(this).attr("data-filter");
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: '.isotope-item',
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });

        // data-filter
        var $optionSets = $('.filter'), $optionLinks = $optionSets.find('a');
        $optionLinks.on("click", function () {
            var $this = $(this);
            // don't proceed if already active
            if ($this.hasClass('active')) {
                return false;
            }
            var $optionSet = $this.parents('.filter');
            $optionSet.find('.active').removeClass('active');
            $this.addClass('active');
        });
    });

    /***************** Smooth Scrolling ******************/

    $('a[href*=#]:not([href=#])').on("click", function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({scrollTop: target.offset().top}, 750);
                return false;
            }
        }
    });

})(jQuery);