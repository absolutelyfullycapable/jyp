$(function() {
    // 빈 링크 가진 a 기본 성격 제거
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });

    // header 안 .mobile_btn 누르면 nav 나타남
    $('header .mobile_btn').on('click', function() {
        $('nav').addClass('show');
    });

    // nav 안 X 버튼 누르면 nav 다시 사라짐
    $('nav div img').on('click', function() {
        $('nav').removeClass('show');
    });

    // artist section의 view more 버튼 동작 애니메이션
    
    $('#artist .more').on('click', function() {
        var wd = $(window).width();
        if(wd > 0 && wd < 1280) {
            $('#artist ul li').eq(7).nextAll('li').stop().animate({'height': 112, 'opacity': 1}, 500);
        } else {
            $('#artist ul li').eq(7).nextAll('li').stop().animate({'height': 244, 'opacity': 1}, 500);
        }
    });
});