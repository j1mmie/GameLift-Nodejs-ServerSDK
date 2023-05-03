/// <reference types="debug" />
/// <reference types="socket.io-client" />
/// <reference types="p-defer" />
import pDefer = require('p-defer');
import Socket = SocketIOClient.Socket;
import getDebug = require('debug');
import { IAuxProxyMessageHandler } from './IAuxProxyMessageHandler';
import { GenericOutcome } from '../Common/GenericOutcome';
export declare class Network {
    static readonly debug: getDebug.IDebugger;
    socketToAuxProxy: Socket;
    socketFromAuxProxy: Socket;
    handler: IAuxProxyMessageHandler;
    connected?: pDefer.DeferredPromise<boolean>;
    constructor(socketToAuxProxy: Socket, socketFromAuxProxy: Socket, handler: IAuxProxyMessageHandler);
    SetHandlerCallbacks(socket: Socket): void;
    Connect(): GenericOutcome;
    PerformConnect(socket: Socket): Promise<boolean>;
    Disconnect(): GenericOutcome;
}
