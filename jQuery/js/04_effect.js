$(function(){
    const div = $("#div");
    $("#btn1").on("click",function(){
        div.show();//display 속성을 원래 요소의 속성으로
    });
    $("#btn2").on("click",function(){
        div.hide();//display 속성을 none으로
    });
    $("#btn3").on("click",function(){
        div.toggle(5*1000);//show(),hide() 반복
    });
    $("#btn4").on("click",function(){
        div.slideDown(400);
    });
    $("#btn5").on("click",function(){
        div.slideUp(400);
    });
    $("#btn6").on("click",function(){
        div.slideToggle(400);
    });
    $("#btn7").on("click",function(){
        div.fadeIn();
    });
    $("#btn8").on("click",function(){
        div.fadeOut();
    });
    $("#btn9").on("click",function(){
        div.fadeToggle();
    }); 
    $("#btn10").on("click",function(){
        div.animate(
            {
                width:"100px",
                height: "150px",
                opacity: "0.5"
            },
            1000
        )
    });
});