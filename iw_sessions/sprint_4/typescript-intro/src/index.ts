// boolean
let isDone :boolean =false;
isDone = true

// Number

let price:number=10;

// String

let first_name:string="Masai"
let last_name:string="School";

let full_name=`${first_name}_${last_name}`;  // inferenc check from the value

console.log(full_name)

// Array

let arr1:number[]=[1,2,3,4];
let arrayOfString:string[]=['masai',"school"]

// Object
type softwareDeveloper ={
    skills:string
}
//  Primitive type in TypeScript -> number string, boolean, null, undefined,symbol and bit-int

type person = {first_name:string; last_name:string;age:number}; // crating a blue print for the object

// interface person {      it isproviding a shape
//     first_name:string,
//     last_name:string,
//     age?:number
// }
const masai:person ={
    first_name:"Masai",
    last_name:"School",
    age:3
}

// Tuples -Arrays
//  1. The number of element in the tuple is fixed
// 2. the type of element are know in advance.
// tuple is order is matter we can not change order
let tuple:[string,number,boolean]
tuple=['masi',2,true]

let city:string='Patna'

// Enums -> a group of named constants

enum Color {
    RED="RED",
    GREEN="GREEN",
    BLUE="BLUE"
}
let greenColor=Color.GREEN
console.log(greenColor)

// others
let u:undefined;
let n:null;
let a:any

// Functions 

function sum(a:number, b:number):number{
    return a+b
}

const add = (a:number,b:number=10):number =>{
   return a+b
}

console.log(sum(2,2))
console.log(add(2))

const printName=({first_name,last_name}:person):void=>{
//    return `$(first_name)_$(last_name)`
   // there is anothe case where there is not returning any thing

   console.log(`$(first_name)_$(last_name)`)
}

const printName1=({first_name,last_name}:person):string=>{
    return `$(first_name)_$(last_name)`
    
}

let person1:person={
   first_name:"masai",
   last_name:"school",
   age:3
}

printName(person1)

// union 

let output:(number | string)[];
output =["masai", 3]
//intersection
// type12=type1 & type2

let coder: (person & softwareDeveloper) = {
   first_name:"Masai",
   "last_name":"school",
   age:3,
   skills:"coding"
}
