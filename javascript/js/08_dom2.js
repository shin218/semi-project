//const d1 = document.getElementById("d1");
const d1 = document.querySelector("#d1");
//innerHtml / innerText -> javascript에서 html을 수정하는 옵션
//태그 내부의 값을 바꿀때 많이 사용하는 기능
d1.onclick = function(){
    console.log(d1.innerHTML);
    console.log(d1.innerText);
    d1.innerText = "<a href='#'>oo</a>";
}
const btn1 = document.querySelector("#btn1");
btn1.onclick = function(){
    const div = document.querySelector("#d1");
    div.innerText = "변경";
}
const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    const divs = document.querySelectorAll(".dd1");
    divs[0].innerText = "클래스로변경"
    divs[1].innerText = "클래스로변경"
}
const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    const divs = document.getElementsByName("name1");
    //const divs = document.querySelectorAll("[name=name1]");
    for(let i=0;i<divs.length;i++){
        divs[i].style.color = "red";
    }
    /*
    divs[0].style.color = "red";
    divs[1].style.color = "red";
    divs[2].style.color = "red";
    */
}
const btn4 = document.querySelector("#btn4");
btn4.onclick = function(){
    const div2 = document.querySelectorAll(".dd2");
    div2.forEach(function(item,index){
        //js에서 css변경할때 - 들어가는 단어는 카멜표기법으로 변경★
        item.style.backgroundColor = "yellow";
    });
}
//input은 innerHtml,innterText 안씀

const btn5 = document.querySelector("#btn5");
const input = document.querySelector("#input1");
//초기값 수정 후 btn5를 누르면 btn5이하 코드들은 바뀌지만 54번 코드의
//inputValue는 안바뀜(학생들이 가장 많이 실수하는 부분★)
const inputValue = input.value;
btn5.onclick = function(){
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    console.log(input1.value);
    console.log(input2.value);
    console.log(inputValue);//console에 초기값으로 나옴
    console.log(input.value);
}
const btn6 = document.querySelector("#btn6");
btn6.onclick = function(){
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    input1.value = "값 변경";
    input2.value = "값 변경2";
}
//비밀번호 입력하면 검은점으로 안보이다가 버튼누르면 text로 바뀌어서 보이는 기능
//구글 로그인하고 같음
const btn7 = document.querySelector("#btn7");
btn7.onclick = function(){
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    input2.setAttribute("type","text");
    console.log(input1.getAttribute("readonly"));
    input1.setAttribute("readonly",true);
    console.log(input1.getAttribute("readonly"));
}
const change = document.querySelector("#change");
change.onclick = function(){
    const status = change.checked;
    console.log(status);
    const input2 = document.querySelector("#input2");
    if(status){
        input2.setAttribute("type","text");
    }else{
        input2.setAttribute("type","password");
    }
}
const btn8 = document.querySelector("#btn8");
btn8.onclick = function(){
    const link = document.querySelector("#link");
    link.innerText = "구글로이동";
    link.setAttribute("href","http://www.google.com");
}
const btn9 = document.querySelector("#btn9");
btn9.onclick = function(){
    const link = document.querySelector("#link");
    link.innerHTML = "네이버로 이동";
    link.setAttribute("href","http://www.naver.com");
}
const btn10 = document.querySelector("#btn10");
const btn11 = document.querySelector("#btn11");

btn10.onclick = function(){
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        item.classList.add("pick");
    })
}
btn11.onclick = function(){
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        item.classList.remove("pick");
    })
}
const btn12 = document.querySelector("#btn12");
btn12.onclick = function(){
    const divs = document.querySelectorAll(".test-div");
    divs.forEach(function(item){
        //toggle은 자동으로 넣었다 뺐다 해주는 기능(없으면 넣어주고 있으면 빼줌)
        item.classList.toggle("pick");
    })
}
const testDivs = document.querySelectorAll(".test-div");
testDivs.forEach(function(item,index){

    item.onclick = function(){
        testDivs.forEach(function(item2){
            //pick없는거 없애도 에러안나니까 사용가능한 코드
            item2.classList.remove("pick");
        });
        item.classList.add("pick");
    }
});


