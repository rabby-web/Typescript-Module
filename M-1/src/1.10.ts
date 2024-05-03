{
    // union types 
    type FrontendDev = 'JRDev' | "MidDev"
    const newDeveloper : FrontendDev = "JRDev" 

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+"
    }
    const user1: User ={
        name: 'person',
        email: "ab@gmail.com",
        gender: "male",
        bloodGroup: "A+"
    }

    // intersection type
   type FDev = {
    skills: string[];
    designation1: 'Fronted Developer'
   }

   type BDev = {
    skills: string[];
    designation1: 'Backend Developer'
   }

//    type FullStackDeveloper = FDev & BDev
//    const fullstackDeveloper : FullStackDeveloper = {
//     skills: ["HTML", "CSS"],
//     designation1: 'Fronted Developer',
//     designation1: 'Backend Developer'
//    }


}