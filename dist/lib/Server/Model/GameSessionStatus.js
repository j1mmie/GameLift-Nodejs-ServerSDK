"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["NOT_SET"] = 0] = "NOT_SET";
    Status[Status["ACTIVE"] = 1] = "ACTIVE";
    Status[Status["ACTIVATING"] = 2] = "ACTIVATING";
    Status[Status["TERMINATED"] = 3] = "TERMINATED";
    Status[Status["TERMINATING"] = 4] = "TERMINATING";
})(Status = exports.Status || (exports.Status = {}));
var GameSessionStatus = /** @class */ (function () {
    function GameSessionStatus() {
    }
    GameSessionStatus.prototype.GetGameSessionStatusForName = function (name) {
        return undefined;
    };
    GameSessionStatus.prototype.GetNameForGameSessionStatus = function (value) {
        return undefined;
    };
    return GameSessionStatus;
}());
exports.GameSessionStatus = GameSessionStatus;
//# sourceMappingURL=GameSessionStatus.js.map