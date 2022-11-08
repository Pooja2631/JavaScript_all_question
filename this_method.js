// function inside object

function a(){
    console.log(`person name is ${this.name} and age is ${this.age}`)
}
const person1 = {
    name:"pooja",
    age:19,
    about:a
}
const person2 = {
    name:"deepti",
    age:21,
    about:a 
}
const person3 = {
    name:"vishal",
    age:18,
    about:a
}
person1.about();
person2.about();
person3.about();