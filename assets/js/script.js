"use strict";
// console.log("salam");

// alert("salam");


//const PHONE_NUMBER = "45454"

// var name = "Samir";

// let surname = "Qehramanov";

// const address = "Sumqayit"

// let age=22;
// console.log(age);

// if(true){
//      var age=23;
// }
// console.log(age);

// let phoneNumber="1221";

// let name = "Samir";
// let isMarried = true;
// let age=30;
// let address;
// let phone=null;

// console.log(typeof name);
// console.log(typeof isMarried);
// console.log(typeof age);
// console.log(typeof address);
// console.log(typeof phone);

// let num1=10;
// let num2=20;
// let result=num1+num2;
// console.log(result);

// let age=100;
// let surname=null;
// console.log(age/surname);

// alert("2">1);

// alert("" === false);

// alert(null == 0);

// let num1="100";
// let num2=100;
// if(num1 != num2){
//     console.log("true")
// }else{
//     console.log("false");
// }


// let age=20;
// let result = age > 30 ? "Boyukdur" : "Kicikdir";
// console.log(result);

// let surname="caha";
// let result = surname ?? "XXX";
// console.log(result);

// let dayOfWeek= "Sunday";

// switch (dayOfWeek) {
//     case "Sumday":
//         console.log("This is a Sunday");
//         break;
//         case "Monday":
//             console.log("This is a Monday");
//             break;
//             case "Oneday":
//                 console.log("This is a Oneday");
//                 break;
//                 case "NemDay":
//                     console.log("This is a NemDay");
//                     break;

//     default:
//         console.log("not found")
//         break;
// }

// let user ={
//     name:"Surac",
//     surname : "Ismayilov",
//     age : 23
// }

// console.log(user.name+ " " + user.surname);

// let result= `${user.name} - ${user.surname}`;
// console.log(result);


// let datas = ["Surac" ,"Ismayil","66",100,true,50];

// console.log(datas[datas.length-1]);

// for (let i = 0; i < datas.length; i++) {
    // console.log(datas[i]);
    // if(datas[i]==100){
    //     console.log(i);
    // }
// }

// datas.forEach((element,i) => {
//     console.log(element+ "/"+i);
    
// });

// for (let i = 0; i < datas.length; i++) {
 
//     if(!isNaN(datas[i]) && typeof(datas[i]) != "boolean" && typeof(datas[i]) != "string"){
//         let result = datas[i] +30;
//         console.log(result);
//     }
// }


// let name = "Surac";
// name+=" Ismayilov";
// console.log(name);

let stu1 ={
    name:"Surac",
    surname : "Ismayilov"
}

let stu2 ={
    name:"Perin",
    surname : "Mirzayev"
}

let stu3 ={
    name:"Fidan",
    surname : "Bashirova"
}

let stu4 ={
    name:"Kubra",
    surname : "Mammedova"
}

let students = [stu1 , stu2, stu3, stu4];

// students.forEach(student => {
//     let fullName= `${student.name} ${student.surname}`;

//     let h1=document.createElement("h1");
//     h1.innerText=fullName;
//     document.querySelector(".test").append(h1)

//     // console.log(fullName)
// });

document.querySelector(".btn").addEventListener("click", function(){
    students.forEach(student => {
        let fullName= `${student.name} ${student.surname}`;
    
        let h1=document.createElement("h1");
        h1.innerText=fullName;
        document.querySelector(".test").append(h1)
    });

    this.style.display= "none";

})

// document.querySelector(".test").innerHTML = "Salam";












