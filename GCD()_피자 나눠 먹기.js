// 최대공약수 유클리드공제법
function gcd(b) {
    return 6 % b === 0 ? b : gcd(b, 6 % b)
}

var answer = (6/gcd(n))*(n/gcd(n));