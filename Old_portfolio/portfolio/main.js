$(document).ready(function(){
        
        $(".menu").click(function(){
               $(".gnb").addClass("on"); 
            });
            $(".close").click(function(){
               $(".gnb").removeClass("on"); 
            });
        $(".next_page").click(function(){ //다음 페이지 넘길때
            var np = parseInt($(this).attr("data-target"));
            $("body, html").not(":animated").animate({scrollTop:np*win_h}, 500);
        });
        var win_h = $(window).height();
        var wd = $(window).width();
        $(".page").each(function(index){ //각 페이지마다 스크롤해야할 양을 지정
            $(this).attr("data-page", win_h*index);
        });
        $(".page").on("mousewheel", function(e){
            var secPos = parseInt($(this).attr("data-page"));
            if(e.originalEvent.wheelDelta > 0){ //위로 스크롤할 때
                $("body, html").not(":animated").animate({scrollTop:secPos - win_h}, 400);
            } else if(e.originalEvent.wheelDelta < 0){ //아래로 스크롤할 때
                $("body, html").not(":animated").animate({scrollTop:secPos + win_h}, 400);
            }
        });
        $(window).scroll(function(){
            var sc_top = $(window).scrollTop(); //스크롤량 계산
            if(sc_top >= win_h*1){ //스크롤량이 윈도우의 높이값의 번호 1번 이상이면
                $(".hd, .sns").removeClass("on");
            } else {
               $(".hd, .sns").addClass("on");
            }
        });
    var $window = $(window);
	var cHeight,startPoint,scrollHeight;

	$(window).on("scroll",function(){
		//현재 스크롤 위치
		scrollHeight = $window.scrollTop();
		
		//div(#c) 위치
		cHeight = $("#page3").offset().top;
		
		//실행되는 높이값 
		startPoint = cHeight-500;

		//실행
		if(scrollHeight>startPoint){
			//실행문
			$(".occupy").animate({"left":"0"},1000);
		};
	});
	$window.trigger("scroll");
    $(".wrap .tit").click(function(){
       $(".wrap .tit").addClass("on");
        $(".wrap .tap_wrap").addClass("on");
        $(".wrap .tit").removeClass("on");
        $(".wrap .tap_wrap").removeClass("on");
    });
});
   
    