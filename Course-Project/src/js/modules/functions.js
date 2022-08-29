export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support == true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function Spoller() {
    $('.element-catalog__arrow').on('click', function (event) {
        $('.element-catalog__arrow').not($(this)).removeClass('active');
        $('.element-catalog__list').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });
}

export function PopUp() {
    $('.contacts-header__request').on('click', function () {
        let popupId = `#${$(this).attr("rel")}`
        $(popupId).show();
    });

    $('.form-popup__button').on('click', function () {
        //checkForm()
        $('.popup__overlay').hide();
        let popupId = `#${$(this).attr("rel")}`
        $(popupId).show();
    });

    $('.popup__close').on('click', function () {
        $('.popup__overlay').hide();
    });
}

export function BreadCrumbs() {
    $('window').ready(function() {
        let currenPath = $('.breadcrumbs__list').html();
        if($('.text-header__title').text().trim() != "") {
            let path = currenPath + `<li class="breadcrumbs__item _icon-right-arrow"><a href="index.html">${$('.text-header__title').text()}</a></li>`;
            $('.breadcrumbs__list').html(path);
        }
    })

    $('.body-categories__tab, .element-catalog__title').on('click', function () {
        let currenPath = $('.breadcrumbs__list').html();
        let path = currenPath + `<li class="breadcrumbs__item _icon-right-arrow"><a href="index.html">${$(this).text()}</a></li>`;
        $('.breadcrumbs__list').html(path);
    });
}

export function Tabs() {
    $("document").ready(function () {
        $(".product__tab").hide();
        $(".product__tab:first").show();
        $(".tabs__navigation li:first").addClass("active");
    });

    $(".tabs__navigation li").click(function () {
        $(".product__tab").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $(".tabs__navigation li").removeClass("active");
        $(this).addClass("active");
    });

}

export function SliderImages() {
    $("document").ready(function () { 
        let width = 177; //Image width + margin
        let count = 1; // Scroll count
        let position = 0;
        let i;

        let listItems = $('.slider-product__item');
        let listImgs = $('.slider-product__item > img');

        $('.slider-product__arrow.prev').on('click', function () {
            position += width * count;
            position = Math.min(position, 0);
            $('.slider-product__list')[0].style.marginLeft = position + 'px';
            
            i = Math.round(Math.abs(position / width));
            let newSrc = listImgs[i].src;
            ($('.header-product__preview').attr('src', newSrc));
        });
    
        $('.slider-product__arrow.next').on('click', function () {
            position -= width * count;
            position = Math.max(position, -width * (listItems.length - count));
            $('.slider-product__list')[0].style.marginLeft = position + 'px';
            
            i = Math.round(Math.abs(position / width));
            let newSrc = listImgs[i].src;
            ($('.header-product__preview').attr('src', newSrc));
        });
    
    });
    
}

export function SliderRecommendations() {
    $("document").ready(function () { 
        let width = 356; // Image width + margin
        let count = 1; // Scroll count
        let position = 0;

        let listItems = $('.slider-recommendations__item');

        $('.recommendations__arrow.prev').on('click', function () {
            position += width * count;
            position = Math.min(position, 0);
            $('.slider-recommendations__list')[0].style.marginLeft = position + 'px';
        });
    
        $('.recommendations__arrow.next').on('click', function () {
            position -= width * count;
            position = Math.max(position, -width * (listItems.length - count));
            $('.slider-recommendations__list')[0].style.marginLeft = position + 'px';
        });
    
    });
}