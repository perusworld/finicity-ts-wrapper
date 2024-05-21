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
exports.VOIETXVerifyReportAccountToJSON = exports.VOIETXVerifyReportAccountFromJSONTyped = exports.VOIETXVerifyReportAccountFromJSON = exports.instanceOfVOIETXVerifyReportAccount = void 0;
const runtime_1 = require("../runtime");
const AccountDetailsTxBased_1 = require("./AccountDetailsTxBased");
const ReportAccountPosition_1 = require("./ReportAccountPosition");
const ReportTransactionNewTxBased_1 = require("./ReportTransactionNewTxBased");
const VOIETXVerifyReportIncomeStream_1 = require("./VOIETXVerifyReportIncomeStream");
/**
 * Check if a given object implements the VOIETXVerifyReportAccount interface.
 */
function instanceOfVOIETXVerifyReportAccount(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "number" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aggregationStatusCode" in value;
    isInstance = isInstance && "transactions" in value;
    return isInstance;
}
exports.instanceOfVOIETXVerifyReportAccount = instanceOfVOIETXVerifyReportAccount;
function VOIETXVerifyReportAccountFromJSON(json) {
    return VOIETXVerifyReportAccountFromJSONTyped(json, false);
}
exports.VOIETXVerifyReportAccountFromJSON = VOIETXVerifyReportAccountFromJSON;
function VOIETXVerifyReportAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'number': json['number'],
        'ownerName': !(0, runtime_1.exists)(json, 'ownerName') ? undefined : json['ownerName'],
        'ownerAddress': !(0, runtime_1.exists)(json, 'ownerAddress') ? undefined : json['ownerAddress'],
        'name': json['name'],
        'type': json['type'],
        'aggregationStatusCode': json['aggregationStatusCode'],
        'incomeStreams': !(0, runtime_1.exists)(json, 'incomeStreams') ? undefined : (json['incomeStreams'].map(VOIETXVerifyReportIncomeStream_1.VOIETXVerifyReportIncomeStreamFromJSON)),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : json['balance'],
        'averageMonthlyBalance': !(0, runtime_1.exists)(json, 'averageMonthlyBalance') ? undefined : json['averageMonthlyBalance'],
        'transactions': (json['transactions'].map(ReportTransactionNewTxBased_1.ReportTransactionNewTxBasedFromJSON)),
        'details': !(0, runtime_1.exists)(json, 'details') ? undefined : (0, AccountDetailsTxBased_1.AccountDetailsTxBasedFromJSON)(json['details']),
        'position': !(0, runtime_1.exists)(json, 'position') ? undefined : (0, ReportAccountPosition_1.ReportAccountPositionFromJSON)(json['position']),
        'availableBalance': !(0, runtime_1.exists)(json, 'availableBalance') ? undefined : json['availableBalance'],
    };
}
exports.VOIETXVerifyReportAccountFromJSONTyped = VOIETXVerifyReportAccountFromJSONTyped;
function VOIETXVerifyReportAccountToJSON(value) {
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
        'aggregationStatusCode': value.aggregationStatusCode,
        'incomeStreams': value.incomeStreams === undefined ? undefined : (value.incomeStreams.map(VOIETXVerifyReportIncomeStream_1.VOIETXVerifyReportIncomeStreamToJSON)),
        'balance': value.balance,
        'averageMonthlyBalance': value.averageMonthlyBalance,
        'transactions': (value.transactions.map(ReportTransactionNewTxBased_1.ReportTransactionNewTxBasedToJSON)),
        'details': (0, AccountDetailsTxBased_1.AccountDetailsTxBasedToJSON)(value.details),
        'position': (0, ReportAccountPosition_1.ReportAccountPositionToJSON)(value.position),
        'availableBalance': value.availableBalance,
    };
}
exports.VOIETXVerifyReportAccountToJSON = VOIETXVerifyReportAccountToJSON;
//# sourceMappingURL=VOIETXVerifyReportAccount.js.map