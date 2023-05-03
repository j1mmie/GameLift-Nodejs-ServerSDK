"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateReason;
(function (UpdateReason) {
    UpdateReason[UpdateReason["MATCHMAKING_DATA_UPDATED"] = 0] = "MATCHMAKING_DATA_UPDATED";
    UpdateReason[UpdateReason["BACKFILL_FAILED"] = 1] = "BACKFILL_FAILED";
    UpdateReason[UpdateReason["BACKFILL_TIMED_OUT"] = 2] = "BACKFILL_TIMED_OUT";
    UpdateReason[UpdateReason["BACKFILL_CANCELLED"] = 3] = "BACKFILL_CANCELLED";
    UpdateReason[UpdateReason["UNKNOWN"] = 4] = "UNKNOWN";
})(UpdateReason = exports.UpdateReason || (exports.UpdateReason = {}));
var UpdateReasonMapper = /** @class */ (function () {
    function UpdateReasonMapper() {
    }
    UpdateReasonMapper.GetUpdateReasonForName = function (name) {
        switch (name) {
            case UpdateReasonMapper.MATCHMAKING_DATA_UPDATED_REASON:
                return UpdateReason.MATCHMAKING_DATA_UPDATED;
            case UpdateReasonMapper.BACKFILL_FAILED_REASON:
                return UpdateReason.BACKFILL_FAILED;
            case UpdateReasonMapper.BACKFILL_TIMED_OUT_REASON:
                return UpdateReason.BACKFILL_TIMED_OUT;
            case UpdateReasonMapper.BACKFILL_CANCELLED_REASON:
                return UpdateReason.BACKFILL_CANCELLED;
            default:
                return UpdateReason.UNKNOWN;
        }
    };
    UpdateReasonMapper.GetNameForUpdateReason = function (value) {
        switch (value) {
            case UpdateReason.MATCHMAKING_DATA_UPDATED:
                return UpdateReasonMapper.MATCHMAKING_DATA_UPDATED_REASON;
            case UpdateReason.BACKFILL_FAILED:
                return UpdateReasonMapper.BACKFILL_FAILED_REASON;
            case UpdateReason.BACKFILL_TIMED_OUT:
                return UpdateReasonMapper.BACKFILL_TIMED_OUT_REASON;
            case UpdateReason.BACKFILL_CANCELLED:
                return UpdateReasonMapper.BACKFILL_CANCELLED_REASON;
            default:
                return UpdateReasonMapper.UNKNOWN_REASON;
        }
    };
    UpdateReasonMapper.MATCHMAKING_DATA_UPDATED_REASON = 'MATCHMAKING_DATA_UPDATED';
    UpdateReasonMapper.BACKFILL_FAILED_REASON = 'BACKFILL_FAILED';
    UpdateReasonMapper.BACKFILL_TIMED_OUT_REASON = 'BACKFILL_TIMED_OUT';
    UpdateReasonMapper.BACKFILL_CANCELLED_REASON = 'BACKFILL_CANCELLED';
    UpdateReasonMapper.UNKNOWN_REASON = 'UNKNOWN';
    return UpdateReasonMapper;
}());
exports.UpdateReasonMapper = UpdateReasonMapper;
//# sourceMappingURL=UpdateReason.js.map