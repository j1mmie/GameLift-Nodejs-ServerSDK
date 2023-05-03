export declare enum GameLiftErrorType {
    SERVICE_CALL_FAILED = 0,
    LOCAL_CONNECTION_FAILED = 1,
    NETWORK_NOT_INITIALIZED = 2,
    GAMESESSION_ID_NOT_SET = 3,
    TERMINATION_TIME_NOT_SET = 4,
}
export declare class GameLiftError {
    ErrorType: GameLiftErrorType;
    ErrorName: string;
    ErrorMessage: string;
    constructor(errorType: GameLiftErrorType);
    GetDefaultNameForErrorType(errorType: GameLiftErrorType): string;
    GetDefaultMessageForErrorType(errorType: GameLiftErrorType): string;
    toString(): string;
}
