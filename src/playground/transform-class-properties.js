class oldStudent {
  constructor() {
    this.name = "raza";
    this.getGreetings = this.getGreetings.bind(this);
  }
  getGreetings() {
    return "Helo! Welcome on board Mr. " + this.name;
  }
}
const olds = new oldStudent();
const gg = olds.getGreetings;
console.log(gg());

class newStudent {
  name = "kazmi";
  getGreetings = () => {
    return "Helo! Welcome on board Mr. " + this.name;
  };
}
const newSt = new newStudent();
const getGreet = newSt.getGreetings;
console.log(getGreet());
