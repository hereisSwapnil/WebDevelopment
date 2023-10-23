const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "swamp",
        content: "Follow me for more information"
    },
    {
        id: uuidv4(),
        username: "codermayank",
        content: "Learn ejs template from me"
    },
    {
        id: uuidv4(),
        username: "singerrahul",
        content: "concert starting in 2 days"
    },
    {
        id: uuidv4(),
        username: "virat",
        content: "Made a century today"
    },
]

app.get('/', function (req, res) {
    res.send("Server is working properly");
})

app.get('/posts', function (req, res) {
    res.render("index", { posts });
})

app.get('/posts/new', function (req, res) {
    res.render("new");
})

app.get('/posts/:id', function (req, res) {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show", { post });
});

app.post('/posts', function (req, res) {
    let { username, content } = req.body;
    posts.push({ id: uuidv4(), username: username, content: content });
    res.redirect('/posts');
})

app.get('/posts/:id/edit', function (req, res) {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id)
    res.render('edit', { post });
})

app.patch('/posts/:id', function (req, res) {
    let { content } = req.body;
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    post.content = content;
    res.redirect('/posts');
})

app.delete('/posts/:id', function (req, res) {
    let { content } = req.body;
    let { id } = req.params;
    posts = posts.filter((p) => p.id != id);
    res.redirect('/posts');
})

app.listen(port, () => {
    console.log("Server running on port : " + port);
});