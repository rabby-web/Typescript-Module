"use strict";
{
    // oop - Inheritance
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep ${numOfHours}`);
        }
    }
    // --------for student
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("ZNR", 15, "USA");
    //   student1.
    // ---------for teacher
    class Teacher extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address), (this.designation = designation);
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("ZNR", 35, "USA", "Sr");
    //
}
