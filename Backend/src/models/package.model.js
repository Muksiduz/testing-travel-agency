import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
  day: Number,
  title: String,
  description: String,
});

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  comment: String,
});

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    duration: String,

    price: Number,

    location: String,

    image: String,

    gallery: [String],

    video: String,

    description: String,

    highlights: [String],

    itinerary: [itinerarySchema],

    inclusions: [String],

    exclusions: [String],

    reviews: [reviewSchema],

    mapEmbed: String,

    pdf: String,

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Package = mongoose.model("Package", packageSchema);

export default Package;
