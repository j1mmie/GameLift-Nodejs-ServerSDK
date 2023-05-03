"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerSessionStatus;
(function (PlayerSessionStatus) {
    PlayerSessionStatus[PlayerSessionStatus["NOT_SET"] = 0] = "NOT_SET";
    PlayerSessionStatus[PlayerSessionStatus["RESERVED"] = 1] = "RESERVED";
    PlayerSessionStatus[PlayerSessionStatus["ACTIVE"] = 2] = "ACTIVE";
    PlayerSessionStatus[PlayerSessionStatus["COMPLETED"] = 3] = "COMPLETED";
    PlayerSessionStatus[PlayerSessionStatus["TIMEDOUT"] = 4] = "TIMEDOUT";
})(PlayerSessionStatus = exports.PlayerSessionStatus || (exports.PlayerSessionStatus = {}));
var PlayerSessionStatusMapper = /** @class */ (function () {
    function PlayerSessionStatusMapper() {
    }
    PlayerSessionStatusMapper.GetPlayerSessionStatusForName = function (name) {
        switch (name) {
            case PlayerSessionStatusMapper.RESERVED:
                return PlayerSessionStatus.RESERVED;
            case PlayerSessionStatusMapper.ACTIVE:
                return PlayerSessionStatus.ACTIVE;
            case PlayerSessionStatusMapper.COMPLETED:
                return PlayerSessionStatus.COMPLETED;
            case PlayerSessionStatusMapper.TIMEDOUT:
                return PlayerSessionStatus.TIMEDOUT;
            default:
                return PlayerSessionStatus.NOT_SET;
        }
    };
    PlayerSessionStatusMapper.GetNameForPlayerSessionStatus = function (value) {
        switch (value) {
            case PlayerSessionStatus.RESERVED:
                return PlayerSessionStatusMapper.RESERVED;
            case PlayerSessionStatus.ACTIVE:
                return PlayerSessionStatusMapper.ACTIVE;
            case PlayerSessionStatus.COMPLETED:
                return PlayerSessionStatusMapper.COMPLETED;
            case PlayerSessionStatus.TIMEDOUT:
                return PlayerSessionStatusMapper.TIMEDOUT;
            default:
                return PlayerSessionStatusMapper.NOT_SET;
        }
    };
    PlayerSessionStatusMapper.RESERVED = 'RESERVED';
    PlayerSessionStatusMapper.ACTIVE = 'ACTIVE';
    PlayerSessionStatusMapper.COMPLETED = 'COMPLETED';
    PlayerSessionStatusMapper.TIMEDOUT = 'TIMEDOUT';
    PlayerSessionStatusMapper.NOT_SET = 'NOT_SET';
    return PlayerSessionStatusMapper;
}());
exports.PlayerSessionStatusMapper = PlayerSessionStatusMapper;
//# sourceMappingURL=PlayerSessionStatus.js.map