function solution(array) {
var arr_asc = array.sort((a,b)=> a-b);
var count_number = {};
// 원소를 순서대로 확인하면서 개수 센다
// 최빈값을 그때그때 기록한다
arr_asc.forEach((number)=>{
    if(count_number[number]){
      count_number[number]++;
    }else{
      count_number[number]=1;
    }
  });
// Object.values << 배열의 key:values values값들만 추출 
var values = Object.values(count_number);
// values들중에 최대값 
var maxCount = Math.max(...values);
// 최대값들 중 중복된값들 찾기
// array.filter(callback(element[, index[, array]])[, thisArg]) 
// 필터링하는것
var filtering = values.filter(a => a === maxCount);

if(filtering.length===1){

    return maxCount;
}
else{
    return -1;
}
}
