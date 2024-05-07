import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";

const app = express()
dotenv.config();

app.use(express.json());

const PORT: string = process.env.PORT!
const MONGO_URI: string = process.env.MONGO_URI!

mongoose
	.connect(MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(
				`Successfully connected to MongoDB! Server listening on port ${PORT}`
			);
		});
	})
	.catch(err => {
		console.log(err);
	});