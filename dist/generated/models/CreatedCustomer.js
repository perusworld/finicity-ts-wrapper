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
exports.CreatedCustomerToJSON = exports.CreatedCustomerFromJSONTyped = exports.CreatedCustomerFromJSON = exports.instanceOfCreatedCustomer = void 0;
/**
 * Check if a given object implements the CreatedCustomer interface.
 */
function instanceOfCreatedCustomer(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "createdDate" in value;
    return isInstance;
}
exports.instanceOfCreatedCustomer = instanceOfCreatedCustomer;
function CreatedCustomerFromJSON(json) {
    return CreatedCustomerFromJSONTyped(json, false);
}
exports.CreatedCustomerFromJSON = CreatedCustomerFromJSON;
function CreatedCustomerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'username': json['username'],
        'createdDate': json['createdDate'],
    };
}
exports.CreatedCustomerFromJSONTyped = CreatedCustomerFromJSONTyped;
function CreatedCustomerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'username': value.username,
        'createdDate': value.createdDate,
    };
}
exports.CreatedCustomerToJSON = CreatedCustomerToJSON;
//# sourceMappingURL=CreatedCustomer.js.map