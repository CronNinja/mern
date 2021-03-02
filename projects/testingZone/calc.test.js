const { it, expect, describe } = require("@jest/globals");
const calc = require("./calc.js");

describe('calc', () => {
  const x = 4;
  const y = 3;
   // Check to see that a number was sent
   it("should receive a number", () => {
    const op = '*';
    expect(calc(x, "s", op)).toBe("Did not receive a number");
    expect(calc(true, y, op)).toBe("Did not receive a number");
  });
  // Check to see that a number was sent
  it("should receive correct operator", () => {
    expect(calc(x, y, "*")).not.toBe("Did not receive a correct operator");
    expect(calc(x, y, "&")).toBe("Did not receive a correct operator");
  });
  // Should Add Numbers
  it('should add two numbers', () => {
    const op = '+';
    expect(calc(x, y, op)).toBe(7);
  });

  // Should Subtract Numbers
  it('should subtract one number from another', () => {
    const op = '-';
    expect(calc(x, y, op)).toBe(1);
  });
  // Should Multiply Numbers
  it('should multiply two numbers', () => {
    const op = '*';
    expect(calc(x, y, op)).toBe(12);
  });
    // Should Multiply Numbers
    it('should multiply two numbers', () => {
      const op = '!';
      expect(calc(x, y, op)).toEqual(undefined);
    });
  // Should divide Numbers
  it('should divide one number into another', () => {
    const op = '/';
    expect(calc(12, y, op)).toBe(4);
    expect(calc(12, 0, op)).toBe("Can't divide by 0.");
  });
});