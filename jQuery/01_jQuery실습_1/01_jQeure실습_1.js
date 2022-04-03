    //1번문제
    $(function(){
        const text1 = $("#text");
        text1.click(function(){
            console.log($(this).text());
        });

        $(".text").click(function(){
            console.log($(this).text());
        });
        $("[name=text]").click(function(){
            console.log($(this).text());
        });
    });

    //2번문제(3가지 풀이)
    
    function func1(){
        /*
        //-1-
        const checkBox = $("[name-styde]");
        let count = 0;
        //객체.is("선택자") : 
        for(let i=0;i<checkBox.length;i++){
            if(checkBox.eq(i).is(":checked")){
                count++;
            }
        }
        console.log(count);
        */
        /*-2-
        const checkBox = $("[name-styde]");
        const filter = checkBox.filter(":checked");
        console.log(filter.length);
        */
        //-3-
        //회원가입할때 관심사 3개이상 선택하세요->이걸로 갯수세면됨
        console.log($("[name=stydy]:checked").length);
    }

    //3번문제
    //3-1
    function exam1(){
        /*
        const select = $("#pp").siblings("ul");
        const select2 = select.children();
        const select3 = select2.first();
        select3.css("border","2px solid red");
        */
        /*
        const pp = $("#pp");
        const carrot = pp.prev().children().first();
        carrot.css("border","2px solid red");
        */
        const pp = $("#pp");
        const carrot = pp.parent().find("li").first();
        //const carrot = pp.parent().children().eq(0).children().eq(0);
        carrot.css("border","2px solid red");
    }
    //3-2
    function exam2(){
        const select = $(".test ul").siblings("p");
        const select2 = select.children();
        const select3 = select2.first();
        const select4 = select3.next();
        //const fire = select2.next().children().eq(1);
        select4.css("border","2px solid red");
    }
    //3-3
    function exam3(){
        const select = $("#pp").parent();
        //const select = span.parents("div").eq(0);
        select.css("border","2px solid blue");
    }
    //3-4
    function exam4(){
        const select = $(".test").find("li");
        console.log(select);
    }