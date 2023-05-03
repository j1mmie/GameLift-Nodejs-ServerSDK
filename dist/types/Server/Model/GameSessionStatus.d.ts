export declare enum Status {
    NOT_SET = 0,
    ACTIVE = 1,
    ACTIVATING = 2,
    TERMINATED = 3,
    TERMINATING = 4,
}
export declare class GameSessionStatus {
    GetGameSessionStatusForName(name: string): GameSessionStatus | undefined;
    GetNameForGameSessionStatus(value: GameSessionStatus): String | undefined;
}
