"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value) * 1000;
            return convertValue;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(100);
    const result2 = kgToGm("100");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
