import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
export type IPort = {
  title: string;
  slug: string;
  description: string; // for preview
  image: string;
};

// mongoose schema
const projectSchema = new Schema<IPort>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

// defining the collection and model
const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;