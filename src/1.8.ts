{
    
 // object destructuring
const user = {
    id: 234,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "017000000",
    address: "Uganda"
  };
  
  const {
    contactNo,
    name: { middleName : midName },
  } = user;

  // array destructuring

  const myFriends = ['abbul', 'babbul', 'cabbul', 'dabbul', 'nabbul']
  const [,, bestFriend, ...rest] = myFriends
  








}