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
exports.ThirdPartyAccessKeyReceiptDataToJSON = exports.ThirdPartyAccessKeyReceiptDataFromJSONTyped = exports.ThirdPartyAccessKeyReceiptDataFromJSON = exports.instanceOfThirdPartyAccessKeyReceiptData = void 0;
const runtime_1 = require("../runtime");
const ThirdPartyAccessReceiptData_1 = require("./ThirdPartyAccessReceiptData");
/**
 * Check if a given object implements the ThirdPartyAccessKeyReceiptData interface.
 */
function instanceOfThirdPartyAccessKeyReceiptData(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfThirdPartyAccessKeyReceiptData = instanceOfThirdPartyAccessKeyReceiptData;
function ThirdPartyAccessKeyReceiptDataFromJSON(json) {
    return ThirdPartyAccessKeyReceiptDataFromJSONTyped(json, false);
}
exports.ThirdPartyAccessKeyReceiptDataFromJSON = ThirdPartyAccessKeyReceiptDataFromJSON;
function ThirdPartyAccessKeyReceiptDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(ThirdPartyAccessReceiptData_1.ThirdPartyAccessReceiptDataFromJSON)),
    };
}
exports.ThirdPartyAccessKeyReceiptDataFromJSONTyped = ThirdPartyAccessKeyReceiptDataFromJSONTyped;
function ThirdPartyAccessKeyReceiptDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(ThirdPartyAccessReceiptData_1.ThirdPartyAccessReceiptDataToJSON)),
    };
}
exports.ThirdPartyAccessKeyReceiptDataToJSON = ThirdPartyAccessKeyReceiptDataToJSON;
//# sourceMappingURL=ThirdPartyAccessKeyReceiptData.js.map