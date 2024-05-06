{
  //  type guards
  // typeof ==> type guard

  type Alpha = string | number;

  const add = (param1: Alpha, param2: Alpha): Alpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add("2", " 3");
  // console.log(result1);
  // ==>  in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My Name is ${user.name}  and my role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal User",
  };
  const adminUser: AdminUser = {
    name: "Mr. AdminUser",
    role: "admin",
  };
  getUser(adminUser);
  //
}
