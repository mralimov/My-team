const Employee = require("./Employee");

class Intern extends Employee {
constructor(name, id, email, school) {
    if (!school || !school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    super(name, id, email);
    this.school = school;
  }
}

module.exports = Intern;