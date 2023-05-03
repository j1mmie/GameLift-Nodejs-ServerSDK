import { GameLiftError } from "./GameLiftErrors";
import { GenericOutcome } from "./GenericOutcome";
import { StartMatchBackfillResult } from "../Server/Model/StartMatchBackfillResult";
export declare class StartMatchBackfillOutcome extends GenericOutcome {
    Result?: StartMatchBackfillResult;
    constructor(result: StartMatchBackfillResult);
    constructor(error: GameLiftError);
}
