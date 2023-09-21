//     기약분수 만들기
function gcd(a, b) {
    return a % b === 0 ? b : gcd(b, a % b)
}
    var denom=denom1*denom2;
    var numer=denom1*numer2 + denom2*numer1;


    var gcd_answer = gcd(numer,denom);
    var answer = [numer/gcd_answer,denom/gcd_answer];