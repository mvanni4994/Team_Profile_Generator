const Employee = require("./employee.js")

class Engineer extends Employee{
    constructor(name, ID, email, engineerGithub){
        super(name, ID, email, "Engineer")
        this.engineerGithub = engineerGithub;
    }
    getGithub(){
        return this.engineerGithub;
    }
};

module.exports = Engineer;