{
  // abstractions => 1. interface 2. abstract
    // interface
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  // real implement
  class Car implements Vehicle1 {
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
}
