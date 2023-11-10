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

// Importing custom error handling function
const expressError = require("./expressError");

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

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err));
    }
}

// Basic '/' route
app.get('/', wrapAsync(async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render('index', { chats });
}));

app.get('/chat/new', wrapAsync(async (req, res) => {
    res.render('new');
}));

// Try Catch Method to handle errors
// app.get('/chat/:id/edit', (req, res, next) => {
//     const id = req.params.id;
//     Chat.findById(id)
//         .then(chat => {
//             if (chat === null) {
//                 return next(new expressError(500, 'Chat not Found'));
//             }
//             res.render('edit', { chat });
//         })
//         .catch(err => {
//             next(err);
//         });
// });

app.get('/chat/:id/edit', wrapAsync(async (req, res, next) => {
    let id = req.params.id;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new expressError(500, "Chat not Found"));
    }
    res.render('edit', { chat });
}));

app.post('/chat', wrapAsync(async (req, res) => {
    let { from, msg, to } = req.body;
    const chat = new Chat({
        from: from,
        msg: msg,
        to: to,
        createdAt: new Date()
    });
    await chat.save()
        .then((res) => {
            console.log("Chat created successfully");
        })
    res.redirect('/');
}));

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

app.use((err, req, res, next) => {
    console.log("\n----Error----");
    console.log(err.name);
    console.log(err.message);
    console.log("----Error----\n");
    next();
})

// Error handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occured" } = err;
    res.status(err).send(message);
})

// app listening on port 8080
app.listen(port, () => {
    console.log("Server running on port " + port);
});
