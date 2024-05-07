"use strict";
{
    // class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Dog", "dog", "Ghew");
    const cat = new Animal("Cat", "cat", "Mew");
    //
}
