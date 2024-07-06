$('.hum_line_cover').on('click', () => {
    $('header').toggleClass('on');
});

$(window).on('resize', () => {
    $('header').removeClass('on');
});

//モーダル実装
$('.modal_1').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal1').fadeIn().css('display', 'flex');
});

$('.modal_2').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal2').fadeIn().css('display', 'flex');
});

$('.modal_3').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal3').fadeIn().css('display', 'flex');
});

$('.modal_4').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal4').fadeIn().css('display', 'flex');
});

$('.modal_5').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal5').fadeIn().css('display', 'flex');
});

$('.modal_6').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#modal6').fadeIn().css('display', 'flex');
});

$('.cat_interact').on('click', () => {
    $('html').css('overflow', 'hidden');
    $('#cat_touch_modal').fadeIn().css('display', 'flex');
});

$(".modal_block .material-symbols-outlined").on('click', () => {
    $('html').css('overflow', 'visible');
    // モーダルを閉じるボタンがクリックされた場合にモーダルを閉じる
    $('.modal_block').fadeOut().css('display', 'none');
});

$(".modal_block").click(function (e) {
    $('html').css('overflow', 'visible');
    // モーダルの外側をクリックしたらモーダルが閉じる
    if (e.target === this) {
        $('.modal_block').fadeOut().css('display', 'none');
    }
});

//topへ戻るボタンをある程度スクロールされてから出現させる
$(window).on('scroll', () => {
    const win_scr = $(window).scrollTop();
    const shop_scr = $('#shop').offset().top;
    if (win_scr >= shop_scr) {
        $('.to_top').addClass('on');
    } else {
        $('.to_top').removeClass('on');
    };
});



