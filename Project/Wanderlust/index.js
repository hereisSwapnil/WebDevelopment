// Importing required modules
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const path = require('path');

// inporting models
const listing = require('./models/listing')

// Initializing express app
const app = express()

// setting ejs view engine
app.set('view engine', 'ejs')
// setting views and public paths
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// reading post requests data using urlencoding
app.use(express.urlencoded({ extended: true }))
// setting method override variable to be able to override post request to put, patch, delete and others
app.use(methodOverride("_method"))

// Connecting MongoDB
main()
    .then((res) => {
        console.log("Connection established (Mongoose connection)");
    })
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

// Get Requests

app.get('/', (req, res) => {
    res.send("Hey the server is working well!");
})

app.get('listings', async (req, res) => {
    let listingData = await listing.find()
        .then((res) => {
            console.log("Listing data fetched successfully");
        }).catch(err => console.log(err));
    res.render('listings', { data: listingData });
})

// app.get('/testListing', async (req, res) => {
//     let list = new listing(
//         {
//             title: "Farm house",
//             description: "This is a farm house",
//             price: 1200,
//             location: "New York, NY",
//             country: "United States"
//         }
//     )
//     // await listing.findOneAndDelete({title: "Farm house"});
//     // res.send("ok")
//     // list.save().then((res) =>{
//     //     console.log(res)
//     // }).catch((err) => {
//     //     console.log(err);
//     // })
// })

// Listening on port 8080
const port = 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});