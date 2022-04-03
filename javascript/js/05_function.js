//1. 선언적 함수
function func1(){
    console.log("func1함수 동작");
}
//선언적 함수 실행
const test1 = func1();
console.log(test1);
function func2(){
    console.log("func2함수 동작");
    return "리턴값";
}
const test2 = func2();
console.log(test2);

//2. 익명함수1(변수에 저장)
//선언적 함수는 함수가 먼저 메모리에 올라가기때문에 코드순서 상관없지만
//익명함수는 반드시 선언 이후에 사용
const test3 = function(){
    console.log("익명함수1");
}
test3();

const test4 = function(){
    console.log("익명함수2");
    return "익명함수 리턴";
}
const test5 = test4();
console.log(test5);

//3. 익명함수2(스스로 실행되는 함수)
(function(){
    console.log("스스로 동작하는 익명함수입니다.");
})();

//함수의 매개변수
function func3(num1, num2){
    console.log(num1, typeof num1);
    console.log(num2, typeof num2);
}
func3(100,"안녕");
func3(true,[1,2,3]);
//선언한 매개변수보다 변수숫자가 부족한 경우 전달하지 않은 매개변수는 undefined로 처리
func3(200);
//선언한 매개변수보다 많은 경우 선언된 매개변수만 사용하고 나머지는 사용하지 않음
func3(100,200,300,400);

function func4(){
    console.log("func4 호출");
    console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
func4();
func4(100,200,true,"hi");


//클로저
let count = 0;
function increament(){
    count++;
    return count;
}

function incEvent(){
    console.log(increament());
}

incEvent();
incEvent();
incEvent();

//클로저 : 함수를 리턴하는 형태
//변수를 외부에서 변경할 수 없도록함
//지역변수를 전역변수처럼 쓰고 + 변수를 보호하기 위한 이 방식자체를 closure라고 부름
function increament2(){
    let cnt = 0;
    const returnFunc = function(){
        cnt++;
        return cnt;
    }
    return returnFunc;
}
const incFunc = increament2();
function incEvent2(){
    console.log(increament());
}
incEvent2();
incEvent2();
incEvent2();

const url = "http://www.naver.com?query=코로나";
//코로나가 특수문자로 인코딩됨
const str1 = encodeURI(url);
console.log(str1);
//인코딩된 코로나를 다시 한글로 디코딩함
const str2 = decodeURI(str1);
console.log(str2);
//더 심하게 인코딩된것(걍 인코딩의 차이)
const str3 = encodeURIComponent(url);
console.log(str3);
const str4 = decodeURIComponent(str3);
console.log(str4);

const num1 = 10;
const num2 = "100";
//isFinite() : 숫자인지(숫자인 문자열도 가능) 확인해주는 함수, isNaN() : 숫자가 아닌지 확인해주는 함수
console.log(isFinite(num1));
console.log(isFinite(num2));
console.log(isNaN(num1));
console.log(isNaN(num2));
if(isFinite(num1) && isFinite(num2)){
    console.log(num1+Number(num2));
}else{
    console.log("숫자만 더할 수 있습니다.");
}
//eval : 문자열을 자바스크립트코드로 실행
const num3 = 100;
const num4 = 200;
const msg = `${num3}+${num4}`;
console.log(msg);
//아래는 문자열을 자바스크립트로 실행해서(연산해서) 결과로 가져오는 것
console.log(eval(msg));
console.log(eval("num3+num4"));