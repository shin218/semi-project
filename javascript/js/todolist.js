//입력 버튼
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("[name=input]");
addBtn.addEventListener("click", function(e){
    addList();
});
input.addEventListener("keyup",function(e){
    console.log(e);
    //KeyCode가 키보드의 키값
    if(e.keyCode == 13){
        addList();
    }
});

function addList(){
    const msg = input.value;
    if(msg != "") {
    const ul = document.createElement("ul");
    //like li 생성
    const li1 = document.createElement("li");
    const span1 = document.createElement("span");  
    const text1 = document.createTextNode("favorite_border");
    ul.setAttribute("class","todolist");
    li1.setAttribute("class","like");
    span1.setAttribute("class","material-icons");
    span1.appendChild(text1);
    li1.appendChild(span1);
    ul.appendChild(li1);

    span1.addEventListener("click", function(){
        var currentValue = this.innerText;
        if(currentValue == "favorite_border"){
            this.innerText = "favorite";
        }else{
            this.innerText = "favorite_border";
        }
    });   

    //todo-text li 생성
    const li2 = document.createElement("li"); 
    const text2 = document.createTextNode(msg);
    li2.setAttribute("class","todo-text");
    li2.appendChild(text2);
    ul.appendChild(li2);
    //check-zone li생성
    //check span생성
    const li3 = document.createElement("li");
    const span3 = document.createElement("span");  
    const text3 = document.createTextNode("check");
    li3.setAttribute("class","check-zone");
    span3.setAttribute("class","material-icons");
    span3.setAttribute("class","check");
    span3.appendChild(text3);
    li3.appendChild(span3);
    
    //close span생성
    const span4 = document.createElement("span");  
    const text4 = document.createTextNode("close");
    span4.setAttribute("class","material-icons");
    span4.setAttribute("class","close");
    span4.appendChild(text4);
    li3.appendChild(span4);
    ul.appendChild(li3);
    
    
    document.querySelector(".list-box").appendChild(ul);
    input.value = "";
    } 
}