{
    // spread operator
    // rest operator
    // destructuring

    //----------> learn spread operator
    const bro1: string[] = ['rakib',"rashed","Rahim"];
    const bro2: string[] = ["kashem", 'musfiq']
    bro1.push(...bro2)

    // mentor
    const mentor1 = {
        tsc : 'mizbaa',
        redux: 'mir'
    }
    const mentor2 = {
        next : 'tonmoy',
        redux: 'nahid'
    }
    const mentorList = {...mentor1, ...mentor2}

    //----------> learn rest operator
    const greetFriends = (...friends: string[] ) =>{
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }
    greetFriends("Abul", "Babul", "kabul")
}