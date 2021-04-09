const Engineer = require("../StaffLib/engineer");

describe("getRole",() => {
    it("should return 'Engineer' from getRole()",()=> {
        const engineer = new Engineer("Lunafreya", 26, "Lunafreya@insomnia.com", "LunafreyaFleurent");
        console.log(engineer);
        expect(engineer.getRole()).to.equal("Engineer");
    });
});

describe("getName", () => {
    it("should return 'Lunafreya' from getName()",()=> {
        const engineer = new Engineer("Lunafreya", 26, "Lunafreya@insomnia.com", "LunafreyaFleurent");
        console.log(engineer);
        expect(engineer.getName()).to.equal("Lunafreya");
    });
});

describe("getID", () => {
    it("should return '15' from getID()",()=> {
        const engineer = new Engineer("Lunafreya", 26, "Lunafreya@insomnia.com", "LunafreyaFleurent");
        console.log(engineer);
        expect(engineer.getID()).to.equal("26");
    });
});

describe("getEmail", () => {
    it("should return 'Lunafreya@insomnia.com' from getEmail()",()=> {
        const engineer = new Engineer("Lunafreya", 26, "Lunafreya@insomnia.com", "LunafreyaFleurent");
        console.log(engineer);
        expect(engineer.getEmail()).to.equal("Lunafreya@insomnia.com");
    });
});

describe("getGithub", () => {
    it("should return 'LunafreyaFleurent' from getGithub()",()=> {
        const engineer = new Engineer("Lunafreya", 26, "Lunafreya@insomnia.com", "LunafreyaFleurent");
        console.log(engineer);
        expect(engineer.getGithub()).to.equal("LunafreyaFleurent");
    });
});