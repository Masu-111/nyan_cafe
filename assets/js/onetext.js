// key_textにone_textというクラス名を付ける定義
function oneTextAnime() {
    $('.key_text').each(function () {
        const elemPos = $(this).offset().top - 50; //offsetでx,y座標の取得
        const scroll = $(window).scrollTop(); //scrollTopでスクロール位置の取得
        const windowHeight = $(window).height(); //ウィンドウの高さを取得
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("one_text");

        } else {
            $(this).removeClass("one_text");
        }
    });
}

//   // 画面をスクロールをしたら動かしたい場合の記述
//   $(window).scroll(function () {
//     EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
//   });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    //spanタグを追加する
    const element = $(".key_text");
    element.each(function () {
        const text = $(this).text();
        let textbox = "";
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                }

            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });

    oneTextAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述