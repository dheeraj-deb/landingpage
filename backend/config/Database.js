const mongoose = require('mongoose')

exports.connect_db = (callback) => {
    mongoose.connect('mongodb://localhost:27017/landingpage').then((data) => {
        callback(data)
    }).catch((err) => {
        console.log(err)
    })
}