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
exports.PortfolioConsumerToJSON = exports.PortfolioConsumerFromJSONTyped = exports.PortfolioConsumerFromJSON = exports.instanceOfPortfolioConsumer = void 0;
const runtime_1 = require("../runtime");
const Birthday_1 = require("./Birthday");
/**
 * Check if a given object implements the PortfolioConsumer interface.
 */
function instanceOfPortfolioConsumer(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "ssn" in value;
    isInstance = isInstance && "birthday" in value;
    return isInstance;
}
exports.instanceOfPortfolioConsumer = instanceOfPortfolioConsumer;
function PortfolioConsumerFromJSON(json) {
    return PortfolioConsumerFromJSONTyped(json, false);
}
exports.PortfolioConsumerFromJSON = PortfolioConsumerFromJSON;
function PortfolioConsumerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'customerId': json['customerId'],
        'ssn': json['ssn'],
        'birthday': (0, Birthday_1.BirthdayFromJSON)(json['birthday']),
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
    };
}
exports.PortfolioConsumerFromJSONTyped = PortfolioConsumerFromJSONTyped;
function PortfolioConsumerToJSON(value) {
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
        'ssn': value.ssn,
        'birthday': (0, Birthday_1.BirthdayToJSON)(value.birthday),
        'suffix': value.suffix,
    };
}
exports.PortfolioConsumerToJSON = PortfolioConsumerToJSON;
//# sourceMappingURL=PortfolioConsumer.js.map