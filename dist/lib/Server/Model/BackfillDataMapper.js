"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sdk = require("../../Google/Sdk");
var AttributeValue_1 = require("./AttributeValue");
var StartMatchBackfillResult_1 = require("./StartMatchBackfillResult");
var BackfillDataMapper = /** @class */ (function () {
    function BackfillDataMapper() {
    }
    BackfillDataMapper.CreateBufferedAttributeValue = function (attr) {
        var translated = new sdk.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue();
        translated.type = attr.attrType;
        switch (attr.attrType) {
            case AttributeValue_1.AttributeValue.AttrType.STRING:
                translated.S = attr.S;
                break;
            case AttributeValue_1.AttributeValue.AttrType.DOUBLE:
                translated.N = attr.N;
                break;
            case AttributeValue_1.AttributeValue.AttrType.STRING_LIST:
                attr.SL.forEach(function (str) {
                    translated.SL.push(str);
                });
                break;
            case AttributeValue_1.AttributeValue.AttrType.STRING_DOUBLE_MAP:
                Object.entries(attr.SDM).forEach(function (entry) {
                    translated.SDM[entry['0']] = entry['1'];
                });
                break;
        }
        return translated;
    };
    BackfillDataMapper.CreateBufferedPlayer = function (player) {
        var translation = new sdk.com.amazon.whitewater.auxproxy.pbuffer.Player();
        translation.playerId = player.PlayerId;
        translation.team = player.Team;
        if (player.LatencyInMS) {
            Object.entries(player.LatencyInMS).forEach(function (entry) {
                translation.latencyInMs[entry['0']] = entry['1'];
            });
        }
        if (player.PlayerAttributes) {
            Object.entries(player.PlayerAttributes).forEach(function (entry) {
                translation.playerAttributes[entry['0']] = BackfillDataMapper.CreateBufferedAttributeValue(entry['1']);
            });
        }
        return translation;
    };
    BackfillDataMapper.CreateBufferedBackfillMatchmakingRequest = function (request) {
        var translated = new sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest();
        translated.ticketId = request.TicketId;
        translated.gameSessionArn = request.GameSessionArn;
        translated.matchmakingConfigurationArn = request.MatchmakingConfigurationArn;
        for (var i = 0; i < request.Players.length; i++) {
            translated.players.push(BackfillDataMapper.CreateBufferedPlayer(request.Players[i]));
        }
        return translated;
    };
    BackfillDataMapper.ParseFromBufferedBackfillMatchmakingResponse = function (response) {
        var result = new StartMatchBackfillResult_1.StartMatchBackfillResult();
        result.TicketId = response.ticketId;
        return result;
    };
    BackfillDataMapper.CreateBufferedStopMatchmakingRequest = function (request) {
        var translated = new sdk.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest();
        translated.ticketId = request.TicketId;
        translated.gameSessionArn = request.GameSessionArn;
        translated.matchmakingConfigurationArn = request.MatchmakingConfigurationArn;
        return translated;
    };
    return BackfillDataMapper;
}());
exports.BackfillDataMapper = BackfillDataMapper;
//# sourceMappingURL=BackfillDataMapper.js.map