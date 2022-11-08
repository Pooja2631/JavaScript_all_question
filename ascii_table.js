// const num=[5,9,20,25,30]
// num.sort();
// console.log(num)

// const names=["ankit","pooja","deepti","ranjan","neha"]
// names.sort();
// console.log(names);

// const num=[2,4,20,26,31];
// num.sort((a,b)=>{
//     return a-b;
// })
// console.log(num)

// find method

// const main=["deepti","pooja","ankit"];
// function isLength(string){
//     return string.length===6;
// }
// const ans =main.find(isLength)
// console.log(ans)

// const users=[
//     {userId:26,name:"deepti"},
//     {userId:4,name:"ranjan"},
//     {userId:12,name:"vishal"},
//     {userId:19,name:"ankit"},
// ];
// const myName=users.find((user)=>user.userId===26);
// console.log(myName)

// every method

// const num=[2,4,6,8,11];
// const ans=num.every((num)=>num%2===0);
// console.log(ans)


// some method

// const num=[3,5,6,9,11];
// const ans=num.some((num)=>num%2===0);
// console.log(ans)

// fill method 
// value,start,end

const myArray=[1,2,3,4,5,6,7,8]
myArray.fill(0,2,5);
console.log(myArray)