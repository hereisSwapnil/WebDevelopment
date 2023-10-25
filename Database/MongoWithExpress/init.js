const mongoose = require('mongoose');
// Importing models
const Chat = require("./models/chat");

// Setting up mongoose instance
main()
    .then((res) => {
        console.log("Connection established (Mongoose connection)");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "mohit",
        to: "ramu",
        msg: "did you go school today?",
        createdAt: new Date()
    },
    {
        from: "chambal",
        to: "sita",
        msg: "please send me the homework",
        createdAt: new Date()
    },
    {
        from: "meenu",
        to: "roshan",
        msg: "are you free tonight",
        createdAt: new Date()
    },
    {
        from: "guddi",
        to: "preet",
        msg: "is school open tommorrow?",
        createdAt: new Date()
    },
    {
        from: "meena",
        to: "arti",
        msg: "what is your address?",
        createdAt: new Date()
    },
];

Chat.insertMany(chats);

// Saving a test data
// const chat1 = new Chat({
//     from: "neha",
//     to: "rohan",
//     msg: "",
//     createdAt: new Date()
// })

// chat1.save();
// Chat.deleteMany({from: "neha"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })