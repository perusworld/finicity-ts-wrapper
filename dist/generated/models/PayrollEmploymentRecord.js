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
exports.PayrollEmploymentRecordToJSON = exports.PayrollEmploymentRecordFromJSONTyped = exports.PayrollEmploymentRecordFromJSON = exports.instanceOfPayrollEmploymentRecord = void 0;
const runtime_1 = require("../runtime");
const PayrollEmployerAddress_1 = require("./PayrollEmployerAddress");
/**
 * Check if a given object implements the PayrollEmploymentRecord interface.
 */
function instanceOfPayrollEmploymentRecord(value) {
    let isInstance = true;
    isInstance = isInstance && "employerName" in value;
    isInstance = isInstance && "employmentStatusCode" in value;
    isInstance = isInstance && "employmentStatusName" in value;
    isInstance = isInstance && "workLevelStatus" in value;
    return isInstance;
}
exports.instanceOfPayrollEmploymentRecord = instanceOfPayrollEmploymentRecord;
function PayrollEmploymentRecordFromJSON(json) {
    return PayrollEmploymentRecordFromJSONTyped(json, false);
}
exports.PayrollEmploymentRecordFromJSON = PayrollEmploymentRecordFromJSON;
function PayrollEmploymentRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'employerName': json['employerName'],
        'legalEntityId': !(0, runtime_1.exists)(json, 'legalEntityId') ? undefined : json['legalEntityId'],
        'originalHireDate': !(0, runtime_1.exists)(json, 'originalHireDate') ? undefined : json['originalHireDate'],
        'latestHireDate': !(0, runtime_1.exists)(json, 'latestHireDate') ? undefined : json['latestHireDate'],
        'latestPayDate': !(0, runtime_1.exists)(json, 'latestPayDate') ? undefined : json['latestPayDate'],
        'daysSinceLastPay': !(0, runtime_1.exists)(json, 'daysSinceLastPay') ? undefined : json['daysSinceLastPay'],
        'numberPayCadenceWithoutPay': !(0, runtime_1.exists)(json, 'numberPayCadenceWithoutPay') ? undefined : json['numberPayCadenceWithoutPay'],
        'employmentEndDate': !(0, runtime_1.exists)(json, 'employmentEndDate') ? undefined : json['employmentEndDate'],
        'employmentDuration': !(0, runtime_1.exists)(json, 'employmentDuration') ? undefined : json['employmentDuration'],
        'employerAddress': !(0, runtime_1.exists)(json, 'employerAddress') ? undefined : (json['employerAddress'].map(PayrollEmployerAddress_1.PayrollEmployerAddressFromJSON)),
        'employmentStatusCode': json['employmentStatusCode'],
        'employmentStatusName': json['employmentStatusName'],
        'workLevelCode': !(0, runtime_1.exists)(json, 'workLevelCode') ? undefined : json['workLevelCode'],
        'workLevelName': !(0, runtime_1.exists)(json, 'workLevelName') ? undefined : json['workLevelName'],
        'workLevelStatus': json['workLevelStatus'],
        'positionTitle': !(0, runtime_1.exists)(json, 'positionTitle') ? undefined : json['positionTitle'],
        'positionDuration': !(0, runtime_1.exists)(json, 'positionDuration') ? undefined : json['positionDuration'],
    };
}
exports.PayrollEmploymentRecordFromJSONTyped = PayrollEmploymentRecordFromJSONTyped;
function PayrollEmploymentRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'employerName': value.employerName,
        'legalEntityId': value.legalEntityId,
        'originalHireDate': value.originalHireDate,
        'latestHireDate': value.latestHireDate,
        'latestPayDate': value.latestPayDate,
        'daysSinceLastPay': value.daysSinceLastPay,
        'numberPayCadenceWithoutPay': value.numberPayCadenceWithoutPay,
        'employmentEndDate': value.employmentEndDate,
        'employmentDuration': value.employmentDuration,
        'employerAddress': value.employerAddress === undefined ? undefined : (value.employerAddress.map(PayrollEmployerAddress_1.PayrollEmployerAddressToJSON)),
        'employmentStatusCode': value.employmentStatusCode,
        'employmentStatusName': value.employmentStatusName,
        'workLevelCode': value.workLevelCode,
        'workLevelName': value.workLevelName,
        'workLevelStatus': value.workLevelStatus,
        'positionTitle': value.positionTitle,
        'positionDuration': value.positionDuration,
    };
}
exports.PayrollEmploymentRecordToJSON = PayrollEmploymentRecordToJSON;
//# sourceMappingURL=PayrollEmploymentRecord.js.map