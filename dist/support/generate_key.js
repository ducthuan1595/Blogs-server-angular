"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const key1 = crypto_1.default.randomBytes(32).toString('hex');
const key2 = crypto_1.default.randomBytes(32).toString('hex');