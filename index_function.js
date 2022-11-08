function main(array,target){
    for (let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray=[1,2,3,4,5,6]
const a=main(myArray,6);
console.log(a)