"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameSession_1 = require("./GameSession");
var GameProperty_1 = require("./GameProperty");
var GameSessionMapper = /** @class */ (function () {
    function GameSessionMapper() {
    }
    GameSessionMapper.ParseFromBufferedGameSession = function (gameSession) {
        var translation = new GameSession_1.GameSession();
        translation.Name = gameSession.name;
        translation.FleetId = gameSession.fleetId;
        translation.GameSessionId = gameSession.gameSessionId;
        translation.MaximumPlayerSessionCount = gameSession.maxPlayers;
        translation.Port = gameSession.port;
        translation.IpAddress = gameSession.ipAddress;
        translation.GameSessionData = gameSession.gameSessionData;
        translation.MatchmakerData = gameSession.matchmakerData;
        translation.DnsName = gameSession.dnsName;
        gameSession.gameProperties.forEach(function (gameProperty) {
            var translatedGameProperty = new GameProperty_1.GameProperty();
            translatedGameProperty.Key = gameProperty.key != null ? gameProperty.key : undefined;
            translatedGameProperty.Value = gameProperty.value != null ? gameProperty.value : undefined;
            translation.GameProperties.push(translatedGameProperty);
        });
        return translation;
    };
    return GameSessionMapper;
}());
exports.GameSessionMapper = GameSessionMapper;
//# sourceMappingURL=GameSessionMapper.js.map