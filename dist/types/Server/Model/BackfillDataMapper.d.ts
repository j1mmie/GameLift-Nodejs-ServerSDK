import sdk = require('../../Google/Sdk');
import { AttributeValue } from './AttributeValue';
import { Player } from './Player';
import { StartMatchBackfillRequest } from './StartMatchBackfillRequest';
import { StartMatchBackfillResult } from './StartMatchBackfillResult';
import { StopMatchBackfillRequest } from './StopMatchBackfillRequest';
export declare class BackfillDataMapper {
    static CreateBufferedAttributeValue(attr: AttributeValue): sdk.com.amazon.whitewater.auxproxy.pbuffer.AttributeValue;
    static CreateBufferedPlayer(player: Player): sdk.com.amazon.whitewater.auxproxy.pbuffer.Player;
    static CreateBufferedBackfillMatchmakingRequest(request: StartMatchBackfillRequest): sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingRequest;
    static ParseFromBufferedBackfillMatchmakingResponse(response: sdk.com.amazon.whitewater.auxproxy.pbuffer.BackfillMatchmakingResponse): StartMatchBackfillResult;
    static CreateBufferedStopMatchmakingRequest(request: StopMatchBackfillRequest): sdk.com.amazon.whitewater.auxproxy.pbuffer.StopMatchmakingRequest;
}
