const mongoose = require("mongoose")
require("dotenv").config({path: "./config.env"})
mongoose.set("strictQuery", false);
mongoose.connect(String(process.env.MONGO_URI), {
    useNewUrlParser: true,
    
})

