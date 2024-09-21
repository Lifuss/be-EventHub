"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestError = void 0;
class RequestError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.RequestError = RequestError;
const messages = {
    400: "Bad request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
};
const requestError = (status, message = messages[status]) => {
    const error = new RequestError(status, message);
    return error;
};
exports.default = requestError;
