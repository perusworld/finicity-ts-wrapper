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
exports.CashFlowInsufficientFundsFeesToJSON = exports.CashFlowInsufficientFundsFeesFromJSONTyped = exports.CashFlowInsufficientFundsFeesFromJSON = exports.instanceOfCashFlowInsufficientFundsFees = void 0;
const runtime_1 = require("../runtime");
const InsufficientFundsTransaction_1 = require("./InsufficientFundsTransaction");
/**
 * Check if a given object implements the CashFlowInsufficientFundsFees interface.
 */
function instanceOfCashFlowInsufficientFundsFees(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashFlowInsufficientFundsFees = instanceOfCashFlowInsufficientFundsFees;
function CashFlowInsufficientFundsFeesFromJSON(json) {
    return CashFlowInsufficientFundsFeesFromJSONTyped(json, false);
}
exports.CashFlowInsufficientFundsFeesFromJSON = CashFlowInsufficientFundsFeesFromJSON;
function CashFlowInsufficientFundsFeesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'countOfTransactionsForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'countOfTransactionsForTheReportTimePeriod') ? undefined : json['countOfTransactionsForTheReportTimePeriod'],
        'sumOfTransactionsForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'sumOfTransactionsForTheReportTimePeriod') ? undefined : json['sumOfTransactionsForTheReportTimePeriod'],
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (json['transactions'].map(InsufficientFundsTransaction_1.InsufficientFundsTransactionFromJSON)),
    };
}
exports.CashFlowInsufficientFundsFeesFromJSONTyped = CashFlowInsufficientFundsFeesFromJSONTyped;
function CashFlowInsufficientFundsFeesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'countOfTransactionsForTheReportTimePeriod': value.countOfTransactionsForTheReportTimePeriod,
        'sumOfTransactionsForTheReportTimePeriod': value.sumOfTransactionsForTheReportTimePeriod,
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(InsufficientFundsTransaction_1.InsufficientFundsTransactionToJSON)),
    };
}
exports.CashFlowInsufficientFundsFeesToJSON = CashFlowInsufficientFundsFeesToJSON;
//# sourceMappingURL=CashFlowInsufficientFundsFees.js.map