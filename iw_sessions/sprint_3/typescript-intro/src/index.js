// boolean
var isDone = false;
isDone = true;
// Number
var price = 10;
// String
var first_name = "Masai";
var last_name = "School";
var full_name = "".concat(first_name, "_").concat(last_name); // inferenc check from the value
console.log(full_name);
// Array
var arr1 = [1, 2, 3, 4];
var arrayOfString = ['masai', "school"];
// interface person {      it isproviding a shape
//     first_name:string,
//     last_name:string,
//     age?:number
// }
var masai = {
    first_name: "Masai",
    last_name: "School",
    age: 3
};
// Tuples -Arrays
//  1. The number of element in the tuple is fixed
// 2. the type of element are know in advance.
// tuple is order is matter we can not change order
var tuple;
tuple = ['masi', 2, true];
var city = 'Patna';
// Enums -> a group of named constants
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["GREEN"] = "GREEN";
    Color["BLUE"] = "BLUE";
})(Color || (Color = {}));
var greenColor = Color.GREEN;
console.log(greenColor);
// others
var u;
var n;
var a;
// Functions 
function sum(a, b) {
    return a + b;
}
var add = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(sum(2, 2));
console.log(add(2));
var printName = function (_a) {
    //    return `$(first_name)_$(last_name)`
    // there is anothe case where there is not returning any thing
    var first_name = _a.first_name, last_name = _a.last_name;
    console.log("$(first_name)_$(last_name)");
};
var printName1 = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name;
    return "$(first_name)_$(last_name)";
};
var person1 = {
    first_name: "masai",
    last_name: "school",
    age: 3
};
printName(person1);
// union 
var output;
output = ["masai", 3];
//intersection
// type12=type1 & type2
var coder = {
    first_name: "Masai",
    "last_name": "school",
    age: 3,
    skills: "coding"
};
