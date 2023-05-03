"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttributeValue = /** @class */ (function () {
    function AttributeValue(arg) {
        if (typeof arg === 'string') {
            this.attrType = AttributeValue.AttrType.STRING;
            this.S = arg;
        }
        else if (typeof arg === 'number') {
            this.attrType = AttributeValue.AttrType.DOUBLE;
            this.N = arg;
        }
        else if (arg instanceof Array) {
            this.attrType = AttributeValue.AttrType.STRING_LIST;
            this.SL = arg;
        }
        else if (arg instanceof Object) {
            this.attrType = AttributeValue.AttrType.STRING_DOUBLE_MAP;
            this.SDM = arg;
        }
        else {
            throw new Error('Invalid argument');
        }
    }
    return AttributeValue;
}());
exports.AttributeValue = AttributeValue;
(function (AttributeValue) {
    var AttrType;
    (function (AttrType) {
        AttrType[AttrType["STRING"] = 1] = "STRING";
        AttrType[AttrType["DOUBLE"] = 2] = "DOUBLE";
        AttrType[AttrType["STRING_LIST"] = 3] = "STRING_LIST";
        AttrType[AttrType["STRING_DOUBLE_MAP"] = 4] = "STRING_DOUBLE_MAP";
    })(AttrType = AttributeValue.AttrType || (AttributeValue.AttrType = {}));
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
exports.AttributeValue = AttributeValue;
//# sourceMappingURL=AttributeValue.js.map