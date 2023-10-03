const express = require('express')
const app = express()
const path = require("path")

const port = 3000;


// for ejs
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"))

app.get('/home', function (req, res) {
    res.render("home")
})

// all paths...

// app.get('/home', function (req, res) {
//     res.send(`This is home`)
// })
// app.get('/events', function (req, res) {
//     res.send(`This is events`)
// })
// app.get('/contact', function (req, res) {
//     res.send(`This is contact`)
// })
// app.get('*', function (req, res) {
//     res.send(`This is *`)
// })

// Using params in url
// http://localhost:3000/apnacollege

// app.get('/:username', function (req, res) {
//     res.send(`Hey this is user: ${req.params.username}`)
// })

// Query strings

app.get('/search', function (req, res) {
    res.send(`Question: ${req.query.q}`)
})

app.get('*', function (req, res) {
    res.send(`Error 404 Not Found`)
})

app.listen(port, () => {
    console.log(`Server in running on port ${port}`);
})

// app.use((req, res) => {
//     res.send("ok")
//     console.log("ok");
// })