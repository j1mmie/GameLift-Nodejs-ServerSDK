import { GameLiftError } from './GameLiftErrors';
export declare class GenericOutcome {
    Error?: GameLiftError;
    Success: boolean;
    constructor(error?: GameLiftError);
}
