const { it, expect, describe } = require("@jest/globals");
const pacMaker = require("../app.js");

describe('pacMaker', () => {
   it("Test", () => {
    expect(pacMaker()).toBe("Testing...");
  });
});