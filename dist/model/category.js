"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true
    },
    slogan: {
        type: String,
        require: true
    },
    image: {
        url: {
            type: String,
        },
        public_id: {
            type: String
        }
    }
}, { timestamps: true });
exports.default = mongoose_1.default.model('Category', schema);
