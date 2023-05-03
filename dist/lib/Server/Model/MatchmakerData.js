"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var AttributeValue_1 = require("./AttributeValue");
var MatchmakerData = /** @class */ (function () {
    function MatchmakerData() {
        this.Players = [];
    }
    MatchmakerData.FromJson = function (json) {
        var obj = JSON.parse(json);
        var matchmakerData = new MatchmakerData();
        matchmakerData.MatchId = obj[MatchmakerData.FIELD_MATCH_ID];
        matchmakerData.MatchmakingConfigurationArn = obj[MatchmakerData.FIELD_MATCHMAKING_CONFIG_ARN];
        var parsedTeams = obj[MatchmakerData.FIELD_TEAMS];
        parsedTeams.forEach(function (parsedTeam) {
            matchmakerData.parseOutPlayersFromTeam(parsedTeam);
        });
        return matchmakerData;
    };
    MatchmakerData.PlayerFromJson = function (teamName, obj) {
        var player = new Player_1.Player();
        player.Team = teamName;
        player.PlayerId = obj[MatchmakerData.FIELD_PLAYER_ID];
        player.PlayerAttributes = MatchmakerData.ParsePlayerAttributes(obj[MatchmakerData.FIELD_ATTRIBUTES]);
        player.LatencyInMS = MatchmakerData.ParseLatency(obj[MatchmakerData.FIELD_LATENCY]);
        return player;
    };
    MatchmakerData.ParsePlayerAttributes = function (parsedAttrs) {
        if (parsedAttrs == null) {
            return undefined;
        }
        var attrs = {};
        Object.entries(parsedAttrs).forEach(function (oneAttr) {
            var val = MatchmakerData.ParseOneAttribute(oneAttr['1']);
            if (val != null) {
                attrs[oneAttr['0']] = val;
            }
        });
        return attrs;
    };
    MatchmakerData.ParseOneAttribute = function (parsedAttr) {
        var attributeType = parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_TYPE];
        switch (attributeType) {
            case 'DOUBLE':
                return new AttributeValue_1.AttributeValue(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE]);
            case 'STRING':
                return new AttributeValue_1.AttributeValue(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE]);
            case 'STRING_DOUBLE_MAP': {
                var values_1 = {};
                Object.entries(parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE]).forEach(function (onePair) {
                    values_1[onePair['0']] = onePair['1'];
                });
                return new AttributeValue_1.AttributeValue(values_1);
            }
            case 'STRING_LIST': {
                var listValues = parsedAttr[MatchmakerData.FIELD_ATTRIBUTE_VALUE];
                var values_2 = [];
                var x_1 = 0;
                listValues.forEach(function (val) {
                    values_2.push(val);
                    x_1++;
                });
                return new AttributeValue_1.AttributeValue(values_2);
            }
        }
        return undefined;
    };
    MatchmakerData.ParseLatency = function (parsedLatency) {
        if (parsedLatency == null) {
            return undefined;
        }
        var latency = {};
        // TODO: We currently don't include latency measurements in the matchmaker data.
        //       If we decide we want to we would need to add the parsing for that here.
        //
        // Reasons why we might want to avoid including it:
        //     (1) data could easily be out of date
        //     (2) the game server has been communicating regularly with all the players,
        //         so it's in a better position to know what the current latency is
        //     (3) including latency bulks up the size of the matchmaker data, which
        //         effectively reduces the maximum match size that can be supported
        //         before exceeding the maximum supported match size.
        return latency;
    };
    MatchmakerData.prototype.parseOutPlayersFromTeam = function (parsedTeam) {
        var _this = this;
        var teamName = parsedTeam[MatchmakerData.FIELD_NAME];
        var parsedPlayers = parsedTeam[MatchmakerData.FIELD_PLAYERS];
        parsedPlayers.forEach(function (parsedPlayer) {
            _this.Players.push(MatchmakerData.PlayerFromJson(teamName, parsedPlayer));
        });
    };
    // Match fields
    MatchmakerData.FIELD_MATCH_ID = 'matchId';
    MatchmakerData.FIELD_MATCHMAKING_CONFIG_ARN = 'matchmakingConfigurationArn';
    MatchmakerData.FIELD_TEAMS = 'teams';
    // Team fields
    MatchmakerData.FIELD_NAME = 'name';
    MatchmakerData.FIELD_PLAYERS = 'players';
    // Player fields
    MatchmakerData.FIELD_PLAYER_ID = 'playerId';
    MatchmakerData.FIELD_ATTRIBUTES = 'attributes';
    MatchmakerData.FIELD_LATENCY = 'attributes';
    // Attribute fields
    MatchmakerData.FIELD_ATTRIBUTE_TYPE = 'attributeType';
    MatchmakerData.FIELD_ATTRIBUTE_VALUE = 'valueAttribute';
    return MatchmakerData;
}());
exports.MatchmakerData = MatchmakerData;
//# sourceMappingURL=MatchmakerData.js.map