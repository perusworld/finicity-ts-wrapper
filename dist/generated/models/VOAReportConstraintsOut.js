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
exports.VOAReportConstraintsOutToJSON = exports.VOAReportConstraintsOutFromJSONTyped = exports.VOAReportConstraintsOutFromJSON = exports.instanceOfVOAReportConstraintsOut = void 0;
const runtime_1 = require("../runtime");
const ReportCustomField_1 = require("./ReportCustomField");
/**
 * Check if a given object implements the VOAReportConstraintsOut interface.
 */
function instanceOfVOAReportConstraintsOut(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfVOAReportConstraintsOut = instanceOfVOAReportConstraintsOut;
function VOAReportConstraintsOutFromJSON(json) {
    return VOAReportConstraintsOutFromJSONTyped(json, false);
}
exports.VOAReportConstraintsOutFromJSON = VOAReportConstraintsOutFromJSON;
function VOAReportConstraintsOutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountIds': !(0, runtime_1.exists)(json, 'accountIds') ? undefined : json['accountIds'],
        'reportCustomFields': !(0, runtime_1.exists)(json, 'reportCustomFields') ? undefined : (json['reportCustomFields'].map(ReportCustomField_1.ReportCustomFieldFromJSON)),
        'showNsf': !(0, runtime_1.exists)(json, 'showNsf') ? undefined : json['showNsf'],
        'fromDate': !(0, runtime_1.exists)(json, 'fromDate') ? undefined : json['fromDate'],
    };
}
exports.VOAReportConstraintsOutFromJSONTyped = VOAReportConstraintsOutFromJSONTyped;
function VOAReportConstraintsOutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountIds': value.accountIds,
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : (value.reportCustomFields.map(ReportCustomField_1.ReportCustomFieldToJSON)),
        'showNsf': value.showNsf,
        'fromDate': value.fromDate,
    };
}
exports.VOAReportConstraintsOutToJSON = VOAReportConstraintsOutToJSON;
//# sourceMappingURL=VOAReportConstraintsOut.js.map