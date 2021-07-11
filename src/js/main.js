$('.select').on('click',function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
});

$('.select').on('click', '.select__item', function (e) {
    e.stopPropagation();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
    $('.select').removeClass('open');
});

$('.jsBurger').on('click', function() {
    $(this).toggleClass('active');
    $('.jsNav').toggleClass('active');
})