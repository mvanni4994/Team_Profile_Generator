const Employee = require("./employee.js")

class Manager extends Employee{
    constructor(name, ID, email, officeNumber){
        super(name, ID, email, "Manager")
        this.managerNumber = officeNumber;
    }
    getNumber(){
        return this.officeNumber;
    }
};

module.exports = Manager;