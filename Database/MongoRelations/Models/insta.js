const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/MongoRelations");
}

const instauser = new Schema({
  username: String,
  gmail: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "instaposts",
    },
  ],
});

const instapost = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "instauser",
  },
});

const instaUser = mongoose.model("instaUser", instauser);
const instaPost = mongoose.model("instaPost", instapost);

const createUser = async (username, email) => {
  let user = new instaUser({ username: username, gmail: email });
  user.save();
};

const createPost = async (username, content) => {
  let user = await instaUser.findOne({ username: username });
  console.log(user);
  let post = await new instaPost({ content: content, likes: 0, user: user });
  user.posts.push(post);
  user.save();
  post.save();
};

// createUser("swampgt", "swapnilskumar99@gmail.com");
createPost("swampgt", "hello this is my second post");