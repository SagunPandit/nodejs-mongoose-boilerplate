import mongoose from '../db';
import BusinessCategory from './BusinessCategory';
import Boom from '@hapi/boom';

const Schema = mongoose.Schema;

let businessSchema = new Schema(
  {
    ownerId: Schema.Types.ObjectId,
    name: String,
    description: String,
    address: String,
    category: {
      type: [BusinessCategory]
    },
    thumbnailUrl: String,
    ratingCount: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    totalRatingScore: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v)
    },
    reviews: [Schema.ObjectId],
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  },
  { timestamps: true }
);

/**
 * Validate location coordinates
 */
businessSchema.pre('save', function save(next) {
  const business = this;
  if (!business.location) {
    next();
  }
  const lng = business.location.coordinates[0];
  const lat = business.location.coordinates[1];

  if (lat < -90 || lat > 90) {
    throw Boom.notAcceptable('Latitude must be in range [-90, 90].');
  }

  if (lng < -180 || lng > 180) {
    throw Boom.notAcceptable('Longitude must be in range [-180, 180].');
  }
  next();
});

export const Review = mongoose.model('business', businessSchema);
