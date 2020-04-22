$(document).ready(function () {
    var vs_wd = parseInt($(".visual_roll").width());
    $(".vs_btn_box li").click(function () {
        var tar = $(this).index();
        $(".img_box").not(":animated").animate({
            "margin-left": tar * vs_wd * -1 + "px"
        }, 500);
        $(".vs_btn_box li button").removeClass("on");
        $(this).find("button").addClass("on");
    });
    var intv = setInterval(function() { nextAni(); }, 4000);
    function nextAni() {
        $(".img_box").not(":animated").animate({"margin-left":"-1920px"}, 1000, function(){
            $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left", "0px");
        });
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box").css("margin-left", "-1920px");
        $(".img_box").not(":animated").animate({"margin-left":"0px"}, 1000);
    }
    $("#visual .next").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 4000);
    });
    $("#visual .prev").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 4000);
    });
});
    $(document).ready(function(){    
    var notice_intv = setInterval(function(){
       noticeNext(); 
    }, 2800);
    function noticeNext(){
        $("#notice ul").not(":animated").animate({"margin-top" : "-21px"}, 250, function(){
            $("#notice ul li").eq(0).appendTo($("#notice ul"));
            $("#notice ul").css("margin-top", "0px");
        });
    }
});  
$(document).ready(function(){
	var w = ($(window).width()/2)-($('.modal').width()/2);
	var h = ($(window).height()/2)-($('.modal').height()/2);

	$('.modal').css({
		left: w,
		top: h
	});
	$('.modal a').click(function(){
		$('.modal').fadeOut(0);
		$('.modalBg').fadeOut(0);
	});
});
