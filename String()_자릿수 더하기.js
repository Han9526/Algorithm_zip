var n = 123;

var n_arr = String(n).split('');
var sum = 0;
n_arr.forEach(num => {
    sum = sum+parseInt(num);    
});
console.log(n_arr.join('+') +'='+ sum)