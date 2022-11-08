// const samplePromise = () => Promise.resolve('A');

// function f() {
//     samplePromise().then(result => console.log(result))         
//     console.log('B')                                            
// }

// async function g() {
//     console.log(await samplePromise());                        
//     console.log('B')                                           

// }
// f()
// g()



function myF() {
    return new Promise ((resolve, reject) => {
        resolve("promise resolved")
    })
}
async function asyncFunction() {
    console.log("first consol")
    const result = await myF()
    console.log(result)
}
asyncFunction()