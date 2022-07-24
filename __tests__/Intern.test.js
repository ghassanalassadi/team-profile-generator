const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Should have the assigned school", () => {
        const school = "University of Sydney";
        const testIntern = new Intern("Rick", 10, "rickr@email.com", school);
        expect(testIntern.school).toBe(school);
    });

    it("Should retrieve the assigned school the getSchool() method", () => {
        const school = "University of Sydney";
        const testIntern = new Intern("Rick", 10, "rickr@email.com", school);
        expect(testIntern.getSchool()).toBe(school);
    });

    it("Should return the correct employee role", () => {
        const role = "Intern";
        const testIntern = new Intern("Rick", 10, "rickr@email.com", "University of Sydney");
        expect(testIntern.getRole()).toBe(role);
    });
});
