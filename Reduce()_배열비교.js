<<<<<<< HEAD
var array = [149, 180, 192, 170];
var height = 190;
var desc_array = array.sort((a,b)=>b-a);
var answer = desc_array.reduce((nu,cur)=>{
    if(cur>height){
        nu.push(cur);
    }
    return nu;
},[]);

=======
var array = [149, 180, 192, 170];
var height = 190;
var desc_array = array.sort((a,b)=>b-a);
var answer = desc_array.reduce((nu,cur)=>{
    if(cur>height){
        nu.push(cur);
    }
    return nu;
},[]);

>>>>>>> 546273e0eebca64be31f465fb6fb491607c319a5
console.log(answer);