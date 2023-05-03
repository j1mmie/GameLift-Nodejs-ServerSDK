"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProcessParameters = /** @class */ (function () {
    function ProcessParameters(onStartGameSession, onUpdateGameSession, onProcessTerminate, onHealthCheck, port, logParameters) {
        this.OnStartGameSession = onStartGameSession;
        this.OnUpdateGameSession = onUpdateGameSession;
        this.OnProcessTerminate = onProcessTerminate;
        this.OnHealthCheck = onHealthCheck;
        this.Port = port;
        this.LogParameters = logParameters;
    }
    return ProcessParameters;
}());
exports.ProcessParameters = ProcessParameters;
//# sourceMappingURL=ProcessParameters.js.map