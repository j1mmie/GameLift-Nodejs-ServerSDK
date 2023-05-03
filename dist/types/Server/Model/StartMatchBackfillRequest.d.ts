import { Player } from "./Player";
export declare class StartMatchBackfillRequest {
    TicketId?: string;
    GameSessionArn?: string;
    MatchmakingConfigurationArn?: string;
    Players?: Player[];
}
