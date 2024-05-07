"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add("2", " 3");
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My Name is ${user.name}  and my role is ${user.role}`);
        }
        else {
            console.log(`My Name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "Mr. Normal User",
    };
    const adminUser = {
        name: "Mr. AdminUser",
        role: "admin",
    };
    getUser(adminUser);
    //
}
