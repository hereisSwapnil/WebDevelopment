const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.get('/profile', function (req, res) {
  res.render("profile", {name:"Swapnil", username:"swamp"})
})

app.listen(3000)