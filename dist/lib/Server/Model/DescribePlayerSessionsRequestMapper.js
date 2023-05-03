"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sdk = require("../../Google/Sdk");
var DescribePlayerSessionsRequestMapper = /** @class */ (function () {
    function DescribePlayerSessionsRequestMapper() {
    }
    DescribePlayerSessionsRequestMapper.ParseFromDescribePlayerSessionsRequest = function (request) {
        var pRequest = new sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsRequest();
        if (null != request.GameSessionId) {
            pRequest.gameSessionId = request.GameSessionId;
        }
        if (null != request.PlayerId) {
            pRequest.playerId = request.PlayerId;
        }
        if (null != request.PlayerSessionId) {
            pRequest.playerSessionId = request.PlayerSessionId;
        }
        if (null != request.PlayerSessionStatusFilter) {
            pRequest.playerSessionStatusFilter = request.PlayerSessionStatusFilter;
        }
        if (null != request.NextToken) {
            pRequest.nextToken = request.NextToken;
        }
        pRequest.limit = request.Limit;
        return pRequest;
    };
    return DescribePlayerSessionsRequestMapper;
}());
exports.DescribePlayerSessionsRequestMapper = DescribePlayerSessionsRequestMapper;
//# sourceMappingURL=DescribePlayerSessionsRequestMapper.js.map