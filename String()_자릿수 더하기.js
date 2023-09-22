<<<<<<< HEAD
var n = 123;

var n_arr = String(n).split('');
var sum = 0;
n_arr.forEach(num => {
    sum = sum+parseInt(num);    
});
=======
var n = 123;

var n_arr = String(n).split('');
var sum = 0;
n_arr.forEach(num => {
    sum = sum+parseInt(num);    
});
>>>>>>> 546273e0eebca64be31f465fb6fb491607c319a5
console.log(n_arr.join('+') +'='+ sum)