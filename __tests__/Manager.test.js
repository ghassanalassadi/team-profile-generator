const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should have the assigned office number", () => {
        const officeNumber = 123456;
        const testManager = new Manager('Mahmoud', 1, 'mahmoudm@email.com', officeNumber);
        expect(testManager.officeNumber).toBe(officeNumber);
    });

    it("Should retrieve the office number through the getOfficeNumber method", () => {
        const officeNumber = 123456;
        const testManager = new Manager("Mahmoud", 1, "mahmoudm@email.com", officeNumber);
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
    })

    it("Should return the correct employee role", () => {
        const role = "Manager";
        const testManager = new Manager("Mahmoud", 1, "mahmoudm@email.com", 123456);
        expect(testManager.getRole()).toBe(role);
    });
})