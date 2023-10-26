// Importing required modules
const mongoose = require('mongoose')

// importing models
const listing = require('../models/listing')

// iporting data
const initData = require('./data');

// Connecting MongoDB
main()
    .then((res) => {
        console.log("Connection established (Mongoose connection)");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await listing.deleteMany({});
    await listing.insertMany(initData["data"]);
    console.log("Database was successfully initialized");
}

initDB();