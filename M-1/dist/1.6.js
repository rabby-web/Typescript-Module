"use strict";
// Function
// 1. normal function
// 2. arrow function
function add(n1, n2 = 10) {
    return n1 + n2;
}
add(1, 3);
const addArrow = (num1, num2) => num1 + num2;
// object --> function --> method
const poorUser = {
    name: "Rabby",
    balance: 0,
    addBalance(balance) {
        return `My Balance is : ${this.balance + balance}`;
    }
};
const arr = [4, 6, 8];
const newArray = arr.map((element) => element * element);
