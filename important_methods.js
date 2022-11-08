// const numbers=[4,5,2,6];
// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`)
// }
// // for (let i=0;i<numbers.length;i++){
// //     myFunc(numbers[i],i);
// // }
// numbers.forEach(myFunc);

// const numbers=[4,2,5,8]
// numbers.forEach(function(number){
//     console.log(number*2)
// })

// const users=[
//     {name:"pooja",age:19},
//     {name:"deepti",age:21},
//     {name:"neha",age:20},
// ]
// users.forEach((user,index)=>{
//     console.log(user.name,index);
// })


// map method

// const numbers=[1,2,3,4,5]
// const square=function(number){
//     return number*number;
// }
// const squareNumber=numbers.map(square)
// console.log(squareNumber)

// const num=[1,2,3,4,5];
// const squareNumber=num.map((num,index)=>{
//     return `index:${index},${num*num}`;
// });
// console.log(squareNumber)


// filter method
// const numbers=[1,2,3,4,6,8]
// const isEven=function(num){
//     return num%2==0;
// }
// const evenNumbers=numbers.filter(isEven);
// console.log(evenNumbers)

// const num=[1,2,3,4,5,6,8]
// const evenNumbers=num.filter((num)=>{
//     return num%2==0;
// });
// console.log(evenNumbers)


// reduce methods

// const num=[1,2,3,4,5]
// const sum=num.reduce((a,b)=>{
//     return a+b;
// });
// console.log(sum)

//Maps
// map is an iterable 
// store data inordered fashion store key value pair (like object)
// unique value is not allowed 

// different between maps and objects
// objects can only have string or symbol as key 

// in maps you can use anything as key like array ,number,string


// key value pair
const person=new Map();
person.set("name","pooja");
person.set("age",19);
// console.log(person);
// console.log(person.get('name'));
for (let key of person.values()){
    console.log(key)
}