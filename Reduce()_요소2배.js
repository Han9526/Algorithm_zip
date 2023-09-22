// 배열 요소 2배
// array.reduce((누적된값,현재값)=>{return 계산식},초기값)
// numbers 배열의 요소들을 answer배열에 배열의요소들을 push해서 정리
function solution(numbers) {
    return numbers.reduce((answer, cur) => {
        answer.push(cur * 2);
        return answer;
    }, []);
}
// 스프레드 연산자활용 ...array 활용해 코드 간단히
function solution(numbers) {
    return numbers.reduce((answer,cur) => [...answer, cur * 2], []);
}