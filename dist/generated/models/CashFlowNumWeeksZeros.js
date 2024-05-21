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
exports.CashFlowNumWeeksZerosToJSON = exports.CashFlowNumWeeksZerosFromJSONTyped = exports.CashFlowNumWeeksZerosFromJSON = exports.instanceOfCashFlowNumWeeksZeros = void 0;
const ObbWeekOfYear_1 = require("./ObbWeekOfYear");
/**
 * Check if a given object implements the CashFlowNumWeeksZeros interface.
 */
function instanceOfCashFlowNumWeeksZeros(value) {
    let isInstance = true;
    isInstance = isInstance && "historicNumberOfWeeksWithDataAvailable" in value;
    isInstance = isInstance && "historicNumberOfWeeksZeroTransactions" in value;
    isInstance = isInstance && "historicWeeksWithZeroTransactions" in value;
    return isInstance;
}
exports.instanceOfCashFlowNumWeeksZeros = instanceOfCashFlowNumWeeksZeros;
function CashFlowNumWeeksZerosFromJSON(json) {
    return CashFlowNumWeeksZerosFromJSONTyped(json, false);
}
exports.CashFlowNumWeeksZerosFromJSON = CashFlowNumWeeksZerosFromJSON;
function CashFlowNumWeeksZerosFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'historicNumberOfWeeksWithDataAvailable': json['historicNumberOfWeeksWithDataAvailable'],
        'historicNumberOfWeeksZeroTransactions': json['historicNumberOfWeeksZeroTransactions'],
        'historicWeeksWithZeroTransactions': (json['historicWeeksWithZeroTransactions'].map(ObbWeekOfYear_1.ObbWeekOfYearFromJSON)),
    };
}
exports.CashFlowNumWeeksZerosFromJSONTyped = CashFlowNumWeeksZerosFromJSONTyped;
function CashFlowNumWeeksZerosToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'historicNumberOfWeeksWithDataAvailable': value.historicNumberOfWeeksWithDataAvailable,
        'historicNumberOfWeeksZeroTransactions': value.historicNumberOfWeeksZeroTransactions,
        'historicWeeksWithZeroTransactions': (value.historicWeeksWithZeroTransactions.map(ObbWeekOfYear_1.ObbWeekOfYearToJSON)),
    };
}
exports.CashFlowNumWeeksZerosToJSON = CashFlowNumWeeksZerosToJSON;
//# sourceMappingURL=CashFlowNumWeeksZeros.js.map