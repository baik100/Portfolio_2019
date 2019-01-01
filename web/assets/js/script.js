







$(document).ready(function() {


    /**
     *  UI 스크립트
     */

    portFolio.init()


    /**
     *v lib
     */

    lib.init();

});


var portFolio ={
    init: function () {
        portFolio.isScroll(500, "html", "is-scroll");
        portFolio.isScroll(1000, ".back-top", "is-active");
        portFolio.spyScroll();
        portFolio.sideMenu();
        portFolio.anim();
        portFolio.backTop();
        portFolio.visualAnim();
        portFolio.preLoader();
        portFolio.responsiveReset();
    },

    responsiveReset: function(){
        $(window).resize(function () {
            $('html').removeClass('is-sideopen');
        })
    },

    preLoader: function () {
        $(window).on('load',function () {
            $('.holder').delay(1500).fadeOut();
        })
    },


    isScroll : function (point, el, className) {
        $(window).scroll(function () {
            var sct = $(window).scrollTop();
            console.log(sct);

            if(sct > point){
                $(el).addClass(className);
            }else{
                $(el).removeClass(className);
            }
        })
    },

    spyScroll: function () {
        $('.nav-link').on("click",function () {
            var self = $(this),
                dataNav = self.data('nav');

            // 예외처리
            if(dataNav === undefined || dataNav === null || dataNav.length <= 0){
                return;
            }

            console.log($(dataNav).offset());
            var oft = $(dataNav).offset().top;

            $('html,body').animate({scrollTop: oft})
        })

    },

    sideMenu : function () {
        $('.btn-menu').click(function (){
            $('html').addClass("is-sideopen");
        })

        $(".btn-close").click(function () {
            $("html").removeClass("is-sideopen");
        })

    },

    anim: function () {
        $(window).on('load',function () {
            TweenMax.from('.visual h2', 1, {y: 50, opacity: 0, delay:2});
            TweenMax.from('.visual p', 2, {y: 50, opacity: 0, delay:2.1});
        })
    },

    backTop: function () {
        $('.back-top').on('click',function () {
            $('html,body').animate({ scrollTop: 0 });
        })
    },

    visualAnim: function () {
        $(window).on('scroll',function () {
            const sct = $(window).scrollTop();
            $('.visual').css({backgroundSize: 100 + sct / 100  +"%"})
            $('.visual h3 , .visual p').css({opacity: 1 - sct /300})
            $('.visual .text').css({transform: "translateY("
                    + sct / 3 + "px)"})
        })
    },
};

const lib = {
    init: function () {
        $.fn.extend({
            a: "sdfsdfsdfsdf",
            aa:"sdfsdfsdfsdf,"
        })
    },

};







































