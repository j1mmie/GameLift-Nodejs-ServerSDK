/// <reference types="debug" />
import getDebug = require('debug');
import { GameSession } from './Model/GameSession';
export declare class GameSessionParser {
    static readonly debug: getDebug.IDebugger;
    static Parse(rawGameSession: string): GameSession;
}
