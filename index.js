const express = require("express");
const videoroutes = require("./routes/videos");

const app = express();
app.use(express.static("public"));

app.use("/videos", videoroutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});