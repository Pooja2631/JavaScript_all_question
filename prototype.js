// function hello(){
//     console.log("Hello World");
// } 
// if(hello.prototype){
//     console.log('prototype is present');
// }else{
//     console.log('prototype is not present');
// }


function create(name,lastname,email,age,city){
    const user=Object.create(create.prototype);
    user.name=name;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.city=city;
    return user;
}

create.prototype.about=function(){
    return`${this.name} is ${this.age} years old.`;
};
create.prototype.is18=function(){
    return this.age>=18;
};
create.prototype.song=function(){
    return 'meharma';
};
const user1=create('Pooja','Gupta','poojagupta21@navgurukul.org',19,'Punjab');
const user2=create('Deepti','Chauhan','deeptichauhan20@navgurukul.org',21,'Nodia');
const user3=create('Ranjan','Kumar','ranjankumar20@navgurukul.org',21,'Nodia');
console.log(user2);
console.log(user2.about());
// console.log(user3.song());