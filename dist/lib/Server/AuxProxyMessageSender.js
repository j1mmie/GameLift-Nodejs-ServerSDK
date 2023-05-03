"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pDefer = require("p-defer");
var pTimeout = require("p-timeout");
var getDebug = require("debug");
var sdk = require("../Google/Sdk");
var GameLiftErrors_1 = require("../Common/GameLiftErrors");
var GenericOutcome_1 = require("../Common/GenericOutcome");
var DescribePlayerSessionsOutcome_1 = require("../Common/DescribePlayerSessionsOutcome");
var StartMatchBackfillOutcome_1 = require("../Common/StartMatchBackfillOutcome");
var BackfillDataMapper_1 = require("./Model/BackfillDataMapper");
var DescribePlayerSessionsResultMapper_1 = require("./Model/DescribePlayerSessionsResultMapper");
var PlayerSessionCreationPolicy_1 = require("./Model/PlayerSessionCreationPolicy");
var DescribePlayerSessionsRequestMapper_1 = require("./Model/DescribePlayerSessionsRequestMapper");
var AuxProxyMessageSender = /** @class */ (function () {
    function AuxProxyMessageSender(socket) {
        this.socket = socket;
    }
    AuxProxyMessageSender.prototype.CreateAckFunctionForStartMatchBackfill = function (deferred) {
        return function (ack, response) {
            AuxProxyMessageSender.debug("Got ack " + ack + " with response " + response);
            if (null == ack) {
                deferred.resolve(new StartMatchBackfillOutcome_1.StartMatchBackfillOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
                return;
            }
            var success = ack;
            if (success) {
                var deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse.fromObject(JSON.parse(response));
                var translation = BackfillDataMapper_1.BackfillDataMapper.ParseFromBufferedBackfillMatchmakingResponse(deserialized);
                deferred.resolve(new StartMatchBackfillOutcome_1.StartMatchBackfillOutcome(translation));
            }
            else {
                deferred.resolve(new StartMatchBackfillOutcome_1.StartMatchBackfillOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
            }
        };
    };
    AuxProxyMessageSender.prototype.CreateAckFunctionForDescribePlayerSessions = function (deferred) {
        return function (ack, response) {
            AuxProxyMessageSender.debug("Got ack " + ack + " with response " + response);
            if (null == ack) {
                deferred.resolve(new DescribePlayerSessionsOutcome_1.DescribePlayerSessionsOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
                return;
            }
            var success = ack;
            if (success) {
                var deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse.fromObject(JSON.parse(response));
                var translation = DescribePlayerSessionsResultMapper_1.DescribePlayerSessionsResultMapper.ParseFromBufferedDescribePlayerSessionsResponse(deserialized);
                deferred.resolve(new DescribePlayerSessionsOutcome_1.DescribePlayerSessionsOutcome(translation));
            }
            else {
                deferred.resolve(new DescribePlayerSessionsOutcome_1.DescribePlayerSessionsOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
            }
        };
    };
    AuxProxyMessageSender.prototype.ProcessReady = function (port, logPathsToUpload) {
        var pReady = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ProcessReady();
        pReady.port = port;
        pReady.logPathsToUpload = logPathsToUpload;
        return this.EmitEventGeneric(pReady);
    };
    AuxProxyMessageSender.prototype.ProcessEnding = function () {
        var pEnding = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ProcessEnding();
        return this.EmitEventGeneric(pEnding);
    };
    AuxProxyMessageSender.prototype.ActivateGameSession = function (gameSessionId) {
        var activateGameSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSessionActivate();
        activateGameSession.gameSessionId = gameSessionId;
        return this.EmitEventGeneric(activateGameSession);
    };
    AuxProxyMessageSender.prototype.TerminateGameSession = function (gameSessionId) {
        var terminateGameSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.GameSessionTerminate();
        terminateGameSession.gameSessionId = gameSessionId;
        return this.EmitEventGeneric(terminateGameSession);
    };
    AuxProxyMessageSender.prototype.UpdatePlayerSessionCreationPolicy = function (gameSessionId, playerSessionPolicy) {
        var policy = new sdk.com.amazon.whitewater.auxproxy.pbuffer.UpdatePlayerSessionCreationPolicy();
        policy.gameSessionId = gameSessionId;
        policy.newPlayerSessionCreationPolicy = PlayerSessionCreationPolicy_1.PlayerSessionCreationPolicyMapper.GetNameForPlayerSessionCreationPolicy(playerSessionPolicy);
        return this.EmitEventGeneric(policy);
    };
    AuxProxyMessageSender.prototype.AcceptPlayerSession = function (playerSessionId, gameSessionId) {
        var acceptPlayerSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.AcceptPlayerSession();
        acceptPlayerSession.playerSessionId = playerSessionId;
        acceptPlayerSession.gameSessionId = gameSessionId;
        return this.EmitEventGeneric(acceptPlayerSession);
    };
    AuxProxyMessageSender.prototype.RemovePlayerSession = function (playerSessionId, gameSessionId) {
        var removePlayerSession = new sdk.com.amazon.whitewater.auxproxy.pbuffer.RemovePlayerSession();
        removePlayerSession.playerSessionId = playerSessionId;
        removePlayerSession.gameSessionId = gameSessionId;
        return this.EmitEventGeneric(removePlayerSession);
    };
    AuxProxyMessageSender.prototype.DescribePlayerSessions = function (request) {
        AuxProxyMessageSender.debug("Describing player sessions " + request);
        var translation = DescribePlayerSessionsRequestMapper_1.DescribePlayerSessionsRequestMapper.ParseFromDescribePlayerSessionsRequest(request);
        var deferred = pDefer();
        var ackFunction = this.CreateAckFunctionForDescribePlayerSessions(deferred);
        return this.EmitEvent(translation, ackFunction, deferred, AuxProxyMessageSender.DESCRIBE_PLAYER_SESSIONS_ERROR);
    };
    AuxProxyMessageSender.prototype.BackfillMatchmaking = function (request) {
        var translation = BackfillDataMapper_1.BackfillDataMapper.CreateBufferedBackfillMatchmakingRequest(request);
        var deferred = pDefer();
        var ackFunction = this.CreateAckFunctionForStartMatchBackfill(deferred);
        return this.EmitEvent(translation, ackFunction, deferred, AuxProxyMessageSender.START_MATCH_BACKFILL_ERROR);
    };
    AuxProxyMessageSender.prototype.StopMatchmaking = function (request) {
        var translation = BackfillDataMapper_1.BackfillDataMapper.CreateBufferedStopMatchmakingRequest(request);
        var deferred = pDefer();
        var ackFunction = this.CreateAckFunctionGeneric(deferred);
        return this.EmitEvent(translation, ackFunction, deferred, AuxProxyMessageSender.STOP_MATCH_BACKFILL_ERROR);
    };
    AuxProxyMessageSender.prototype.ReportHealth = function (healthStatus) {
        var rHealth = new sdk.com.amazon.whitewater.auxproxy.pbuffer.ReportHealth();
        rHealth.healthStatus = healthStatus;
        return this.EmitEventGeneric(rHealth);
    };
    AuxProxyMessageSender.prototype.CreateAckFunctionGeneric = function (deferred) {
        return function (ack) {
            AuxProxyMessageSender.debug("Got ack " + ack);
            if (null == ack) {
                deferred.resolve(new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
                return;
            }
            var success = ack;
            if (success) {
                deferred.resolve(new GenericOutcome_1.GenericOutcome());
            }
            else {
                deferred.resolve(new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED)));
            }
        };
    };
    AuxProxyMessageSender.prototype.EmitEventGeneric = function (message) {
        var deferred = pDefer();
        var ackFunction = this.CreateAckFunctionGeneric(deferred);
        return this.EmitEvent(message, ackFunction, deferred, AuxProxyMessageSender.GENERIC_ERROR);
    };
    AuxProxyMessageSender.prototype.EmitEvent = function (message, ackFunction, deferred, error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AuxProxyMessageSender.debug("Emitting event for message " + JSON.stringify(message.toJSON()));
                        this.socket.emit('com.amazon.whitewater.auxproxy.pbuffer.' + message.constructor.name, message.constructor.encode(message).finish(), ackFunction);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pTimeout(deferred.promise, 30 * 1000)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, error];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuxProxyMessageSender.debug = getDebug('AuxProxyMessageSender');
    AuxProxyMessageSender.GENERIC_ERROR = new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.LOCAL_CONNECTION_FAILED));
    AuxProxyMessageSender.DESCRIBE_PLAYER_SESSIONS_ERROR = new DescribePlayerSessionsOutcome_1.DescribePlayerSessionsOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED));
    AuxProxyMessageSender.START_MATCH_BACKFILL_ERROR = new StartMatchBackfillOutcome_1.StartMatchBackfillOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED));
    AuxProxyMessageSender.STOP_MATCH_BACKFILL_ERROR = new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.SERVICE_CALL_FAILED));
    return AuxProxyMessageSender;
}());
exports.AuxProxyMessageSender = AuxProxyMessageSender;
//# sourceMappingURL=AuxProxyMessageSender.js.map