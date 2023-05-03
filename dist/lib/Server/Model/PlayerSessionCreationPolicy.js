"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerSessionCreationPolicy;
(function (PlayerSessionCreationPolicy) {
    PlayerSessionCreationPolicy[PlayerSessionCreationPolicy["NOT_SET"] = 0] = "NOT_SET";
    PlayerSessionCreationPolicy[PlayerSessionCreationPolicy["ACCEPT_ALL"] = 1] = "ACCEPT_ALL";
    PlayerSessionCreationPolicy[PlayerSessionCreationPolicy["DENY_ALL"] = 2] = "DENY_ALL";
})(PlayerSessionCreationPolicy = exports.PlayerSessionCreationPolicy || (exports.PlayerSessionCreationPolicy = {}));
var PlayerSessionCreationPolicyMapper = /** @class */ (function () {
    function PlayerSessionCreationPolicyMapper() {
    }
    PlayerSessionCreationPolicyMapper.GetPlayerSessionCreationPolicyForName = function (name) {
        switch (name) {
            case PlayerSessionCreationPolicyMapper.ACCEPT_ALL:
                return PlayerSessionCreationPolicy.ACCEPT_ALL;
            case PlayerSessionCreationPolicyMapper.DENY_ALL:
                return PlayerSessionCreationPolicy.DENY_ALL;
            default:
                return PlayerSessionCreationPolicy.NOT_SET;
        }
    };
    PlayerSessionCreationPolicyMapper.GetNameForPlayerSessionCreationPolicy = function (value) {
        switch (value) {
            case PlayerSessionCreationPolicy.ACCEPT_ALL:
                return PlayerSessionCreationPolicyMapper.ACCEPT_ALL;
            case PlayerSessionCreationPolicy.DENY_ALL:
                return PlayerSessionCreationPolicyMapper.DENY_ALL;
            default:
                return PlayerSessionCreationPolicyMapper.NOT_SET;
        }
    };
    PlayerSessionCreationPolicyMapper.ACCEPT_ALL = 'ACCEPT_ALL';
    PlayerSessionCreationPolicyMapper.DENY_ALL = 'DENY_ALL';
    PlayerSessionCreationPolicyMapper.NOT_SET = 'NOT_SET';
    return PlayerSessionCreationPolicyMapper;
}());
exports.PlayerSessionCreationPolicyMapper = PlayerSessionCreationPolicyMapper;
//# sourceMappingURL=PlayerSessionCreationPolicy.js.map