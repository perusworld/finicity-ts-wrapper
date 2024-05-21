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
exports.ACHDetailsToJSON = exports.ACHDetailsFromJSONTyped = exports.ACHDetailsFromJSON = exports.instanceOfACHDetails = void 0;
/**
 * Check if a given object implements the ACHDetails interface.
 */
function instanceOfACHDetails(value) {
    let isInstance = true;
    isInstance = isInstance && "routingNumber" in value;
    isInstance = isInstance && "realAccountNumber" in value;
    return isInstance;
}
exports.instanceOfACHDetails = instanceOfACHDetails;
function ACHDetailsFromJSON(json) {
    return ACHDetailsFromJSONTyped(json, false);
}
exports.ACHDetailsFromJSON = ACHDetailsFromJSON;
function ACHDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'routingNumber': json['routingNumber'],
        'realAccountNumber': json['realAccountNumber'],
    };
}
exports.ACHDetailsFromJSONTyped = ACHDetailsFromJSONTyped;
function ACHDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'routingNumber': value.routingNumber,
        'realAccountNumber': value.realAccountNumber,
    };
}
exports.ACHDetailsToJSON = ACHDetailsToJSON;
//# sourceMappingURL=ACHDetails.js.map