var arr_asc = [-1, 2, 3, -1, -2, 3];
var count_number = {}; // 초기 누적 값을 빈 객체로 설정

// arr_asc.reduce((누적값,현재값)=>{},초기값)
arr_asc.forEach((number)=>{
  if(count_number[number]){
    count_number[number]++;
  }else{
    count_number[number]=1;
  }
});
var values = Object.values(count_number);
var maxCount = Math.max(...values);
var filtering = values.filter(max => max === maxCount);

console.log(filtering);