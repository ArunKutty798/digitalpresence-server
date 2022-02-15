import mongoose from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://digitalindia:digital123@cluster0.52bud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL)
  .then((res) => console.log("mongodb connected"))
  .catch((err) => console.log(err));
