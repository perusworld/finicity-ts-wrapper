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
exports.VOIEWithTXVerifyReportConstraintsOutToJSON = exports.VOIEWithTXVerifyReportConstraintsOutFromJSONTyped = exports.VOIEWithTXVerifyReportConstraintsOutFromJSON = exports.instanceOfVOIEWithTXVerifyReportConstraintsOut = void 0;
const runtime_1 = require("../runtime");
const ReportCustomField_1 = require("./ReportCustomField");
const VOIEWithInterviewData_1 = require("./VOIEWithInterviewData");
/**
 * Check if a given object implements the VOIEWithTXVerifyReportConstraintsOut interface.
 */
function instanceOfVOIEWithTXVerifyReportConstraintsOut(value) {
    let isInstance = true;
    isInstance = isInstance && "voieWithInterviewData" in value;
    return isInstance;
}
exports.instanceOfVOIEWithTXVerifyReportConstraintsOut = instanceOfVOIEWithTXVerifyReportConstraintsOut;
function VOIEWithTXVerifyReportConstraintsOutFromJSON(json) {
    return VOIEWithTXVerifyReportConstraintsOutFromJSONTyped(json, false);
}
exports.VOIEWithTXVerifyReportConstraintsOutFromJSON = VOIEWithTXVerifyReportConstraintsOutFromJSON;
function VOIEWithTXVerifyReportConstraintsOutFromJSONTyped(json, ignoreDiscriminator) {
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
exports.VOIEWithTXVerifyReportConstraintsOutFromJSONTyped = VOIEWithTXVerifyReportConstraintsOutFromJSONTyped;
function VOIEWithTXVerifyReportConstraintsOutToJSON(value) {
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
exports.VOIEWithTXVerifyReportConstraintsOutToJSON = VOIEWithTXVerifyReportConstraintsOutToJSON;
//# sourceMappingURL=VOIEWithTXVerifyReportConstraintsOut.js.map