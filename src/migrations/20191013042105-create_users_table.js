module.exports = {
  up(db) {
    return db.createCollection('users');
  },

  down(db) {
    db.users.drop();
  }
};
