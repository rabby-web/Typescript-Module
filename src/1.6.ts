// Function
// 1. normal function
// 2. arrow function

function add(n1 : number, n2: number = 10): number{
    return n1 + n2
}
add(1,3)

const addArrow = (num1 : number, num2 : number): number => num1 + num2

// object --> function --> method

const poorUser = {
    name: "Rabby",
    balance: 0,
    addBalance(balance: number): string{
        return `My Balance is : ${this.balance + balance}`;
    }
}

const arr : number[] = [4, 6, 8]
const newArray : number[] = arr.map((element : number): number => element * element) 