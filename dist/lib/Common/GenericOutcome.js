"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericOutcome = /** @class */ (function () {
    function GenericOutcome(error) {
        if (error === undefined) {
            this.Success = true;
        }
        else {
            this.Error = error;
            this.Success = false;
        }
    }
    return GenericOutcome;
}());
exports.GenericOutcome = GenericOutcome;
//# sourceMappingURL=GenericOutcome.js.map