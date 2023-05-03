import { GameLiftError } from './GameLiftErrors';
import { GenericOutcome } from './GenericOutcome';
export declare class AwsStringOutcome extends GenericOutcome {
    Result?: string;
    constructor(result: string);
    constructor(error: GameLiftError);
}
