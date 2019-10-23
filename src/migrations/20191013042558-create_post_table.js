module.exports = {
  up(db) {
    return db.createCollection('post');
  },

  down(db) {
    db.post.drop();
  }
};
