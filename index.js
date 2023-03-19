const express = require("express");
const videoroutes = require("./routes/videos");
require("dotenv").config();
const port = process.env.PORT;


const app = express();

app.use(express.static("public"));

app.use("/videos", videoroutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});