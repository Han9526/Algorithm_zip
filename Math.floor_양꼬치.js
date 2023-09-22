// ~~,Math.floor 둘다 소수점 아래 버리는것인데 Math.floor가 가독성,유연성으로 굳
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}