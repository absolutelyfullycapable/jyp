$(function() {
    // 빈 링크 가진 a 기본 성격 제거
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });

    // header 안 .mobile_btn 누르면 nav 나타남 + .nav_back 애니메이션
    $('header .mobile_btn').on('click', function() {
        $('nav').addClass('show');
        $('.nav_back').addClass('show');
    });

    // nav 안 X 버튼 누르면 nav 다시 사라짐 + .nav_back 애니메이션
    $('nav div img').on('click', function() {
        $('nav').removeClass('show');
        $('.nav_back').removeClass('show');
    });

    // .lang 부분 클릭 애니메이션
    $('.lang li').on("click", function() {
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
    });
});