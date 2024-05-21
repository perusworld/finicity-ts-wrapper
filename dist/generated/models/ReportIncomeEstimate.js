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
exports.ReportIncomeEstimateToJSON = exports.ReportIncomeEstimateFromJSONTyped = exports.ReportIncomeEstimateFromJSON = exports.instanceOfReportIncomeEstimate = void 0;
/**
 * Check if a given object implements the ReportIncomeEstimate interface.
 */
function instanceOfReportIncomeEstimate(value) {
    let isInstance = true;
    isInstance = isInstance && "netAnnual" in value;
    isInstance = isInstance && "projectedNetAnnual" in value;
    isInstance = isInstance && "estimatedGrossAnnual" in value;
    isInstance = isInstance && "projectedGrossAnnual" in value;
    return isInstance;
}
exports.instanceOfReportIncomeEstimate = instanceOfReportIncomeEstimate;
function ReportIncomeEstimateFromJSON(json) {
    return ReportIncomeEstimateFromJSONTyped(json, false);
}
exports.ReportIncomeEstimateFromJSON = ReportIncomeEstimateFromJSON;
function ReportIncomeEstimateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'netAnnual': json['netAnnual'],
        'projectedNetAnnual': json['projectedNetAnnual'],
        'estimatedGrossAnnual': json['estimatedGrossAnnual'],
        'projectedGrossAnnual': json['projectedGrossAnnual'],
    };
}
exports.ReportIncomeEstimateFromJSONTyped = ReportIncomeEstimateFromJSONTyped;
function ReportIncomeEstimateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'netAnnual': value.netAnnual,
        'projectedNetAnnual': value.projectedNetAnnual,
        'estimatedGrossAnnual': value.estimatedGrossAnnual,
        'projectedGrossAnnual': value.projectedGrossAnnual,
    };
}
exports.ReportIncomeEstimateToJSON = ReportIncomeEstimateToJSON;
//# sourceMappingURL=ReportIncomeEstimate.js.map