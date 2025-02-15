/// <reference types="debug" />
/// <reference types="long" />
/// <reference types="socket.io-client" />
import Long = require('long');
import getDebug = require('debug');
import { IAuxProxyMessageHandler } from './IAuxProxyMessageHandler';
import { AuxProxyMessageSender } from './AuxProxyMessageSender';
import { Network } from './Network';
import { ProcessParameters } from './ProcessParameters';
import { GenericOutcome } from '../Common/GenericOutcome';
import { AwsStringOutcome } from '../Common/AwsStringOutcome';
import { AwsLongOutcome } from '../Common/AwsLongOutcome';
import { PlayerSessionCreationPolicy } from './Model/PlayerSessionCreationPolicy';
import { DescribePlayerSessionsRequest } from './Model/DescribePlayerSessionsRequest';
import { DescribePlayerSessionsOutcome } from '../Common/DescribePlayerSessionsOutcome';
import { StartMatchBackfillRequest } from './Model/StartMatchBackfillRequest';
import { StartMatchBackfillOutcome } from '../Common/StartMatchBackfillOutcome';
import { StopMatchBackfillRequest } from './Model/StopMatchBackfillRequest';
export declare class ServerState implements IAuxProxyMessageHandler {
    static readonly HOSTNAME: string;
    static readonly PORT: string;
    static readonly PID_KEY: string;
    static readonly SDK_VERSION_KEY: string;
    static readonly FLAVOR_KEY: string;
    static readonly FLAVOR: string;
    static readonly HEALTHCHECK_TIMEOUT_SECONDS: number;
    static networkInitialized: boolean;
    static readonly instance: ServerState;
    static readonly debug: getDebug.IDebugger;
    sender?: AuxProxyMessageSender;
    network?: Network;
    processParameters?: ProcessParameters;
    processReady: boolean;
    gameSessionId?: string;
    terminationTime: Long;
    static readonly Instance: ServerState;
    ProcessReady(procParameters: ProcessParameters): Promise<GenericOutcome>;
    ProcessEnding(): Promise<GenericOutcome>;
    ActivateGameSession(): Promise<GenericOutcome>;
    TerminateGameSession(): Promise<GenericOutcome>;
    GetGameSessionId(): AwsStringOutcome;
    GetTerminationTime(): AwsLongOutcome;
    UpdatePlayerSessionCreationPolicy(playerSessionPolicy: PlayerSessionCreationPolicy): Promise<GenericOutcome>;
    AcceptPlayerSession(playerSessionId: string): Promise<GenericOutcome>;
    RemovePlayerSession(playerSessionId: string): Promise<GenericOutcome>;
    DescribePlayerSessions(request: DescribePlayerSessionsRequest): Promise<DescribePlayerSessionsOutcome>;
    BackfillMatchmaking(request: StartMatchBackfillRequest): Promise<StartMatchBackfillOutcome>;
    StopMatchmaking(request: StopMatchBackfillRequest): Promise<GenericOutcome>;
    StartHealthCheck(): Promise<void>;
    ReportHealth(): Promise<void>;
    InitializeNetworking(): GenericOutcome;
    CreateURI(): string;
    CreateDefaultOptions(): SocketIOClient.ConnectOpts;
    OnStartGameSession(rawGameSession: string, ack: (value: boolean) => void): void;
    OnUpdateGameSession(rawUpdateGameSession: string, ack: (value: boolean) => void): void;
    private _inferTerminationTime();
    private _parseTerminationTime(inputTime);
    OnTerminateProcess(rawTerminationTime: string): void;
    Shutdown(): void;
}
