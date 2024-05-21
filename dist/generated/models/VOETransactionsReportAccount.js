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
exports.VOETransactionsReportAccountToJSON = exports.VOETransactionsReportAccountFromJSONTyped = exports.VOETransactionsReportAccountFromJSON = exports.instanceOfVOETransactionsReportAccount = void 0;
const runtime_1 = require("../runtime");
const VOETransactionsReportIncomeStream_1 = require("./VOETransactionsReportIncomeStream");
/**
 * Check if a given object implements the VOETransactionsReportAccount interface.
 */
function instanceOfVOETransactionsReportAccount(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfVOETransactionsReportAccount = instanceOfVOETransactionsReportAccount;
function VOETransactionsReportAccountFromJSON(json) {
    return VOETransactionsReportAccountFromJSONTyped(json, false);
}
exports.VOETransactionsReportAccountFromJSON = VOETransactionsReportAccountFromJSON;
function VOETransactionsReportAccountFromJSONTyped(json, ignoreDiscriminator) {
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
        'aggregationStatusCode': !(0, runtime_1.exists)(json, 'aggregationStatusCode') ? undefined : json['aggregationStatusCode'],
        'incomeStreams': !(0, runtime_1.exists)(json, 'incomeStreams') ? undefined : (json['incomeStreams'].map(VOETransactionsReportIncomeStream_1.VOETransactionsReportIncomeStreamFromJSON)),
    };
}
exports.VOETransactionsReportAccountFromJSONTyped = VOETransactionsReportAccountFromJSONTyped;
function VOETransactionsReportAccountToJSON(value) {
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
        'incomeStreams': value.incomeStreams === undefined ? undefined : (value.incomeStreams.map(VOETransactionsReportIncomeStream_1.VOETransactionsReportIncomeStreamToJSON)),
    };
}
exports.VOETransactionsReportAccountToJSON = VOETransactionsReportAccountToJSON;
//# sourceMappingURL=VOETransactionsReportAccount.js.map