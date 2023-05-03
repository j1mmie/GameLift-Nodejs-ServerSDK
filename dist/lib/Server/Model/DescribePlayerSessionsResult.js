"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DescribePlayerSessionsResult = /** @class */ (function () {
    function DescribePlayerSessionsResult() {
        this.PlayerSessions = [];
    }
    DescribePlayerSessionsResult.prototype.AddPlayerSession = function (value) {
        if (this.PlayerSessions.length < DescribePlayerSessionsResult.MAX_PLAYER_SESSIONS) {
            this.PlayerSessions.push(value);
        }
    };
    DescribePlayerSessionsResult.MAX_PLAYER_SESSIONS = 1024;
    return DescribePlayerSessionsResult;
}());
exports.DescribePlayerSessionsResult = DescribePlayerSessionsResult;
//# sourceMappingURL=DescribePlayerSessionsResult.js.map