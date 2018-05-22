// import the Student class
const Student = require('./student');

describe("A Student", () => {

  it("has a first name", () => {
    let oscar = new Student({ first_name: "Oscar" });
    expect(oscar.first_name).toBeDefined();
    expect(oscar.first_name).toBe("Oscar");
  });

  it("has a last name", () => {
    let oscar = new Student({ last_name: "Mayer" });
    expect(oscar.last_name).toBeDefined();
    expect(oscar.last_name).toBe("Mayer");
  });

  it("has courses", () => {
    let oscar = new Student({ first_name: "Oscar", last_name: "Mayer" });
    expect(oscar.courses).toBeDefined();
    expect(Array.isArray(oscar.courses)).toBe(true);
  });
});