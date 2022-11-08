// const user1={
//     name:"deepti",
//     age:21,
//     about:()=>{
//         console.log(this.name,this.age);
//     }
// }
// user1.about(user1

//create functions to create multiple objects

// function create(name,lastname,email,age,city){
//     const user={};
//     user.name=name;
//     user.lastname=lastname;
//     user.email=email;
//     user.age=age;
//     user.city=city;
//     user.about=function(){
//         return `${this.name} is ${this.age} years old.`;
//     };
//     user.is18=function(){
//         return this.age>=18;
//     }
//     return user;
// }
// const user1=create('Pooja','Gupta','poojagupta21@navgurukul.org',19,'Punjab');
// console.log(user1);
// const is18=user1.is18();
// console.log(is18);

const usermethods={
    about :function(){
        return `${this.name} is ${this.age} years old.`; 
    },
    is18:function(){
        return this.age>=18;
    },
    song:function(){
        return 'mehrama';
    }
}
function create(name,lastname,email,age,city){
        const user=Object.create(usermethods);
        user.name=name;
        user.lastname=lastname;
        user.email=email;
        user.age=age;
        user.city=city;
        return user;
}
const user1=create('Pooja','Gupta','poojagupta21@navgurukul.org',19,'Punjab');
const user2=create('Deepti','Chauhan','deeptichauhan20@navgurukul.org',21,'Nodia');
const user3=create('Ranjan','Kumar','ranjankumar20@navgurukul.org',21,'Nodia');
console.log(user2);
console.log(user2.about());
// console.log(user3.song());