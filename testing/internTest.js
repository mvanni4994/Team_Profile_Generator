const Intern = require("../StaffLib/intern");

describe("getRole",() => {
    it("should return 'Intern' from getRole()",()=> {
        const intern = new Intern("Prompto", 25, "Prompto@insomnia.com", "InsomniaUniversity");
        console.log(intern);
        expect(intern.getRole()).to.equal("Intern");
    });
});

describe("getName", () => {
    it("should return 'Prompto' from getName()",()=> {
        const intern = new Intern("Prompto", 25, "Prompto@insomnia.com", "InsomniaUniversity");
        console.log(intern);
        expect(intern.getName()).to.equal("Prompto");
    });
});

describe("getID", () => {
    it("should return '15' from getID()",()=> {
        const intern = new Intern("Prompto", 25, "Prompto@insomnia.com", "InsomniaUniversity");
        console.log(intern);
        expect(intern.getID()).to.equal("25");
    });
});

describe("getEmail", () => {
    it("should return 'Prompto@insomnia.com' from getEmail()",()=> {
        const intern = new Intern("Prompto", 25, "Prompto@insomnia.com", "InsomniaUniversity");
        console.log(intern);
        expect(intern.getEmail()).to.equal("Prompto@insomnia.com");
    });
});

describe("getSchool", () => {
    it("should return 'InsomniaUniversity' from getSchool()",()=> {
        const intern = new Intern("Prompto", 25, "Prompto@insomnia.com", "InsomniaUniversity");
        console.log(intern);
        expect(intern.getSchool()).to.equal("InsomniaUniversity");
    });
});