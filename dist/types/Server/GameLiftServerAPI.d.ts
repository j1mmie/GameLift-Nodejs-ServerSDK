import { AwsStringOutcome } from "../Common/AwsStringOutcome";
import { GenericOutcome } from "../Common/GenericOutcome";
import { ProcessParameters } from "./ProcessParameters";
import { PlayerSessionCreationPolicy } from "./Model/PlayerSessionCreationPolicy";
import { AwsLongOutcome } from "../Common/AwsLongOutcome";
import { DescribePlayerSessionsRequest } from "./Model/DescribePlayerSessionsRequest";
import { DescribePlayerSessionsOutcome } from "../Common/DescribePlayerSessionsOutcome";
import { StartMatchBackfillRequest } from "./Model/StartMatchBackfillRequest";
import { StartMatchBackfillOutcome } from "../Common/StartMatchBackfillOutcome";
import { StopMatchBackfillRequest } from "./Model/StopMatchBackfillRequest";
export declare class GameLiftServerAPI {
    static sdkVersion: string;
    static GetSdkVersion(): AwsStringOutcome;
    static InitSDK(): GenericOutcome;
    static ProcessReady(processParameters: ProcessParameters): Promise<GenericOutcome>;
    static ProcessEnding(): Promise<GenericOutcome>;
    static ActivateGameSession(): Promise<GenericOutcome>;
    static TerminateGameSession(): Promise<GenericOutcome>;
    static UpdatePlayerSessionCreationPolicy(playerSessionPolicy: PlayerSessionCreationPolicy): Promise<GenericOutcome>;
    static GetGameSessionId(): AwsStringOutcome;
    static GetTerminationTime(): AwsLongOutcome;
    static AcceptPlayerSession(playerSessionId: string): Promise<GenericOutcome>;
    static RemovePlayerSession(playerSessionId: string): Promise<GenericOutcome>;
    static DescribePlayerSessions(describePlayerSessionsRequest: DescribePlayerSessionsRequest): Promise<DescribePlayerSessionsOutcome>;
    static StartMatchBackfill(request: StartMatchBackfillRequest): Promise<StartMatchBackfillOutcome>;
    static StopMatchBackfill(request: StopMatchBackfillRequest): Promise<GenericOutcome>;
    static Destroy(): GenericOutcome;
}
