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
exports.CashFlowActivityWithdrawalsDebitsToJSON = exports.CashFlowActivityWithdrawalsDebitsFromJSONTyped = exports.CashFlowActivityWithdrawalsDebitsFromJSON = exports.instanceOfCashFlowActivityWithdrawalsDebits = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CashFlowActivityWithdrawalsDebits interface.
 */
function instanceOfCashFlowActivityWithdrawalsDebits(value) {
    let isInstance = true;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "withdrawalsDebits" in value;
    return isInstance;
}
exports.instanceOfCashFlowActivityWithdrawalsDebits = instanceOfCashFlowActivityWithdrawalsDebits;
function CashFlowActivityWithdrawalsDebitsFromJSON(json) {
    return CashFlowActivityWithdrawalsDebitsFromJSONTyped(json, false);
}
exports.CashFlowActivityWithdrawalsDebitsFromJSON = CashFlowActivityWithdrawalsDebitsFromJSON;
function CashFlowActivityWithdrawalsDebitsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': json['date'],
        'transactionDescription': !(0, runtime_1.exists)(json, 'transactionDescription') ? undefined : json['transactionDescription'],
        'withdrawalsDebits': json['withdrawalsDebits'],
    };
}
exports.CashFlowActivityWithdrawalsDebitsFromJSONTyped = CashFlowActivityWithdrawalsDebitsFromJSONTyped;
function CashFlowActivityWithdrawalsDebitsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'transactionDescription': value.transactionDescription,
        'withdrawalsDebits': value.withdrawalsDebits,
    };
}
exports.CashFlowActivityWithdrawalsDebitsToJSON = CashFlowActivityWithdrawalsDebitsToJSON;
//# sourceMappingURL=CashFlowActivityWithdrawalsDebits.js.map