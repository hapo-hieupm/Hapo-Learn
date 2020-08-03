$(document).ready(function(){
    $('.mess-btn').click(function() {
        $('.mess-box').css('visibility', 'visible');
        $('.mess-box').toggle();
    });
    $('.mess-close').click(function() {
        $('.mess-box').hide();
    });
});

