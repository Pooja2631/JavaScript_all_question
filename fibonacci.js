let input=require("readline-sync")
let num = input.questionInt("enter num1....")
let x=0
let y=1
let i=0
while (i<=num){
    console.log(i)
    x=y
    y=i
    i=x+y
}