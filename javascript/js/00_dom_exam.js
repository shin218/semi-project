//const btn = document.getElementsByClassName("btn");
const btn = document.querySelectorAll(".btn");
let cnt = 0;


btn[1].onclick = function(){
    const name = prompt("이름입력");
    const age = prompt("나이입력");
    const addr = prompt("주소입력");
    //tr생성
    const tr = document.createElement("tr");
    //td생성
    const nameTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const addrTd = document.createElement("td");
    const delTd = document.createElement("td");
    //td내부에 들어갈 요소 생성
    const nameText = document.createTextNode(name);
    const ageText = document.createTextNode(age);
    const addrText = document.createTextNode(addr);
    //삭제는 텍스트가 아니라 버튼요소가 들어갈 예정
    const delBtn = document.createElement("button");
    const delText = document.createTextNode("삭제");
    delBtn.appendChild(delText);
    delBtn.onclick = function(){
        tr.remove();
    }
    //td내부 내용 입력
    nameTd.appendChild(nameText);
    ageTd.appendChild(ageText);
    addrTd.appendChild(addrText);
    delTd.appendChild(delBtn);
    //tr에 td 삽입
    //어차피 객체로 들어가기 때문에 순서는 상관없음
    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(addrTd);
    tr.appendChild(delTd);
    //완성된 tr을 화면에 존재하는 table에 삽입
    const table = document.querySelector("#exam2");
    console.dir()
    table.append(tr);
}