const { roundDown, createWall } = require("../js/gameboard");

test('roundDown handling inputs', () => {
  expect(roundDown(302, 50)).toEqual(300);
  expect(roundDown(329, 50)).toEqual(300);
  expect(roundDown(352, 50)).toEqual(350);
  expect(roundDown(0, 25)).toEqual(0);
  expect(roundDown(302, 0)).toEqual(undefined);
  expect(roundDown(302, "a")).toEqual(undefined);
  expect(roundDown("b", 50)).toEqual(undefined);
  expect(roundDown(302, 50)).toEqual(300);
});
