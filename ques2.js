/*
Personal Message: Store a person's name in a variable and print a message to that person.
Your message should be simple, such as, "Hello Shoaib, would you like to learn python today?"
*/
// Thsi is my first assignment. //
var myName = "Shoaib";
console.log("Hey ".concat(myName, ", would you like to learn some python today?"));
// variables: let and constants are the variables, let values are changable and constants values are the constants.
// "var" is the variable, Use let and constants rather than use "var".
/* variable means anything that can vary.*/
var newNumber = 3;
var age = 30;
var bol = true;
console.log("get ".concat(newNumber, ", integer or number value"));
console.log("get ".concat(bol, ", boolean value"));
console.log(typeof bol);
var n1 = 5;
var n2 = 5;
console.log(n1 + n2);
var str1 = "1";
var str2 = "2";
console.log(str1 + str2);
//plain function
function sum(n1, n2) {
    n1 + n2;
}
// arrow function
var sum;
(function (n1, n2) {
    n1 + n2;
    return "";
});
