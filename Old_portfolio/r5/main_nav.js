/* main_nav.js : mobile & tablet Device navigation Callapible */
$(document).ready(function(){
    $(".lst_btn").click(function(){
       $(".gnb_wrap").addClass("on"); 
    });
    $(".close_btn").click(function(){
       $(".gnb_wrap").removeClass("on"); 
    });
});    