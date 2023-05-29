const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = "mongodb+srv://rishikcaptain:5xgAUj1QY5Y2kYf1@cluster0.piqswd5.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected")
    })
}

module.exports = connectToMongo;
