//1. var - 변수(요즘엔 잘 안씀)
var name1;
console.log(name1);
name1 = "이신영";
console.log(name1);
var age1 = 20;
console.log(age1);

//2. let - let은 범위를 지정해서 사용할 수 있기 때문에 범위를 벗어나도 사용가능한 var를 대체하게 된 것
let name2 = "이신영2";
let age2 = 30;
console.log(name2, age2);


//3. const - 많이 쓰임(불변 변수 선언 but 한번값 할당하면 변경불가)
const name3 = "이신영3";
const age3 = 20;
console.log(name3,age3);
{
    const test3 = "test3";
    console.log(test3);
}
name3 = 200;
console.log(name3);