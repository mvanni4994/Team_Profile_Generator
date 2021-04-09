class Employee {
    constructor(name, ID, email, role){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }
    getRole(){
        return this.role;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.ID;
    }
    getEmail(){
        return this.email;
    }
};

module.exports = Employee;