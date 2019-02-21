$(document).ready(function () {


    /**
     *  UI 스크립트
     */

    portFolio.init()


    /**
     *v lib
     */

});


var portFolio = {
    init: function () {
        portFolio.spyScroll();
        portFolio.sideMenu();
        portFolio.anim();
        portFolio.visualAnim();
        portFolio.preLoader();
        portFolio.backTop();
        portFolio.responsiveReset();
        portFolio.scrollToSection(".enabled-scroll", ".work");
        portFolio.scrollToSection(".back-top", "body");
        portFolio.handleMouseWheel('.visual', '.work');
    },

    responsiveReset: function () {
        $(window).resize(function () {
            $('html').removeClass('is-sideopen');
        })
    },

    preLoader: function () {
        $(window).on('load', function () {
            $('.holder').delay(1500).fadeOut();
        })
    },

    spyScroll: function () {
        let currentSectionIndex = 0;

        $('.nav-link').on("click", function () {
            const self = $(this),
                dataNav = self.data('nav');

            // 예외처리
            if (dataNav === undefined || dataNav === null || dataNav.length <= 0) {
                return;
            }

            console.log($(dataNav).offset());
            const oft = $(dataNav).offset().top;

            $('html,body').animate({scrollTop: oft});
        })

        $(window).on('scroll', function () {
            const sct = $(window).scrollTop();
            const sections = $('section');

            sections.each(function (index) {
                const self = $(this);
                const oft = self.offset().top;

                if (sct > oft) {
                    self.addClass('is-current-section').siblings().removeClass('is-current-section')
                    currentSectionIndex = index;
                }
            })

            $('.nav-link').eq(currentSectionIndex).addClass('on').siblings().removeClass('on');

            console.log(currentSectionIndex)

        })
    },

    sideMenu: function () {
        $('.btn-menu').click(function () {
            $('html').addClass("is-sideopen");
        })

        $(".btn-close").click(function () {
            $("html").removeClass("is-sideopen");
        })

        $('.nav-link').on('click', function (e) {
            e.preventDefault();
            $("html").removeClass("is-sideopen");
        })

    },

    anim: function () {
        $(window).on('load', function () {
            TweenMax.from('.visual h2', 1, {y: 50, opacity: 0, delay: 2});
            TweenMax.from('.visual p', 2, {y: 50, opacity: 0, delay: 2.1});
        })
    },

    backTop: function () {

        const backTop = $('.back-top');

        $(window).on('scroll', function () {
            const sct = $(window).scrollTop();
            if (sct > 300) {
                backTop.addClass('active')
            } else {
                backTop.removeClass('active')
            }
        });
    },

    visualAnim: function () {
        $(window).on('scroll', function () {
            const sct = $(window).scrollTop();
            $('.visual').css({backgroundSize: 100 + sct / 100 + "%"})
            $('.visual h3 , .visual p').css({opacity: 1 - sct / 300})
            $('.visual .text').css({
                transform: "translateY(" + sct / 3 + "px)"
            })
        })
    },

    scrollToSection: function (el, section) {
        $(el).on('click', function () {
            const $section = $(section);
            if ($section.length > 0) {
                const sectionOft = $section.offset().top;
                $('html,body').animate({scrollTop: sectionOft});
            }
        })
    },

    handleMouseWheel: function (el, section) {
        const $el = $(el);
        mouseWheelTrigger();

        $el.on('nextSection',function () {
            const sectionOft = $(section).offset().top;
            $el.off('mousewheel');

            $('html, body').animate({scrollTop: sectionOft}, 600)
            setTimeout(mouseWheelTrigger, 2000)
        });

        function mouseWheelTrigger() {
            $el.on('mousewheel', function () {
                $el.trigger('nextSection');
            })
        }
    }
};




































