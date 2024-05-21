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
exports.VOIEWithTXVerifyReportConstraintsToJSON = exports.VOIEWithTXVerifyReportConstraintsFromJSONTyped = exports.VOIEWithTXVerifyReportConstraintsFromJSON = exports.instanceOfVOIEWithTXVerifyReportConstraints = void 0;
const runtime_1 = require("../runtime");
const ReportCustomField_1 = require("./ReportCustomField");
const VOIEWithInterviewData_1 = require("./VOIEWithInterviewData");
/**
 * Check if a given object implements the VOIEWithTXVerifyReportConstraints interface.
 */
function instanceOfVOIEWithTXVerifyReportConstraints(value) {
    let isInstance = true;
    isInstance = isInstance && "voieWithInterviewData" in value;
    return isInstance;
}
exports.instanceOfVOIEWithTXVerifyReportConstraints = instanceOfVOIEWithTXVerifyReportConstraints;
function VOIEWithTXVerifyReportConstraintsFromJSON(json) {
    return VOIEWithTXVerifyReportConstraintsFromJSONTyped(json, false);
}
exports.VOIEWithTXVerifyReportConstraintsFromJSON = VOIEWithTXVerifyReportConstraintsFromJSON;
function VOIEWithTXVerifyReportConstraintsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountIds': !(0, runtime_1.exists)(json, 'accountIds') ? undefined : json['accountIds'],
        'voieWithInterviewData': (0, VOIEWithInterviewData_1.VOIEWithInterviewDataFromJSON)(json['voieWithInterviewData']),
        'reportCustomFields': !(0, runtime_1.exists)(json, 'reportCustomFields') ? undefined : (json['reportCustomFields'].map(ReportCustomField_1.ReportCustomFieldFromJSON)),
        'fromDate': !(0, runtime_1.exists)(json, 'fromDate') ? undefined : json['fromDate'],
        'incomeStreamConfidenceMinimum': !(0, runtime_1.exists)(json, 'incomeStreamConfidenceMinimum') ? undefined : json['incomeStreamConfidenceMinimum'],
    };
}
exports.VOIEWithTXVerifyReportConstraintsFromJSONTyped = VOIEWithTXVerifyReportConstraintsFromJSONTyped;
function VOIEWithTXVerifyReportConstraintsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountIds': value.accountIds,
        'voieWithInterviewData': (0, VOIEWithInterviewData_1.VOIEWithInterviewDataToJSON)(value.voieWithInterviewData),
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : (value.reportCustomFields.map(ReportCustomField_1.ReportCustomFieldToJSON)),
        'fromDate': value.fromDate,
        'incomeStreamConfidenceMinimum': value.incomeStreamConfidenceMinimum,
    };
}
exports.VOIEWithTXVerifyReportConstraintsToJSON = VOIEWithTXVerifyReportConstraintsToJSON;
//# sourceMappingURL=VOIEWithTXVerifyReportConstraints.js.map