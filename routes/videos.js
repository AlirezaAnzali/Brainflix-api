const videos = require("../data/videos.json");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const port = process.env.PORT;
const url = process.env.BASE_URL;

router.get("/", (req, res) => {
  const filteredVideos = videos.map((video, index) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: `${url}${port}/images/image${[index]}.jpeg`,
    };
  });
  res.json(filteredVideos);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const video = videos.find((video) => video.id === id);
  if (video) {
    const index = videos.findIndex((video) => video.id === id);
    const videoWithIndex = {
      ...video,
      image: `${url}${port}/images/image${[index]}.jpeg`,
    };
    res.json(videoWithIndex);
  } else {
    res.send("No video with that id exists");
  }
});


router.use(express.json());

router.post("/", (req, res) => {
  const newVideo = {
    id: uuidv4(),
    title: req.body.title,
    channel: "Ali Channel",
    image: "image9.jpeg",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "0:00",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  // Add new video object
  videos.push(newVideo);

  // Write updated JSON back to file
  fs.writeFile("./data/videos.json", JSON.stringify(videos), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
    res.status(201).json(newVideo);
  });
});


module.exports = router;
