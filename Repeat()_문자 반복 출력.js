// String.Repeat(count)
var my_string = "hello";
var n = 3;

// var arr_str = [...my_string];
// var add_arr =arr_str.reduce((arr,cur)=>{
// for(i=0;i<n;i++){
//     arr.push(cur);
// }
// return arr;
// },[])

var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);