// Import the Employee class from another module
const Employee = require("./employee");

// Define a Manager class that extends the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      // Call the constructor of the Employee class with the name, id, and email parameters
      super(name, id, email);
      // Set the officeNumber property of the Manager instance to the officeNumber parameter
      this.officeNumber = officeNumber;
    }
    
    // Define getter methods for the name, id, and email properties
    getname() {
        return this.name;
    }
    
    getid() {
        return this.id;
    }
    
    getemail() {
        return this.email;
    }
    
    // Define a method to get the role of the Manager instance
    getrole() {
        return "manager";
    }
    
    // Define a method to get the officeNumber property of the Manager instance
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// Export the Manager class for use in other modules
module.exports = Manager;
