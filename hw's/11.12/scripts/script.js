class Shape {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get Name() {
    return this.#name;
  }
}

class Square extends Shape {
  #side;

  constructor(name, side) {
    super(name);
    this.#side = side;
  }

  Info() {
    console.log(`Side = ${this.#side}`);
  }

  Perimeter() {
    return this.#side * 4;
  }

  Square() {
    return Math.pow(this.#side, 2);
  }
}

class Tringle extends Shape {
  #sides;

  constructor(name, sides) {
    super(name);
    this.#sides = sides;
  }

  Info() {
    for (let i = 0; i < this.#sides.length; i++) {
      console.log(`Side [${i}] = ${this.#sides[i]}`);
    }
  }

  Perimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.#sides.length; i++) perimeter += this.#sides[i];
    return perimeter;
  }

  Square() {
    let perimeter = this.Perimeter();
    let halfP = perimeter / 2;
    return Math.sqrt(
      halfP * (halfP - this.#sides[0]) * (halfP - this.#sides[1]) * (halfP - this.#sides[2])
    ).toFixed(2);
  }
}

class Rectangle extends Shape {
  #sides = [];

  constructor(name, sides) {
    super(name);
    this.#sides = sides;
  }

  Info() {
    for (let i = 0; i < this.#sides.length; i++) {
      console.log(`Side [${i}] = ${this.#sides[i]}`);
    }
  }

  Perimeter() {
    return 2 * (this.#sides[0] + this.#sides[1]);
  }

  Square() {
    return this.#sides[0] * this.#sides[1];
  }
}

let shapesArray = [
  new Square("Square", 5),
  new Tringle("Tringle", [5, 5, 5]),
  new Rectangle("Rectangle", [2, 5]),
];

for (let i = 0; i < shapesArray.length; i++) {
  console.log(shapesArray[i].Name);
  shapesArray[i].Info();
  console.log(`Perimeter of ${shapesArray[i].Name} is ${shapesArray[i].Perimeter()}`);
  console.log(`Square of ${shapesArray[i].Name} is ${shapesArray[i].Square()}`);
  console.log(``);
}
