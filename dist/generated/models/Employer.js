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
exports.EmployerToJSON = exports.EmployerFromJSONTyped = exports.EmployerFromJSON = exports.instanceOfEmployer = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Employer interface.
 */
function instanceOfEmployer(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEmployer = instanceOfEmployer;
function EmployerFromJSON(json) {
    return EmployerFromJSONTyped(json, false);
}
exports.EmployerFromJSON = EmployerFromJSON;
function EmployerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.EmployerFromJSONTyped = EmployerFromJSONTyped;
function EmployerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.EmployerToJSON = EmployerToJSON;
//# sourceMappingURL=Employer.js.map