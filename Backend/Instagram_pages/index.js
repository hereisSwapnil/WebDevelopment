const express = require('express')
const app = express()
const data = require("./data.json")

app.set("view engine", "ejs")

app.get('/:username', function (req, res) {
    username = req.params.username
    if (data[username] == undefined) {
        res.send("Username not found...")
    } else {
        console.log(data[username]["name"]);
        res.render("profile.ejs", { data: data[username] })
    }
}
)

app.listen(3000)