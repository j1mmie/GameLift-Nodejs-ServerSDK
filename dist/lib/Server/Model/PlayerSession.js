"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Long = require("long");
var PlayerSessionStatus_1 = require("./PlayerSessionStatus");
var PlayerSession = /** @class */ (function () {
    function PlayerSession() {
        this.Status = PlayerSessionStatus_1.PlayerSessionStatus.NOT_SET;
        this.Port = 0;
        this.CreationTime = Long.ZERO;
        this.TerminationTime = Long.ZERO;
    }
    return PlayerSession;
}());
exports.PlayerSession = PlayerSession;
//# sourceMappingURL=PlayerSession.js.map