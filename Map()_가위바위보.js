// 바위 = 0 가위 = 2 보 = 10
// 나의풀이 
function solution(rsp) {
    var arrayrsp = [...rsp];
    var answerhand = [];
    arrayrsp.map((hand) => {
        if (hand == "2") {
            answerhand.push("0");
        }
        else if (hand == "0") {
            answerhand.push("5");
        }
        else if (hand == "5") {
            answerhand.push("2");
        }
    });
    var answer = answerhand.join('');
    return answer;
}
// 다른사람의 풀이 
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}