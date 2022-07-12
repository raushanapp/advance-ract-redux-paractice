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

//  Primitive type in TypeScript -> number string, boolean, null, undefined,symbol and bit-int

// type person = {first_name:string; last_name:string;age:number}; // crating a blue print for the object

interface person {     // it isproviding a shape
    first_name:string,
    last_name:string,
    age:number
}
const masai:person ={
    first_name:"Masai",
    last_name:"School",
    age:3
}

