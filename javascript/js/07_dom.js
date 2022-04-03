//1. 텍스트노드를 갖는 요소 생성
const p = document.createElement("p");//<p></p>태그 생성
//p태그 내부에 작성할 텍스트 생성
const text1 = document.createTextNode("p태그 내부에 추가될 구문!!");

//선생님은 setAttribute방식을 더 자주쓴다고함
p.setAttribute("id","pppp");
p.setAttribute("class","cc");
p.onclick = function(){
    console.log("p태그클릭");
}
//생성한 p태그의 자식으로 text1태그를 추가
p.appendChild(text1);//<p>p태그 내부에 추가될 구문</p>
document.getElementById("add-zone").appendChild(p);

//2. 텍스트노드를 갖지않는 요소 생성
//img 태그 생성
const img = document.createElement("img");//<img>
//태그에 속성값 추가
img.src = "img/dora.png";
document.getElementById("add-zone").appendChild(img);
console.dir(p);

//3. 태그를 여러개 생성해서 넣는 경우
//ul -> li -> a
const ul = document.createElement("ul");//<ul></ul>
const li1 = document.createElement("li");//<li></li>
const a1 = document.createElement("a");//<a></a>
const menu1 = document.createTextNode("menu1");//menu1
a1.setAttribute("href","#");//<a href="#"></a>
a1.appendChild(menu1);//<a>menu1</a>
a1.style.textDecoration = "none";
a1.style.color = "powderblue";
li1.appendChild(a1);//<li><a>menu1</a></li>
ul.appendChild(li1);//<ul><li><a>menu1</a></li></ul>

const li2 = document.createElement("li");//<li></li>
const a2 = document.createElement("a");//<a></a>
const menu2 = document.createTextNode("menu1");//menu2
a2.setAttribute("href","#");//<a href="#"></a>
a2.appendChild(menu2);//<a>menu1</a>
li2.appendChild(a2);//<li><a>menu1</a></li>
ul.appendChild(li2);//<ul><li><a>menu1</a></li></ul>

const li3 = document.createElement("li");//<li></li>
const a3 = document.createElement("a");//<a></a>
const menu3 = document.createTextNode("menu1");//menu3
a3.setAttribute("href","#");//<a href="#"></a>
a3.appendChild(menu3);//<a>menu1</a>
li3.appendChild(a3);//<li><a>menu1</a></li>
ul.appendChild(li3);//<ul><li><a>menu1</a></li></ul>
document.getElementById("add-zone").appendChild(ul);

//id속성의 값이 div html요소를 가져옴
const div = document.getElementById("div");
console.dir(div);
//가져온 요소의 속성값 확인
console.log(div.getAttribute("id"));
console.log(div.getAttribute("class"));
console.log(div.getAttribute("name"));
//가져온 요소의 속성값 변경
div.setAttribute("id","d");
div.setAttribute("class","c1 c2");
div.setAttribute("name","name-div");

const delBtn = document.getElementById("delBtn");
//onclick은 항상 함수타입이 온다고 생각하면됨
delBtn.onclick = function(){
    const div3 = document.getElementById("i-div3");
    //display : none은 요소만 눈에 안보이게 한거고
    //div3.style.display = "none";
    //remove : remove는 요소자체를 아예 삭제한것
    div3.remove();
}

const delBtn2 = document.getElementById("delBtn2");
delBtn2.onclick = function(){
    // const delDiv3 = document.getElementById("i-div3");
    // delDiv3.remove();
    // const delDiv4 = document.getElementById("i-div4");
    // delDiv4.remove();
    const del34 = document.getElementsByClassName("i-c2");
    //하나 지워지면 하나가 앞으로 이동하니까 순서 다 0됨
    del34[0].remove();
    del34[0].remove();
    //id 빼고 나머지는 무조건 복수형이 default값이라 배열로 리턴되기 때문에 (요소1개여도) 무조건 배열로 다뤄야함(존중★)
    const d5 = document.getElementsByClassName("i-c3");
    d5[0].remove();
}
// const allDel = document.getElementById("allDel");
// allDel.onclick = function(){
//     const div = document.getElementById("divdiv");
//     const div1 = document.getElementById("i-div1");
//     div.removeChild(div1);
// }
//선생님은 아래를 더 많이쓴다고함
const allDel = document.querySelector("#allDel");
allDel.onclick = function(){
    delDivs = document.querySelectorAll("#divdiv>div");
    console.log(delDivs);
    delDivs[0].remove();
    delDivs[1].remove();
    delDivs[2].remove();
    delDivs[3].remove();
    delDivs[4].remove();
}

