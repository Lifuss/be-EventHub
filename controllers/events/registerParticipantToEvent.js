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
const registerParticipant = (0, ctrlWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventId, credentials: newParticipant } = req.body;
    const applyParticipant = yield Event_1.default.findById(eventId);
    if (applyParticipant === null || applyParticipant === void 0 ? void 0 : applyParticipant.participants.find((el) => el.email === newParticipant.email)) {
        res.status(409).json({ message: "This participant already applied" });
        return;
    }
    if (!applyParticipant) {
        res.status(500).json({ message: "Applying participant failed" });
        return;
    }
    applyParticipant.participants.push(newParticipant);
    yield applyParticipant.save();
    res.status(201).json({ message: "Successful" });
}));
exports.default = registerParticipant;
