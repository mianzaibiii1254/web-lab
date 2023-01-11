var express = require("express");
var app = express();
var mongoose = require("mongoose");
var faker = require("faker");
var Post = require("./posts");

mongoose
  .connect(
    "mongodb+srv://root:NVuYWQFXkKHzAINU@cluster0.jh15rap.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

for (let i = 0; i < null; i++) {
  const post = new Post({
    title: faker.lorem.sentence(),
    reactions: faker.random.number(),
    userId: faker.random.number(),
  });
  post.save((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Post ${i + 1} saved successfully`);
    }
  });
}

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
