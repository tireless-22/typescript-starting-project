"use strict";
console.log("you code goes here only...");
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(typeof n1);
        return n1 + n2;
    }
}
// tsc -w
// to compile the ts to js continuouly
// lite-server for relaoding that in the web
// the key difference is javascript uses "dynamic types"(resolved at runtime)
// typescript uses static types (set during development)
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const result = add(number1, number2, printResult);
console.log(result);
// optional parameters
function sum(n1, n2) {
    if (n2) {
        return n1 + n2;
    }
    else {
        return n1;
    }
}
console.log(sum(10));
console.log(sum(10, 20));
//interface example
function interfaceExample(labelObject) {
    console.log(labelObject.label);
}
let labelObjectExample = { "id": 5, "label": "this is label object" };
interfaceExample(labelObjectExample);
// classes in ts
class Employee {
    constructor(name) {
        this.EmployeeName = name;
    }
    printName() {
        console.log(this.EmployeeName);
        console.log("this is the class object");
    }
}
let e1 = new Employee("test name");
e1.printName();
// arrays
let arrayData = [1, 2, 3, 4, 5];
console.log(arrayData);
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("hello");
});
