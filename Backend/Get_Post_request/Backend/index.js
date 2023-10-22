const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/register', function (req, res) {
    res.render("loginData", {data : req.query})
})

app.post('/register', function (req, res) {
    let data = req.body
    res.render("loginData", {data: data})
})

app.listen(3000)