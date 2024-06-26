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
exports.PayrollDataToJSON = exports.PayrollDataFromJSONTyped = exports.PayrollDataFromJSON = exports.instanceOfPayrollData = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PayrollData interface.
 */
function instanceOfPayrollData(value) {
    let isInstance = true;
    isInstance = isInstance && "ssn" in value;
    isInstance = isInstance && "dob" in value;
    return isInstance;
}
exports.instanceOfPayrollData = instanceOfPayrollData;
function PayrollDataFromJSON(json) {
    return PayrollDataFromJSONTyped(json, false);
}
exports.PayrollDataFromJSON = PayrollDataFromJSON;
function PayrollDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ssn': json['ssn'],
        'dob': json['dob'],
        'reportId': !(0, runtime_1.exists)(json, 'reportId') ? undefined : json['reportId'],
    };
}
exports.PayrollDataFromJSONTyped = PayrollDataFromJSONTyped;
function PayrollDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ssn': value.ssn,
        'dob': value.dob,
        'reportId': value.reportId,
    };
}
exports.PayrollDataToJSON = PayrollDataToJSON;
//# sourceMappingURL=PayrollData.js.map