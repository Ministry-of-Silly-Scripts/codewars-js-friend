const { friend } = require("../src/index");

test("test friend", () => {
  expect(friend(0)).toBe(true);
});
