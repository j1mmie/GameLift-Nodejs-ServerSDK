import { GameProperty } from "./GameProperty";
export declare class GameSession {
    GameSessionId?: string;
    Name?: string;
    FleetId?: string;
    MaximumPlayerSessionCount: number;
    Port: number;
    IpAddress?: string;
    GameSessionData?: string;
    MatchmakerData?: string;
    GameProperties: GameProperty[];
    DnsName?: string;
    constructor();
}
