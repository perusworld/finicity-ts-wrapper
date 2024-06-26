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
exports.StatementDataToJSON = exports.StatementDataFromJSONTyped = exports.StatementDataFromJSON = exports.instanceOfStatementData = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StatementData interface.
 */
function instanceOfStatementData(value) {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    return isInstance;
}
exports.instanceOfStatementData = instanceOfStatementData;
function StatementDataFromJSON(json) {
    return StatementDataFromJSONTyped(json, false);
}
exports.StatementDataFromJSON = StatementDataFromJSON;
function StatementDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': json['accountId'],
        'statementIndex': !(0, runtime_1.exists)(json, 'statementIndex') ? undefined : json['statementIndex'],
    };
}
exports.StatementDataFromJSONTyped = StatementDataFromJSONTyped;
function StatementDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': value.accountId,
        'statementIndex': value.statementIndex,
    };
}
exports.StatementDataToJSON = StatementDataToJSON;
//# sourceMappingURL=StatementData.js.map