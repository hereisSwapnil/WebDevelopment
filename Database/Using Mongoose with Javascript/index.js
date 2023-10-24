// Docs read for more information
// 
// https://mongoosejs.com/docs/api/model.html
// 
// 
// ------------------------------------------------------------------------------------------------------
// 

const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Creating a Schema like a structure for every document
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
})

const User = mongoose.model('User', userSchema);



// String data
// const user1 = new User({
//     name: "Eve",
//     age: 19,
//     email: "eve@gmail.com"
// });
// user1.save();



// inserting many data at once
// User.insertMany([
//     { name: "Rahul", age: 21, email: "rahul@gmail.com" },
//     {name: "Sandeep", age: 21, email: "sandeep@gmail.com"},
//     {name: "Gopal", age: 24, email: "gopal@gmail.com"}
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



// Finding the data using find model function
// User.find({age: {$gt: 20}})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// Updating data when condition satisfied
// User.updateOne({email: "rahul@gmail.com"}, {age: 12})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// Deleting data from db
// User.deleteOne({name: "Rahul"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// ---------------------------------------------------------------------------------

// https://mongoosejs.com/docs/schematypes.html
// For more information visit

// Using Schema validation
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: String
//     },
//     price: {
//         type: Number
//     }
// })

// const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "RD Sharma VIII",
//     price: 1200
// })

// Will not save as required field is not present
// const book2 = new Book({
//     author: "John",
//     price: 1200
// })

// book1.save();

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // Custom error message
        maxLength: [20, "Title too big"]
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }
})

// While updating we need to send {runValidators: true} so that the validators are checked while updating the data in DB

