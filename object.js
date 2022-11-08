let arr1=[1,2,3,4,2,3,2,4,6]
let a={}
let b=[]
arr1.forEach((el)=>{
    if (a[el]){
        a[el]=a[el]+1;
    }else{
        a[el]=1;
    }
})
for (const property in a){
    if (a[property]>1){
        b.push(`${property}: ${a[property]}`)
    }
}
console.log(b)  