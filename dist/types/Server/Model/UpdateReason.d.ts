export declare enum UpdateReason {
    MATCHMAKING_DATA_UPDATED = 0,
    BACKFILL_FAILED = 1,
    BACKFILL_TIMED_OUT = 2,
    BACKFILL_CANCELLED = 3,
    UNKNOWN = 4,
}
export declare class UpdateReasonMapper {
    static readonly MATCHMAKING_DATA_UPDATED_REASON: string;
    static readonly BACKFILL_FAILED_REASON: string;
    static readonly BACKFILL_TIMED_OUT_REASON: string;
    static readonly BACKFILL_CANCELLED_REASON: string;
    static readonly UNKNOWN_REASON: string;
    static GetUpdateReasonForName(name: string): UpdateReason;
    static GetNameForUpdateReason(value: UpdateReason): string;
}
