const mongoose = require("mongoose");
const mongoURI =
    process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : "mongodb+srv://payneskyler:hellotest@cluster0.ovg08.mongodb.net/mvc"
    // if your local mongodb
    // : 'mongodb://localhost/express-mvc'

mongoose.connect(mongoURI)
    .then(instance => console.log(`connected to: ${instance.connections[0].name}`))
    .catch(error => console.log("failed conn:", error))

module.exports = mongoose