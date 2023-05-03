/// <reference types="long" />
import Long = require('long');
import { GameLiftError } from './GameLiftErrors';
import { GenericOutcome } from './GenericOutcome';
export declare class AwsLongOutcome extends GenericOutcome {
    Result?: Long;
    constructor(result: Long);
    constructor(error: GameLiftError);
}
