const friend = (friends) => {
  return friends.filter(f => f.length === 4);
};

module.exports = {
  friend,
};
