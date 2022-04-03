//1. console.log - 개발자가 log를 보기위해 사용하는 console창(java console과 같음)
console.log("hello javascript");
console.log(100);
console.log(100+200);
console.log("hello",100,"hi",300);

//2.alert - 경고메세지
alert("1234");
console.log("확인용");
alert(100+200);
alert(100,200,300);//첫번째 매개변수 100만 alert를 이용해서 화면에 나오고 나머지 매개변수는 모두 버림

//3.confirm
console.log(confirm("자바스크립트는 할만해요?"));
//확인>true/취소>false리턴됨

//4.prompt
console.log(prompt("당신의 이름은?"));
//입력값을 return해주는 함수