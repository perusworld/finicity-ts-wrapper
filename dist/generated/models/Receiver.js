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
exports.ReceiverToJSON = exports.ReceiverFromJSONTyped = exports.ReceiverFromJSON = exports.instanceOfReceiver = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Receiver interface.
 */
function instanceOfReceiver(value) {
    let isInstance = true;
    isInstance = isInstance && "routingNumber" in value;
    isInstance = isInstance && "accountNumber" in value;
    isInstance = isInstance && "accountType" in value;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfReceiver = instanceOfReceiver;
function ReceiverFromJSON(json) {
    return ReceiverFromJSONTyped(json, false);
}
exports.ReceiverFromJSON = ReceiverFromJSON;
function ReceiverFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'routingNumber': json['routingNumber'],
        'accountNumber': json['accountNumber'],
        'accountType': json['accountType'],
        'name': json['name'],
        'memo': !(0, runtime_1.exists)(json, 'memo') ? undefined : json['memo'],
    };
}
exports.ReceiverFromJSONTyped = ReceiverFromJSONTyped;
function ReceiverToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'routingNumber': value.routingNumber,
        'accountNumber': value.accountNumber,
        'accountType': value.accountType,
        'name': value.name,
        'memo': value.memo,
    };
}
exports.ReceiverToJSON = ReceiverToJSON;
//# sourceMappingURL=Receiver.js.map