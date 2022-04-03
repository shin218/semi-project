$(function(){
    //문제1
    $("#btn1").click(function(){
        const result = $("#result1");
        result.empty();
        const tr = $("#tbl1 tr");
        tr.each(function(index,item){
            if(index != 0){
                const td = $(item).children();
                const html = td.eq(0).text()+"/"+td.eq(1).text()+"/"+td.eq(2).text()+"<br>";
                result.append(html);
            }
        });
    });
    //문제2
    $("#btn2").click(function(){
        const th = $("#tbl1 th");
        th.addClass("title");
        $("#tbl1 tr>td:first-child").addClass("name");
        $("#tbl1 tr>td:nth-child(2)").addClass("age");
        $("#tbl1 tr>td:last-child").addClass("addr");
    });
    $("#btn3").click(function(){
        const th = $("#tbl1 th");
        th.removeClass("title");
        $("#tbl1 tr>td:first-child").removeClass("name");
        $("#tbl1 tr>td:nth-child(2)").removeClass("age");
        $("#tbl1 tr>td:last-child").removeClass("addr");
    });
    let color = "transparent";
    $(".copy").click(function(){
        //이 함수의 해당된 객체(this/이벤트발생자)의 css bg를 color변수에 넣으라는 뜻
        color = $(this).css("background-color");
    });
    $("#exam3>fieldset").last().children("div").click(function(){
        $(this).css("background-color",color);
    });
    $("#btn4").click(function(){
        $("#exam3>fieldset").last().children("div").css("background-color","transparent");
        color = "transparent";
    });
    $("#btn5").click(function(){
        const result = $("#result2");
        result.empty();
        const checkBox = $("#tbl2 input[type=checkbox]:checked");
        checkBox.each(function(index,item){
            const tr = $(item).parent().parent();
            const td = tr.children("td");
            const html = td.eq(0).text()+"/"+td.eq(1).text()+"/"+td.eq(2).text()+"<br>";
            result.append(html);
        });
    });
});

