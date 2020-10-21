$(function() {
    // 빈 링크 가진 a 기본 성격 제거
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });
});