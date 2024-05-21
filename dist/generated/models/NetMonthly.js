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
exports.NetMonthlyToJSON = exports.NetMonthlyFromJSONTyped = exports.NetMonthlyFromJSON = exports.instanceOfNetMonthly = void 0;
/**
 * Check if a given object implements the NetMonthly interface.
 */
function instanceOfNetMonthly(value) {
    let isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "net" in value;
    return isInstance;
}
exports.instanceOfNetMonthly = instanceOfNetMonthly;
function NetMonthlyFromJSON(json) {
    return NetMonthlyFromJSONTyped(json, false);
}
exports.NetMonthlyFromJSON = NetMonthlyFromJSON;
function NetMonthlyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'month': json['month'],
        'net': json['net'],
    };
}
exports.NetMonthlyFromJSONTyped = NetMonthlyFromJSONTyped;
function NetMonthlyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'month': value.month,
        'net': value.net,
    };
}
exports.NetMonthlyToJSON = NetMonthlyToJSON;
//# sourceMappingURL=NetMonthly.js.map