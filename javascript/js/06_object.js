const obj1 = {
    a:100, 
    b:"hi", 
    c: true, 
    d:[1,2,3,4]
};
console.log(obj1);
console.log(obj1.a);
console.log(obj1["b"]);
console.log(obj1.c);
console.log(obj1["d"]);
//데이터 바꿈
obj1.a = "안녕";
obj1["b"] = 300;
console.log(obj1);

const obj2 = {
    a : 100,
    b : 200,
    c : function(){
        console.log("객체 내부 함수");
        return "리턴!";
    }
}
console.log(obj2);
console.log(obj2.a);
console.log(obj2.c());

//in : 객체에 있는지 확인하는 함수
console.log("a" in obj2);
console.log("b" in obj2);
console.log("c" in obj2);
console.log("d" in obj2);

//with
with(obj2){
    console.log(a);
    console.log(b);
    console.log(c());
}

//생성된 객체에 속성 추가
obj2.d = "안녕";
console.log(obj2);
obj2.e = function(){
    console.log("추가함수");
}
console.log(obj2);

//객체에서 속성 삭제
delete obj2.e;
console.log(obj2);

const arr = new Array();
arr.push({name:"이신영1",age:20,addr:"서울"});
arr.push({name:"이신영2",age:30,addr:"제주"});
console.log(arr);

//함수를 이용한 객체 생성(매개변수로 값을 받아서 객체 생성 후 리턴)
function makeObject(param1,param2,param3){
    const obj = {
        name : param1,
        age : param2,
        addr : param3
    }
    return obj;
}
const obj3 = makeObject("이신영3","40","미국");
console.log(obj3);

//함수를 이용한 객체 생성(생성자 방식)
//java생성자와 마찬가지로 파스칼 표기법 사용
//javascript의 객체가 java의 HashMap이랑 유사해서 중요하다고 강조했던것
//이 과정에서 객체를 깊이 다루진 않을 것
function Student(param1,param2,param3){
    this.name = param1;
    this.age = param2;
    this.addr = param3;
}
const student = new Student("이신영4","50","중국");
console.log(student); 