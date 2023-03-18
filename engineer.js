// Import the Employee class from the employee.js file
const Employee = require("./employee");

// Define a new class called Engineer that extends the Employee class
class Engineer extends Employee {
  // Create a constructor function that takes in name, id, email, and github parameters
  constructor(name, id, email, github) {
    // Call the super function to set the name, id, and email properties of the Employee class
    super(name, id, email);
    // Set the github property of the Engineer class to the provided github parameter
    this.github = github;
  }

  // Create a method to get the name property of the Engineer class
  getname() {
    return this.name;
  }

  // Create a method to get the id property of the Engineer class
  getid() {
    return this.id;
  }

  // Create a method to get the email property of the Engineer class
  getemail() {
    return this.email;
  }

  // Create a method to get the role property of the Engineer class, which is "engineer"
  getrole() {
    return "engineer";
  }

  // Create a method to get the github property of the Engineer class
  getGithub() {
    return this.github;
  }
}

// Export the Engineer class
module.exports = Engineer;
