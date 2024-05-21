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
exports.ThirdPartyAccessKeyDataToJSON = exports.ThirdPartyAccessKeyDataFromJSONTyped = exports.ThirdPartyAccessKeyDataFromJSON = exports.instanceOfThirdPartyAccessKeyData = void 0;
const runtime_1 = require("../runtime");
const ThirdPartyAccessProduct_1 = require("./ThirdPartyAccessProduct");
const ThirdPartyAccessProvenance_1 = require("./ThirdPartyAccessProvenance");
/**
 * Check if a given object implements the ThirdPartyAccessKeyData interface.
 */
function instanceOfThirdPartyAccessKeyData(value) {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "thirdPartyPartnerId" in value;
    isInstance = isInstance && "products" in value;
    return isInstance;
}
exports.instanceOfThirdPartyAccessKeyData = instanceOfThirdPartyAccessKeyData;
function ThirdPartyAccessKeyDataFromJSON(json) {
    return ThirdPartyAccessKeyDataFromJSONTyped(json, false);
}
exports.ThirdPartyAccessKeyDataFromJSON = ThirdPartyAccessKeyDataFromJSON;
function ThirdPartyAccessKeyDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerId': json['customerId'],
        'partnerId': json['partnerId'],
        'thirdPartyPartnerId': json['thirdPartyPartnerId'],
        'provenance': !(0, runtime_1.exists)(json, 'provenance') ? undefined : (0, ThirdPartyAccessProvenance_1.ThirdPartyAccessProvenanceFromJSON)(json['provenance']),
        'products': (json['products'].map(ThirdPartyAccessProduct_1.ThirdPartyAccessProductFromJSON)),
    };
}
exports.ThirdPartyAccessKeyDataFromJSONTyped = ThirdPartyAccessKeyDataFromJSONTyped;
function ThirdPartyAccessKeyDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customerId': value.customerId,
        'partnerId': value.partnerId,
        'thirdPartyPartnerId': value.thirdPartyPartnerId,
        'provenance': (0, ThirdPartyAccessProvenance_1.ThirdPartyAccessProvenanceToJSON)(value.provenance),
        'products': (value.products.map(ThirdPartyAccessProduct_1.ThirdPartyAccessProductToJSON)),
    };
}
exports.ThirdPartyAccessKeyDataToJSON = ThirdPartyAccessKeyDataToJSON;
//# sourceMappingURL=ThirdPartyAccessKeyData.js.map