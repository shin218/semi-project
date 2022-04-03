function func1(){
    const divs = $("#test1>div");
    
    divs.each(function(index,item){
        //index가 순회번호 (for문의 i역할)
        //item이 해당 순번의 객체
        //item은 js객체로 jquery메소드를 사용하는 경우 $(item)형식을 맞춰줘야 함
        console.log(index,$(item).text());
        if($(item).is(".d1")){
            $(item).css("color","red");
        }else if($(item).is(".d2")){
            $(item).css("color","blue");
        }else{
            $(item).css("color","green");
        }
    });
}
function func2(){
    const divs = $("#test2>div");
    divs.eq(1).addClass("t-red"); 
    divs.first().addClass("t-red");  
    divs.eq(2).addClass("t-red").addClass("bg-yellow");
    divs.last().addClass("t-red bg-yellow");
}
function func3(){
    const divs = $("#test2").children();
    divs.eq(1).removeClass("bg-yellow t-red ");
    divs.eq(2).removeClass("t-red").removeClass("bg-yellow");
}
function func4(){
    const divs = $("#test2>div");
    //hasClass("클래스명") : 매개변수로 전달한 클래스를 갖고있으면 true/없으면 false리턴
    if(divs.eq(1).hasClass("t-red")){
        //글씨색 빨간색이면 글씨색 적용해제
        divs.eq(1).removeClass("t-red");
    }else{
        divs.eq(1).addClass("t-red");
    }
}
function func5(){
    const divs = $("#test2").children();
    //toggleClass("클래스명") : 매개변수로 전달한 클래스를 갖고있으면 removeClass("클래스명") / 갖고있지 않으면 addClass("클래스명")
    divs.eq(3).toggleClass("t-red");
}
$(function(){
    const btn1 = $("#btn1");
    btn1.click(function(){
        const label = $("#test3>label");
        label.each(function(index,item){
            const id = $(item).prev().attr("id");
            $(item).attr("for",id)
        });
    });
    $("#btn2").click(function(){
        const label = $("#test3>label");
        label.removeAttr("for");
        /*
        label.each(function(index,item){
            $(item).removeAttr("for");
        });
        */
    });
    $("#btn3").click(function(){
        const input = $("#test3>input");
        input.prop("checked",true);
    });
    $("#btn4").click(function(){
        $("#test3>input").prop("checked",false);
    });
    $("#btn5").click(function(){
        const divs = $("#test4>div");
        //css메소드에 매개변수로 css속성명만 작성하면 해당 속성의 값을 가져옴
        //색상은 rgb값을 줌
        console.log(divs.eq(0).css("background-color"));
        //css메소드에 매개변수를 2개부여하면 첫번째 매개변수 css속성명, 두번째 매개변수 첫번째 매개변수를 받은 속성에 적용할 속성값
        divs.eq(0).css("background-color","green");
        //1)css속성을 한번에 여러개 변경하는 경우
        divs.eq(1).css("background-color","yellow").css("float","none").css("clear","left");
        //2)css속성을 한번에 여러개 변경하는 경우
        divs.eq(1).css({
            "background-color":"yellow",
            "float":"none",
            "clear":"left"});
    });
    $("#btn6").click(function(){
        const h1 = $("#test5>h1");
        console.log(h1.html());
        h1.html("변경");
    });
    $("#btn7").click(function(){
        const h1 = $("#test5>h1");
        console.log(h1.text());
        h1.text("abc");
    });
    $("#btn8").click(function(){
        const input = $("[name=str]");
        const value = input.val();
        console.log(value);
        input.val("변경");
    });
    $("#btn9").click(function(){
        const div = $("#test6");
        //객체1.append(객체2) : 객체1의 마지막 자식으로 객체2를 추가
        const p = $("<p>test-0</p>");
        div.append(p);
        /*
        const p = $("<p>");
        p.append("test-0");
        console.log(p.html());
        */
        /*
        const p =document.createElement("p");
        const text = document.createTextNode("test-0");
        p.appendChild(text);
        */
       //동일한 기능의 메소드 apprendTo
       p.appendTo(div);
    });
    $("#btn10").click(function(){
        const div = $("#test6");
        const p = $("<p>test-00</p>");
        //객체1.prepend(객체2) : 객체1의 첫째자식으로 객체2 추가
        div.prepend(p);
        //동일한 기능의 메소드 prependTo
        //p.prependTo(div);
    });
    $("#btn11").click(function(){
        const div = $("#test6");
        const p = $("<p>test-000</p>");
        //객체1.after(객체2) : 객체1의 바로 다음요소로 객체2 추가
        div.after(p);
        //동일한기능의 메소드 insertAfter();
        //p.insertAfter(div);
    });
    $("#btn12").click(function(){
        const div = $("#test6");
        const p = $("<p>test-0000</p>")
        //객체1.before(객체2) : 객체1의 바로 이전요소로 객체2 추가
        div.before(p);
        //동일한 기능 메소드 insertBefore();
        //p.insertBefore(div);
    });
    $("#btn13").click(function(){
        const div = $("#test6");
        const p = div.children().eq(1);
        p.remove();
    });
    $("#btn14").click(function(){
        const div = $("#test6");
        div.empty();
    });
    $("btn15").click(function(){
        const test8 = $("#test8");
        const h2 = $("#test7>h2");
        test8.append(h2);
    });
    $("#btn16").click(function(){
        const test8 = $("#test8");
        const h2 = $("#test7>h2").clone();
        test8.append(h2);
    });
});
