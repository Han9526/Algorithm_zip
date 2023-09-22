<<<<<<< HEAD
// 최소직사각형 찾기
function solution(sizes) {
    // 내림차순 배열을 생성
    var sizes_desc = sizes.map(index => (index[0] > index[1] ? [index[0], index[1]] : [index[1], index[0]]));
    //  최댓값 찾기
    var firstMax = Math.max(...sizes_desc.map(f_index => f_index[0]));
    var secMax = Math.max(...sizes_desc.map(s_index => s_index[1]));
    var maxsizes = firstMax * secMax;
=======
// 최소직사각형 찾기
function solution(sizes) {
    // 내림차순 배열을 생성
    var sizes_desc = sizes.map(index => (index[0] > index[1] ? [index[0], index[1]] : [index[1], index[0]]));
    //  최댓값 찾기
    var firstMax = Math.max(...sizes_desc.map(f_index => f_index[0]));
    var secMax = Math.max(...sizes_desc.map(s_index => s_index[1]));
    var maxsizes = firstMax * secMax;
>>>>>>> 546273e0eebca64be31f465fb6fb491607c319a5
    };