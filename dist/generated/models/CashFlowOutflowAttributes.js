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
exports.CashFlowOutflowAttributesToJSON = exports.CashFlowOutflowAttributesFromJSONTyped = exports.CashFlowOutflowAttributesFromJSON = exports.instanceOfCashFlowOutflowAttributes = void 0;
const runtime_1 = require("../runtime");
const ObbDateRangeAndAmount_1 = require("./ObbDateRangeAndAmount");
const ObbDateRangeAndCount_1 = require("./ObbDateRangeAndCount");
/**
 * Check if a given object implements the CashFlowOutflowAttributes interface.
 */
function instanceOfCashFlowOutflowAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "countWithdrawalsByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "historicCountOfWithdrawalTransactions" in value;
    isInstance = isInstance && "maximumWithdrawalByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "minimumWithdrawalByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "sumWithdrawalsByMonthForTheReportTimePeriod" in value;
    return isInstance;
}
exports.instanceOfCashFlowOutflowAttributes = instanceOfCashFlowOutflowAttributes;
function CashFlowOutflowAttributesFromJSON(json) {
    return CashFlowOutflowAttributesFromJSONTyped(json, false);
}
exports.CashFlowOutflowAttributesFromJSON = CashFlowOutflowAttributesFromJSON;
function CashFlowOutflowAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'averageWithdrawalByMonthForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'averageWithdrawalByMonthForTheReportTimePeriod') ? undefined : (json['averageWithdrawalByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'countWithdrawalsByMonthForTheReportTimePeriod': (json['countWithdrawalsByMonthForTheReportTimePeriod'].map(ObbDateRangeAndCount_1.ObbDateRangeAndCountFromJSON)),
        'historicCountOfWithdrawalTransactions': json['historicCountOfWithdrawalTransactions'],
        'historicSumOfWithdrawals': !(0, runtime_1.exists)(json, 'historicSumOfWithdrawals') ? undefined : json['historicSumOfWithdrawals'],
        'maximumWithdrawalByMonthForTheReportTimePeriod': (json['maximumWithdrawalByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'minimumWithdrawalByMonthForTheReportTimePeriod': (json['minimumWithdrawalByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'sumWithdrawalsByMonthForTheReportTimePeriod': (json['sumWithdrawalsByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
    };
}
exports.CashFlowOutflowAttributesFromJSONTyped = CashFlowOutflowAttributesFromJSONTyped;
function CashFlowOutflowAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'averageWithdrawalByMonthForTheReportTimePeriod': value.averageWithdrawalByMonthForTheReportTimePeriod === undefined ? undefined : (value.averageWithdrawalByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'countWithdrawalsByMonthForTheReportTimePeriod': (value.countWithdrawalsByMonthForTheReportTimePeriod.map(ObbDateRangeAndCount_1.ObbDateRangeAndCountToJSON)),
        'historicCountOfWithdrawalTransactions': value.historicCountOfWithdrawalTransactions,
        'historicSumOfWithdrawals': value.historicSumOfWithdrawals,
        'maximumWithdrawalByMonthForTheReportTimePeriod': (value.maximumWithdrawalByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'minimumWithdrawalByMonthForTheReportTimePeriod': (value.minimumWithdrawalByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'sumWithdrawalsByMonthForTheReportTimePeriod': (value.sumWithdrawalsByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
    };
}
exports.CashFlowOutflowAttributesToJSON = CashFlowOutflowAttributesToJSON;
//# sourceMappingURL=CashFlowOutflowAttributes.js.map