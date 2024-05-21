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
exports.PaymentHistoryCustomerMonthlySummaryToJSON = exports.PaymentHistoryCustomerMonthlySummaryFromJSONTyped = exports.PaymentHistoryCustomerMonthlySummaryFromJSON = exports.instanceOfPaymentHistoryCustomerMonthlySummary = void 0;
/**
 * Check if a given object implements the PaymentHistoryCustomerMonthlySummary interface.
 */
function instanceOfPaymentHistoryCustomerMonthlySummary(value) {
    let isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "averageBalance" in value;
    isInstance = isInstance && "closingBalance" in value;
    isInstance = isInstance && "openingBalance" in value;
    isInstance = isInstance && "totalDeposits" in value;
    isInstance = isInstance && "totalWithdrawals" in value;
    isInstance = isInstance && "nonSufficientFunds" in value;
    isInstance = isInstance && "insurancePayments" in value;
    isInstance = isInstance && "taxPayments" in value;
    isInstance = isInstance && "recurringExpensePayments" in value;
    isInstance = isInstance && "missedRecurringExpensePayments" in value;
    isInstance = isInstance && "recurringLoanPayments" in value;
    isInstance = isInstance && "missedRecurringLoanPayments" in value;
    return isInstance;
}
exports.instanceOfPaymentHistoryCustomerMonthlySummary = instanceOfPaymentHistoryCustomerMonthlySummary;
function PaymentHistoryCustomerMonthlySummaryFromJSON(json) {
    return PaymentHistoryCustomerMonthlySummaryFromJSONTyped(json, false);
}
exports.PaymentHistoryCustomerMonthlySummaryFromJSON = PaymentHistoryCustomerMonthlySummaryFromJSON;
function PaymentHistoryCustomerMonthlySummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'month': json['month'],
        'averageBalance': json['averageBalance'],
        'closingBalance': json['closingBalance'],
        'openingBalance': json['openingBalance'],
        'totalDeposits': json['totalDeposits'],
        'totalWithdrawals': json['totalWithdrawals'],
        'nonSufficientFunds': json['nonSufficientFunds'],
        'insurancePayments': json['insurancePayments'],
        'taxPayments': json['taxPayments'],
        'recurringExpensePayments': json['recurringExpensePayments'],
        'missedRecurringExpensePayments': json['missedRecurringExpensePayments'],
        'recurringLoanPayments': json['recurringLoanPayments'],
        'missedRecurringLoanPayments': json['missedRecurringLoanPayments'],
    };
}
exports.PaymentHistoryCustomerMonthlySummaryFromJSONTyped = PaymentHistoryCustomerMonthlySummaryFromJSONTyped;
function PaymentHistoryCustomerMonthlySummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'month': value.month,
        'averageBalance': value.averageBalance,
        'closingBalance': value.closingBalance,
        'openingBalance': value.openingBalance,
        'totalDeposits': value.totalDeposits,
        'totalWithdrawals': value.totalWithdrawals,
        'nonSufficientFunds': value.nonSufficientFunds,
        'insurancePayments': value.insurancePayments,
        'taxPayments': value.taxPayments,
        'recurringExpensePayments': value.recurringExpensePayments,
        'missedRecurringExpensePayments': value.missedRecurringExpensePayments,
        'recurringLoanPayments': value.recurringLoanPayments,
        'missedRecurringLoanPayments': value.missedRecurringLoanPayments,
    };
}
exports.PaymentHistoryCustomerMonthlySummaryToJSON = PaymentHistoryCustomerMonthlySummaryToJSON;
//# sourceMappingURL=PaymentHistoryCustomerMonthlySummary.js.map