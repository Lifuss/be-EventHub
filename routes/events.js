"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getEvents_1 = __importDefault(require("../controllers/events/getEvents"));
const registerParticipantToEvent_1 = __importDefault(require("../controllers/events/registerParticipantToEvent"));
const validateBodyJoi_1 = __importDefault(require("../middlewares/validateBodyJoi"));
const joiValidation_1 = require("../lib/joiValidation");
const getEventById_1 = __importDefault(require("../controllers/events/getEventById"));
const getAllEventParticipants_1 = __importDefault(require("../controllers/events/getAllEventParticipants"));
const router = (0, express_1.Router)();
router.get("/", getEvents_1.default);
router.post("/participants", (0, validateBodyJoi_1.default)(joiValidation_1.registerSchema), registerParticipantToEvent_1.default);
router.get("/:id", getEventById_1.default);
router.get("/participants/:id", getAllEventParticipants_1.default);
exports.default = router;
