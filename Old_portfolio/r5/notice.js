/* notice.js : notice item Infinite Looping  */
$(document).ready(function(){    
    var notice_intv = setInterval(function(){
       noticeNext(); 
    }, 4000);
    function noticeNext(){
        $(".notice_box").not(":animated").animate({"margin-top" : "-42px"}, 500, function(){
            $(".notice_box li").eq(0).appendTo($(".notice_box"));
            $(".notice_box").css("margin-top", "0px");
        });
    }
});    