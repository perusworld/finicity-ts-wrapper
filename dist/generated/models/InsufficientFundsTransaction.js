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
exports.InsufficientFundsTransactionToJSON = exports.InsufficientFundsTransactionFromJSONTyped = exports.InsufficientFundsTransactionFromJSON = exports.instanceOfInsufficientFundsTransaction = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the InsufficientFundsTransaction interface.
 */
function instanceOfInsufficientFundsTransaction(value) {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "postedDate" in value;
    isInstance = isInstance && "transactionId" in value;
    return isInstance;
}
exports.instanceOfInsufficientFundsTransaction = instanceOfInsufficientFundsTransaction;
function InsufficientFundsTransactionFromJSON(json) {
    return InsufficientFundsTransactionFromJSONTyped(json, false);
}
exports.InsufficientFundsTransactionFromJSON = InsufficientFundsTransactionFromJSON;
function InsufficientFundsTransactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'memo': !(0, runtime_1.exists)(json, 'memo') ? undefined : json['memo'],
        'postedDate': json['postedDate'],
        'transactionId': json['transactionId'],
    };
}
exports.InsufficientFundsTransactionFromJSONTyped = InsufficientFundsTransactionFromJSONTyped;
function InsufficientFundsTransactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'description': value.description,
        'memo': value.memo,
        'postedDate': value.postedDate,
        'transactionId': value.transactionId,
    };
}
exports.InsufficientFundsTransactionToJSON = InsufficientFundsTransactionToJSON;
//# sourceMappingURL=InsufficientFundsTransaction.js.map