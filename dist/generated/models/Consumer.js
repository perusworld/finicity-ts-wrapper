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
exports.ConsumerToJSON = exports.ConsumerFromJSONTyped = exports.ConsumerFromJSON = exports.instanceOfConsumer = void 0;
const runtime_1 = require("../runtime");
const Birthday_1 = require("./Birthday");
/**
 * Check if a given object implements the Consumer interface.
 */
function instanceOfConsumer(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "state" in value;
    isInstance = isInstance && "zip" in value;
    isInstance = isInstance && "phone" in value;
    isInstance = isInstance && "ssn" in value;
    isInstance = isInstance && "birthday" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "createdDate" in value;
    return isInstance;
}
exports.instanceOfConsumer = instanceOfConsumer;
function ConsumerFromJSON(json) {
    return ConsumerFromJSONTyped(json, false);
}
exports.ConsumerFromJSON = ConsumerFromJSON;
function ConsumerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'customerId': json['customerId'],
        'address': json['address'],
        'city': json['city'],
        'state': json['state'],
        'zip': json['zip'],
        'phone': json['phone'],
        'ssn': json['ssn'],
        'birthday': (0, Birthday_1.BirthdayFromJSON)(json['birthday']),
        'email': json['email'],
        'createdDate': json['createdDate'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
    };
}
exports.ConsumerFromJSONTyped = ConsumerFromJSONTyped;
function ConsumerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'customerId': value.customerId,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'phone': value.phone,
        'ssn': value.ssn,
        'birthday': (0, Birthday_1.BirthdayToJSON)(value.birthday),
        'email': value.email,
        'createdDate': value.createdDate,
        'suffix': value.suffix,
    };
}
exports.ConsumerToJSON = ConsumerToJSON;
//# sourceMappingURL=Consumer.js.map