// Hamster class
class Hamster {
    constructor(owner = '', name, price = 15) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        console.log('squeak squeak');
    }
    eatFood() {
        console.log('nibble nibble');
    }
    getPrice() {
        return this.price;
    }
}
// const jerry = new Hamster('moon', 'jerry');
// console.log(jerry.getPrice());

// Person class
class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight,
        this.mood = mood,
        this.hamsters = hamsters,
        this.bankAccount = bankAccount
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hi, my name is ${this.name}.`);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

// Story
// 1.
const Timmy = new Person('Timmy');
// 2.
for (i = 0; i < 5; i++) {
    Timmy.ageUp();
}
// 3.
for (i = 0; i < 5; i++) {
    Timmy.eat();
}
// 4.
for (i = 0; i < 5; i++) {
    Timmy.exercise();
}
// 5.
for (i = 0; i < 9; i++) {
    Timmy.ageUp();
}
// 6.
const Gus = new Hamster('Gus');
// 7.
Gus.owner = 'Timmy';
// 8.
Timmy.buyHamster(Gus);
// 9.
for (i = 0; i < 15; i++) {
    Timmy.ageUp();
}
// 10.
for (i = 0; i < 2; i++) {
    Timmy.eat();
}
// 11.
for (i = 0; i < 2; i++) {
    Timmy.exercise();
}

// Chef Make Dinners
class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    makeDinner(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert)
    }
}

const Remy = new Chef;
console.log(Remy.makeDinner('app1', 'entree1', 'dessert1'));
console.log(Remy.makeDinner('app2', 'entree2', 'dessert2'));
console.log(Remy.makeDinner('app3', 'entree3', 'lavacake'));