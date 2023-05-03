"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLiftErrorType;
(function (GameLiftErrorType) {
    GameLiftErrorType[GameLiftErrorType["SERVICE_CALL_FAILED"] = 0] = "SERVICE_CALL_FAILED";
    GameLiftErrorType[GameLiftErrorType["LOCAL_CONNECTION_FAILED"] = 1] = "LOCAL_CONNECTION_FAILED";
    GameLiftErrorType[GameLiftErrorType["NETWORK_NOT_INITIALIZED"] = 2] = "NETWORK_NOT_INITIALIZED";
    GameLiftErrorType[GameLiftErrorType["GAMESESSION_ID_NOT_SET"] = 3] = "GAMESESSION_ID_NOT_SET";
    GameLiftErrorType[GameLiftErrorType["TERMINATION_TIME_NOT_SET"] = 4] = "TERMINATION_TIME_NOT_SET";
})(GameLiftErrorType = exports.GameLiftErrorType || (exports.GameLiftErrorType = {}));
var GameLiftError = /** @class */ (function () {
    function GameLiftError(errorType) {
        this.ErrorType = errorType;
        this.ErrorName = this.GetDefaultNameForErrorType(errorType);
        this.ErrorMessage = this.GetDefaultMessageForErrorType(errorType);
    }
    GameLiftError.prototype.GetDefaultNameForErrorType = function (errorType) {
        switch (errorType) {
            case GameLiftErrorType.SERVICE_CALL_FAILED:
                return 'Service call failed.';
            case GameLiftErrorType.LOCAL_CONNECTION_FAILED:
                return 'Local connection failed.';
            case GameLiftErrorType.NETWORK_NOT_INITIALIZED:
                return 'Network not initialized.';
            case GameLiftErrorType.GAMESESSION_ID_NOT_SET:
                return 'GameSession id is not set.';
            case GameLiftErrorType.TERMINATION_TIME_NOT_SET:
                return 'TerminationTime is not set.';
            default:
                return 'Unknown Error';
        }
    };
    GameLiftError.prototype.GetDefaultMessageForErrorType = function (errorType) {
        switch (errorType) {
            case GameLiftErrorType.SERVICE_CALL_FAILED:
                return 'An AWS service call has failed. See the root cause error for more information.';
            case GameLiftErrorType.LOCAL_CONNECTION_FAILED:
                return 'Connection to local agent could not be established.';
            case GameLiftErrorType.NETWORK_NOT_INITIALIZED:
                return 'Local network was not initialized. Have you called InitSDK()?';
            case GameLiftErrorType.GAMESESSION_ID_NOT_SET:
                return 'No game sessions are bound to this process.';
            case GameLiftErrorType.TERMINATION_TIME_NOT_SET:
                return 'TerminationTime has not been sent to this process.';
            default:
                return 'An unexpected error has occurred.';
        }
    };
    GameLiftError.prototype.toString = function () {
        return "[GameLiftError: ErrorType=" + this.ErrorType + ", ErrorName=" + this.ErrorName + ", ErrorMessage=" + this.ErrorMessage + "]";
    };
    return GameLiftError;
}());
exports.GameLiftError = GameLiftError;
//# sourceMappingURL=GameLiftErrors.js.map