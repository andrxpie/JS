console.log("Task 1");
console.log("");

class Property {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class CssClass {
  constructor(styleName) {
    this.styleName = styleName;
    this.properties = [];
  }

  AddProperty(property, value) {
    this.properties.push(new Property(property, value));
  }

  RemoveProperty(property) {
    // this.properties.RemoveAt(index);
  }

  ShowStyle() {
    console.log(`${this.styleName}: {`);
    for (const key in this.properties) {
      console.log(` ${key.Name}: ${key.value};`);
    }
    console.log(" }");
  }
}

let css = new CssClass()
