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
exports.CashFlowActivityDepositsCreditsToJSON = exports.CashFlowActivityDepositsCreditsFromJSONTyped = exports.CashFlowActivityDepositsCreditsFromJSON = exports.instanceOfCashFlowActivityDepositsCredits = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CashFlowActivityDepositsCredits interface.
 */
function instanceOfCashFlowActivityDepositsCredits(value) {
    let isInstance = true;
    isInstance = isInstance && "date" in value;
    isInstance = isInstance && "depositsCredits" in value;
    return isInstance;
}
exports.instanceOfCashFlowActivityDepositsCredits = instanceOfCashFlowActivityDepositsCredits;
function CashFlowActivityDepositsCreditsFromJSON(json) {
    return CashFlowActivityDepositsCreditsFromJSONTyped(json, false);
}
exports.CashFlowActivityDepositsCreditsFromJSON = CashFlowActivityDepositsCreditsFromJSON;
function CashFlowActivityDepositsCreditsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': json['date'],
        'depositsCredits': json['depositsCredits'],
        'transactionDescription': !(0, runtime_1.exists)(json, 'transactionDescription') ? undefined : json['transactionDescription'],
    };
}
exports.CashFlowActivityDepositsCreditsFromJSONTyped = CashFlowActivityDepositsCreditsFromJSONTyped;
function CashFlowActivityDepositsCreditsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'depositsCredits': value.depositsCredits,
        'transactionDescription': value.transactionDescription,
    };
}
exports.CashFlowActivityDepositsCreditsToJSON = CashFlowActivityDepositsCreditsToJSON;
//# sourceMappingURL=CashFlowActivityDepositsCredits.js.map