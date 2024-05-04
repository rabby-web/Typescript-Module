{
    // type assertion
    let anything : any;
    anything = "Next Level Web Development";
    anything = 222;
    (anything as number)


    const kgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const convertValue = parseFloat(value) * 1000;
            return convertValue;
        }
        else if(typeof value === "number"){
            return value  * 1000;
        }
    }
    const result1 = kgToGm(100) as number
    const result2 = kgToGm("100") as string


    type CustomError = {
        message: string
    }
    try{

    }
    catch(error){
        console.log((error as CustomError).message);
        
    }


}