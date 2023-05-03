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
var StartMatchBackfillResult_1 = require("../Server/Model/StartMatchBackfillResult");
var StartMatchBackfillOutcome = /** @class */ (function (_super) {
    __extends(StartMatchBackfillOutcome, _super);
    function StartMatchBackfillOutcome(arg) {
        var _this = _super.call(this, arg instanceof GameLiftErrors_1.GameLiftError ? arg : undefined) || this;
        if (arg instanceof StartMatchBackfillResult_1.StartMatchBackfillResult) {
            _this.Result = arg;
        }
        return _this;
    }
    return StartMatchBackfillOutcome;
}(GenericOutcome_1.GenericOutcome));
exports.StartMatchBackfillOutcome = StartMatchBackfillOutcome;
//# sourceMappingURL=StartMatchBackfillOutcome.js.map