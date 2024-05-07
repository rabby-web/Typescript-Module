"use strict";
{
    // static
    //   class Counter {
    //     count: number = 5;
    //     increment() {
    //       return (this.count = this.count + 1);
    //     }
    //     decrement() {
    //       return (this.count = this.count - 1);
    //     }
    //   }
    //   const instance1 = new Counter();
    //   console.log(instance1.increment());
    //   const instance2 = new Counter();
    //   console.log(instance2.decrement());
    // static
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 5;
    const instance1 = new Counter();
    console.log(Counter.increment());
    const instance2 = new Counter();
    console.log(instance2.decrement());
    console.log(instance2.decrement());
    //
}
