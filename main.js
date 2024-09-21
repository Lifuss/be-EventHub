"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const events_1 = __importDefault(require("./routes/events"));
const format = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)(format));
app.use("/api/events", events_1.default);
app.use((req, res) => {
    const error = new Error("Not Found - " + req.originalUrl);
    res.status(404).json({ message: error.message });
});
app.use((err, req, res, _) => {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
});
exports.default = app;
