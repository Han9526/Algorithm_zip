var my_string = "helloss  ssass";


// var answer = [...my_string].map((de)=>{
//     if(de === letter){
//         return null;
//     }
//     return de;
// }).join("");

//String.split(구분자) 문자열>>배열

// const answer = my_string.split(letter,3).join('');
// console.log(answer);
// var my_string = "helloss  ssass";
// var answer = [];
// var mo = ["a","e","i","o","u"];
// var ans =[...my_string].reduce((nu,cur)=>{
//     if(!mo.includes(cur)){
//         nu.push(cur);
//     }return nu;
// } 
// ,[]).join('');
// console.log(ans);


// replace() 메서드는 문자열에서 특정 패턴(문자열 또는 정규 표현식)을 찾아 
// 다른 문자열로 대체하는 메서드입니다.
//  이 메서드를 사용하면 문자열의 일부분을 변경하거나 삭제할 수 있습니다.
// str.replace(찾을패턴,찾은패턴을 대처할 위치나함수)
// 정규표현식<< 따로공부해보자
console.log(my_string.replace(/[aeiou]/g, ''));