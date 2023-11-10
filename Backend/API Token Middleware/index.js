const express = require('express');
// importing custom error class
const ExpressError = require('./ExpressError');
const app = express();
const port = 8080;
const api_key_ = "IHJSnhdoih02";

// Using Middlewares
// app.use('/api', (req, res, next) => {
//     let { api_key } = req.query;
//     if (api_key_ == api_key) {
//         next();
//     }
//     else {
//         res.send("ACCESS DENIED");
//     }
// })

// also we can store the Middlewares as a function and use multiple middlewares inside get
const checkToken = (req, res, next) => {
    let { api_key } = req.query;
    if (api_key_ == api_key) {
        next();
    }
    else {
        // Throwing new errors...
        // throw new Error("ACCESS DENIED");
        throw new ExpressError(401, "STATUS DENIED");
        // res.send("ACCESS DENIED");
    }
}

// Checking token with multiple middlewares concept
app.get('/api', checkToken, (req, res) => {
    res.send("ACCESS GRANTED");
})

// Custom Error handling
app.use((err, req, res, next) => {
    let { status, message } = err;
    res.status(status).send(message);
})


app.listen(port, () => {
    console.log("Server is listening on port " + port);
})