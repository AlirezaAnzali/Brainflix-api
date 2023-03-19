const videos = require("../data/videos.json");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const filteredVideos = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.json(filteredVideos);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const video = videos.find((video) => video.id === id);
  if (video) {
    res.send(video);
  } else {
    res.send("No video with that id exists");
  }
});

module.exports = router;
