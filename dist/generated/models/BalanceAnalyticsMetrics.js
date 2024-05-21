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
exports.BalanceAnalyticsMetricsToJSON = exports.BalanceAnalyticsMetricsFromJSONTyped = exports.BalanceAnalyticsMetricsFromJSON = exports.instanceOfBalanceAnalyticsMetrics = void 0;
const runtime_1 = require("../runtime");
const ObbDailyBalance_1 = require("./ObbDailyBalance");
const ObbDateRangeAndAmount_1 = require("./ObbDateRangeAndAmount");
const ObbDateRangeAndCount_1 = require("./ObbDateRangeAndCount");
const ObbNumWeeksAverageBalanceIncreasing_1 = require("./ObbNumWeeksAverageBalanceIncreasing");
/**
 * Check if a given object implements the BalanceAnalyticsMetrics interface.
 */
function instanceOfBalanceAnalyticsMetrics(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBalanceAnalyticsMetrics = instanceOfBalanceAnalyticsMetrics;
function BalanceAnalyticsMetricsFromJSON(json) {
    return BalanceAnalyticsMetricsFromJSONTyped(json, false);
}
exports.BalanceAnalyticsMetricsFromJSON = BalanceAnalyticsMetricsFromJSON;
function BalanceAnalyticsMetricsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'availableBalance': !(0, runtime_1.exists)(json, 'availableBalance') ? undefined : json['availableBalance'],
        'availableBalanceDate': !(0, runtime_1.exists)(json, 'availableBalanceDate') ? undefined : json['availableBalanceDate'],
        'averageDailyBalanceByMonthForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'averageDailyBalanceByMonthForTheReportTimePeriod') ? undefined : (json['averageDailyBalanceByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'averageDailyBalanceForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'averageDailyBalanceForTheReportTimePeriod') ? undefined : json['averageDailyBalanceForTheReportTimePeriod'],
        'averageWeekdayBalanceForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'averageWeekdayBalanceForTheReportTimePeriod') ? undefined : json['averageWeekdayBalanceForTheReportTimePeriod'],
        'countDailyNegativeBalancesByMonthForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'countDailyNegativeBalancesByMonthForTheReportTimePeriod') ? undefined : (json['countDailyNegativeBalancesByMonthForTheReportTimePeriod'].map(ObbDateRangeAndCount_1.ObbDateRangeAndCountFromJSON)),
        'currentRunningBalance': !(0, runtime_1.exists)(json, 'currentRunningBalance') ? undefined : json['currentRunningBalance'],
        'currentRunningBalanceDate': !(0, runtime_1.exists)(json, 'currentRunningBalanceDate') ? undefined : json['currentRunningBalanceDate'],
        'dailyBalancesByWeekdayForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'dailyBalancesByWeekdayForTheReportTimePeriod') ? undefined : (json['dailyBalancesByWeekdayForTheReportTimePeriod'].map(ObbDailyBalance_1.ObbDailyBalanceFromJSON)),
        'dailyBalancesForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'dailyBalancesForTheReportTimePeriod') ? undefined : (json['dailyBalancesForTheReportTimePeriod'].map(ObbDailyBalance_1.ObbDailyBalanceFromJSON)),
        'historicNumberOfWeeksAverageBalanceIncreasing': !(0, runtime_1.exists)(json, 'historicNumberOfWeeksAverageBalanceIncreasing') ? undefined : (0, ObbNumWeeksAverageBalanceIncreasing_1.ObbNumWeeksAverageBalanceIncreasingFromJSON)(json['historicNumberOfWeeksAverageBalanceIncreasing']),
        'maximumDailyBalanceByMonthForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'maximumDailyBalanceByMonthForTheReportTimePeriod') ? undefined : (json['maximumDailyBalanceByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'maximumRunningBalanceForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'maximumRunningBalanceForTheReportTimePeriod') ? undefined : json['maximumRunningBalanceForTheReportTimePeriod'],
        'minimumDailyBalanceByMonthForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'minimumDailyBalanceByMonthForTheReportTimePeriod') ? undefined : (json['minimumDailyBalanceByMonthForTheReportTimePeriod'].map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountFromJSON)),
        'minimumRunningBalanceForTheReportTimePeriod': !(0, runtime_1.exists)(json, 'minimumRunningBalanceForTheReportTimePeriod') ? undefined : json['minimumRunningBalanceForTheReportTimePeriod'],
    };
}
exports.BalanceAnalyticsMetricsFromJSONTyped = BalanceAnalyticsMetricsFromJSONTyped;
function BalanceAnalyticsMetricsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'availableBalance': value.availableBalance,
        'availableBalanceDate': value.availableBalanceDate,
        'averageDailyBalanceByMonthForTheReportTimePeriod': value.averageDailyBalanceByMonthForTheReportTimePeriod === undefined ? undefined : (value.averageDailyBalanceByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'averageDailyBalanceForTheReportTimePeriod': value.averageDailyBalanceForTheReportTimePeriod,
        'averageWeekdayBalanceForTheReportTimePeriod': value.averageWeekdayBalanceForTheReportTimePeriod,
        'countDailyNegativeBalancesByMonthForTheReportTimePeriod': value.countDailyNegativeBalancesByMonthForTheReportTimePeriod === undefined ? undefined : (value.countDailyNegativeBalancesByMonthForTheReportTimePeriod.map(ObbDateRangeAndCount_1.ObbDateRangeAndCountToJSON)),
        'currentRunningBalance': value.currentRunningBalance,
        'currentRunningBalanceDate': value.currentRunningBalanceDate,
        'dailyBalancesByWeekdayForTheReportTimePeriod': value.dailyBalancesByWeekdayForTheReportTimePeriod === undefined ? undefined : (value.dailyBalancesByWeekdayForTheReportTimePeriod.map(ObbDailyBalance_1.ObbDailyBalanceToJSON)),
        'dailyBalancesForTheReportTimePeriod': value.dailyBalancesForTheReportTimePeriod === undefined ? undefined : (value.dailyBalancesForTheReportTimePeriod.map(ObbDailyBalance_1.ObbDailyBalanceToJSON)),
        'historicNumberOfWeeksAverageBalanceIncreasing': (0, ObbNumWeeksAverageBalanceIncreasing_1.ObbNumWeeksAverageBalanceIncreasingToJSON)(value.historicNumberOfWeeksAverageBalanceIncreasing),
        'maximumDailyBalanceByMonthForTheReportTimePeriod': value.maximumDailyBalanceByMonthForTheReportTimePeriod === undefined ? undefined : (value.maximumDailyBalanceByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'maximumRunningBalanceForTheReportTimePeriod': value.maximumRunningBalanceForTheReportTimePeriod,
        'minimumDailyBalanceByMonthForTheReportTimePeriod': value.minimumDailyBalanceByMonthForTheReportTimePeriod === undefined ? undefined : (value.minimumDailyBalanceByMonthForTheReportTimePeriod.map(ObbDateRangeAndAmount_1.ObbDateRangeAndAmountToJSON)),
        'minimumRunningBalanceForTheReportTimePeriod': value.minimumRunningBalanceForTheReportTimePeriod,
    };
}
exports.BalanceAnalyticsMetricsToJSON = BalanceAnalyticsMetricsToJSON;
//# sourceMappingURL=BalanceAnalyticsMetrics.js.map