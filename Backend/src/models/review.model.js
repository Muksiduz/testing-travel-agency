import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: String,

    location: String,

    image: String,

    review: String,

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
