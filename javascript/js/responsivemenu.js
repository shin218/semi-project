$(function(){
    $("#menu-btn").on("click",function(){
        $(".nav>ul").slideToggle();
    });
    //브라우저에 크기변화가 발생했을 때 이벤트
    //브라우저 커질때 메뉴창 없어지니까 그거 잡아준거↓
    $(window).resize(function(){
        const currentWidth = $(window).width();//현재 브라우저 창의 너비
        if(currentWidth > 760 && $(".nav>ul").is(":hidden")){
            $(".nav>ul").removeAttr("style");
        }
    });
});