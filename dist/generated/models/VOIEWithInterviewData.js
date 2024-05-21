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
exports.VOIEWithInterviewDataToJSON = exports.VOIEWithInterviewDataFromJSONTyped = exports.VOIEWithInterviewDataFromJSON = exports.instanceOfVOIEWithInterviewData = void 0;
const runtime_1 = require("../runtime");
const TxVerifyInterview_1 = require("./TxVerifyInterview");
/**
 * Check if a given object implements the VOIEWithInterviewData interface.
 */
function instanceOfVOIEWithInterviewData(value) {
    let isInstance = true;
    isInstance = isInstance && "txVerifyInterview" in value;
    return isInstance;
}
exports.instanceOfVOIEWithInterviewData = instanceOfVOIEWithInterviewData;
function VOIEWithInterviewDataFromJSON(json) {
    return VOIEWithInterviewDataFromJSONTyped(json, false);
}
exports.VOIEWithInterviewDataFromJSON = VOIEWithInterviewDataFromJSON;
function VOIEWithInterviewDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'txVerifyInterview': (json['txVerifyInterview'].map(TxVerifyInterview_1.TxVerifyInterviewFromJSON)),
        'extractEarnings': !(0, runtime_1.exists)(json, 'extractEarnings') ? undefined : json['extractEarnings'],
        'extractDeductions': !(0, runtime_1.exists)(json, 'extractDeductions') ? undefined : json['extractDeductions'],
        'extractDirectDeposit': !(0, runtime_1.exists)(json, 'extractDirectDeposit') ? undefined : json['extractDirectDeposit'],
    };
}
exports.VOIEWithInterviewDataFromJSONTyped = VOIEWithInterviewDataFromJSONTyped;
function VOIEWithInterviewDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'txVerifyInterview': (value.txVerifyInterview.map(TxVerifyInterview_1.TxVerifyInterviewToJSON)),
        'extractEarnings': value.extractEarnings,
        'extractDeductions': value.extractDeductions,
        'extractDirectDeposit': value.extractDirectDeposit,
    };
}
exports.VOIEWithInterviewDataToJSON = VOIEWithInterviewDataToJSON;
//# sourceMappingURL=VOIEWithInterviewData.js.map