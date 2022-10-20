import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
	name: String,
	age: Number,
	sex: String
})

const personalQuestions = mongoose.model("personalQuestions", questionSchema);
export default personalQuestions;