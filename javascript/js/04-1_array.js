const arr1 = ["hi","hello",100,true,[1,2,3,4]];

//foreach문 : item->반복하면서 접근하는 배열의 각 요소
//            index->인덱스 번호
//매개변수 순서만 유지하면 변수명 상관없음/필요없는경우 index는 선언하지않아도 무방함
//(이건 수업할때 쓸것★)
arr1.forEach(function(item,index){//1번 변수가 값,2번 매개변수가 index
    console.log(index,item);
});

//map : forEach와 마찬가지로 배열 순회 + 리턴하는값을 다시 배열로 생성
const arr2 = arr1.map(function(item,index){
    const str = `${index}번째 아이템은 ${item}`;
    console.log(str);
    return str;
});
console.log(arr2);

//filter : 배열에 특정 조건에 만족하는 데이터만 필터링할때
const arr3 = [1,2,3,4,5,6];
const arr4 = arr3.filter(function(item,index){
    return item>3;
});
console.log(arr4);

//reduce : 배열의 값을 이용해서 연산하여 특정값을 도출할때
const sum = arr3.reduce(function(acc,curr,index){
    //최초 1회차 acc,currr에는 첫번째 수, 두번째 수
    //return값이 acc에 대입
    //마지막 return값이 최종 리턴값
    console.log(acc,curr,index);
    return acc+curr;
});
console.log(sum);