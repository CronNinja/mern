const { it, expect, describe } = require("@jest/globals");
const greet = require("./greet.js");

describe('test greet()', () => {

  // Send Name receive Hello, + Name
  it("should return Hello, + name", () => {
    expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
  });

  // Send Null receive Hello there!
  it("should return Hello there!", () => {
    expect(greet()).toBe('Hello there!');
  });

  // Send all caps receive HELLO + name!
  it("should return HELLO + name!", () => {
    expect(greet('JOSE')).toBe('HELLO JOSE!');
  });

    // Send array of names receive Hello, name[0], name[1]!
    it("should return Hello, name[0], name[1]", () => {
      let nameArray =  ['Alex','Arsene','Jose','Zidane'];
      expect(greet(nameArray)).toBe('Hello, Alex, Arsene, Jose, Zidane');
    });
});
