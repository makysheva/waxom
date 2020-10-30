$(document).ready(function(){
    $('.slider-header').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1500,
        nav: true,
        navText: ['<i class="fas fa-chevron-left fa-3x arrow_left"></i>',
        '<i class="fas fa-chevron-right fa-3x arrow_right"></i>'],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            1180:{
                items:1
            }
        }
    });

    var prev = $("#left");
    var next = $("#right");

    $(".owl-slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        navText: [prev, next],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            1180:{
                items:3
            }
        }
    });

    // Видео
    $('.video-btn').magnificPopup({
        items: {
            src: '//www.youtube.com/watch?v=Rk6_hdRtJOE',
            type: 'iframe'
        }
    });

    // функция на блок services, при наведении мыши
    (function(){
        const serviceEls = document.querySelectorAll('.service')

        serviceEls.forEach((serviceEl) => {

            serviceEl.addEventListener('mouseover', () => {
                serviceEl.firstElementChild.classList.add('service_active')
                serviceEl.firstElementChild.nextElementSibling.classList.add('service_active')                      
                serviceEl.lastElementChild.classList.add('service_active') 
            })

            serviceEl.addEventListener('mouseout', () => {
                serviceEl.firstElementChild.classList.remove('service_active')
                serviceEl.firstElementChild.nextElementSibling.classList.remove('service_active')                      
                serviceEl.lastElementChild.classList.remove('service_active') 
            })
        })
    })();

    // функция для фильтрации картинок в блоке projects
    (function () {
        const projectItems = document.querySelectorAll('.project__item')

        const filterButtons = document.querySelectorAll('.filter__link')
        

        filterButtons.forEach(function (button) {

            button.addEventListener('click', () => {		

                let attrDataTypeView = button.getAttribute('data-type')	

                projectItems.forEach(function(projectItem){
                    let filterDataType = projectItem.getAttribute('data-type')

                    if(filterDataType === attrDataTypeView) {
                        projectItem.classList.add('project__item_hidden');
                    } else {
                        projectItem.classList.remove('project__item_hidden')
                    }
                })
            })
        })
    })();

    // функция для отмены перехода по ссылке
    (function () {
        const filters = document.querySelectorAll('.filters')

        filters.forEach(function(anchorItem) {
            const anchorFilter = anchorItem.querySelectorAll('a')

            anchorFilter.forEach(function(anchorFilterItem){
                anchorFilterItem.addEventListener('click', function (event) {
                    event.preventDefault()
                })
            })
        })
    })();

    // Показать меню при клике на иконку
    (function($){
        $('#menu-toggle').click(function(){
            $(this).toggleClass('open');
        })
    })(jQuery);

    (function() {
        const hamburger = document.querySelectorAll('#hamburger');
        const menuMobile = document.querySelectorAll('#menu__mobile');

        hamburger.forEach((item) => {
            item.addEventListener('click', () => {
                console.log(item)
            })
        })
    })();
})
