/// <reference types="long" />
import Long = require('long');
import { PlayerSessionStatus } from './PlayerSessionStatus';
export declare class PlayerSession {
    PlayerId?: string;
    PlayerSessionId?: string;
    GameSessionId?: string;
    FleetId?: string;
    IpAddress?: string;
    PlayerData?: string;
    Port: number;
    CreationTime: Long;
    TerminationTime: Long;
    Status: PlayerSessionStatus;
    DnsName?: string;
    constructor();
}
