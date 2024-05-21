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
exports.PayrollDataOutToJSON = exports.PayrollDataOutFromJSONTyped = exports.PayrollDataOutFromJSON = exports.instanceOfPayrollDataOut = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PayrollDataOut interface.
 */
function instanceOfPayrollDataOut(value) {
    let isInstance = true;
    isInstance = isInstance && "payrollDataRetrievalId" in value;
    isInstance = isInstance && "employerNames" in value;
    return isInstance;
}
exports.instanceOfPayrollDataOut = instanceOfPayrollDataOut;
function PayrollDataOutFromJSON(json) {
    return PayrollDataOutFromJSONTyped(json, false);
}
exports.PayrollDataOutFromJSON = PayrollDataOutFromJSON;
function PayrollDataOutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'payrollDataRetrievalId': json['payrollDataRetrievalId'],
        'employerNames': json['employerNames'],
        'reportId': !(0, runtime_1.exists)(json, 'reportId') ? undefined : json['reportId'],
    };
}
exports.PayrollDataOutFromJSONTyped = PayrollDataOutFromJSONTyped;
function PayrollDataOutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payrollDataRetrievalId': value.payrollDataRetrievalId,
        'employerNames': value.employerNames,
        'reportId': value.reportId,
    };
}
exports.PayrollDataOutToJSON = PayrollDataOutToJSON;
//# sourceMappingURL=PayrollDataOut.js.map