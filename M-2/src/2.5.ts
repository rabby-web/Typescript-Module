{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGenerics<string>("USA");

  type User = {
    id: number;
    name: string;
  };

  const resGenericObj = createArrayWithGenerics<User>({
    id: 222,
    name: "Rabby",
  });
  //------------------>

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple("Bangladesh", 222);
  const resGeneric10 = createArrayWithTuple<string, string>("USA", "Uk");

//   
}
