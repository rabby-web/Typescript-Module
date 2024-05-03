"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    //----------> learn spread operator
    const bro1 = ['rakib', "rashed", "Rahim"];
    const bro2 = ["kashem", 'musfiq'];
    bro1.push(...bro2);
    // mentor
    const mentor1 = {
        tsc: 'mizbaa',
        redux: 'mir'
    };
    const mentor2 = {
        next: 'tonmoy',
        redux: 'nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    //----------> learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Abul", "Babul", "kabul");
}
