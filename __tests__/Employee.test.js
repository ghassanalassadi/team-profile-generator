const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Should create a new Employee object.", () => {
        const testEmployee = new Employee();
        expect(typeof(testEmployee)).toBe('object');
    });

    it("Should have the assigned name.", () => {
        const name = 'Wade';
        const testEmployee = new Employee(name);
        expect(testEmployee.name).toBe(name);
    });

    it("Should have the assigned ID.", () => {
        const id = 5;
        const testEmployee = new Employee('Wade', id);
        expect(testEmployee.id).toBe(id);
    });

    it('Should have the assigned email', () => {
        const email = 'wadew@email.com';
        const testEmployee = new Employee('Wade', 5, email);
        expect(testEmployee.email).toBe(email);
    });

    it('Should retrieve the name through the getName() method', () => {
        const name = "Wade";
        const testEmployee = new Employee(name);
        expect(testEmployee.getName()).toBe(name);
    });

    it("Should retrieve the id through the getID() method", () => {
        const id = 5;
        const testEmployee = new Employee("Wade", id);
        expect(testEmployee.getID()).toBe(id);
    });

    it("Should retrieve the name through the getName() method", () => {
        const email = "wadew@email.com";
        const testEmployee = new Employee("Wade", 5, email);
        expect(testEmployee.getEmail()).toBe(email);
    });

    it("Should return the correct employee role", () => {
        const role = 'Employee';
        const testEmployee = new Employee("Wade", 5, "wadew@email.com");
        expect(testEmployee.getRole()).toBe(role);
    })
})