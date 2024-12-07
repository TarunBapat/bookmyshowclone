import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minLength: [10, "Min 10 characters are required"],
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    genre: {
      type: [String],
      // enum: ["Action", "Thriller", "Drama"],
      required: true,
    },
    language: {
      type: [String],
      // enum: [],
      required: true,
    },
    releaseData: {
      type: Date,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movies", movieSchema);

export default Movie;
