// function add(a,b){
//     if(typeof b==="undefined"){
//         b=2;
//     }
//     return a+b;
// }
// const ans=add(4);
// console.log(ans)


function add(a,b=2){
    return a+b;
}
const ans=add(3)
console.log(ans)