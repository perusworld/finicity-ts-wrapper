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
exports.TransactionsReportConstraintsToJSON = exports.TransactionsReportConstraintsFromJSONTyped = exports.TransactionsReportConstraintsFromJSON = exports.instanceOfTransactionsReportConstraints = void 0;
const runtime_1 = require("../runtime");
const ReportCustomField_1 = require("./ReportCustomField");
/**
 * Check if a given object implements the TransactionsReportConstraints interface.
 */
function instanceOfTransactionsReportConstraints(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionsReportConstraints = instanceOfTransactionsReportConstraints;
function TransactionsReportConstraintsFromJSON(json) {
    return TransactionsReportConstraintsFromJSONTyped(json, false);
}
exports.TransactionsReportConstraintsFromJSON = TransactionsReportConstraintsFromJSON;
function TransactionsReportConstraintsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountIds': !(0, runtime_1.exists)(json, 'accountIds') ? undefined : json['accountIds'],
        'fromDate': !(0, runtime_1.exists)(json, 'fromDate') ? undefined : json['fromDate'],
        'reportCustomFields': !(0, runtime_1.exists)(json, 'reportCustomFields') ? undefined : (json['reportCustomFields'].map(ReportCustomField_1.ReportCustomFieldFromJSON)),
    };
}
exports.TransactionsReportConstraintsFromJSONTyped = TransactionsReportConstraintsFromJSONTyped;
function TransactionsReportConstraintsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountIds': value.accountIds,
        'fromDate': value.fromDate,
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : (value.reportCustomFields.map(ReportCustomField_1.ReportCustomFieldToJSON)),
    };
}
exports.TransactionsReportConstraintsToJSON = TransactionsReportConstraintsToJSON;
//# sourceMappingURL=TransactionsReportConstraints.js.map