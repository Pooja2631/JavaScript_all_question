function myFunc(){
    function hello(){
        console.log("hello world")
    }
    return "world";
}
const a=myFunc();
console.log(a())