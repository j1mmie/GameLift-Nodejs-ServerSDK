"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDebug = require("debug");
var sdk = require("../Google/Sdk");
var GameSessionMapper_1 = require("./Model/GameSessionMapper");
var GameSessionParser = /** @class */ (function () {
    function GameSessionParser() {
    }
    GameSessionParser.Parse = function (rawGameSession) {
        GameSessionParser.debug("Parsing game session: '" + rawGameSession + "'");
        var deserialized = sdk.com.amazon.whitewater.auxproxy.pbuffer.ActivateGameSession.fromObject(JSON.parse(rawGameSession));
        return GameSessionMapper_1.GameSessionMapper.ParseFromBufferedGameSession(deserialized.gameSession);
    };
    GameSessionParser.debug = getDebug('GameSessionParser');
    return GameSessionParser;
}());
exports.GameSessionParser = GameSessionParser;
//# sourceMappingURL=GameSessionParser.js.map