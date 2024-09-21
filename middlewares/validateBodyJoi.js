"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestErrors_1 = __importDefault(require("../lib/requestErrors"));
const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            throw (0, requestErrors_1.default)(400, error.message);
        }
        next();
    };
    return func;
};
exports.default = validateBody;
