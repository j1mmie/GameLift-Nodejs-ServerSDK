import sdk = require('../../Google/Sdk');
import { DescribePlayerSessionsResult } from './DescribePlayerSessionsResult';
export declare class DescribePlayerSessionsResultMapper {
    static ParseFromBufferedDescribePlayerSessionsResponse(response: sdk.com.amazon.whitewater.auxproxy.pbuffer.DescribePlayerSessionsResponse): DescribePlayerSessionsResult;
}
