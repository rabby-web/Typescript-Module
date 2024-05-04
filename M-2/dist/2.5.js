"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const resGeneric = createArrayWithGenerics("USA");
    const resGenericObj = createArrayWithGenerics({
        id: 222,
        name: "Rabby",
    });
    //------------------>
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple("Bangladesh", 222);
    const resGeneric10 = createArrayWithTuple("USA", "Uk");
    //   
}
