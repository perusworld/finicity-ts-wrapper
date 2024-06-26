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
exports.EmployeeToJSON = exports.EmployeeFromJSONTyped = exports.EmployeeFromJSON = exports.instanceOfEmployee = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the Employee interface.
 */
function instanceOfEmployee(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEmployee = instanceOfEmployee;
function EmployeeFromJSON(json) {
    return EmployeeFromJSONTyped(json, false);
}
exports.EmployeeFromJSON = EmployeeFromJSON;
function EmployeeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.EmployeeFromJSONTyped = EmployeeFromJSONTyped;
function EmployeeToJSON(value) {
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
exports.EmployeeToJSON = EmployeeToJSON;
//# sourceMappingURL=Employee.js.map