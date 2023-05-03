export declare class AttributeValue {
    attrType: AttributeValue.AttrType;
    S?: string;
    N?: number;
    SL?: string[];
    SDM?: {
        [key: string]: number;
    };
    constructor(s: string);
    constructor(n: number);
    constructor(sl: string[]);
    constructor(sdm: {
        [key: string]: number;
    });
}
export declare namespace AttributeValue {
    enum AttrType {
        STRING = 1,
        DOUBLE = 2,
        STRING_LIST = 3,
        STRING_DOUBLE_MAP = 4,
    }
}
