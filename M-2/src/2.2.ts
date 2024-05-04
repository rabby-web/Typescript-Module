{
    // interface
    type User1 = {
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number 
    }

    type UserWriteRole = User1 & { role : string}

    interface UserWriteRole2 extends User2 {
        role: string
    }

    const user1: UserWriteRole2 = {
        name: 'Person',
        age: 100,
        role: "manager"
    }
    

    //  js ==> object, array, object, function
    type rollNumber = number;

    type Roll = number[]

    interface Roll2 {
        [index: number] : number
    }

    const rollNumber : Roll2 = [1,2,3,4]
   

    // type Add1 = (num1: number, num2: number) => number


    // interface Add1 {
    //     (num1: number, num2: number) : number
    // }
    
    
    // function add : Add1 = (num1, num2) => num1 + num2
   

}
