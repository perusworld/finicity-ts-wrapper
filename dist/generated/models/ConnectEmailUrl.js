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
exports.ConnectEmailUrlToJSON = exports.ConnectEmailUrlFromJSONTyped = exports.ConnectEmailUrlFromJSON = exports.instanceOfConnectEmailUrl = void 0;
const EmailOptions_1 = require("./EmailOptions");
/**
 * Check if a given object implements the ConnectEmailUrl interface.
 */
function instanceOfConnectEmailUrl(value) {
    let isInstance = true;
    isInstance = isInstance && "link" in value;
    isInstance = isInstance && "emailConfig" in value;
    return isInstance;
}
exports.instanceOfConnectEmailUrl = instanceOfConnectEmailUrl;
function ConnectEmailUrlFromJSON(json) {
    return ConnectEmailUrlFromJSONTyped(json, false);
}
exports.ConnectEmailUrlFromJSON = ConnectEmailUrlFromJSON;
function ConnectEmailUrlFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'link': json['link'],
        'emailConfig': (0, EmailOptions_1.EmailOptionsFromJSON)(json['emailConfig']),
    };
}
exports.ConnectEmailUrlFromJSONTyped = ConnectEmailUrlFromJSONTyped;
function ConnectEmailUrlToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'link': value.link,
        'emailConfig': (0, EmailOptions_1.EmailOptionsToJSON)(value.emailConfig),
    };
}
exports.ConnectEmailUrlToJSON = ConnectEmailUrlToJSON;
//# sourceMappingURL=ConnectEmailUrl.js.map