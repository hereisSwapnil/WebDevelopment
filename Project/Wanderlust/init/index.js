// Importing required modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// importing models
const listing = require("../models/listing");

// iporting data
const initData = require("./data");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Connecting MongoDB
main()
  .then((res) => {
    console.log("Connection established (Mongoose connection)");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(`${process.env.MONGO_URI}`);
}

const initDB = async () => {
  await listing.deleteMany({});
  await listing.insertMany(initData["data"]);
  console.log("Database was successfully initialized");
};

initDB();
