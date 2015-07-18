(function ($) {
    $.fn.random = function () {
        var ret = $();

        if(this.length > 0)
            ret = ret.add(this[Math.floor((Math.random() * this.length))]);

        return ret;

    };

    $('.slideshow-text-item').hide();

    var $elem = $('.slideshow-text-item').random();

    $elem.show();

    setInterval(function () {

        $elem.animate({
            left: "-=20px",
            opacity: "0"
        }, 1000, function () {

            $elem.hide();

            $elem = $('.slideshow-text-item').random();

            $elem.show();

            $elem.css({
                left: "20px",
                opacity: "0"

            }).animate({
                left: "-=20px",
                opacity: "1"

            });

        });

    }, 7000)

}(jQuery));
