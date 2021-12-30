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


// let employee={
//         name1:"hjdf",designation:"JSD",salary:"4LPA"
//     }
// let{name1,...b}=employee
// console.log(name1,b)


//Functions

//Anonymous function
// let demo=function(x,y){
//     return x+y
// }
// console.log(demo(1,2))
// Anonymous 2
// (function(){
//     console.log("HELLO")
// })()

//Arrow function
// let demo=(x,y) => {
//     return x*y
// }
// console.log(demo(2,3))

//setTimeout
// setTimeout(function(){
//     console.log("HELLO")
// },5000)

//for
// let employees=["abc","cde","efg","ghi"]
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i])
// }
// for(let i in employees){
//     console.log(i,",",employees[i])
// }
// for(let i of employees){
//     console.log(i,",",employees.indexOf(i))
// }
// let a=employees.forEach(function(element){
//     return element
// })
// console.log(a)

// let a=employees.forEach(function(element,index){
//     console.log(element+"  "+index)
// })
//map
// let a=employees.map(function(element,index){
//     return element+"K"+index
// })
// console.log(a)
// console.log(employees)

// let a=employees.map((element,index)=>{
//     return element+"K"+index
// })
// console.log(employees)
