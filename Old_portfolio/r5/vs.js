/* vs.js : visual slider by NumberButton */
$(document).ready(function () {
    var vs_wd = parseInt($("#visual").width());
    $(".vs_btn_box li").click(function () {
        var tar = $(this).index();
        $(".pic_box").not(":animated").animate({
            "margin-left": tar * vs_wd * -1 + "px"
        }, 500);
        $(".vs_btn_box li button").removeClass("on");
        $(this).find("button").addClass("on");
    });
    var intv = setInterval(function() { nextAni(); }, 2800);
    function nextAni() {
        $(".asset_ban_box ul").not(":animated").animate({"margin-left":"-1000px"}, 700, function(){
            $(".asset_ban").eq(0).appendTo($(".asset_ban_box ul"));
            $(".asset_ban_box ul").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".asset_ban").eq(3).prependTo($(".asset_ban_box ul"));
        $(".asset_ban_box ul").css("margin-left", "-1000px");
        $(".asset_ban_box ul").not(":animated").animate({"margin-left":"0px"}, 700);
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
     $(".asset_row .col3").click(function(){
        var tg = $(this).index();
        $(".asset_row .col3").removeClass("on");
        $(this).addClass("on");
        $(".asset_row .col3").removeClass("on");
        $(".asset_row .col3").eq(tg).addClass("on");
        $(".asset_row .col3 .row_bg").removeClass("on");
        $(".asset_row .col3 .row_bg").eq(tg).addClass("on");
        $(".asset_row .col3 .item_tit").removeClass("on");
        $(".asset_row .col3 .item_tit").eq(tg).addClass("on");
        $(".asset_row .col3 .item_com").removeClass("on");
        $(".asset_row .col3 .item_com").eq(tg).addClass("on");
        $(".asset_row_sub").removeClass("on");
        $(".asset_row_sub").eq(tg).addClass("on");
    });
});