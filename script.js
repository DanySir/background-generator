// const object1 = {a: 5};
// const object2 = object1;
// const object3 = object2;
// const object4 = {a: 5};
// object1.a = 4;

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mamal extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color);
//   }
//   sound() {
//     console.log(`Moo I'm ${this.name} and I'm ${this.color} ${this.type}`);
//   }
// }

// const cow = new Mamal("Shelly", "cow", "brown");

// // #1) Check if this array includes the name "John".
// const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];

// // #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// // name or names in an array.
// const dragons1 = ["Tim", "Johnathan", "Sandy", "Sarah"];

// // #3) Create a function that calulates the power of 100 of a number entered as a parameter

// // #4) Useing your function from #3, put in the paramter 10000. What is the result?
// // Research for yourself why you get this result

// const power100 = num => num ** 100;

// exercise 3: Clean up this code using optional chaining
let will_pokemon = {
  pikachu: {
    species: "Mouse Pokemon",
    height: 0.4,
    weight: 6,
    power: "lightning",
    friend: {
      charizard: {
        species: "Dragon Pokemon",
        height: 1.7,
        weight: 90.5,
        power: "fire",
      },
    },
  },
};

let andrei_pokemon = {
  raichu: {
    species: "Mouse Pokemon",
    height: 0.8,
    weight: 30,
    power: "",
  },
};

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
  console.log("fight!");
} else {
  console.log("walk away...");
}
