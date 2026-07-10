$(document).ready(function(){
        
        $(".menu").click(function(){
               $(".gnb").addClass("on"); 
            });
            $(".close").click(function(){
               $(".gnb").removeClass("on"); 
            });
    
    $(".wrap .tit").click(function(){
        var idx = $(this).index();
        $(".wrap .tit").removeClass("on");
        $(".wrap .tit").eq(idx).addClass("on");
        $(".wrap .tap_wrap").removeClass("on");
        $(".wrap .tap_wrap").eq(idx).addClass("on");
    });
});
   
    