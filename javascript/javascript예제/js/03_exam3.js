const divs = document.querySelectorAll(".divs");
let colors = new Array();
divs.forEach(function(item,index){
    item.onclick = function(){
        removeFunc(item);
    }
});
function removeFunc(delDiv){
    console.dir(delDiv);
    colors.push(delDiv.getAttribute("id"));
    delDiv.remove();
    if(colors.length == 5){
        colors.forEach(function(item,index){
            //<div></div>
            const div = document.createElement("div");
            //<div class="div"></div>
            div.setAttribute("class","divs");
            //<div class="divs" id=""></div>
            div.setAttribute("id",item);
            div.onclick = function(){
                removeFunc(div);
            }
            const divWrap = document.querySelector("#divWrap");
            divWrap.appendChild(div);
        });
        //div5개 생성해서 class divs부여
        //id는 배열에서 순서대로 부여
        //화면에 출력
        colors = new Array();
}