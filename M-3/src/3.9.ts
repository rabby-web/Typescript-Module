{
  // abstractions => 1. interface 2. abstract
  // interface-----------
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  // real implement
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am start engine`);
    }
    stopEngine(): void {
      console.log(`I am stop engine`);
    }
    move(): void {
      console.log(`I am moving engine`);
    }
    test() {
      console.log(`I am tests engine`);
    }
  }
  // abstract------------------

  //   idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am tests engine`);
    }
  }

  //   class Toyota extends Car2 {
  //     startEngine(): void {
  //       console.log(`I am start engine`);
  //     }
  //     stopEngine(): void {
  //       console.log(`I am start engine`);
  //     }
  //     moveEngine(): void {
  //       console.log(`I am start engine`);
  //     }
  //   }

  //
}
