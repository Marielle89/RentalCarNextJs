import { IReview } from "@go-rental/shared";
import mongoose, { Schema } from "mongoose";
import Car from "./car.model";

// Визначення схеми
const reviewSchema = new Schema<IReview>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Middleware: Після видалення review прибирає його з масиву reviews у Car
reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Car.findByIdAndUpdate(doc.car, { $pull: { reviews: doc.id } });
  }
});

// Створення моделі
const Review = mongoose.model<IReview>("Review", reviewSchema);
export default Review;


