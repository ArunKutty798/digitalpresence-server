import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
  shopname: { type: String },
  tagline: { type: String },
  description: { type: String },

  whatsapp: { type: String },
  instagramlink: { type: String },
  facebooklink: { type: String },
  email: { type: String },
  address: { type: String },
  phonenumber: { type: Number },
  founderimage: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String },
  service1: { type: String },
  service2: { type: String },
  service3: { type: String },
  service4: { type: String },
});

export default mongoose.model("shop", shopSchema);
