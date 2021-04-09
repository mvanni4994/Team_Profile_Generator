const Manager = require()

describe("getRole",() => {
    it("should return 'Manager' from getRole()",()=> {
        const manager = new Manager("Regis", 1, "KingRegis@insomnia.com", "115");
        console.log(manager);
        expect(manager.getRole()).to.equal("Manager");
    });
});

describe("getName", () => {
    it("should return 'Regis' from getName()",()=> {
        const manager = new Manager("Regis", 1, "KingRegis@insomnia.com", "115");
        console.log(manager);
        expect(manager.getName()).to.equal("Regis");
    });
});

describe("getID", () => {
    it("should return '1' from getID()",()=> {
        const manager = new Manager("Regis", 1, "KingRegis@insomnia.com", "115");
        console.log(manager);
        expect(manager.getID()).to.equal("1");
    });
});

describe("getEmail", () => {
    it("should return 'KingRegis@insomnia.com' from getEmail()",()=> {
        const manager = new Manager("Regis", 1, "KingRegis@insomnia.com", "115");
        console.log(manager);
        expect(manager.getEmail()).to.equal("KingRegis@insomnia.com");
    });
});

describe("getOfficeNumber", () => {
    it("should return '115' from getOfficeNumber()",()=> {
        const manager = new Manager("Regis", 1, "KingRegis@insomnia.com", "115");
        console.log(manager);
        expect(manager.getOfficeNumber()).to.equal("115");
    });
});