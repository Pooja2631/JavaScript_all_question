// .call
// function a(hobby,song){
//     console.log(this.name,this.age,hobby,song)
// }
// const user1={
//     name:'pooja',
//     age:19,
// }
// const user2={
//     name:'deepti',
//     age:21,
// }
// a.call(user1,"write store","jaani")


// .apply
// function a(hobby,song){
//     console.log(this.name,this.age,hobby,song)
// }
// const user1={
//     name:'pooja',
//     age:19,
// }
// const user2={
//     name:'deepti',
//     age:21,
// }
// a.apply(user1,["write store","jaani"])

// .bind

function a(hobby,song){
    console.log(this.name,this.age,hobby,song)
}
const user1={
    name:'pooja',
    age:19,
}
const user2={
    name:'deepti',
    age:21,
}
// a.apply(user1,["write store","jaani"])
const fun=a.bind(user1,"cooking","lost love");
fun();