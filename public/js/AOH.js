$('ul.nav li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});


$(document).ready(function () {
    var _scroll = true, _timer = false, _floatbox = $("#contact_form"), _floatbox_opener = $(".contact-opener");
    _floatbox.css("bottom", "-450px"); //initial contact form position

    //Contact form Opener button
    _floatbox_opener.click(function () {
        if (_floatbox.hasClass('visiable')) {
            _floatbox.animate({ "bottom": "-450px" }, { duration: 300 }).removeClass('visiable');
        } else {
            _floatbox.animate({ "bottom": "1px" }, { duration: 300 }).addClass('visiable');
        }
    });


    $(window).scroll(function () {
        
       
        if (_scroll) {

            
            if (window.scrollY > 300) {

                $("#menuhome").removeClass("trans");
                $("#menuhome").addClass("redcolor");

            }
            else {
                $("#menuhome").removeClass("redcolor");
                $("#menuhome").addClass("trans");
            }

        }

    });

   

});