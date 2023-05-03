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
var Long = require("long");
var pTimeout = require("p-timeout");
var sleep = require("sleep-promise");
var getDebug = require("debug");
var io = require("socket.io-client");
var AuxProxyMessageSender_1 = require("./AuxProxyMessageSender");
var Network_1 = require("./Network");
var GenericOutcome_1 = require("../Common/GenericOutcome");
var GameLiftErrors_1 = require("../Common/GameLiftErrors");
var AwsStringOutcome_1 = require("../Common/AwsStringOutcome");
var AwsLongOutcome_1 = require("../Common/AwsLongOutcome");
var DescribePlayerSessionsOutcome_1 = require("../Common/DescribePlayerSessionsOutcome");
var StartMatchBackfillOutcome_1 = require("../Common/StartMatchBackfillOutcome");
var GameSessionParser_1 = require("./GameSessionParser");
var GameSessionMapper_1 = require("./Model/GameSessionMapper");
var UpdateReason_1 = require("./Model/UpdateReason");
var UpdateGameSession_1 = require("./Model/UpdateGameSession");
var GameLiftServerAPI_1 = require("./GameLiftServerAPI");
var ServerState = /** @class */ (function () {
    function ServerState() {
        this.processReady = false;
        this.terminationTime = Long.NEG_ONE;
    }
    Object.defineProperty(ServerState, "Instance", {
        get: function () {
            return ServerState.instance;
        },
        enumerable: true,
        configurable: true
    });
    ServerState.prototype.ProcessReady = function (procParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.processReady = true;
                        this.processParameters = procParameters;
                        if (!ServerState.networkInitialized) {
                            return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                        }
                        return [4 /*yield*/, this.sender.ProcessReady(this.processParameters.Port, this.processParameters.LogParameters.LogPaths)];
                    case 1:
                        result = _a.sent();
                        this.StartHealthCheck();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ServerState.prototype.ProcessEnding = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                return [2 /*return*/, this.sender.ProcessEnding()];
            });
        });
    };
    ServerState.prototype.ActivateGameSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                if (!this.gameSessionId) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET))];
                }
                return [2 /*return*/, this.sender.ActivateGameSession(this.gameSessionId)];
            });
        });
    };
    ServerState.prototype.TerminateGameSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                if (!this.gameSessionId) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET))];
                }
                return [2 /*return*/, this.sender.TerminateGameSession(this.gameSessionId)];
            });
        });
    };
    ServerState.prototype.GetGameSessionId = function () {
        if (!this.gameSessionId) {
            return new AwsStringOutcome_1.AwsStringOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET));
        }
        return new AwsStringOutcome_1.AwsStringOutcome(this.gameSessionId);
    };
    ServerState.prototype.GetTerminationTime = function () {
        if (Long.NEG_ONE.compare(this.terminationTime) === 0) {
            return new AwsLongOutcome_1.AwsLongOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.TERMINATION_TIME_NOT_SET));
        }
        return new AwsLongOutcome_1.AwsLongOutcome(this.terminationTime);
    };
    ServerState.prototype.UpdatePlayerSessionCreationPolicy = function (playerSessionPolicy) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                if (!this.gameSessionId) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET))];
                }
                return [2 /*return*/, this.sender.UpdatePlayerSessionCreationPolicy(this.gameSessionId, playerSessionPolicy)];
            });
        });
    };
    ServerState.prototype.AcceptPlayerSession = function (playerSessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                if (!this.gameSessionId) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET))];
                }
                return [2 /*return*/, this.sender.AcceptPlayerSession(playerSessionId, this.gameSessionId)];
            });
        });
    };
    ServerState.prototype.RemovePlayerSession = function (playerSessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                if (!this.gameSessionId) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.GAMESESSION_ID_NOT_SET))];
                }
                return [2 /*return*/, this.sender.RemovePlayerSession(playerSessionId, this.gameSessionId)];
            });
        });
    };
    ServerState.prototype.DescribePlayerSessions = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ServerState.debug("Describing player sessions for playerSessionId " + request.PlayerSessionId);
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new DescribePlayerSessionsOutcome_1.DescribePlayerSessionsOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                else {
                    return [2 /*return*/, this.sender.DescribePlayerSessions(request)];
                }
                return [2 /*return*/];
            });
        });
    };
    ServerState.prototype.BackfillMatchmaking = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new StartMatchBackfillOutcome_1.StartMatchBackfillOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                else {
                    return [2 /*return*/, this.sender.BackfillMatchmaking(request)];
                }
                return [2 /*return*/];
            });
        });
    };
    ServerState.prototype.StopMatchmaking = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!ServerState.networkInitialized) {
                    return [2 /*return*/, new GenericOutcome_1.GenericOutcome(new GameLiftErrors_1.GameLiftError(GameLiftErrors_1.GameLiftErrorType.NETWORK_NOT_INITIALIZED))];
                }
                else {
                    return [2 /*return*/, this.sender.StopMatchmaking(request)];
                }
                return [2 /*return*/];
            });
        });
    };
    ServerState.prototype.StartHealthCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ServerState.debug('HealthCheck thread started.');
                        _a.label = 1;
                    case 1:
                        if (!this.processReady) return [3 /*break*/, 3];
                        this.ReportHealth();
                        return [4 /*yield*/, sleep(ServerState.HEALTHCHECK_TIMEOUT_SECONDS * 1000)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ServerState.prototype.ReportHealth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, healthCheckResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ServerState.debug('Reporting health using the OnHealthCheck callback.');
                        result = (function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, this.processParameters.OnHealthCheck()];
                        }); }); })();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, pTimeout(result, ServerState.HEALTHCHECK_TIMEOUT_SECONDS * 1000)];
                    case 2:
                        healthCheckResult = _a.sent();
                        ServerState.debug("Received health response from the server process: " + healthCheckResult);
                        this.sender.ReportHealth(healthCheckResult);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        ServerState.debug('Timed out waiting for health response from the server process. Reporting as unhealthy.');
                        this.sender.ReportHealth(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ServerState.prototype.InitializeNetworking = function () {
        if (!ServerState.networkInitialized) {
            var socketToAuxProxy = io.connect(this.CreateURI(), this.CreateDefaultOptions());
            var socketFromAuxProxy = io.connect(this.CreateURI(), this.CreateDefaultOptions());
            this.sender = new AuxProxyMessageSender_1.AuxProxyMessageSender(socketToAuxProxy);
            this.network = new Network_1.Network(socketToAuxProxy, socketFromAuxProxy, this);
            var outcome = this.network.Connect();
            ServerState.networkInitialized = outcome.Success;
            return outcome;
        }
        // Idempotent
        return new GenericOutcome_1.GenericOutcome();
    };
    ServerState.prototype.CreateURI = function () {
        var endpoint = "http://" + ServerState.HOSTNAME + ":" + ServerState.PORT;
        return endpoint;
    };
    ServerState.prototype.CreateDefaultOptions = function () {
        var options = {};
        options.query = (_a = {},
            _a[ServerState.PID_KEY] = process.pid.toString(),
            _a[ServerState.SDK_VERSION_KEY] = GameLiftServerAPI_1.GameLiftServerAPI.GetSdkVersion().Result,
            _a[ServerState.FLAVOR_KEY] = ServerState.FLAVOR,
            _a);
        options.autoConnect = false;
        options.forceNew = true;
        options.transports = ['websocket'];
        return options;
        var _a;
    };
    ServerState.prototype.OnStartGameSession = function (rawGameSession, ack) {
        var _this = this;
        ServerState.debug("ServerState got the startGameSession signal. rawGameSession : " + rawGameSession);
        if (!this.processReady) {
            ServerState.debug('Got a game session on inactive process. Sending false ack.');
            ack(false);
            return;
        }
        ServerState.debug('Sending true ack.');
        ack(true);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var gameSession;
            return __generator(this, function (_a) {
                gameSession = GameSessionParser_1.GameSessionParser.Parse(rawGameSession);
                this.gameSessionId = gameSession.GameSessionId;
                this.processParameters.OnStartGameSession(gameSession);
                return [2 /*return*/];
            });
        }); })();
    };
    ServerState.prototype.OnUpdateGameSession = function (rawUpdateGameSession, ack) {
        var _this = this;
        ServerState.debug("ServerState got the updateGameSession signal. rawGameSession : " + rawUpdateGameSession);
        if (!this.processReady) {
            ServerState.debug('Got an updated game session on inactive process. Sending false ack.');
            ack(false);
            return;
        }
        ServerState.debug('Sending true ack.');
        ack(true);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var updateGameSession, gameSession, updateReason;
            return __generator(this, function (_a) {
                updateGameSession = JSON.parse(rawUpdateGameSession);
                gameSession = GameSessionMapper_1.GameSessionMapper.ParseFromBufferedGameSession(updateGameSession.gameSession);
                this.gameSessionId = gameSession.GameSessionId;
                updateReason = UpdateReason_1.UpdateReasonMapper.GetUpdateReasonForName(updateGameSession.updateReason);
                this.processParameters.OnUpdateGameSession(new UpdateGameSession_1.UpdateGameSession(gameSession, updateReason, updateGameSession.backfillTicketId));
                return [2 /*return*/];
            });
        }); })();
    };
    ServerState.prototype._inferTerminationTime = function () {
        var defaultTerminationTime = Long.fromNumber(Date.now());
        defaultTerminationTime = defaultTerminationTime.add(270 * 1000);
        return defaultTerminationTime.mul(10000);
    };
    ServerState.prototype._parseTerminationTime = function (inputTime) {
        if (Long.isLong(inputTime)) {
            return inputTime;
        }
        else if (typeof (inputTime) === 'string') {
            return Long.fromString(inputTime);
        }
        else if (typeof (inputTime) === 'number') {
            return Long.fromNumber(inputTime);
        }
        else {
            return this._inferTerminationTime();
        }
    };
    ServerState.prototype.OnTerminateProcess = function (rawTerminationTime) {
        var _this = this;
        ServerState.debug("ServerState got the terminateProcess signal.  rawTerminationTime : " + rawTerminationTime);
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var deserialized, defaultTerminationTime;
            return __generator(this, function (_a) {
                deserialized = JSON.parse(rawTerminationTime);
                if (deserialized == null) {
                    defaultTerminationTime = this._inferTerminationTime();
                }
                else {
                    /* TerminationTime coming from AuxProxy is seconds that have elapsed since Unix epoch time begins (00:00:00 UTC Jan 1 1970).
                     * Since epoch time for dotNet starts at 0001-01-01T00:00:00 we need to create a DateTime at the beginning of Unix epoch time
                     * and add the TerminationTime to that date.
                     */
                    this.terminationTime = this._parseTerminationTime(deserialized.terminationTime).mul(1000 * 10000);
                }
                this.processParameters.OnProcessTerminate();
                return [2 /*return*/];
            });
        }); })();
    };
    ServerState.prototype.Shutdown = function () {
        ServerState.networkInitialized = false;
        this.network.Disconnect();
        this.processReady = false;
    };
    ServerState.HOSTNAME = '127.0.0.1';
    ServerState.PORT = '5757';
    ServerState.PID_KEY = 'pID';
    ServerState.SDK_VERSION_KEY = 'sdkVersion';
    ServerState.FLAVOR_KEY = 'sdkLanguage';
    ServerState.FLAVOR = 'Nodejs';
    ServerState.HEALTHCHECK_TIMEOUT_SECONDS = 60;
    ServerState.networkInitialized = false;
    ServerState.instance = new ServerState();
    ServerState.debug = getDebug('ServerState');
    return ServerState;
}());
exports.ServerState = ServerState;
//# sourceMappingURL=ServerState.js.map