"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ctrlWrapper_1 = __importDefault(require("../../lib/ctrlWrapper"));
const Event_1 = __importDefault(require("../../models/Event"));
const getEvents = (0, ctrlWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = "1", limit = "12", sort = "title", order = "desc", } = req.query;
    const sortOrder = order === "asc" ? 1 : -1;
    const sortOptions = {
        [sort]: sortOrder,
    };
    const events = yield Event_1.default.find({})
        .skip((+page - 1) * +limit)
        .limit(+limit)
        .sort(sortOptions);
    if (!events) {
        console.log(events);
        res.status(404).json({ message: "Events not found =(" });
    }
    const total = yield Event_1.default.countDocuments({});
    const totalPages = Math.ceil(total / +limit);
    const hasMore = +page < totalPages;
    res
        .status(200)
        .json({ message: "Successful", hasMore, total, totalPages, events });
}));
exports.default = getEvents;
