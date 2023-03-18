// Import the Employee class from the employee module
const Employee = require("./employee");

// Define a subclass of Employee called Intern
class Intern extends Employee {
  // Define the constructor method that accepts name, id, email, and school parameters
  constructor(name, id, email, school) {
    // Call the parent class's constructor method with name, id, and email parameters
    super(name, id, email);
    // Assign the school parameter to a new property called "school"
    this.school = school;
  }

  // Define getter methods for the name, id, and email properties
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  // Define a method that returns the role of the intern
  getRole() {
    return "intern";
  }

  // Define a method that returns the school of the intern
  getSchool() {
    return this.school;
  }
}

// Export the Intern class for use in other modules
module.exports = Intern;
