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
exports.PartnerCredentialsWithNewSecretToJSON = exports.PartnerCredentialsWithNewSecretFromJSONTyped = exports.PartnerCredentialsWithNewSecretFromJSON = exports.instanceOfPartnerCredentialsWithNewSecret = void 0;
/**
 * Check if a given object implements the PartnerCredentialsWithNewSecret interface.
 */
function instanceOfPartnerCredentialsWithNewSecret(value) {
    let isInstance = true;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "partnerSecret" in value;
    isInstance = isInstance && "newPartnerSecret" in value;
    return isInstance;
}
exports.instanceOfPartnerCredentialsWithNewSecret = instanceOfPartnerCredentialsWithNewSecret;
function PartnerCredentialsWithNewSecretFromJSON(json) {
    return PartnerCredentialsWithNewSecretFromJSONTyped(json, false);
}
exports.PartnerCredentialsWithNewSecretFromJSON = PartnerCredentialsWithNewSecretFromJSON;
function PartnerCredentialsWithNewSecretFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'partnerId': json['partnerId'],
        'partnerSecret': json['partnerSecret'],
        'newPartnerSecret': json['newPartnerSecret'],
    };
}
exports.PartnerCredentialsWithNewSecretFromJSONTyped = PartnerCredentialsWithNewSecretFromJSONTyped;
function PartnerCredentialsWithNewSecretToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'partnerId': value.partnerId,
        'partnerSecret': value.partnerSecret,
        'newPartnerSecret': value.newPartnerSecret,
    };
}
exports.PartnerCredentialsWithNewSecretToJSON = PartnerCredentialsWithNewSecretToJSON;
//# sourceMappingURL=PartnerCredentialsWithNewSecret.js.map