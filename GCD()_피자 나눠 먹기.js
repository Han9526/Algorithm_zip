<<<<<<< HEAD
// 최대공약수 유클리드공제법
function gcd(b) {
    return 6 % b === 0 ? b : gcd(b, 6 % b)
}

=======
// 최대공약수 유클리드공제법
function gcd(b) {
    return 6 % b === 0 ? b : gcd(b, 6 % b)
}

>>>>>>> 546273e0eebca64be31f465fb6fb491607c319a5
var answer = (6/gcd(n))*(n/gcd(n));