function solution(array) {
var count_number = {};
/* num에는 array[0,7,7] 이면
  count_number={
    7(array[0]) : 1,
    7(array[1]): 1 ->  7(array[2]) : 2} 
    이런식으로 저장된다
*/
array.forEach((num)=>{
    if(count_number[num]){
      count_number[num]++;
    }else{
      count_number[num]=1;
    }
  });

// Object.values << 배열의 key:values values값들만 추출 
var values = Object.values(count_number);
// values들중에 최대값 
var maxCount = Math.max(...values);
// Object.keys << 배열의 key 값들만 추출
// filter <<필터링     count_number[key]의 값 === 빈도수 가장 많은 값
var maxint = Object.keys(count_number).filter(key => count_number[key] === maxCount);

if (maxint.length === 1) {
  // maxint[0] 만 할경우 "최빈값" 배열의 형식으로 나오므로 parseInt를 씌워 정수로 바꿔줬다.
  return parseInt(maxint[0]);
} else {
  return -1; 
}
}
