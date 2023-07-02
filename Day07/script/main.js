
$(document).ready(function () {
    //풀다운 메뉴 이벤트
    $('.outer-menu').hover(function () {
        $(this).find('.inner-menu').css('display', 'block');
    }, function () {
        $(this).find('.inner-menu').css('display', 'none');
    });

    // masonry layout + imageload pluign
    $('#main-section').imagesLoaded(function () {
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 220,
            isAnimated: true,
        });
    });

    // 라이트박스 영역
    function showLightBox(obj) { // 라이트박스 보이기
        var img_src = obj.getElementsByTagName('img')[0].src; // [1]로 바꾸니깐 고양이그림이 뜨네 전체 img의 배열을 말하는가?
        $('#random-image').attr('src', img_src);
        $('#darken-background').show();
        $('#darken-background').css('top', $(window).scrollTop);
        $('body').css('overflow', 'hidden');
    }

    function hideLightBox() { // 라이트박스 숨기기
        $('#darken-background').hide();
        $('body').css('overflow', '');
    }

    $('.paper').click(function () {
        showLightBox(this);
    });

    $('#darken-background').click(function () {
        hideLightBox();
    });
    $('#lightbox').click(function (e) {
        e.stopPropagation(); //클릭이벤트 하위 객체 전달 금지 -> 사진 안에 클릭해도 닫기 안됨 바깥만 됨
    });

});
