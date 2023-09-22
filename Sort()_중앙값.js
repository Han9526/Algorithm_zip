function solution(array) {
    // 오름차순 정렬
    var asc_array = array.sort((a,b)=>a-b);
    // Math함수
    //Math.ceil 올림 
    //Math.floor 내림 
    //Math.round 반올림
    var answer = array[parseInt(array.length/2)];
    return answer;
}
