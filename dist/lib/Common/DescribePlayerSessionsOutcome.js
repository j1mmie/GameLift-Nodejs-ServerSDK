"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameLiftErrors_1 = require("./GameLiftErrors");
var GenericOutcome_1 = require("./GenericOutcome");
var DescribePlayerSessionsResult_1 = require("../Server/Model/DescribePlayerSessionsResult");
var DescribePlayerSessionsOutcome = /** @class */ (function (_super) {
    __extends(DescribePlayerSessionsOutcome, _super);
    function DescribePlayerSessionsOutcome(arg) {
        var _this = _super.call(this, arg instanceof GameLiftErrors_1.GameLiftError ? arg : undefined) || this;
        if (arg instanceof DescribePlayerSessionsResult_1.DescribePlayerSessionsResult) {
            _this.Result = arg;
        }
        return _this;
    }
    return DescribePlayerSessionsOutcome;
}(GenericOutcome_1.GenericOutcome));
exports.DescribePlayerSessionsOutcome = DescribePlayerSessionsOutcome;
//# sourceMappingURL=DescribePlayerSessionsOutcome.js.map