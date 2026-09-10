import mongoose from "mongoose";
const URLSchema = mongoose.Schema({
        shortID: {
            type: String,
            required: true,
            unique: true
        },
        longUrl: {
            type: String,
            required: true,
        },
    });
    export const URLs = mongoose.model("urls",URLSchema);