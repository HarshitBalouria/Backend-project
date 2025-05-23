import { Schema } from "mongoose";
import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSChema = new Schema({
    videoFile: {
        type: String,
        required: true,
    },
    thumbNail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true })

videoSChema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSChema)