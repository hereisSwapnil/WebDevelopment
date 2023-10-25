// Importing required dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
// Importing models
const Chat = require("./models/chat");
// App instance
const app = express();
// Port on which server will listen
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// for reading post requests
app.use(express.urlencoded({ extended: true }));

// TO be able to override and send patch and delete requests also
app.use(methodOverride('_method'));

main()
    .then((res) => {
        console.log("Connection established (Mongoose connection)");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Basic '/' route
app.get('/', async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render('index', { chats });
})

app.get('/chat/new', async (req, res) => {
    res.render('new');
})

app.get('/chat/:id/edit', async (req, res) => {
    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render('edit', { chat });
})

app.post('/chat', async (req, res) => {
    let { from, msg, to } = req.body;
    const chat = new Chat({
        from: from,
        msg: msg,
        to: to,
        createdAt: new Date()
    });
    chat.save()
        .then((res) => {
            console.log("Chat created successfully");
        }).catch((err) => {
            console.error("Error creating chat: ", err);
        });
    res.redirect('/');
})

app.put('/chat/:id', (req, res) => {
    let id = req.params.id;
    let msg = req.body.msg;
    Chat.findByIdAndUpdate(id, {
        msg: msg
    }).then((res) => {
        console.log("Chat updated successfully");
    }).catch((err) => {
        console.log("Error updating chat: ", err);
    });
    res.redirect('/');
})

app.delete('/chat/:id', (req, res) => {
    let id = req.params.id;
    let msg = req.body.msg;
    Chat.findByIdAndDelete(id)
        .then((res) => {
            console.log("Chat deleted successfully")
        })
        .catch((err) => {
            console.log("Error deleting chat: ", err);
        })
    res.redirect('/');
})

// app listening on port 8080
app.listen(port, () => {
    console.log("Server running on port " + port);
});
