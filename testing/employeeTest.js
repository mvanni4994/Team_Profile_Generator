const Employee = require ("../StaffLib/employee");

describe("getRole",() => {
    it("should return 'Employee' from getRole()",()=> {
        const employee = new Employee("Noctis", 27, "noctis@insomnia.com");
        console.log(employee);
        expect(employee.getRole()).to.equal("Employee");
    });
});

describe("getName", () => {
    it("should return 'Noctis' from getName()",()=> {
        const employee = new Employee("Noctis", 27, "noctis@insomnia.com");
        console.log(employee);
        expect(employee.getName()).to.equal("Noctis");
    });
});

describe("getID", () => {
    it("should return '15' from getID()",()=> {
        const employee = new Employee("Noctis", 27, "noctis@insomnia.com");
        console.log(employee);
        expect(employee.getID()).to.equal("27");
    });
});
describe("getEmail", () => {
    it("should return 'noctis@insomnia.com' from getEmail()",()=> {
        const employee = new Employee("Noctis", 27, "noctis@insomnia.com");
        console.log(employee);
        expect(employee.getEmail()).to.equal("noctis@insomnia.com");
    });
});