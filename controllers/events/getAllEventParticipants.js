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
const getAllEventParticipants = (0, ctrlWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const event = yield Event_1.default.findById(id);
    if (!event) {
        console.log(event);
        res.status(404).json({ message: "Event not found =(" });
    }
    res.status(200).json({
        message: "Successful",
        event,
        participants: event === null || event === void 0 ? void 0 : event.participants,
    });
}));
exports.default = getAllEventParticipants;
