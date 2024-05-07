"use strict";
{
    // real implement
    class Car1 {
        startEngine() {
            console.log(`I am start engine`);
        }
        stopEngine() {
            console.log(`I am stop engine`);
        }
        move() {
            console.log(`I am moving engine`);
        }
        test() {
            console.log(`I am tests engine`);
        }
    }
    // abstract------------------
    //   idea
    class Car2 {
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
