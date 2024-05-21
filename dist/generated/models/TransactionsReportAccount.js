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
exports.TransactionsReportAccountToJSON = exports.TransactionsReportAccountFromJSONTyped = exports.TransactionsReportAccountFromJSON = exports.instanceOfTransactionsReportAccount = void 0;
const runtime_1 = require("../runtime");
const ReportTransaction_1 = require("./ReportTransaction");
/**
 * Check if a given object implements the TransactionsReportAccount interface.
 */
function instanceOfTransactionsReportAccount(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionsReportAccount = instanceOfTransactionsReportAccount;
function TransactionsReportAccountFromJSON(json) {
    return TransactionsReportAccountFromJSONTyped(json, false);
}
exports.TransactionsReportAccountFromJSON = TransactionsReportAccountFromJSON;
function TransactionsReportAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'number': !(0, runtime_1.exists)(json, 'number') ? undefined : json['number'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'aggregationStatusCode': !(0, runtime_1.exists)(json, 'aggregationStatusCode') ? undefined : json['aggregationStatusCode'],
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : json['balance'],
        'balanceDate': !(0, runtime_1.exists)(json, 'balanceDate') ? undefined : json['balanceDate'],
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (json['transactions'].map(ReportTransaction_1.ReportTransactionFromJSON)),
    };
}
exports.TransactionsReportAccountFromJSONTyped = TransactionsReportAccountFromJSONTyped;
function TransactionsReportAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'number': value.number,
        'type': value.type,
        'aggregationStatusCode': value.aggregationStatusCode,
        'balance': value.balance,
        'balanceDate': value.balanceDate,
        'transactions': value.transactions === undefined ? undefined : (value.transactions.map(ReportTransaction_1.ReportTransactionToJSON)),
    };
}
exports.TransactionsReportAccountToJSON = TransactionsReportAccountToJSON;
//# sourceMappingURL=TransactionsReportAccount.js.map