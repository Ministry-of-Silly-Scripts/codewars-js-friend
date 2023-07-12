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

  it('should return ["Mark"] for input equal to ["Mark"]', () => {
    expect(friend(["Mark"])).toStrictEqual(["Mark"]);
  });

  it('should return [] for input equal to ["Kieran"]', () => {
    expect(friend(["Kieran"])).toStrictEqual([]);
  });

  it('should return ["Ryan", "Mark"] for input ["Ryan", "Kieran", "Mark"] ', () => {
    expect(friend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
  });
});
