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
exports.PaymentHistoryAccountSummaryAccountOwnerToJSON = exports.PaymentHistoryAccountSummaryAccountOwnerFromJSONTyped = exports.PaymentHistoryAccountSummaryAccountOwnerFromJSON = exports.instanceOfPaymentHistoryAccountSummaryAccountOwner = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PaymentHistoryAccountSummaryAccountOwner interface.
 */
function instanceOfPaymentHistoryAccountSummaryAccountOwner(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
exports.instanceOfPaymentHistoryAccountSummaryAccountOwner = instanceOfPaymentHistoryAccountSummaryAccountOwner;
function PaymentHistoryAccountSummaryAccountOwnerFromJSON(json) {
    return PaymentHistoryAccountSummaryAccountOwnerFromJSONTyped(json, false);
}
exports.PaymentHistoryAccountSummaryAccountOwnerFromJSON = PaymentHistoryAccountSummaryAccountOwnerFromJSON;
function PaymentHistoryAccountSummaryAccountOwnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'address': json['address'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'zip': !(0, runtime_1.exists)(json, 'zip') ? undefined : json['zip'],
    };
}
exports.PaymentHistoryAccountSummaryAccountOwnerFromJSONTyped = PaymentHistoryAccountSummaryAccountOwnerFromJSONTyped;
function PaymentHistoryAccountSummaryAccountOwnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'zip': value.zip,
    };
}
exports.PaymentHistoryAccountSummaryAccountOwnerToJSON = PaymentHistoryAccountSummaryAccountOwnerToJSON;
//# sourceMappingURL=PaymentHistoryAccountSummaryAccountOwner.js.map