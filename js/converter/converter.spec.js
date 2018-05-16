// import the code to be tested
const uc = require('./converter');

describe("A units converter", () => {

  it("can convert °C to °F", () => {
    expect(uc.CtoF(0)).toBe(32);
    expect(uc.CtoF(100)).toBe(212);
    expect(uc.CtoF(10)).toBe(50);
    expect(uc.CtoF(22)).toBe(71.6);
    expect(uc.CtoF(-10)).toBe(14);
    expect(uc.CtoF(-20)).toBe(-4);
    expect(uc.CtoF(-17.78)).toBeCloseTo(0);
  });

});


describe("A smoke test", () => {
  it("can blow smoke", () => {
    expect(true).toBe(true);
  });
});