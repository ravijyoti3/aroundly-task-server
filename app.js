require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//My routes
const contactRoute = require("./routes/contact");
//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => console.log(err));
app.use(bodyParser.json());

//My Routes
app.use("/api", contactRoute);
//PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
