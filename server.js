"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUri = void 0;
const main_1 = __importDefault(require("./main"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
const { MONGO_USERNAME, MONGO_PASSWORD, DB_CLUSTER, DB_NAME, PORT } = process.env;
const port = typeof PORT === "number" ? PORT : 3030;
exports.dbUri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${DB_CLUSTER}.ptjlibm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose_1.default
    .connect(exports.dbUri)
    .then(() => {
    main_1.default.listen(port, () => {
        console.log(`Server is running on ${port} port.`);
    });
})
    .catch((err) => {
    console.log(err);
    process.exit(1);
});
