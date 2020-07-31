$(document).ready(function(){
    $('.mess-btn').click(function() {
        $('.mess-box').toggle();
    });
    $('.mess-close').click(function() {
        $('.mess-box').hide();
    });
});