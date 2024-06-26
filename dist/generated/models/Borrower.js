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
exports.BorrowerToJSON = exports.BorrowerFromJSONTyped = exports.BorrowerFromJSON = exports.instanceOfBorrower = void 0;
const runtime_1 = require("../runtime");
const ConsumerInfo_1 = require("./ConsumerInfo");
/**
 * Check if a given object implements the Borrower interface.
 */
function instanceOfBorrower(value) {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "consumerId" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfBorrower = instanceOfBorrower;
function BorrowerFromJSON(json) {
    return BorrowerFromJSONTyped(json, false);
}
exports.BorrowerFromJSON = BorrowerFromJSON;
function BorrowerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerId': json['customerId'],
        'consumerId': json['consumerId'],
        'type': json['type'],
        'optionalConsumerInfo': !(0, runtime_1.exists)(json, 'optionalConsumerInfo') ? undefined : (0, ConsumerInfo_1.ConsumerInfoFromJSON)(json['optionalConsumerInfo']),
    };
}
exports.BorrowerFromJSONTyped = BorrowerFromJSONTyped;
function BorrowerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customerId': value.customerId,
        'consumerId': value.consumerId,
        'type': value.type,
        'optionalConsumerInfo': (0, ConsumerInfo_1.ConsumerInfoToJSON)(value.optionalConsumerInfo),
    };
}
exports.BorrowerToJSON = BorrowerToJSON;
//# sourceMappingURL=Borrower.js.map