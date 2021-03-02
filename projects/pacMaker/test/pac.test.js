const { createPac } = require("../js/pac");
const defaultPac = {"direction": "left", "height": 41, "id": 2, "lives": 3, "phase": 2, "velocity": {"x": 20, "y": 20}, "width": 41, "x": 200, "y": 100};
test('create a new pac object', () => {
  expect(createPac(300,200)).toEqual({"direction": "left", "height": 41, "id": 1, "lives": 3, "phase": 2, "velocity": {"x": 20, "y": 20}, "width": 41, "x": 300, "y": 200});
  expect(createPac()).toEqual(defaultPac);
});