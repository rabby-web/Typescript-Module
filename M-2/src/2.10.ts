{
  // Mapped Types
  const arrOfNumber: number[] = [1, 2, 3];
  const arrOfString: string[] = arrOfNumber.map((number) => number.toString());

  //  ==========>
  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; //look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //   ==> keyof ArrayNumber ==> "height" | "width"
  //   T => { height: string; width: number }
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
