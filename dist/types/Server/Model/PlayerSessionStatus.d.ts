export declare enum PlayerSessionStatus {
    NOT_SET = 0,
    RESERVED = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    TIMEDOUT = 4,
}
export declare class PlayerSessionStatusMapper {
    static readonly RESERVED: string;
    static readonly ACTIVE: string;
    static readonly COMPLETED: string;
    static readonly TIMEDOUT: string;
    static readonly NOT_SET: string;
    static GetPlayerSessionStatusForName(name?: string): PlayerSessionStatus;
    static GetNameForPlayerSessionStatus(value: PlayerSessionStatus): string;
}
