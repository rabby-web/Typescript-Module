{
    // Type Alias

        type Student = {
        name: string;
        age: number;
        gender: string;
        contractNo?: string;
        address: string
        }

    const student1: Student ={
        name: "Rabby",
        age: 50,
        gender: 'male',
        contractNo: '017000000000',
        address: 'ctg'
    }
    const student2: Student ={
        name: "Rakib",
        age: 50,
        gender: 'male',
        address: 'dk'
    }

    type UserName = string;
    type IsAdmin = boolean;
    const userName : UserName = "Person"
    const isAdmin : IsAdmin = true

    type Add = (n1: number, n2:number) => number
    const add: Add =(n1, n2)=>n1 + n2



}