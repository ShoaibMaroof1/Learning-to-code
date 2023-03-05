/* 
Personal Message: Store a person's name in a variable and print a message to that person. 
Your message should be simple, such as, "Hello Shoaib, would you like to learn python today?" 
*/

// Thsi is my first assignment. //

let myName = "Shoaib";
console.log(`Hey ${myName}, would you like to learn some python today?`);

// variables: let and constants are the variables, let values are changable and constants values are the constants.
// "var" is the variable, Use let and constants rather than use "var".
/* variable means anything that can vary.*/
let newNumber: number = 3;
let age = 30;
let bol: boolean = true;
console.log(`get ${newNumber}, integer or number value`);
console.log(`get ${bol}, boolean value`);
console.log(typeof bol);
console.log(age);
let n1 = 5;
let n2 = 5;
console.log(n1 + n2);
let str1 = "1";
let str2 = "2";
console.log(str1 + str2);
//plain function
function add(n1: number, n2: number) {
n1 + n2;
}
// arrow function
const sum(n1: number, n2: number): string => {
    n1 + n2;
    return ""

}


