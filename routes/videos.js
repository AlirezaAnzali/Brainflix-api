import videos from "../data/videos.json"
import videoDetails from "../data/video-details.json"
const express = require("express");
const router = express.Router();


router.get("/videos", (req, res) => {
  res.json(videos);
});

router.get("/videos/:id", (req, res) => {
  const id = req.params.id;
  if (videos.includes(videos.id)) {
    res.send("That ingridient is in stock");
  } else {
    res.send("No video with that id exists");
  }
});

module.exports = router;