// import code to be tested
const Employee = require('./employee');

describe("An Employee", () => {


  it("has an average number of meetings per week", () => {
    let jenna = new Employee({
      first_name: "Jenna",
      last_name: "Piromalli",
      position: "President"
    });
    // create some mock meetings
    let meet01 = { time: new Date(2018,0,2), location: "the office", client: "Bob" };
    let meet02 = { time: new Date(2018,0,8), location: "the office", client: "Bob" };
    let meet03 = { time: new Date(2018,0,9), location: "the office", client: "Bob" };
    let meet04 = { time: new Date(2018,0,10), location: "the office", client: "Bob" };
    let meet05 = { time: new Date(2018,0,15), location: "the office", client: "Bob" };
    let meet06 = { time: new Date(2018,0,16), location: "the office", client: "Bob" };
    let meet07 = { time: new Date(2018,0,17), location: "the office", client: "Bob" };
    let meet08 = { time: new Date(2018,0,18), location: "the office", client: "Bob" };
    let meet09 = { time: new Date(2018,0,19), location: "the office", client: "Bob" };
    let meet10 = { time: new Date(2018,0,22), location: "the office", client: "Bob" };
    let meet11 = { time: new Date(2018,0,23), location: "the office", client: "Bob" };
    let meet12 = { time: new Date(2018,0,24), location: "the office", client: "Bob" };
    let meet13 = { time: new Date(2018,0,25), location: "the office", client: "Bob" };
    // schedule them
    jenna.schedule(meet01);
    jenna.schedule(meet02);
    jenna.schedule(meet03);
    jenna.schedule(meet04);
    jenna.schedule(meet05);
    jenna.schedule(meet06);
    jenna.schedule(meet07);
    jenna.schedule(meet08);
    jenna.schedule(meet09);
    jenna.schedule(meet10);
    jenna.schedule(meet11);
    jenna.schedule(meet12);
    jenna.schedule(meet13);
    // test our expectations
    expect(jenna.meetings_per_week()).toBe(3.25);
  });
});