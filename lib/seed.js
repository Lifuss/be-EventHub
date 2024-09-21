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
// seed.ts
const mongoose_1 = __importDefault(require("mongoose"));
const faker_1 = require("@faker-js/faker");
const Event_1 = __importDefault(require("../models/Event"));
const server_1 = require("../server");
mongoose_1.default
    .connect(server_1.dbUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));
const generateParticipants = (num) => {
    const participants = [];
    for (let i = 0; i < num; i++) {
        participants.push({
            fullName: faker_1.faker.name.fullName(),
            email: faker_1.faker.internet.email(),
            dateOfBirth: faker_1.faker.date.birthdate({ min: 18, max: 60, mode: "age" }),
            hearAboutUs: faker_1.faker.helpers.arrayElement([
                "friends",
                "social",
                "myself",
                "other",
            ]),
        });
    }
    return participants;
};
const generateEvents = (num) => {
    const events = [];
    for (let i = 0; i < num; i++) {
        events.push({
            title: faker_1.faker.music.genre() + " Event",
            description: faker_1.faker.lorem.sentence(),
            eventDate: faker_1.faker.date.future(),
            organizer: faker_1.faker.company.name(),
            participants: generateParticipants(7),
        });
    }
    return events;
};
const seedDB = (num) => __awaiter(void 0, void 0, void 0, function* () {
    yield Event_1.default.deleteMany({});
    const events = generateEvents(num);
    yield Event_1.default.insertMany(events);
    console.log(`Database seeded with ${num} events!`);
});
seedDB(120).then(() => {
    mongoose_1.default.connection.close();
});
