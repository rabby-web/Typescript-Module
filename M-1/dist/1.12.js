"use strict";
{
    //
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    // unknown types
    const getSpeedMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSped = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSped} ms-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSped = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSped} ${unit} to ms-1`);
        }
        else {
            console.log('wrong input');
        }
    };
    getSpeedMeterPerSecond(`1000 kmh^-1`);
    // never
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("4O4");
    //
}
