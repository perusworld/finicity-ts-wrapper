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
exports.VOAReportAccountToJSON = exports.VOAReportAccountFromJSONTyped = exports.VOAReportAccountFromJSON = exports.instanceOfVOAReportAccount = void 0;
const runtime_1 = require("../runtime");
const AccountDetailsTxBased_1 = require("./AccountDetailsTxBased");
const PrequalificationReportAssetSummary_1 = require("./PrequalificationReportAssetSummary");
const ReportAccountPosition_1 = require("./ReportAccountPosition");
const ReportTransactionNewTxBased_1 = require("./ReportTransactionNewTxBased");
/**
 * Check if a given object implements the VOAReportAccount interface.
 */
function instanceOfVOAReportAccount(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfVOAReportAccount = instanceOfVOAReportAccount;
function VOAReportAccountFromJSON(json) {
    return VOAReportAccountFromJSONTyped(json, false);
}
exports.VOAReportAccountFromJSON = VOAReportAccountFromJSON;
function VOAReportAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'number': !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        'ownerName': !(0, runtime_1.exists)(json, 'ownerName') ? undefined : json['ownerName'],
        'ownerAddress': !(0, runtime_1.exists)(json, 'ownerAddress') ? undefined : json['ownerAddress'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'availableBalance': !(0, runtime_1.exists)(json, 'availableBalance') ? undefined : json['availableBalance'],
        'aggregationStatusCode': !(0, runtime_1.exists)(json, 'aggregationStatusCode') ? undefined : json['aggregationStatusCode'],
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : json['balance'],
        'balanceDate': !(0, runtime_1.exists)(json, 'balanceDate') ? undefined : json['balanceDate'],
        'averageMonthlyBalance': !(0, runtime_1.exists)(json, 'averageMonthlyBalance') ? undefined : json['averageMonthlyBalance'],
        'totNumberInsufficientFundsFeeDebitTxAccount': !(0, runtime_1.exists)(json, 'totNumberInsufficientFundsFeeDebitTxAccount') ? undefined : json['totNumberInsufficientFundsFeeDebitTxAccount'],
        'totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount': !(0, runtime_1.exists)(json, 'totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount') ? undefined : json['totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount'],
        'totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount': !(0, runtime_1.exists)(json, 'totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount') ? undefined : json['totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount'],
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (json['transactions'].map(ReportTransactionNewTxBased_1.ReportTransactionNewTxBasedFromJSON)),
        'details': !(0, runtime_1.exists)(json, 'details') ? undefined : (0, AccountDetailsTxBased_1.AccountDetailsTxBasedFromJSON)(json['details']),
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : (0, ReportAccountPosition_1.ReportAccountPositionFromJSON)(json['position']),
        'asset': !(0, runtime_1.exists)(json, 'asset') ? undefined : (0, PrequalificationReportAssetSummary_1.PrequalificationReportAssetSummaryFromJSON)(json['asset']),
    };
}
exports.VOAReportAccountFromJSONTyped = VOAReportAccountFromJSONTyped;
function VOAReportAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'number': value.number,
        'ownerName': value.ownerName,
        'ownerAddress': value.ownerAddress,
        'name': value.name,
        'type': value.type,
        'availableBalance': value.availableBalance,
        'aggregationStatusCode': value.aggregationStatusCode,
        'balance': value.balance,
        'balanceDate': value.balanceDate,
        'averageMonthlyBalance': value.averageMonthlyBalance,
        'totNumberInsufficientFundsFeeDebitTxAccount': value.totNumberInsufficientFundsFeeDebitTxAccount,
        'totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount': value.totNumberInsufficientFundsFeeDebitTxOver2MonthsAccount,
        'totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount': value.totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount,
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(ReportTransactionNewTxBased_1.ReportTransactionNewTxBasedToJSON)),
        'details': (0, AccountDetailsTxBased_1.AccountDetailsTxBasedToJSON)(value.details),
        'position': (0, ReportAccountPosition_1.ReportAccountPositionToJSON)(value.position),
        'asset': (0, PrequalificationReportAssetSummary_1.PrequalificationReportAssetSummaryToJSON)(value.asset),
    };
}
exports.VOAReportAccountToJSON = VOAReportAccountToJSON;
//# sourceMappingURL=VOAReportAccount.js.map