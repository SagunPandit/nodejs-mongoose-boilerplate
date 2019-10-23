import mongoose from '../db';

const Schema = mongoose.Schema;

export const BusinessCategory = new Schema({
  name: {
    type: String,
    enum: ['Restaurant', 'Cinema', 'Cafe']
  }
});
