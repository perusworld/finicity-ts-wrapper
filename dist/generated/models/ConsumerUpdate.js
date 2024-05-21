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
exports.ConsumerUpdateToJSON = exports.ConsumerUpdateFromJSONTyped = exports.ConsumerUpdateFromJSON = exports.instanceOfConsumerUpdate = void 0;
const runtime_1 = require("../runtime");
const Birthday_1 = require("./Birthday");
/**
 * Check if a given object implements the ConsumerUpdate interface.
 */
function instanceOfConsumerUpdate(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConsumerUpdate = instanceOfConsumerUpdate;
function ConsumerUpdateFromJSON(json) {
    return ConsumerUpdateFromJSONTyped(json, false);
}
exports.ConsumerUpdateFromJSON = ConsumerUpdateFromJSON;
function ConsumerUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : json['address'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'zip': !(0, runtime_1.exists)(json, 'zip') ? undefined : json['zip'],
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : json['phone'],
        'ssn': !(0, runtime_1.exists)(json, 'ssn') ? undefined : json['ssn'],
        'birthday': !(0, runtime_1.exists)(json, 'birthday') ? undefined : (0, Birthday_1.BirthdayFromJSON)(json['birthday']),
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
    };
}
exports.ConsumerUpdateFromJSONTyped = ConsumerUpdateFromJSONTyped;
function ConsumerUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'lastName': value.lastName,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
        'phone': value.phone,
        'ssn': value.ssn,
        'birthday': (0, Birthday_1.BirthdayToJSON)(value.birthday),
        'email': value.email,
        'suffix': value.suffix,
    };
}
exports.ConsumerUpdateToJSON = ConsumerUpdateToJSON;
//# sourceMappingURL=ConsumerUpdate.js.map