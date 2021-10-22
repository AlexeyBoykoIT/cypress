$(function() {
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();


    /* Header class on scroll */


    headerScroll();

    $(window).on("scroll resize", function() {
        headerScroll();
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH - headerH) ) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }

    /* Smooth Scroll to section */


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });


    /* ScrollSpy */

    let windowH = $(window).height();

    $(window).on("scroll", function() {
        let scrollTop = $(this).scrollTop();

        $("[data-scrollspy]").each(function() {

        let $this = $(this);
        let sectionID = $this.data("scrollspy");
        let sectionOffset = $this.offset().top;
        sectionOffset = sectionOffset - (windowH / 2);

        if(scrollTop >= sectionOffset) {
            $('#nav [data-scroll').removeClass("active");

            $('#nav [data-scroll="' + sectionID + '"]').addClass("active");
        }
    });
});


});
