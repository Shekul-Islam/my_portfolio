(function ($) {
    'use strict';
    let device_width = window.innerWidth;
    //   =========navigation fixed top=========
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 50) {
            $(".navigation, .pc-header-transparent").addClass("navbar-fixed");
        } else {
            $(".navigation, .pc-header-transparent").removeClass("navbar-fixed");
        }
    });

    // ==========Progressbar=========
    if (jQuery(".progressbar-sec").length > 0) {
        var $sectionProgress = $('.progressbar-sec');
        var scrollOffset = $(document).scrollTop();
        var containerOffset2 = $sectionProgress.offset().top - window.innerHeight;

        if ($('.chart').parents('.progressbar-sec').hasClass('progressbar-sec-2')) {
            $('.chart').easyPieChart({
                size: 220,
                barColor: "#f8b216",
                scaleLength: 0,
                lineWidth: 25,
                trackColor: "#f2ede3",
                lineCap: "round",
                animate: 2000,
            })
        } else if ($('.chart').parents('.progressbar-sec').hasClass('progressbar-sec-4')) {

            $('.chart').easyPieChart({
                size: 160,
                barColor: "#ea4343",
                scaleLength: 0,
                lineWidth: 20,
                trackColor: "#ffffff",
                lineCap: "round",
                animate: 2000,
            })

        } else {
            $('.chart').easyPieChart({
                size: 220,
                barColor: "#4cb950",
                scaleLength: 0,
                lineWidth: 25,
                trackColor: "#ffffff",
                lineCap: "round",
                animate: 2000,
            })
        }

    }

    //mobile side menu
    $('.side-toggle').on('click', function () {
        $('.side-info').addClass('info-open');
        $('.offcanvas-overlay').addClass('overlay-open');
    })

    $('.side-info-close,.offcanvas-overlay').on('click', function () {
        $('.side-info').removeClass('info-open');
        $('.offcanvas-overlay').removeClass('overlay-open');
    })

    // Side Settings
    $('.side-admin-settings').on('click', function () {
        $('.side-admin-panel-right').addClass('side-admin-panel-visible');
        $('.overlay').addClass('overlay-visible');
    })
    $('.cinkes-side-admin-panel-close-btn, .overlay').on('click', function () {
        $('.side-admin-panel-right').removeClass('side-admin-panel-visible');
        $('.overlay').removeClass('overlay-visible');
    })


    $(document).ready(function () {

        // isotop
        if (jQuery(".filter-wrapper").length > 0) {
            $('.filter-wrapper .filter-grid').imagesLoaded(function () {
                let $grid = $('.filter-wrapper .filter-grid').isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-item' // columnWidth: 1
                    }
                });

                // filter items on button click
                $('.filter-nav').on('click', 'button', function () {
                    let filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                });

            });
        }

        //for menu active class
        $('.portfolio_nav button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // ==========Counter=========
        function startCounterAnimations(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElement = entry.target;
                    $(counterElement).prop('Counter', 0).animate({
                        Counter: $(counterElement).text().replace(/\D/g, '')
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            const roundedValue = Math.ceil(now);
                            if (roundedValue < 1000) {
                                $(counterElement).text(roundedValue);
                            } else {
                                $(counterElement).text((roundedValue / 1000).toFixed(1).replace('.0', '') + 'K');
                            }
                        }
                    });
                    observer.unobserve(counterElement);
                }
            });
        }
        const observer = new IntersectionObserver(startCounterAnimations, { threshold: 0.2 });
        $('.counter').each(function () {
            observer.observe(this);
        });

        // ==========Portfolio Image Popup=========
        $('.tv-card-tm, .sidebar-photography-imgs').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }

        });

        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        // ==========Experience Slider=========
        $('.pc-about-right5-experience-active').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        // ==========Testimonial Slider=========
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // ==========Testimonial Slider=========
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        // ==========Feedback Slider=========
        $('.pc_feedback_slider').owlCarousel({
            loop: true,
            margin: 24,
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            navText: ['<i className="fa-solid fa-left-long"></i>', '<i className="fa-solid fa-right-long"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        // ==========Branding Slider=========
        $('.pc_branding_slider').owlCarousel({
            items: 5,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                575: {
                    items: 3
                },
                767: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });


        //==========Portfolio Filter=========
        $(".tv-filter-tm li").click(function () {
            var $filterButton = $(this);
            $(".tv-filter-tm li").removeClass("active");
            $filterButton.addClass("active");
            var $data = $filterButton.parent().parent().parent().parent().parent().find(".tv-case-studies");
            var $filter, $outerFilter;
            if ($filterButton.attr("id") === "filter__All") {
                $data.find('.tv-case-study').removeClass("tv-case-study-show");
                $data.find('.tv-case-study').addClass("tv-case-study-hide");

                $filter = $data.find('.tv-case-study');

                $filter.removeClass("tv-case-study-hide");
                setTimeout(function () {
                    $filter.addClass("tv-case-study-show");
                }, 20);

                //  $filter.slideDown(800);
            } else {
                $filter = $data.find('.tv-case-study[data-category=' + $filterButton.attr("data-category") + ']');
                $data.find('.tv-case-study').removeClass("tv-case-study-show");
                $data.find('.tv-case-study').addClass("tv-case-study-hide");

                $filter.removeClass("tv-case-study-hide");
                setTimeout(function () {
                    $filter.addClass("tv-case-study-show");
                }, 20);
            }
        });


        //==========Scroll Button On Banner=========
        $('#goToMaincontent').on('click', function () {
            var targetSection = "#mainContent";
            var offset = $(targetSection).offset().top;
            $("html, body").animate({ scrollTop: offset }, 1);
        });


        //==========Portfolio Section Of Home 8=========
        $('.for-image-height').height($('.portfolio-image-list').find('img').height());
        $('.portfolio-project-list a').each(function () {
            $(this).hover(function () {
                var project_id = $(this).attr('id');
                $(this).addClass('hovered').parents('li').siblings().find('a').removeClass('hovered');
                $('.portfolio-image-list .part-img[data-project-number=' + project_id + ']').addClass('active').parent().siblings().find('.part-img').removeClass('active');
                var all_item = $('.portfolio-project-list li').length;
                var current_item = $('.portfolio-project-list .hovered').parents('li').index() + 1;
                $('.portfolio-image-list .item-count').html('<h3>' + current_item + ' / ' + all_item + '</h3>');
            });
        });


        //==========Banner Section Of Home 10=========
        var containerMargin = parseInt($('.banner-10').find('.container').css('margin-right'));
        var containerPadding = parseInt($('.banner-10').find('.container').css('padding-right'));
        var bannerImageNegativeMargin = containerMargin + containerPadding;
        $('.banner-10 .banner-img').css('margin-right', '-' + bannerImageNegativeMargin - 50);


        //==========Offcanvas Menu Section Of Home 10=========
        $('.main-menu-btn').on('click', function () {
            $('.offcanvas-menu-wrap').addClass('active');
        });
        $('.close-offcanvas, .offcanvas-overlay').on('click', function () {
            $('.offcanvas-menu-wrap').removeClass('active');
        });
        $('.offcanvas-menu .has-sub').on('click', function () {
            $(this).toggleClass('open');
            $(this).siblings('.sub-menu').slideToggle();
            $(this).parent().siblings().find('.sub-menu').slideUp();
        });


        //==========Serachbox Section Of Home 10=========
        $('.banner-10-search-box, .home-11-search-box').on('click', function () {
            $('.search-box-10-wrap').addClass('active');
        });
        $('.close-search-10').on('click', function () {
            $('.search-box-10-wrap').removeClass('active');
        });


        //==========Video Section Background Animation Home 8=========
        let imageTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video-box-animation",
                start: "top bottom",
                markers: false,
                scrub: 1,
                end: "bottom center"
            }
        })
        imageTl.to(".video-box-animation img", {
            scale: 1.3,
            duration: 1,
        })


        //==========Video Section Of Home 8=========
        var containerMargin = parseInt($('.video-box').parent('.container').css('margin-left'));
        var containerPadding = parseInt($('.video-box').parent('.container').css('padding-left'));
        var videoBoxNegativeMargin = containerMargin + containerPadding;
        $('.video-box').css('margin-left', '-' + videoBoxNegativeMargin + 'px');
        $('.video-10 .video-box').css('margin-right', '-' + videoBoxNegativeMargin + 'px');
        $('.brands-8, .counter-9').css('margin-left', + containerMargin + 1 + 'px');
        $(window).resize(function () {
            var containerMargin = parseInt($('.video-box').parent('.container').css('margin-left'));
            var containerPadding = parseInt($('.video-box').parent('.container').css('padding-left'));
            var videoBoxNegativeMargin = containerMargin + containerPadding;
            $('.video-box').css('margin-left', '-' + videoBoxNegativeMargin + 'px');
            $('.brands-8, .counter-9').css('margin-left', + containerMargin + 1 + 'px');
        });


        //==========Video Popup Of Home 8=========
        if ($(".play-btn").length) {
            $(".play-btn").modalVideo();
        }


        //==========Faq Of Home 11=========
        var containerMargin2 = parseInt($('.faq-11-img').parents('.container').css('margin-left'));
        var containerPadding2 = parseInt($('.faq-11-img').parents('.container').css('padding-left'));
        var videoBoxNegativeMargin = containerMargin2 + containerPadding2;
        $('.faq-11-img').css('margin-right', '-' + videoBoxNegativeMargin + 'px');


        //==========Pricing Plan Checkbox Of Home 10=========
        $('.plan-type').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parents('.pricing-card').addClass('checked').siblings().removeClass('checked');
            }
        });


        //==========Training Gallery Slider Of Home 10=========
        if ($('.swiper:not(.showcase-4-slider)').length) {
            var swiper = new Swiper(".swiper", {
                grabCursor: true,
                spaceBetween: 30,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    enabled: true,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                keyboard: {
                    enabled: true
                },
                mousewheel: {
                    enabled: false,
                    thresholdDelta: 70
                },
                breakpoints: {
                    460: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1600: {
                        slidesPerView: 2.45
                    }
                }
            });
        }


        //==========Training Gallery Popup Of Home 10=========
        $('.training-gallery-10 .part-txt').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function (element) {
                    return element.find('img');
                }
            }
        });


        //==========Text Slider On Award Section Of Home 8=========
        if ($(".image-badge-wrapper").length) {
            var topics = document.querySelector('.image-badge').cloneNode(true);
            document.querySelector(".image-badge-wrapper").appendChild(topics);
            gsap.to('.image-badge', { x: -topics.offsetWidth, repeat: -1, ease: 'linear', duration: 5, force3D: true, rotation: 0.01 });
        }


        //==========Text Slider On About Section Of Home 8=========
        gsap.registerEffect({
            name: "ticker",
            effect(targets, config) {
                buildTickers({
                    targets: targets,
                    clone: config.clone || (el => {
                        let clone = el.children[0].cloneNode(true);
                        el.insertBefore(clone, el.children[0]);
                        return clone;
                    })
                });
                function buildTickers(config, originals) {
                    let tickers;
                    if (originals && originals.clones) {
                        originals.clones.forEach(el => el && el.parentNode && el.parentNode.removeChild(el));
                        originals.forEach((el, i) => originals.inlineWidths[i] ? (el.style.width = originals.inlineWidths[i]) : el.style.removeProperty("width"));
                        tickers = originals;
                    } else {
                        tickers = config.targets;
                    }
                    const clones = tickers.clones = [],
                        inlineWidths = tickers.inlineWidths = [];
                    tickers.forEach((el, index) => {
                        inlineWidths[index] = el.style.width;
                        el.style.width = "10000px";
                        el.children[0].style.display = "inline-block";
                        let width = el.children[0].offsetWidth,
                            cloneCount = Math.ceil(window.innerWidth / width),
                            right = el.dataset.direction === "right",
                            i;
                        el.style.width = width * (cloneCount + 1) + "px";
                        for (i = 0; i < cloneCount; i++) {
                            clones.push(config.clone(el));
                        }
                        gsap.fromTo(el, {
                            x: right ? -width : 0
                        }, {
                            x: right ? 0 : -width,
                            duration: width / 100 / parseFloat(el.dataset.speed || 1),
                            repeat: -1,
                            overwrite: "auto",
                            ease: "none"
                        });
                    });
                    originals || window.addEventListener("resize", () => buildTickers(config, tickers));
                }
            }
        });
        gsap.effects.ticker(".about-10-text-sliders");



        //==========Testimonial Slider Of Home 8=========
        if ($('.testimonial-8-slider').length) {
            $('.testimonial-8-slider').slick({
                slidesToShow: 2,
                vertical: true,
                verticalSwiping: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }


        //==========Testimonial Slider Of Home 9=========
        if ($('.testimonial-9-slider').length) {
            $('.testimonial-9-slider').slick({
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                asNavFor: ".testimonial-9-image-slider",
                prevArrow: '<button class="slick-prev"><i class="fa-thin fa-arrow-left-long"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fa-thin fa-arrow-right-long"></i></button>',
                // arrows: false
            });
            $('.testimonial-9-image-slider').slick({
                slidesToShow: 3,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                asNavFor: ".testimonial-9-slider",
            });
        }


        var all_slider = $('.testimonial-11-slider .single-testimonial').length;
        $('.testimonial-11-slider').slick({
            slidesToShow: 1,
            arrows: false,
            autoplay: false,
        });
        $('.testimonial-11-slider').on('afterChange', function (event, slick, currentSlide) {
            var current_slider = currentSlide + 1;
            var formattedCurrentSlider = current_slider < 10 ? '0' + current_slider : current_slider;
            var formattedAllSlider = all_slider < 10 ? '0' + all_slider : all_slider;
            $('.testimonial-11-slider-wrap .slider-counter').html('<h6>' + formattedCurrentSlider + '<span></span>' + formattedAllSlider + '</h6>');
        });
        $('.testimonial-11-slider').slick('slickGoTo', 0);


        //==========Fade From Left Animation=========
        let fade_left = gsap.utils.toArray(".fade_left .fade_left_item")
        gsap.set(fade_left, {
            opacity: 0,
            x: -30,
        })
        if (fade_left) {
            if (device_width < 1023) {
                fade_left.forEach((item, i) => {
                    gsap.to(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top center+=200",
                            markers: false
                        },
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 2,
                        stagger: {
                            each: 0.4
                        }
                    })
                })
            }
            else {
                gsap.to(".fade_left .fade_left_item", {
                    scrollTrigger: {
                        trigger: ".fade_left",
                        start: "top center+=200",
                        markers: false
                    },
                    opacity: 1,
                    x: 0,
                    ease: "power2.out",
                    duration: 2,
                    stagger: {
                        each: 0.4
                    }
                })
            }
        }


        //==========Service box image animation on hover=========
        const serviceImgItem = document.querySelectorAll(".image_with_cursor");
        function followImageCursor(event, serviceImgItem) {
            const contentBox = serviceImgItem.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
        }
        serviceImgItem.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });


        //==========Class Schedule Table Highlight Of Home 10=========
        $('.schedule-nav a').on('click', function () {
            var class_name = $(this).attr('id');
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');

            $('.class-schedule-table *[data-class]').filter(function () {
                return $(this).data('class') === class_name;
            }).addClass('highlighted');

            $('.class-schedule-table *[data-class]').not('[data-class="' + class_name + '"]').removeClass('highlighted');
        });


        //==========Portfolio Section Hover Of Home 12=========
        $('.portfolio-12-menu a').hover(function () {
            var portfolio_id = $(this).data('id');
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
            $('.portfolio-12-card[id=' + portfolio_id + ']').addClass('show').siblings('.portfolio-12-card').removeClass('show');
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // ******************* all gsap animation here **************** //
        /////////////////////////////////////////////////////
        // Register GSAP
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
        /////////////////////////////////////////////////////
        // Config GSAP
        gsap.config({
            nullTargetWarn: false,
        });
        /////////////////////////////////////////////////////


        function startAnimation() {
            let homeDigi = gsap.timeline();
            let title_left = document.querySelectorAll(".pc-title-left");
            let title_right = document.querySelectorAll(".pc-title-right");
            let split_title_left = new SplitText(title_left, { type: "chars" });
            let split_title_right = new SplitText(title_right, { type: "chars" });

            homeDigi.from(split_title_left.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.03 });
            homeDigi.from(split_title_right.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.03 }, "-=.65");
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimation();
                    observer.unobserve(entry.target);
                }
            });
        });
        const elementsToObserve = document.querySelectorAll(".pc-title-left, .pc-title-right");
        elementsToObserve.forEach((element) => {
            observer.observe(element);
        });


        gsap.set(".fade_bottom", { y: 100, opacity: 0 });
        const fadeArray = gsap.utils.toArray(".fade_bottom");
        fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top center+=400",
                },
            });
            fadeTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 1.5,
            });
        });


        let hero_subtitle = document.querySelectorAll(".pc-hero-subtitle")
        hero_subtitle.forEach((hero_subtitle) => {
            let split_hero_subtitle = new SplitText(hero_subtitle, { type: "chars words", position: "absolute" })
            gsap.from(split_hero_subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
        })
        /////////////////////////////////////////////////
        //// button hover aniamtion
        $('.btn-hover').on('mouseenter', function (e) {
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;

            $(this).find('span.dot').css({
                top: y,
                left: x
            });
        });
        $('.btn-hover').on('mouseout', function (e) {
            var x = e.pageX - $(this).offset().left;
            var y = e.pageY - $(this).offset().top;

            $(this).find('span.dot').css({
                top: y,
                left: x
            });
        });
        ///////////////////////////////////////////////////
        //// title animation
        let splitTitleLines = gsap.utils.toArray(".title-anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });
        /////////////////////////////////////////////////////
        // Text Animation
        let splitTextLines = gsap.utils.toArray(".text-anim p");

        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });
        // home 1 aniamtino
        // All Buttons 
        let all_buttons = gsap.utils.toArray("#btn_wrapper, .btn-bounce-animated")
        all_buttons.forEach((btn) => {
            if (!(btn.classList.contains("hero__button"))) {
                gsap.from(btn, {
                    scrollTrigger: {
                        trigger: btn,
                        start: "top center+=150",
                        markers: false,
                    },
                    opacity: 0,
                    y: -70,
                    ease: "bounce",
                    duration: 1.5,
                })
            }
        })
        /////////////////////////////////////////////////////
        // multiple section scroll together
        if (device_width > 1200) {
            var multiple_section_wrapper = document.querySelector('.multiple-section-wrapper');
            if (multiple_section_wrapper) {
                let duration = 1,
                    sections = gsap.utils.toArray(".multiple_panel"),
                    sectionIncrement = duration / (sections.length - 1),
                    tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".multiple-section-wrapper",
                            pin: true,
                            scrub: 1,
                            start: "top top",
                            end: "+=5000"
                        }
                    });

                tl.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    duration: duration,
                    ease: "none"
                });

                sections.forEach((section, index) => {
                    let tween = gsap.from(section, {
                        opacity: 0,
                        scale: 1,
                        duration: 0.5,
                        force3D: true,
                        paused: true
                    });
                    addSectionCallbacks(tl, {
                        start: sectionIncrement * (index - 0.1),
                        end: sectionIncrement * (index + 0.99),
                        onEnter: () => tween.play(),
                        onLeave: () => tween.reverse(),
                        onEnterBack: () => tween.play(),
                        onLeaveBack: () => tween.reverse()
                    });
                    index || tween.progress(1);
                });

                function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
                    let trackDirection = animation => {
                        let onUpdate = animation.eventCallback("onUpdate"),
                            prevTime = animation.time();
                        animation.direction = animation.reversed() ? -1 : 1;
                        animation.eventCallback("onUpdate", () => {
                            let time = animation.time();
                            if (prevTime !== time) {
                                animation.direction = time < prevTime ? -1 : 1;
                                prevTime = time;
                            }
                            onUpdate && onUpdate.call(animation);
                        });
                    },
                        empty = v => v;
                    timeline.direction || trackDirection(timeline);
                    start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
                    end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
                }
            }
        }
        // working with cursor
        function mousemoveHandler(e) {
            try {
                let tl = gsap.timeline({
                    defaults: {
                        x: e.clientX,
                        y: e.clientY,
                    }
                })
                // Main Cursor Moving 
                tl.to(".cursor1", {
                    ease: "power2.out"
                })
                    .to(".cursor2", {
                        ease: "power2.out"
                    }, "-=0.4")
            }
            catch (error) {
                console.log(error)
            }
        }
        document.addEventListener("mousemove", mousemoveHandler);


        // data bg color
        $("[data-bgcolor]").each(function () {
            $(this).css("background-color", $(this).attr("data-bgcolor"))
        })
        $("[data-background]").each(function () {
            $(this).css("background-image", `url(${$(this).attr("data-background")})`);
        })
        let sectionBtn = $('.section-btn');
        let sectionPopupClose = $('.tc-popup-close-btn');
        sectionBtn.on('click', function () {
            let sectionID = $(this).attr("data-section");
            $('#' + sectionID).addClass('active');
            $('.tc-all-popup-overlay').addClass('active');
        })
        sectionPopupClose.on('click', function () {
            let sectionCloseID = $(this).attr('data-close');
            $('#' + sectionCloseID).removeClass('active');
            $('.tc-all-popup-overlay').removeClass('active');
        })
        $('.pc-landing-card-rotate-wrap').on('mouseover', function () {
            var childComponent = $(this).find('.back.has-content');
            setTimeout(() => {
                childComponent.css("z-index", "9");
            }, 790);
        })
        $('.pc-landing-card-rotate-wrap').on('mouseleave', function () {
            var childComponent = $(this).find('.back.has-content');
            setTimeout(() => {
                childComponent.css("z-index", "-1");
            }, 790);
        });
        setInterval(function () { $('.pc-landing-card-rotate-wrap[data-section="popup-about"]').toggleClass('active') }, 7000);


        //==========Image Scrolling Animation=========
        let revealContainers = document.querySelectorAll(".image-animation");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "restart none none"
                }
            });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1.5, {
                xPercent: 0,
                ease: Power2.out
            });
            tl.from(image, 1.5, {
                xPercent: 0,
                scale: 1.3,
                delay: -1.5,
                ease: Power2.out
            });
        });


        //==========Interactive Showcase=========
        if ($('.showcase-bg-images').length) {
            var sliderThumbnail = new Swiper('.showcase-bg-images', {
                slidesPerView: 1,
                effect: 'fade',
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                speed: 1500,
                pagination: {
                    el: ".pagination"
                }
            });
            var slider = new Swiper('.showcase-1-menu', {
                slidesPerView: 5,
                direction: "vertical",
                loop: true,
                centeredSlides: true,
                mousewheel: true,
                speed: 1000,
                thumbs: {
                    swiper: sliderThumbnail,
                },
            });
            slider.on('slideNextTransitionStart', function () {
                var firstSlider = $('.showcase-number-wrap .showcase-number.first');
                var lastSlider = $('.showcase-number-wrap .showcase-number.last');
                var currentPrevSlider = $('.showcase-number-wrap .showcase-number.prev');
                var currentActiveSlider = $('.showcase-number-wrap .showcase-number.active');
                var currentNextSlider = $('.showcase-number-wrap .showcase-number.next');

                currentPrevSlider.removeClass('prev');
                currentActiveSlider.addClass('prev').removeClass('active');
                currentNextSlider.addClass('active').removeClass('next');
                currentNextSlider.next().addClass('next');
                if (currentNextSlider.is(':last-child')) {
                    firstSlider.addClass('next');
                }
                if (currentActiveSlider.is(':last-child')) {
                    lastSlider.addClass('prev');
                }
            });
            slider.on('slidePrevTransitionStart', function () {
                var firstSlider = $('.showcase-number-wrap .showcase-number.first');
                var lastSlider = $('.showcase-number-wrap .showcase-number.last');
                var currentPrevSlider = $('.showcase-number-wrap .showcase-number.prev');
                var currentActiveSlider = $('.showcase-number-wrap .showcase-number.active');
                var currentNextSlider = $('.showcase-number-wrap .showcase-number.next');

                currentNextSlider.removeClass('next');
                currentActiveSlider.addClass('next').removeClass('active');
                currentPrevSlider.addClass('active').removeClass('prev');
                currentPrevSlider.prev().addClass('prev');
                if (currentPrevSlider.is(':first-child')) {
                    lastSlider.addClass('prev');
                }
                if (currentActiveSlider.is(':first-child')) {
                    firstSlider.addClass('next');
                }
            });
            $(document).on('click', '.showcase-number.prev', function () {
                slider.slidePrev();
            });
            $(document).on('click', '.showcase-number.next', function () {
                slider.slideNext();
            });
        }




        $('.showcase-2-slider').owlCarousel({
            items: 4,
            loop: true,
            speed: 300,
            autoplay: true,
        });
        $('.showcase-2-slider').on('translate.owl.carousel', function () {
            $(this).find('.single-slide').addClass('animation');
        });
        $('.showcase-2-slider').on('translated.owl.carousel', function () {
            $(this).find('.single-slide').removeClass('animation');
        });




        $('.showcase-3-txt-slider .single-slide').height($(window).innerHeight());
        $('.showcase-3-img-slider').slick({
            arrows: false,
            asNavFor: '.showcase-3-txt-slider',
            fade: true,
        });
        $('.showcase-3-txt-slider').slick({
            slidesToShow: 4,
            slidesPerView: 1,
            arrows: false,
            asNavFor: '.showcase-3-img-slider',
        });




        if ($(".showcase-4-slider").length) {
            var swiper = new Swiper(".showcase-4-slider", {
                effect: "cards",
                grabCursor: true,
                rotate: true,
                mousewheel: {
                    invert: false,
                },
            });
        }
    });
    const currentYearSpan = document.getElementById("CurrentYear");
    const currentYear = new Date().getFullYear();
    currentYearSpan.innerText = currentYear;

}(jQuery));