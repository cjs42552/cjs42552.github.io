$(document).ready(function () {
    var pro_wd = parseInt($(".pro_list li").width());
    var prolen = $(".pro_list li").length;
    $(".pro .prev").click(function () {
        $(".pro_list li").eq(prolen - 1).prependTo($(".pro_list"));
        $(".pro_list").css("margin-left", -pro_wd + "px");
        $(".pro_list").not(":animated").animate({
            "margin-left": "0px"
        }, 600);
    });
    $(".pro .next").click(function () {
        $(".pro_list").not(":animated").animate({
            "margin-left": -pro_wd + "px"
        }, 600, function () {
            $(".pro_list li").eq(0).appendTo($(".pro_list"));
            $(".pro_list").css("margin-left", "0px");
        });
    });
    var qna_wd = parseInt($(".qna_list li").width());
    var qnalen = $(".qna_list li").length;
    $(".qna_box .prev").click(function () {
        var index = $(".qna_list").children("li").length - 2;
        $(".qna_big_img>a>img").prop("src", $(".qna_list").children("li").eq(index).find("img").prop("src"));
        $(".qna_big_img .tit").text($(".qna_list").children("li").eq(index).find("span").text());
        $(".qna_list li").eq(qnalen - 1).prependTo($(".qna_list"));
        $(".qna_list").css("margin-left", -qna_wd + "px");
        $(".qna_list").not(":animated").animate({
            "margin-left": "0px"
        }, 600);

    });
    $(".qna_box .next").click(function () {
        $(".qna_big_img>a>img").prop("src", $(".qna_list").children("li").first().find("img").prop("src"));
        $(".qna_big_img .tit").text($(".qna_list").children("li").first().find("span").text());
        $(".qna_list").not(":animated").animate({
            "margin-left": -qna_wd + "px"
        }, 600, function () {
            $(".qna_list li").eq(0).appendTo($(".qna_list"));
            $(".qna_list").css("margin-left", "0px");
        });
    });

    var note_wd = parseInt($(".note_list li").width());
    var notelen = $(".note_list li").length;
    $(".note_box .prev").click(function () {
        $(".note_list li").eq(notelen - 1).prependTo($(".note_list"));
        $(".note_list").css("margin-left", -note_wd + "px");
        $(".note_list").not(":animated").animate({
            "margin-left": "0px"
        }, 700);
        $(".note_list li.on").removeClass("on");
        $(".note_list li").eq(notelen - 8).addClass("on");
    });
    $(".note_box .next").click(function () {
        $(".note_list").not(":animated").animate({
            "margin-left": -note_wd + "px"
        }, 700, function () {
            $(".note_list li").eq(0).appendTo($(".note_list"));
            $(".note_list").css("margin-left", "0px");
        });
        $(".note_list li.on").removeClass("on");
        $(".note_list li").eq(notelen - 7).addClass("on");
    });
    
    $(".menu_btn").click(function(){
        $(".m_menu").addClass("on");
        $(".menu").addClass("on");
    });
    $(".m_menu .close").click(function(){
        $(".m_menu").removeClass("on"); 
        $(".menu").removeClass("on"); 
    });
});
