{
  // instance of guard

  // parents class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }
  // child class for Dog
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  // child class for Cat
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMea() {
      console.log("I am mea");
    }
  }

  // smart way
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark;
    } else if (isCat(animal)) {
      animal.makeSound;
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("Dog ", "dog");
  const cat = new Dog("cat ", "cat");

  const ani = getAnimal(dog);
  console.log(ani);
  //
}
