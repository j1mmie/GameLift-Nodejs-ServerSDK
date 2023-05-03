import { GameSession } from "./GameSession";
import { UpdateReason } from "./UpdateReason";
export declare class UpdateGameSession {
    GameSession: GameSession;
    UpdateReason: UpdateReason;
    BackfillTicketId: string;
    constructor(gameSession: GameSession, updateReason: UpdateReason, backfillTicketId: string);
}
