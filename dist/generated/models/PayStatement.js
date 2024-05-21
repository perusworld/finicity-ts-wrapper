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
exports.PayStatementToJSON = exports.PayStatementFromJSONTyped = exports.PayStatementFromJSON = exports.instanceOfPayStatement = void 0;
/**
 * Check if a given object implements the PayStatement interface.
 */
function instanceOfPayStatement(value) {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "statement" in value;
    return isInstance;
}
exports.instanceOfPayStatement = instanceOfPayStatement;
function PayStatementFromJSON(json) {
    return PayStatementFromJSONTyped(json, false);
}
exports.PayStatementFromJSON = PayStatementFromJSON;
function PayStatementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'label': json['label'],
        'statement': json['statement'],
    };
}
exports.PayStatementFromJSONTyped = PayStatementFromJSONTyped;
function PayStatementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'label': value.label,
        'statement': value.statement,
    };
}
exports.PayStatementToJSON = PayStatementToJSON;
//# sourceMappingURL=PayStatement.js.map