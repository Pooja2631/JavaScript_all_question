// iterables
// jispe hum for of loop sakein string ,array are iterables

// const name="I am coder";
// for (let a of name){
//     console.log(a)
// }

// const name=['deepti','ranjan','sandeep'];
// for (let a of name){
//     console.log(a)
// }


// array like object
// jinke pas length property hoti hai aur jiko hum index se access kar sakte hai 
// example :- String

// const name ="deepti";
// console.log(name.length);
// console.log(name[2])


// Sets (it is iterable) 
// store data sets also have 
// its own methods no index-based access order is not guaranteed unique items only (no duplicates allowed)

// const num=new Set([1,2,3,3]);
// console.log(num)

// const num=new Set();
// num.add('deepti');
// num.add('pooja');
// num.add(['deepti',"ranjan"]);
// num.add(['deepti','ranjan']);
// console.log(num)
// if (num.has('deepti')){
//     console.log('deepti is there')
// }else{
//     console.log('deepti is  not there')
// }

const a=[1,2,3,4,2,4,5,6];
const unique=new Set(a);
let length=0;
for (let element of unique){
    length++
}
console.log(length)