

const mongoose = require("mongoose")
const Perks = require("Listings.ts")
require("dotenv").config({path: "./config.env"})
mongoose.set("strictQuery", false);
mongoose.connect(String(process.env.MONGO_URI), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection;

const userSchema = new mongoose.Schema({
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  });

  const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        unique: true
    }
  })

  const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: String,
        required: true,
        unique: true,
    },
    emoji: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
  })

  const ListingSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true,
        unique: true,
    },
    perks:{
        type: String,
        required: true,
        unique: true
    }
  })
