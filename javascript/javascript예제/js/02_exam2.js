const radio = document.querySelectorAll("[name=search]");
radio.forEach(function (item,index){
    
    item.onclick = function(){
        const searchBox = document.querySelectorAll(".searchBox");
        const id = item.getAttribute("id");
        searchBox.forEach(function (boxItem,boxIndex){
            boxItem.style.display = "none";
        });
        const showBox = document.querySelector("#"+id+"Box");
        showBox.style.display = "block";
    }
});

/*
radio[0].onclick = function(){
    const titleBox = document.querySelector("#titleBox");
    const dateBox = document.querySelector("#dateBox");
    const writerBox = document.querySelector("#writerBox");
    titleBox.style.display = "none";
    dateBox.style.display = "none";
    writerBox.style.display = "none";
    titleBox.style.display = "block";
}
radio[1].onclick = function(){
    const titleBox = document.querySelector("#titleBox");
    const dateBox = document.querySelector("#dateBox");
    const writerBox = document.querySelector("#writerBox");
    titleBox.style.display = "none";
    dateBox.style.display = "none";
    writerBox.style.display = "none";
    dateBox.style.display = "block";
}
radio[2].onclick = function(){
    const titleBox = document.querySelector("#titleBox");
    const dateBox = document.querySelector("#dateBox");
    const writerBox = document.querySelector("#writerBox");
    titleBox.style.display = "none";
    dateBox.style.display = "none";
    writerBox.style.display = "none";
    writerBox.style.display = "block";
}
*/