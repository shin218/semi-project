//문제 1
const q1 = document.querySelector("#q1");
q1.onclick = function(){
    const name = prompt("이름입력");
    const age = prompt("나이입력");
    const addr = prompt("주소입력");

    const tr = document.createElement("div");

    const nameSpan = document.createElement("span");
    const ageSpan = document.createElement("span");
    const addrSpan = document.createElement("span");

    const nameText = document.createTextNode(name);
    const ageText = document.createTextNode(age);
    const addrText = document.createTextNode(addr);

    nameSpan.appendChild(nameText);
    ageSpan.appendChild(ageText);
    addrSpan.appendChild(addrText);

    const table = document.querySelector("examzone");
    console.dir()
    table.append(span);
}

//문제 2
const q2 = document.querySelector("#q2");
q2.onclick = function(){
    const input1 = document.querySelector("#input1");
    const inputValue = input.value;
    const result = document.querySelector(".result");
    if(isNaN(inputValue)){
        result.innerText = "숫자가 아닙니다.";
    }else{
        if(inputValue%2 == 0){
            result.innerText = "짝수";
        }else{
            result.innerText = "홀수";
        }
    }
}

//문제 3
const img = document.querySelector("img");
img.onclick = function(){
    img.setAttribute("src","img/angel.png");
}

//문제 4
const result = document.querySelector("#q4");
result.onclick = function(){
    const result = document.querySelector("#result")
    result.style.color = "navy";
}
