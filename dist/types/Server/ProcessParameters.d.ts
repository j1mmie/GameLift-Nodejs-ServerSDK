import { GameSession } from './Model/GameSession';
import { UpdateGameSession } from './Model/UpdateGameSession';
import { LogParameters } from './LogParameters';
export declare type OnStartGameSessionDelegate = (gameSession: GameSession) => void;
export declare type OnUpdateGameSessionDelegate = (updateGameSession: UpdateGameSession) => void;
export declare type OnProcessTerminateDelegate = () => void;
export declare type OnHealthCheckDelegate = () => boolean;
export declare class ProcessParameters {
    OnStartGameSession: OnStartGameSessionDelegate;
    OnUpdateGameSession: OnUpdateGameSessionDelegate;
    OnProcessTerminate: OnProcessTerminateDelegate;
    OnHealthCheck: OnHealthCheckDelegate;
    Port: number;
    LogParameters: LogParameters;
    constructor(onStartGameSession: OnStartGameSessionDelegate, onUpdateGameSession: OnUpdateGameSessionDelegate, onProcessTerminate: OnProcessTerminateDelegate, onHealthCheck: OnHealthCheckDelegate, port: number, logParameters: LogParameters);
}
