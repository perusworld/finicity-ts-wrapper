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
exports.PaymentHistoryAccountSummaryToJSON = exports.PaymentHistoryAccountSummaryFromJSONTyped = exports.PaymentHistoryAccountSummaryFromJSON = exports.instanceOfPaymentHistoryAccountSummary = void 0;
const runtime_1 = require("../runtime");
const PaymentHistoryAccountSummaryAccountOwner_1 = require("./PaymentHistoryAccountSummaryAccountOwner");
/**
 * Check if a given object implements the PaymentHistoryAccountSummary interface.
 */
function instanceOfPaymentHistoryAccountSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "accountNumberDisplay" in value;
    isInstance = isInstance && "financialInstitution" in value;
    isInstance = isInstance && "institutionIcon" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "accountName" in value;
    isInstance = isInstance && "accountOwner" in value;
    isInstance = isInstance && "accountType" in value;
    isInstance = isInstance && "beginningBalance" in value;
    isInstance = isInstance && "averageMonthlyBalance" in value;
    isInstance = isInstance && "currentBalance" in value;
    isInstance = isInstance && "beginDate" in value;
    isInstance = isInstance && "endDate" in value;
    isInstance = isInstance && "daysSinceNonsufficientFunds" in value;
    return isInstance;
}
exports.instanceOfPaymentHistoryAccountSummary = instanceOfPaymentHistoryAccountSummary;
function PaymentHistoryAccountSummaryFromJSON(json) {
    return PaymentHistoryAccountSummaryFromJSONTyped(json, false);
}
exports.PaymentHistoryAccountSummaryFromJSON = PaymentHistoryAccountSummaryFromJSON;
function PaymentHistoryAccountSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountNumberDisplay': json['accountNumberDisplay'],
        'financialInstitution': json['financialInstitution'],
        'institutionIcon': json['institutionIcon'],
        'currency': json['currency'],
        'status': json['status'],
        'accountName': json['accountName'],
        'accountOwner': (0, PaymentHistoryAccountSummaryAccountOwner_1.PaymentHistoryAccountSummaryAccountOwnerFromJSON)(json['accountOwner']),
        'accountType': json['accountType'],
        'beginningBalance': json['beginningBalance'],
        'averageMonthlyBalance': json['averageMonthlyBalance'],
        'currentBalance': json['currentBalance'],
        'beginDate': json['beginDate'],
        'endDate': json['endDate'],
        'totalNonsufficientFunds': !(0, runtime_1.exists)(json, 'totalNonsufficientFunds') ? undefined : json['totalNonsufficientFunds'],
        'daysSinceNonsufficientFunds': json['daysSinceNonsufficientFunds'],
    };
}
exports.PaymentHistoryAccountSummaryFromJSONTyped = PaymentHistoryAccountSummaryFromJSONTyped;
function PaymentHistoryAccountSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountNumberDisplay': value.accountNumberDisplay,
        'financialInstitution': value.financialInstitution,
        'institutionIcon': value.institutionIcon,
        'currency': value.currency,
        'status': value.status,
        'accountName': value.accountName,
        'accountOwner': (0, PaymentHistoryAccountSummaryAccountOwner_1.PaymentHistoryAccountSummaryAccountOwnerToJSON)(value.accountOwner),
        'accountType': value.accountType,
        'beginningBalance': value.beginningBalance,
        'averageMonthlyBalance': value.averageMonthlyBalance,
        'currentBalance': value.currentBalance,
        'beginDate': value.beginDate,
        'endDate': value.endDate,
        'totalNonsufficientFunds': value.totalNonsufficientFunds,
        'daysSinceNonsufficientFunds': value.daysSinceNonsufficientFunds,
    };
}
exports.PaymentHistoryAccountSummaryToJSON = PaymentHistoryAccountSummaryToJSON;
//# sourceMappingURL=PaymentHistoryAccountSummary.js.map