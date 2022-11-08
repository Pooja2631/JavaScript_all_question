const person={
    name:"Deepti",
    age:21,
    'person hobbies':["reading","listening","write"]
}
console.log(typeof(Object.keys(person)))
const val=Array.isArray((Object.keys(person)))
console.log(val)