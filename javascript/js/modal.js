$(function(){
    $("#login-btn").on("click",function(){
        $(".modal-wrap").css("display","flex");
    });
    $("input[type=reset]").on("click",function(){
        $(".modal-wrap").css("display","none");
    });
});