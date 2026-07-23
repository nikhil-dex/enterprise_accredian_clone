import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true, 
    },
    domain: {
        type: String,
        required: true,
    },
    candidates: {
        type: Number,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    }
},{ timestamps: true });

const Form = mongoose.models.Form || mongoose.model("Form",formSchema);

export default Form;