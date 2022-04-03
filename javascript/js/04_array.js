//배열을 선언하는 방법
const arr1 = [1,2,3];//길이가 3인 배열선언(값은 순서대로 대입)
console.log(arr1);
console.log(arr1[1]);
arr1[1] = 100;
console.log(arr1);
const arr2 = new Array();
console.log(arr2);
arr2[0] = 100;
console.log(arr2);
arr2[3] = 100;
console.log(arr2);
console.log(arr2[0],arr2[1]);
const arr3 = new Array(1,2,3);
console.log(arr3);
for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}

//자바스크립트 배열은 들어가는 값의 자료형 무관
const arr4 = ["이신영",100,true,[1,2,3]];
for(let i=0;i<arr4.length;i++){
    console.log(arr4[i],`자료형 : ${typeof arr4[i]}`);
}

const arr = [1,2,3,4];
console.log(arr.indexOf(3));//매개변수로 입력한 값이 배열의 몇번째 위치하는지 리턴
console.log(arr.indexOf(5));//없는 값을 조회하는 경우 -1 리턴

const fruits1 = ["사과","바나나","딸기"];//길이3
const fruits2 = ["복숭아","파인애플","수박"];//길이3
const testArr1 = [100,25,10,50];//길이4
const testArr2 = [true,false,[1,3,4,9]];//길이3

const data1 = fruits1.concat(fruits1,fruits2,testArr2);//배열을 하나로 합쳐서 리턴
console.log(data1);
console.log(fruits1,fruits2,testArr1,testArr2);//concat으로 배열을 합쳐도 원본배열은 유지

const data2 = fruits1.join(",");//배열내부의 데이터를 매개변수를 기준으로 구분하여 하나의 문자열로 리턴
console.log(data2);
const data3 = fruits1.join(" ");//join("구분자")>구분자를 기준으로 배열을 나눠서 문자열로 만듬 
console.log(data3);
console.log(fruits1.join());//구분자를 생략하면 기본값인 ,가 들어감
console.log(fruits1.join(""));

console.log(testArr1);
//sort()메소드에 매개변수를 넣지않으면 정렬기준은 유니코드순(즉 문자열로 정렬한것=사전 정렬하듯이)
testArr1.sort();//자동정렬 -> 정렬된 데이터를 리턴x => 원본배열이 정렬되는 방식(원본데이터를 수정함★)
console.log(testArr1);

//정렬은 DB에서 해서 가지고 올거라서 js에서 깊게 안하는것!!
function sortASC(a,b){
    return a-b;
}
function sortDESC(a,b){
    return b-a;
}
const testArr3 = [1,3,2,7,10,9,8,6,4,5];
testArr3.sort(sortASC);
console.log(testArr3);
testArr3.sort(sortDESC);
console.log(testArr3);

testArr3.reverse();//배열순서반전 -> sort와 마찬가지로 원본배열의 순서를 반전시킴(원본데이터 수정)
console.log(testArr3);

//push,pop
const testArr4 = [1,2,"Hello",true];
console.log(testArr4);
//push 배열 가장 뒤에 값 추가(제일 자주 사용)
testArr4.push(100);
console.log(testArr4);
testArr4.push(200);
console.log(testArr4);
//pop 배열 가장 뒤의 값 제거
testArr4.pop();

//unshift,shift
//unshift : 배열 가장 앞에 값 추가
testArr4.unshift("안녕");
console.log(testArr4);
//shift : 배열 가장 앞의 값 제거
testArr4.shift();
console.log(testArr4);

//slice
const testArr5 = testArr4.slice(1,3);//testArr4배열의 1번인덱스부터 3번인덱스 전까지 복사해서(원본데이터 영향x) 배열로 리턴
console.log(testArr5);
const testArr6 = testArr4.slice(1);//testArr4배열의 1번인덱스부터 끝까지 복사해서 배열로 리턴
console.log(testArr6);

//splice
const testArr7 = testArr4.splice(2,2);//testArr4배열의 2번인덱스부터 2개 잘라내어 리턴->원본데이터에서 중간 배열 삭제할때 많이사용(원본데이터 영향o)
console.log(testArr7);
//매개변수가 3개인 경우 앞의 2개는 잘라내는 조건/동일3번째 변수가 그 자리에 삽입
const testArr8 = testArr4.splice(1,0,"test");