import { Player } from './Player';
export declare class MatchmakerData {
    private static readonly FIELD_MATCH_ID;
    private static readonly FIELD_MATCHMAKING_CONFIG_ARN;
    private static readonly FIELD_TEAMS;
    private static readonly FIELD_NAME;
    private static readonly FIELD_PLAYERS;
    private static readonly FIELD_PLAYER_ID;
    private static readonly FIELD_ATTRIBUTES;
    private static readonly FIELD_LATENCY;
    private static readonly FIELD_ATTRIBUTE_TYPE;
    private static readonly FIELD_ATTRIBUTE_VALUE;
    MatchId?: string;
    MatchmakingConfigurationArn?: string;
    Players: Player[];
    static FromJson(json: string): MatchmakerData;
    private static PlayerFromJson(teamName, obj);
    private static ParsePlayerAttributes(parsedAttrs);
    private static ParseOneAttribute(parsedAttr);
    private static ParseLatency(parsedLatency);
    parseOutPlayersFromTeam(parsedTeam: {
        [key: string]: any;
    }): void;
}
