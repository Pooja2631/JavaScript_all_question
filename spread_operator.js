// const a=[1,2,3];
// const b=[5,6,7];
// // const newArray=[...a,...b,26];
// const newArray=[..."Deepti"]
// console.log(newArray)


//spread operator in objects
const obj1={
    key1:"value1",
    key2:"value2",
};
const obj2={
    key1:"valueUnique",
    key3:"value3",
    key4:"value4",
};
// const newObject={...obj2,...obj1};
// const newObject={...obj2,...obj1,key26:"value31"}
const newObject={..."Deepti"}
console.log(newObject)