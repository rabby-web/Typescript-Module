{
    // generic type
    // type GenericArray = Array<boolean>
    type GenericArray<T> = Array<T>


    // const rollNumber : number[] = [1, 2, 3];
    const rollNumber : Array<number> = [1, 2, 3];    


    // const mentors: string[] = ["X", "Y", "Z"]
    const mentors: Array<string> = ["X", "Y", "Z"]

    // const boolArray : boolean[] = [true, false, true]
    const boolArray : GenericArray<boolean> = [true, false, true]


    const user : GenericArray<{name: string, age: number}> = [
        {
            name: "Rabby",
            age: 100
        },
        {
            name: "Rahim",
            age: 100
        }
    ]

    //  generic tuple
    type GenericTuple<X,Y> = [X,Y]
    const men : GenericTuple<string,string> = ['Bow', 'Bon']


}