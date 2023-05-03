"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AwsStringOutcome_1 = require("../Common/AwsStringOutcome");
var GenericOutcome_1 = require("../Common/GenericOutcome");
var ServerState_1 = require("./ServerState");
var GameLiftServerAPI = /** @class */ (function () {
    function GameLiftServerAPI() {
    }
    GameLiftServerAPI.GetSdkVersion = function () {
        return new AwsStringOutcome_1.AwsStringOutcome(GameLiftServerAPI.sdkVersion);
    };
    GameLiftServerAPI.InitSDK = function () {
        return ServerState_1.ServerState.Instance.InitializeNetworking();
    };
    GameLiftServerAPI.ProcessReady = function (processParameters) {
        return ServerState_1.ServerState.Instance.ProcessReady(processParameters);
    };
    GameLiftServerAPI.ProcessEnding = function () {
        return ServerState_1.ServerState.Instance.ProcessEnding();
    };
    GameLiftServerAPI.ActivateGameSession = function () {
        return ServerState_1.ServerState.Instance.ActivateGameSession();
    };
    GameLiftServerAPI.TerminateGameSession = function () {
        return ServerState_1.ServerState.Instance.TerminateGameSession();
    };
    GameLiftServerAPI.UpdatePlayerSessionCreationPolicy = function (playerSessionPolicy) {
        return ServerState_1.ServerState.Instance.UpdatePlayerSessionCreationPolicy(playerSessionPolicy);
    };
    GameLiftServerAPI.GetGameSessionId = function () {
        return ServerState_1.ServerState.Instance.GetGameSessionId();
    };
    GameLiftServerAPI.GetTerminationTime = function () {
        return ServerState_1.ServerState.Instance.GetTerminationTime();
    };
    GameLiftServerAPI.AcceptPlayerSession = function (playerSessionId) {
        return ServerState_1.ServerState.Instance.AcceptPlayerSession(playerSessionId);
    };
    GameLiftServerAPI.RemovePlayerSession = function (playerSessionId) {
        return ServerState_1.ServerState.Instance.RemovePlayerSession(playerSessionId);
    };
    GameLiftServerAPI.DescribePlayerSessions = function (describePlayerSessionsRequest) {
        return ServerState_1.ServerState.Instance.DescribePlayerSessions(describePlayerSessionsRequest);
    };
    GameLiftServerAPI.StartMatchBackfill = function (request) {
        return ServerState_1.ServerState.Instance.BackfillMatchmaking(request);
    };
    GameLiftServerAPI.StopMatchBackfill = function (request) {
        return ServerState_1.ServerState.Instance.StopMatchmaking(request);
    };
    GameLiftServerAPI.Destroy = function () {
        ServerState_1.ServerState.Instance.Shutdown();
        return new GenericOutcome_1.GenericOutcome();
    };
    GameLiftServerAPI.sdkVersion = '3.2.1';
    return GameLiftServerAPI;
}());
exports.GameLiftServerAPI = GameLiftServerAPI;
//# sourceMappingURL=GameLiftServerAPI.js.map