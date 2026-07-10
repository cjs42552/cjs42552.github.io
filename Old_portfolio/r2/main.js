    $(document).ready(function(){
       $(".vs_btn_box li").click(function(){
           var vs_sel = $(this).attr("class");
           if(vs_sel=="item2"){
               $("#main").css("background-image","url('./images/page1_2.jpg')"); 
               $(".vs_btn_box li button").removeClass("on");
               $(this).find("button").addClass("on");
           } else if(vs_sel=="item1"){
               $("#main").css("background-image","url('./images/page1.jpg')");  
               $(".vs_btn_box li button").removeClass("on");
               $(this).find("button").addClass("on");
           } else {
               return false; 
           }
       }); 
    });