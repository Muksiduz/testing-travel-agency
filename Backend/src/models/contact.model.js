import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },

    email: {
      type: String,
      default: null,
    },

    phone: {
      type: String,
      default: null,
    },

    subject: {
      type: String,
      default: null,
    },

    message: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
