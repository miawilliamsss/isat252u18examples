// import the Student class
const Student = require('./student');

describe("A Student", () => {
  /*
    Properties (Nouns)
   */
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
    let oscar = new Student({
      first_name: "Oscar", 
      last_name: "Mayer"
    });
    expect(oscar.courses).toBeDefined();
    expect(Array.isArray(oscar.courses)).toBe(true);
  });

  /*
    Methods (Verbs)
   */
  it("can enroll in a course", () => {
    let oscar = new Student({
      first_name: "Oscar", 
      last_name: "Mayer"
    });
    // create a mock(fake) instructor
    let mockProf = {
      first_name: "Morgan",
      last_name: "Benton",
      office: "ISAT/CS 124",
      email: "bentonmc@jmu.edu",
      greet: () => { console.log('Yo!'); }
    };
    // create a mock(fake) version of a course
    let mock252 = {
      name: "Programming and Problem Solving",
      program: "ISAT",
      number: "252",
      location: "ISAT/CS 337",
      instructor: mockProf
    };

    let num_enrolled = oscar.courses.length;
    oscar.enroll(mock252);
    expect(oscar.courses.length).toBe(num_enrolled + 1);
    expect(oscar.courses[num_enrolled].name)
      .toBe("Programming and Problem Solving");
    expect(oscar.courses[num_enrolled].instructor.first_name)
      .toBe("Morgan");
  });
});