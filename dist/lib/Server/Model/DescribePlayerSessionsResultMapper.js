"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Long = require("long");
var DescribePlayerSessionsResult_1 = require("./DescribePlayerSessionsResult");
var PlayerSession_1 = require("./PlayerSession");
var PlayerSessionStatus_1 = require("./PlayerSessionStatus");
var DescribePlayerSessionsResultMapper = /** @class */ (function () {
    function DescribePlayerSessionsResultMapper() {
    }
    DescribePlayerSessionsResultMapper.ParseFromBufferedDescribePlayerSessionsResponse = function (response) {
        var translation = new DescribePlayerSessionsResult_1.DescribePlayerSessionsResult();
        translation.NextToken = response.nextToken;
        translation.PlayerSessions = [];
        response.playerSessions.forEach(function (playerSession) {
            var translatedPlayerSession = new PlayerSession_1.PlayerSession();
            translatedPlayerSession.CreationTime =
                playerSession.creationTime != null ? playerSession.creationTime : Long.ZERO;
            translatedPlayerSession.FleetId =
                playerSession.fleetId != null ? playerSession.fleetId : undefined;
            translatedPlayerSession.GameSessionId =
                playerSession.gameSessionId != null ? playerSession.gameSessionId : undefined;
            translatedPlayerSession.IpAddress =
                playerSession.ipAddress != null ? playerSession.ipAddress : undefined;
            translatedPlayerSession.PlayerData =
                playerSession.playerData != null ? playerSession.playerData : undefined;
            translatedPlayerSession.PlayerId =
                playerSession.playerId != null ? playerSession.playerId : undefined;
            translatedPlayerSession.PlayerSessionId =
                playerSession.playerSessionId != null ? playerSession.playerSessionId : undefined;
            translatedPlayerSession.Port = playerSession.port != null ? playerSession.port : 0;
            translatedPlayerSession.Status = PlayerSessionStatus_1.PlayerSessionStatusMapper.GetPlayerSessionStatusForName(playerSession.status != null ? playerSession.status : undefined);
            translatedPlayerSession.TerminationTime = playerSession.terminationTime || Long.ZERO;
            translatedPlayerSession.DnsName =
                playerSession.dnsName != null ? playerSession.dnsName : undefined;
            translation.AddPlayerSession(translatedPlayerSession);
        });
        return translation;
    };
    return DescribePlayerSessionsResultMapper;
}());
exports.DescribePlayerSessionsResultMapper = DescribePlayerSessionsResultMapper;
//# sourceMappingURL=DescribePlayerSessionsResultMapper.js.map