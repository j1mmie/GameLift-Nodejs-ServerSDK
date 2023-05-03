import { PlayerSession } from "./PlayerSession";
export declare class DescribePlayerSessionsResult {
    static readonly MAX_PLAYER_SESSIONS: number;
    NextToken?: string;
    PlayerSessions: PlayerSession[];
    constructor();
    AddPlayerSession(value: PlayerSession): void;
}
