const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should have the assigned github profile", () => {
        const github = 'sakurakanade';
        const testEngineer = new Engineer("Sakura", 2, "sakurak@email.com", github);
        expect(testEngineer.github).toBe(github);
    });

    it("Should retrieve the github username through the getGithub() method", () => {
        const github = "sakurakanade";
        const testEngineer = new Engineer("Sakura", 2, "sakurak@email.com", github);
        expect(testEngineer.getGithub()).toBe(github);
    });

    it("Should return the correct employee role", () => {
    const role = "Engineer";
    const testEngineer = new Engineer("Sakura", 1, "sakurak@email.com", "sakurakanade");
    expect(testEngineer.getRole()).toBe(role);
    });
});
