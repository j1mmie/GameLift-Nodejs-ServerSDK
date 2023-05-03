/// <reference types="debug" />
/// <reference types="socket.io-client" />
/// <reference types="p-defer" />
import pDefer = require('p-defer');
import Socket = SocketIOClient.Socket;
import getDebug = require('debug');
import { GenericOutcome } from '../Common/GenericOutcome';
import { DescribePlayerSessionsOutcome } from '../Common/DescribePlayerSessionsOutcome';
import { StartMatchBackfillOutcome } from '../Common/StartMatchBackfillOutcome';
import { PlayerSessionCreationPolicy } from './Model/PlayerSessionCreationPolicy';
import { DescribePlayerSessionsRequest } from './Model/DescribePlayerSessionsRequest';
import { StartMatchBackfillRequest } from './Model/StartMatchBackfillRequest';
import { StopMatchBackfillRequest } from './Model/StopMatchBackfillRequest';
export declare class AuxProxyMessageSender {
    static readonly debug: getDebug.IDebugger;
    static readonly GENERIC_ERROR: GenericOutcome;
    static readonly DESCRIBE_PLAYER_SESSIONS_ERROR: DescribePlayerSessionsOutcome;
    static readonly START_MATCH_BACKFILL_ERROR: StartMatchBackfillOutcome;
    static readonly STOP_MATCH_BACKFILL_ERROR: GenericOutcome;
    socket: Socket;
    constructor(socket: Socket);
    CreateAckFunctionForStartMatchBackfill(deferred: pDefer.DeferredPromise<StartMatchBackfillOutcome>): (ack: boolean, response: string) => void;
    CreateAckFunctionForDescribePlayerSessions(deferred: pDefer.DeferredPromise<DescribePlayerSessionsOutcome>): (ack: boolean, response: string) => void;
    ProcessReady(port: number, logPathsToUpload: string[]): Promise<GenericOutcome>;
    ProcessEnding(): Promise<GenericOutcome>;
    ActivateGameSession(gameSessionId: string): Promise<GenericOutcome>;
    TerminateGameSession(gameSessionId: string): Promise<GenericOutcome>;
    UpdatePlayerSessionCreationPolicy(gameSessionId: string, playerSessionPolicy: PlayerSessionCreationPolicy): Promise<GenericOutcome>;
    AcceptPlayerSession(playerSessionId: string, gameSessionId: string): Promise<GenericOutcome>;
    RemovePlayerSession(playerSessionId: string, gameSessionId: string): Promise<GenericOutcome>;
    DescribePlayerSessions(request: DescribePlayerSessionsRequest): Promise<DescribePlayerSessionsOutcome>;
    BackfillMatchmaking(request: StartMatchBackfillRequest): Promise<StartMatchBackfillOutcome>;
    StopMatchmaking(request: StopMatchBackfillRequest): Promise<GenericOutcome>;
    ReportHealth(healthStatus: boolean): Promise<GenericOutcome>;
    CreateAckFunctionGeneric(deferred: pDefer.DeferredPromise<GenericOutcome>): (ack: boolean) => void;
    EmitEventGeneric(message: any): Promise<GenericOutcome>;
    EmitEvent<T extends GenericOutcome>(message: any, ackFunction: (...args: any[]) => void, deferred: pDefer.DeferredPromise<T>, error: T): Promise<T>;
}
