//지금까지 했던게 고전이벤트모델
const btn1 = document.querySelector("#btn1");
console.log(btn1.onclick);
btn1.onclick = function(){
    console.log("고전이벤트 모델1");
}
const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    console.log("고전이벤트 모델2");
    btn1.onclick = null;
}
//인라인이벤트는 아주 간단한 코드아니면 거의 안씀
function func1(){
    console.log("인라인 이벤트2");
    console.log("인라인 이벤트2");
    console.log("인라인 이벤트2");
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",function(){
    console.log("표준이벤트모델1");
});
const btn4 = document.querySelector("#btn4");
btn4.onclick = function(){
    console.log("표준이벤트모델 비교용1");
}
//addEventListener -> 이게 주로 쓰는 방식임
btn3.addEventListener("click",function(){
    console.log("표준이벤트모델2");
});
btn4.onclick = function(){
    console.log("표준이벤트모델 비교용2");
}

const a = document.querySelector("a");
a.addEventListener("click",function(){
    const check = confirm("네이버로 이동하시겠습니까?");
    if(check){
        console.log("네이버로 이동");
        location.href = "http://www.naver.com";
    }else{
        console.log("이동취소");
    }
});
//선언적함수
function checkValue(){
    const id = document.querySelector("#id1");
    const pw = document.querySelector("#pw1");
    const idValue = id.value;
    const pwValue = pw.value;
    if(idValue == ""){
        alert("아이디를 입력하세요!!!");
        return false;
    }else if(pwValue == ""){
        alert("비밀번호를 입력하세요!!");
        return false;
    }
}

function pwCheck(){
    const pwValue = document.querySelector("#pw2").value;
    const pwReValue = document.querySelector("pwRe").value;
    if(pwValue != pwReValue){
        let checkMsg = document.querySelector("#checkMsg");
        checkMsg.innerText = "비밀번호가 일치하지 않습니다.";
        checkMsg.style.color = "red";
        return false;
    }
}
//이벤트버블링을 제거하는 방법
const divs = document.querySelectorAll(".div-test");
for(let i=0;i<divs.length;i++){
    divs[i].addEventListener("click",function(){
        alert(this.innerText);
        window.event.stopPropagation();//이벤트 전달을 막는 메소드
    });
}
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");

div1.addEventListener("click",function(){
    console.log("클릭이벤트");
});
div2.addEventListener("dblclick",function(){
    console.log("더블클릭이벤트");
});
//hover랑 기능 비슷하지만 hover는 부모클래스 선택안되고 좀 한계가있어서
//js로 hover랑 기능같은 거 구현해서 쓰기도함
div3.addEventListener("mouseenter",function(){
    this.style.backgroundColor = "black";
});
div3.addEventListener("mouseleave",function(){
    this.style.backgroundColor = "transparent";
});

const input1 = document.querySelector("#input1");
input1.addEventListener("focusin",function(){
    this.style.backgroundColor = "orange";
});
input1.addEventListener("focusout",function(){
    this.style.backgroundColor = "white";
});
const userArr = new Array();
userArr.push("user01");
userArr.push("user02");
userArr.push("user03");
//input의 value가 바뀌었는지 안바뀌었는지가 중요
//keyup : 키보드 한글자 입력할때마다 검사함
input1.addEventListener("keyup",function(){
    const inputValue = this.value;
    const searchResult = userArr.indexOf(inputValue);
    const idCheck = document.querySelector("#idCheck");
    if(searchResult == -1){
        idCheck.innerText = "사용가능한 아이디입니다.";
        idCheck.style.color = "green";        
    }else {
        idCheck.innerText = "이미 사용중인 아이디입니다.";
        idCheck.style.color = "red";
    }
});
const checkbox = document.querySelectorAll("[name=hobby]");
for(let i=0;i<checkbox.length;i++){
    checkbox[i].addEventListener("change",function(){
        const status = this.checked;
        const value = this.value;
        console.log(status);
        console.log(value);
    });
}