"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    eventId: joi_1.default.string(),
    credentials: joi_1.default.object({
        fullName: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        dateOfBirth: joi_1.default.date().required(),
        hearAboutUs: joi_1.default.string().valid("friends", "other", "social", "myself"),
    }),
});
