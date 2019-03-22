$(document).ready(function() {

    $('.hm').on('click', function() {

        $('.ne-menu').slideToggle(300, function() {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }


        });
        $('.xm').slideToggle(0, function() {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }


        });
        $('.hm').slideToggle(0, function() {

            if ($(this).css('display') !== 'none') {
                $(this).addAttr('style');
            }

        });

    });
    $('.xm').on('click', function() {

        $('.ne-menu').slideToggle(300, function() {

            if ($(this).css('display') !== 'none') {
                $(this).removeAttr('style');
            }


        });
        $('.hm').slideToggle(0, function() {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }


        });
        $('.xm').slideToggle(0, function() {

            if ($(this).css('display') !== 'none') {
                $(this).addAttr('style');
            }

        });

    });

});