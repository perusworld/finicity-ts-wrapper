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
exports.PayrollEmploymentHistoryVOIEToJSON = exports.PayrollEmploymentHistoryVOIEFromJSONTyped = exports.PayrollEmploymentHistoryVOIEFromJSON = exports.instanceOfPayrollEmploymentHistoryVOIE = void 0;
const PayrollEmployeeRecord_1 = require("./PayrollEmployeeRecord");
const PayrollEmploymentRecord_1 = require("./PayrollEmploymentRecord");
const PayrollVOIEIncomeRecord_1 = require("./PayrollVOIEIncomeRecord");
/**
 * Check if a given object implements the PayrollEmploymentHistoryVOIE interface.
 */
function instanceOfPayrollEmploymentHistoryVOIE(value) {
    let isInstance = true;
    isInstance = isInstance && "asOfDate" in value;
    isInstance = isInstance && "employerName" in value;
    isInstance = isInstance && "payrollSource" in value;
    isInstance = isInstance && "employee" in value;
    isInstance = isInstance && "employment" in value;
    isInstance = isInstance && "income" in value;
    return isInstance;
}
exports.instanceOfPayrollEmploymentHistoryVOIE = instanceOfPayrollEmploymentHistoryVOIE;
function PayrollEmploymentHistoryVOIEFromJSON(json) {
    return PayrollEmploymentHistoryVOIEFromJSONTyped(json, false);
}
exports.PayrollEmploymentHistoryVOIEFromJSON = PayrollEmploymentHistoryVOIEFromJSON;
function PayrollEmploymentHistoryVOIEFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'asOfDate': json['asOfDate'],
        'employerName': json['employerName'],
        'payrollSource': json['payrollSource'],
        'employee': (0, PayrollEmployeeRecord_1.PayrollEmployeeRecordFromJSON)(json['employee']),
        'employment': (0, PayrollEmploymentRecord_1.PayrollEmploymentRecordFromJSON)(json['employment']),
        'income': (0, PayrollVOIEIncomeRecord_1.PayrollVOIEIncomeRecordFromJSON)(json['income']),
    };
}
exports.PayrollEmploymentHistoryVOIEFromJSONTyped = PayrollEmploymentHistoryVOIEFromJSONTyped;
function PayrollEmploymentHistoryVOIEToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'asOfDate': value.asOfDate,
        'employerName': value.employerName,
        'payrollSource': value.payrollSource,
        'employee': (0, PayrollEmployeeRecord_1.PayrollEmployeeRecordToJSON)(value.employee),
        'employment': (0, PayrollEmploymentRecord_1.PayrollEmploymentRecordToJSON)(value.employment),
        'income': (0, PayrollVOIEIncomeRecord_1.PayrollVOIEIncomeRecordToJSON)(value.income),
    };
}
exports.PayrollEmploymentHistoryVOIEToJSON = PayrollEmploymentHistoryVOIEToJSON;
//# sourceMappingURL=PayrollEmploymentHistoryVOIE.js.map