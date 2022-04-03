let kang;       //x강 정보 저장용
const startBtn = document.querySelector("#start-btn");//시작버튼
const left = document.querySelector(".left");//왼쪽 아이스크림
const right = document.querySelector(".right");//오른쪽 아이스크림
const allIce = new Array();//전체 아이스크림 정보 저장할 배열
let playArr = new Array();//게임 진행용 숫자를 관리하는 배열
let pickArr = new Array();//선택한 아이스크림 번호를 저장하는 배열
const roundInfo = document.querySelector(".round-info");//라운드 정보를 출력하는 엘리먼트객체
let round;  //라운드 진행용변수

//전체 아이스크림 정보 입력
allIce.push({img : "img/iceimg/ice1.png", name : "엄마는 외계인"});
allIce.push({img : "img/iceimg/ice2.png", name : "아몬드 봉봉"});
allIce.push({img : "img/iceimg/ice3.png", name : "민트 초콜릿 칩"});
allIce.push({img : "img/iceimg/ice4.png", name : "베리베리 스트로베리"});
allIce.push({img : "img/iceimg/ice5.png", name : "사랑에 빠진 딸기"});
allIce.push({img : "img/iceimg/ice6.png", name : "슈팅스타"});
allIce.push({img : "img/iceimg/ice7.png", name : "뉴욕 치즈 케이크"});
allIce.push({img : "img/iceimg/ice8.png", name : "체리쥬빌레"});



startBtn.addEventListener("click", function(){
    const select = document.querySelector("[name=kang]");
    kang = select.value;
    const startMenu = document.querySelector(".stert-menu");
    startMenu.remove();  
    init();
});
//이상형월드컵 시작시 누르면 필요한 데이터 초기화
function init(){
    round = 1;
    changeRoundInfo();
    while(playArr.length != kang){
        const randomNum = Math.floor(Math.random()*allIce.length);//0~7
        if(playArr.indexOf(randomNum == -1)){
            playArr.push(randomNum);
        }
    } 
    showImage();
}
function showImage(){
    const iceImg = document.querySelectorAll(".img-box>img");
    const iceName = document.querySelectorAll(".ice-name");
    const iceContent = document.querySelectorAll(".ice-content");
    //라운드1 -> playArr 0 ~ 1
    //라운드2 -> playArr 2 ~ 3
    //라운드3 -> playArr 4 ~ 5
    //라운드4 -> playArr 6 ~ 7
    let iceNo = 2*round - 2;
    iceImg[0].src = allIce[playArr[iceNo]].img;
    iceName[0].innerText = allIce[playArr[iceNo]].name;
    iceContent[0].setAttribute("value",playArr[iceNo]);
    iceNo++;
    iceImg[1].src = allIce[playArr[iceNo]].img;
    iceName[1].innerText = allIce[playArr[iceNo]].name;
    iceContent[1].setAttribute("value",playArr[iceNo]);
}
function changeRoundInfo(){
    if(kang == 2 && round == 1){
        roundInfo.innerText = "아이스크림 이상형 월드컵 결승";
    }else{
        roundInfo.innerText = `아이스크림 이상형 월드컵 ${kang}강 ${round}/${kang/2}`;
    }
}
left.addEventListener("click", function(){
    //자리는 차지하는데 안보이게 하려고 display : none대신
    //opacity = 0을 사용
    right.classList.add("delete");
    this.classList.add("pick");
    const value = this.getAttribute("value");
    pickArr.push(value);
    nextRound();
});
right.addEventListener("click", function(){
    left.classList.add("delete");
    this.classList.add("pick");
    const value = this.getAttribute("value");
    pickArr.push(value);
    nextRound();
});

function nextRound(){
    round++;
    if(round > kang/2){
        if(kang == 2){
            roundInfo.innerText = "아이스크림 이상형 월드컵 최종 우승";
            return;
        }
        round = 1;
        kang = kang/2;
        console.log("play1",playArr);
        console.log("play2",pickArr);
        playArr = new Array();
        while(playArr.length != kang){
            const randomNum = Math.floor(Math.random()*pickArr.length);
            const value = pickArr[randomNum];
            if(playArr.indexOf(value) == -1){
                playArr.push(value);
            }
        }
        pickArr = new Array();
        console.log("play2",playArr);
        console.log("play1",pickArr);
    }
    window.setTimeout(function(){
        left.classList.add("delete");
        right.classList.add("delete");
        left.classList.remove("pick");
        right.classList.remove("pick");
        showImage();
    },1.9*1000);
    window.setTimeout(function(){
        changeRoundInfo();
        left.classList.remove("delete");      
        right.classList.remove("delete");
    },2*1000);  
}