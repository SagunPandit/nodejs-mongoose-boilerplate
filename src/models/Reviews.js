import mongoose from '../db';

const Schema = mongoose.Schema;

let reviewSchema = new Schema(
  {
    reviewerId: Schema.Types.ObjectId,
    businessEntityId: Schema.Types.ObjectId,
    comment: String,
    ratingScore: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    ratingScale: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    likes: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    dislikes: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    markedInAppropriate: Boolean
  },
  { timestamps: true }
);

export const Review = mongoose.model('reviews', reviewSchema);
