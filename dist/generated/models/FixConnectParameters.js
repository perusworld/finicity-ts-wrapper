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
exports.FixConnectParametersToJSON = exports.FixConnectParametersFromJSONTyped = exports.FixConnectParametersFromJSON = exports.instanceOfFixConnectParameters = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the FixConnectParameters interface.
 */
function instanceOfFixConnectParameters(value) {
    let isInstance = true;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "institutionLoginId" in value;
    return isInstance;
}
exports.instanceOfFixConnectParameters = instanceOfFixConnectParameters;
function FixConnectParametersFromJSON(json) {
    return FixConnectParametersFromJSONTyped(json, false);
}
exports.FixConnectParametersFromJSON = FixConnectParametersFromJSON;
function FixConnectParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'partnerId': json['partnerId'],
        'customerId': json['customerId'],
        'institutionLoginId': json['institutionLoginId'],
        'redirectUri': !(0, runtime_1.exists)(json, 'redirectUri') ? undefined : json['redirectUri'],
        'webhook': !(0, runtime_1.exists)(json, 'webhook') ? undefined : json['webhook'],
        'webhookContentType': !(0, runtime_1.exists)(json, 'webhookContentType') ? undefined : json['webhookContentType'],
        'webhookData': !(0, runtime_1.exists)(json, 'webhookData') ? undefined : json['webhookData'],
        'webhookHeaders': !(0, runtime_1.exists)(json, 'webhookHeaders') ? undefined : json['webhookHeaders'],
        'experience': !(0, runtime_1.exists)(json, 'experience') ? undefined : json['experience'],
        'singleUseUrl': !(0, runtime_1.exists)(json, 'singleUseUrl') ? undefined : json['singleUseUrl'],
        'isWebView': !(0, runtime_1.exists)(json, 'isWebView') ? undefined : json['isWebView'],
    };
}
exports.FixConnectParametersFromJSONTyped = FixConnectParametersFromJSONTyped;
function FixConnectParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'language': value.language,
        'partnerId': value.partnerId,
        'customerId': value.customerId,
        'institutionLoginId': value.institutionLoginId,
        'redirectUri': value.redirectUri,
        'webhook': value.webhook,
        'webhookContentType': value.webhookContentType,
        'webhookData': value.webhookData,
        'webhookHeaders': value.webhookHeaders,
        'experience': value.experience,
        'singleUseUrl': value.singleUseUrl,
        'isWebView': value.isWebView,
    };
}
exports.FixConnectParametersToJSON = FixConnectParametersToJSON;
//# sourceMappingURL=FixConnectParameters.js.map