"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Open Banking
 * OpenAPI specification for Finicity APIs.  Open Banking solutions in the US are provided by Finicity, a Mastercard company.
 *
 * The version of the OpenAPI document: 1.13.9
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowNegativeTriggersToJSON = exports.CashFlowNegativeTriggersFromJSONTyped = exports.CashFlowNegativeTriggersFromJSON = exports.instanceOfCashFlowNegativeTriggers = void 0;
const runtime_1 = require("../runtime");
const CashFlowInsufficientFundsFees_1 = require("./CashFlowInsufficientFundsFees");
/**
 * Check if a given object implements the CashFlowNegativeTriggers interface.
 */
function instanceOfCashFlowNegativeTriggers(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashFlowNegativeTriggers = instanceOfCashFlowNegativeTriggers;
function CashFlowNegativeTriggersFromJSON(json) {
    return CashFlowNegativeTriggersFromJSONTyped(json, false);
}
exports.CashFlowNegativeTriggersFromJSON = CashFlowNegativeTriggersFromJSON;
function CashFlowNegativeTriggersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'insufficientFundFees': !(0, runtime_1.exists)(json, 'insufficientFundFees') ? undefined : (0, CashFlowInsufficientFundsFees_1.CashFlowInsufficientFundsFeesFromJSON)(json['insufficientFundFees']),
    };
}
exports.CashFlowNegativeTriggersFromJSONTyped = CashFlowNegativeTriggersFromJSONTyped;
function CashFlowNegativeTriggersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'insufficientFundFees': (0, CashFlowInsufficientFundsFees_1.CashFlowInsufficientFundsFeesToJSON)(value.insufficientFundFees),
    };
}
exports.CashFlowNegativeTriggersToJSON = CashFlowNegativeTriggersToJSON;
//# sourceMappingURL=CashFlowNegativeTriggers.js.map