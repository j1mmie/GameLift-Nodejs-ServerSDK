import { AttributeValue } from "./AttributeValue";
export declare class Player {
    PlayerId?: string;
    PlayerAttributes?: {
        [key: string]: AttributeValue;
    };
    Team?: string;
    LatencyInMS?: {
        [key: string]: number;
    };
}
