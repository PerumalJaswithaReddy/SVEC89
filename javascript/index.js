// var a="alpha";
// let b="beta";
// const c=15;
// if(c>10){
//     var a="delta";
//     let b="abc";
//     const c=5;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

//Objects

// let employee={
//     name:"hjdf",designation:"JSD",salary:"4LPA"
// }
// console.log(employee)

//Arrays
// var employee=["a","b","c"]
// console.log(employee[1]) 

//Alerts

// alert("NOTIFICATION")
// let number1=prompt("Enter username");
// console.log(number1)
// confirm("Exit")

// Console statements
// console.log("ABCDE")
// console.info("12345")
// console.warn("Warning")
// console.error("Error")

//Spread operator

// let m=[3,2,4,2,6,6,543,1,4]
// let i=[54,2,12,45,3,12,56,45,12]
// let t=[32,76,...m,...i]
// let f=[2,4,i]
// console.log(f)
// console.log(t)

//Rest parameter
// function addition(x,y,...remainData){
//     console.log(x,y)
//     console.log(remainData)
// }
// console.log(addition(3,2,5,4,2,5,2))

// Destructuring of array

// let a=["df","sd","tf","yu"]
// let [b,c,...d]=a
// console.log(b,c,d)


let employee={
        name1:"hjdf",designation:"JSD",salary:"4LPA"
    }
let{name1,...b}=employee
console.log(name1,b)




