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
exports.ObbAccountOwnerToJSON = exports.ObbAccountOwnerFromJSONTyped = exports.ObbAccountOwnerFromJSON = exports.instanceOfObbAccountOwner = void 0;
/**
 * Check if a given object implements the ObbAccountOwner interface.
 */
function instanceOfObbAccountOwner(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfObbAccountOwner = instanceOfObbAccountOwner;
function ObbAccountOwnerFromJSON(json) {
    return ObbAccountOwnerFromJSONTyped(json, false);
}
exports.ObbAccountOwnerFromJSON = ObbAccountOwnerFromJSON;
function ObbAccountOwnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
    };
}
exports.ObbAccountOwnerFromJSONTyped = ObbAccountOwnerFromJSONTyped;
function ObbAccountOwnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
    };
}
exports.ObbAccountOwnerToJSON = ObbAccountOwnerToJSON;
//# sourceMappingURL=ObbAccountOwner.js.map