const friend = (friends) => {
  out_friends = []
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      out_friends.push(friends[i])
    }
  }

  return out_friends 
};

module.exports = {
  friend,
};
