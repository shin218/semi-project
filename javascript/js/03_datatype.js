const str = "JavaScript";
console.log(str);
console.log(typeof(str));
console.log(typeof str); // 데이터타입 리턴(이게 좀더 최신문법)
console.log(str.length);//문자열 길이를 리턴
console.log(str.toLowerCase());//해당문자열을 모두 소문자로 변환하여 리턴
console.log(str)//원본문자열에는 변화없음
console.log(str.toUpperCase());//해당문자열을 모두 대문자로 변환하여 리턴
console.log(str);
console.log(str.indexOf("a"));//앞에서부터 매개변수로 준 문자열의 위치를 찾아서 리턴 -> 1나옴(0부터 세니까)
console.log(str.lastIndexOf("a"));//뒤에서부터 매개변수로 준 문자열의 위치를 찾아서 리턴
console.log(str.indexOf("z"));//indexOf,lastIndexOf를 통해서 검색할 때 해당문자열이 존재하지 않으면 -1
console.log(str.charAt(4));//해당인덱스에 있는 문자열 1개 리턴
console.log(str.substring(3,7));//3번인덱스부터 7번 앞까지 문자열 리턴
console.log(str.substring(3));//substring에 매개변수가 1개인경우에는 해당번째부터 끝까지
const study = "java,oracle,html,css,javascript";
const arr = study.split(",");//매개변수로 전달한 값을 기준으로 잘라내서 배열형태로 리턴
console.log(arr);

//숫자타입
const num = 3.5;
console.log(num);
console.log(typeof num);
console.log(Math.abs(num));
console.log(Math.abs(-3.5));
console.log(Math.random());//0~1사이의 랜덤실수
console.log(Math.round(num));//반올림
console.log(Math.round(3.4));
console.log(Math.floor(3.9), Math.ceil(3.1));//버림, 올림


//자동형변환
const userName = "이신영";
const userAge = 20;
const userGrade = "1";
console.log(userName+userAge);//"이신영"+20 -> "이신영"+"20"
console.log(userName+userGrade);//"이신영1"
console.log(userAge-userGrade);//19 -> 문자열을 숫자로 바꿔서 사칙연산을 함(+를 제외한 산술연산은 모두 숫자연산으로 처리)
//NaN -> Not a Number라는 뜻(숫자가 아니다)
console.log(userAge+userGrade);//201 -> 문자열("20")+문자열("1") = "201"이 리턴됨
console.log("제 이름은 "+userName+"이고, 나이는 "+userAge+"살 "+userGrade+"학년입니다.");
console.log(`제이름은 ${userName}이고, 나이는 ${userAge}살 ${userGrade}학년입니다.`);
//``이거 console.log에 쓰고 변수 ++ 대신 ''이거 안에 문장넣고 ${변수명} 이렇게 쓰면 됨
console.log(`나는 ${study}를 공부중이야 반가워`);

//수동형변환
const test11 = "100";
console.log(typeof test11);
const test22 = Number(test11);//숫자타입으로 형변환
console.log(typeof test22);
const test33 = String(test22);//문자열타입으로 형변환
console.log(typeof test33);

//연산자
const oper1 = "1";
const oper2 = 1;
console.log(typeof oper1);
console.log(typeof oper2);
console.log(oper1 == oper2);    //자료형 상관없이 값이 일치하면 true
console.log(oper1 === oper2);   //자료형 일치하고 값도 일치하면 true
//java는 자료형이 다르면 비교자체가 불가하므로 ===가 필요없었으나 javascript는 자료형 상관안하므로 
//자료형에 대한 옵션이 생겨서 === 라는 비교연산자가 생겨남

//짧은조건문
//&&연산 || 연산의 동작방식을 이용하는 조건문
const testNum = 11;
if(testNum%2 === 0){
    console.log("짝수!");
}else{
    console.log("홀수!");
}

testNum%2 == 0 || console.log("홀수입니다.");//OR
testNum%2 == 0 && console.log("짝수입니다.");//AND

for(let i = 0;i<5;i++) {//선언한값(i)가 바뀌어야할때는 const대신 let을 써야함
    console.log(`${i+1}번째 메세지 출력`);
}

