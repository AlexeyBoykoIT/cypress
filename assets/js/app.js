let intro = $("#intro");
let header = $("#header");
let introH = intro.innerHeight();
let scrollTop = $(this).scrollTop();

$(window).on("scroll", function() {

    let scrollTop = $(this).scrollTop();

    if( scrollTop >= introH) {
        header.addClass("header--dark");
    } else {
        header.removeClass("header--dark");
    }

});
