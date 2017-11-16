const enFlag = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC';
const viFlag = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC';

/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function () {
    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function (el) { return $(el).text(); });
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 58) {
            $(".templatemo-nav").addClass("sticky");
        }
        else {
            $(".templatemo-nav").removeClass("sticky");
        }
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function () { });

    /* wow
    -----------------*/
    new WOW().init();

    $.i18n().load({
        'en': './js/i18n/en.json',
        'vi': './js/i18n/vi.json'
    }).done(function () {
        const lang = 'en';
        $('#dropdownBtn').attr("src", lang == 'en' ? enFlag : viFlag);
        $.i18n().locale = lang;
        $('body').i18n();
        $('#lblLang').text($.i18n(lang == 'en' ? 'lbl-english' : 'lbl-vietnamese'));
        $('#lbl-service-content-2').html($.i18n('lbl-service-content-2'));
        $('#lbl-service-content-4').html($.i18n('lbl-service-content-4'));
        $('#lbl-why-choose-us-2').html($.i18n('lbl-why-choose-us-2'));
        $('#lbl-why-choose-us-3').html($.i18n('lbl-why-choose-us-3'));
        $('#lbl-why-choose-us-4').html($.i18n('lbl-why-choose-us-4'));
        $('#lbl-service-title').html($.i18n('lbl-service-title'));
        $('#porfolio-title').html($.i18n('porfolio-title'));
        $('#lbl-service-content').html($.i18n('lbl-service-content'));
        $('#contact-address-location').html($.i18n('contact-address-location'));
    });

    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function (e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
    });

    $(window).mouseleave(function (e) {
        mousePos.x = -1;
        mousePos.y = -1;
    });

    var draw = setInterval(function () {
        if (mousePos.x > 0 && mousePos.y > 0) {

            var range = 15;

            var color = "background: rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ");";

            var sizeInt = getRandomInt(10, 30);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

            var style = left + top + color + size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('#top').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).remove(); });
        }
    }, 10);

});

/* start preloader */
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */

/* My custom code for lucitree.tech
-----------------*/
function changeLang(lang) {
    $('#dropdownBtn').attr("src", lang == 'en' ? enFlag : viFlag);
    $.i18n().locale = lang;
    $('body').i18n();
    $('#lblLang').text($.i18n(lang == 'en' ? 'lbl-english' : 'lbl-vietnamese'));
    $('#lbl-service-content-2').html($.i18n('lbl-service-content-2'));
    $('#lbl-service-content-4').html($.i18n('lbl-service-content-4'));
    $('#lbl-why-choose-us-2').html($.i18n('lbl-why-choose-us-2'));
    $('#lbl-why-choose-us-3').html($.i18n('lbl-why-choose-us-3'));
    $('#lbl-why-choose-us-4').html($.i18n('lbl-why-choose-us-4'));
    $('#lbl-service-title').html($.i18n('lbl-service-title'));
    $('#porfolio-title').html($.i18n('porfolio-title'));
    $('#lbl-service-content').html($.i18n('lbl-service-content'));
    $('#contact-address-location').html($.i18n('contact-address-location'));
}

function validEmail(email) { // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}