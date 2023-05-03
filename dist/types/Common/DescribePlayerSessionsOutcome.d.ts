import { GameLiftError } from "./GameLiftErrors";
import { GenericOutcome } from "./GenericOutcome";
import { DescribePlayerSessionsResult } from "../Server/Model/DescribePlayerSessionsResult";
export declare class DescribePlayerSessionsOutcome extends GenericOutcome {
    Result?: DescribePlayerSessionsResult;
    constructor(result: DescribePlayerSessionsResult);
    constructor(error: GameLiftError);
}
