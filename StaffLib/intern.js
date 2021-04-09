const Employee = require("./employee.js")

class Intern extends Employee{
    constructor(name, ID, email, internSchool){
        super(name, ID, email, "Intern")
        this.internSchool = internSchool;
    }
    getSchool(){
        return this.internSchool;
    }
};

module.exports = Intern;