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
exports.PartnerCredentialsToJSON = exports.PartnerCredentialsFromJSONTyped = exports.PartnerCredentialsFromJSON = exports.instanceOfPartnerCredentials = void 0;
/**
 * Check if a given object implements the PartnerCredentials interface.
 */
function instanceOfPartnerCredentials(value) {
    let isInstance = true;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "partnerSecret" in value;
    return isInstance;
}
exports.instanceOfPartnerCredentials = instanceOfPartnerCredentials;
function PartnerCredentialsFromJSON(json) {
    return PartnerCredentialsFromJSONTyped(json, false);
}
exports.PartnerCredentialsFromJSON = PartnerCredentialsFromJSON;
function PartnerCredentialsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'partnerId': json['partnerId'],
        'partnerSecret': json['partnerSecret'],
    };
}
exports.PartnerCredentialsFromJSONTyped = PartnerCredentialsFromJSONTyped;
function PartnerCredentialsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'partnerId': value.partnerId,
        'partnerSecret': value.partnerSecret,
    };
}
exports.PartnerCredentialsToJSON = PartnerCredentialsToJSON;
//# sourceMappingURL=PartnerCredentials.js.map