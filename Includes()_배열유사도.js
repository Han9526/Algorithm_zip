var s1 = ["a", "b", "c"];
var s2 = ["com", "b", "d", "p", "c"];

var filter = s2.filter((a) => s1.includes(a));

console.log(filter);