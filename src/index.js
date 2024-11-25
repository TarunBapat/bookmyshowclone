import connectDB from "../db/db.js";
import dotenv from "dotenv";
import app from "../app.js";

dotenv.config();
connectDB()
  .then(() => {
    app.listen(5001, () => {
      console.log(`listening at 5001`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);
  });
// connectDB();

app.get("/", (req, res) => {
  res.send("dgfghfjh");
});

// app.listen(5001, () => {
//   console.log("listening at port 5000");
// });
