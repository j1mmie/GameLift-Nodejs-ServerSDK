export declare enum PlayerSessionCreationPolicy {
    NOT_SET = 0,
    ACCEPT_ALL = 1,
    DENY_ALL = 2,
}
export declare class PlayerSessionCreationPolicyMapper {
    static readonly ACCEPT_ALL: string;
    static readonly DENY_ALL: string;
    static readonly NOT_SET: string;
    static GetPlayerSessionCreationPolicyForName(name: string): PlayerSessionCreationPolicy;
    static GetNameForPlayerSessionCreationPolicy(value: PlayerSessionCreationPolicy): string;
}
