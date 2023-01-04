const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")

const postRoutes = require("./routes/posts")
const userRoutes = require("./routes/user")

// express app
const app = express()


// middleware
app.use(express.json()) // used to need body-parser
app.use((req, res, next) => {
    
    next()
})

// routes
// Need to take out the below lines. They are causing app to fail in heroku. I will implement full routes individually
app.use(/*'/api/posts', */postRoutes)
app.use(/*'/api/user', */userRoutes)

mongoose.set('strictQuery', false)

// connectt to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected")
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Listening")
        })
    })
    .catch((error) => {
        console.log(error)
    })


