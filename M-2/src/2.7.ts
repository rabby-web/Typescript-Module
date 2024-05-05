{
  // generic constrain wait keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  //   function
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Mr. Jon",
    age: 26,
    address: "ctg",
  };
  const result1 = getPropertyValue(user, "name");

  //
}
