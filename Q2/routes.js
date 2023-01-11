const express = require("express");
const Post = require("./post");
const router = express.Router();

router.get("/posts", (req, res) => {
  const limit = req.query.limit || 10;
  const skip = req.query.skip || 0;

  Post.find()
    .skip(skip)
    .limit(limit)
    .then((posts) => {
      res.send({
        posts,
        total: 150,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
