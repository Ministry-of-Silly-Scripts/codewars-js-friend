const { friend } = require("../src/index");

describe('the friend canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('friend', () => {
  it('should return ["Ryan"] for input equal to ["Ryan"]', () => {
    expect(friend(["Ryan"])).toStrictEqual(["Ryan"]);
  });
});
