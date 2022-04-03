const btn1 = document.querySelector("#btn1");
btn1.onclick = function(){
    //window.open(prarm1,param2,param3);
    //param1 : 주소(새창에서 열릴 주소)
    //param2 : 열릴방식 or 이름
    //param3 : 옵션
    window.open("http://www.naver.com","_blank","width=500,height=500");
}
const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    //window.setTimeout(param1,param2)
    //param1 : 동작할 함수
    //param2 : 시간(ms)
    timeoutId = window.setTimeout(function(){
        alert("짠!!!");
    },1000*3);
}
const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    //setTimeout을 멈춰줌(스톱워치 만들때 활용)
    window.clearTimeout(timeoutId);
}
const btn4 = document.querySelector("#btn4");
let intervalId;
btn4.onclick = function(){
    const p1 = document.querySelector("#p1");
    intervalId = window.setInterval(function(){
        const date = new Date();
        const currentTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        p1.innerText = currentTime;
    },1000);
}
const btn5 = document.querySelector("btn5");
btn5.onclick = function(){
    window.clearInterval(intervalId);
}
