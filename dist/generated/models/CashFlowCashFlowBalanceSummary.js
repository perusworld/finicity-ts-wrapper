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
exports.CashFlowCashFlowBalanceSummaryToJSON = exports.CashFlowCashFlowBalanceSummaryFromJSONTyped = exports.CashFlowCashFlowBalanceSummaryFromJSON = exports.instanceOfCashFlowCashFlowBalanceSummary = void 0;
const runtime_1 = require("../runtime");
const CashFlowMonthlyCashFlowBalanceSummaries_1 = require("./CashFlowMonthlyCashFlowBalanceSummaries");
/**
 * Check if a given object implements the CashFlowCashFlowBalanceSummary interface.
 */
function instanceOfCashFlowCashFlowBalanceSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "monthlyCashFlowBalanceSummaries" in value;
    isInstance = isInstance && "minDailyBalance" in value;
    isInstance = isInstance && "maxDailyBalance" in value;
    isInstance = isInstance && "twelveMonthAverageDailyBalance" in value;
    isInstance = isInstance && "sixMonthAverageDailyBalance" in value;
    isInstance = isInstance && "twoMonthAverageDailyBalance" in value;
    isInstance = isInstance && "twelveMonthStandardDeviationOfDailyBalance" in value;
    isInstance = isInstance && "twoMonthStandardDeviationOfDailyBalance" in value;
    isInstance = isInstance && "numberOfDaysNegativeBalance" in value;
    isInstance = isInstance && "numberOfDaysPositiveBalance" in value;
    return isInstance;
}
exports.instanceOfCashFlowCashFlowBalanceSummary = instanceOfCashFlowCashFlowBalanceSummary;
function CashFlowCashFlowBalanceSummaryFromJSON(json) {
    return CashFlowCashFlowBalanceSummaryFromJSONTyped(json, false);
}
exports.CashFlowCashFlowBalanceSummaryFromJSON = CashFlowCashFlowBalanceSummaryFromJSON;
function CashFlowCashFlowBalanceSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'monthlyCashFlowBalanceSummaries': (json['monthlyCashFlowBalanceSummaries'].map(CashFlowMonthlyCashFlowBalanceSummaries_1.CashFlowMonthlyCashFlowBalanceSummariesFromJSON)),
        'minDailyBalance': json['minDailyBalance'],
        'maxDailyBalance': json['maxDailyBalance'],
        'twelveMonthAverageDailyBalance': json['twelveMonthAverageDailyBalance'],
        'sixMonthAverageDailyBalance': json['sixMonthAverageDailyBalance'],
        'twoMonthAverageDailyBalance': json['twoMonthAverageDailyBalance'],
        'twelveMonthStandardDeviationOfDailyBalance': json['twelveMonthStandardDeviationOfDailyBalance'],
        'sixMonthStandardDeviationOfDailyBalance': !(0, runtime_1.exists)(json, 'sixMonthStandardDeviationOfDailyBalance') ? undefined : json['sixMonthStandardDeviationOfDailyBalance'],
        'twoMonthStandardDeviationOfDailyBalance': json['twoMonthStandardDeviationOfDailyBalance'],
        'numberOfDaysNegativeBalance': json['numberOfDaysNegativeBalance'],
        'numberOfDaysPositiveBalance': json['numberOfDaysPositiveBalance'],
    };
}
exports.CashFlowCashFlowBalanceSummaryFromJSONTyped = CashFlowCashFlowBalanceSummaryFromJSONTyped;
function CashFlowCashFlowBalanceSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'monthlyCashFlowBalanceSummaries': (value.monthlyCashFlowBalanceSummaries.map(CashFlowMonthlyCashFlowBalanceSummaries_1.CashFlowMonthlyCashFlowBalanceSummariesToJSON)),
        'minDailyBalance': value.minDailyBalance,
        'maxDailyBalance': value.maxDailyBalance,
        'twelveMonthAverageDailyBalance': value.twelveMonthAverageDailyBalance,
        'sixMonthAverageDailyBalance': value.sixMonthAverageDailyBalance,
        'twoMonthAverageDailyBalance': value.twoMonthAverageDailyBalance,
        'twelveMonthStandardDeviationOfDailyBalance': value.twelveMonthStandardDeviationOfDailyBalance,
        'sixMonthStandardDeviationOfDailyBalance': value.sixMonthStandardDeviationOfDailyBalance,
        'twoMonthStandardDeviationOfDailyBalance': value.twoMonthStandardDeviationOfDailyBalance,
        'numberOfDaysNegativeBalance': value.numberOfDaysNegativeBalance,
        'numberOfDaysPositiveBalance': value.numberOfDaysPositiveBalance,
    };
}
exports.CashFlowCashFlowBalanceSummaryToJSON = CashFlowCashFlowBalanceSummaryToJSON;
//# sourceMappingURL=CashFlowCashFlowBalanceSummary.js.map