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
exports.PaymentHistoryAnalyticsToJSON = exports.PaymentHistoryAnalyticsFromJSONTyped = exports.PaymentHistoryAnalyticsFromJSON = exports.instanceOfPaymentHistoryAnalytics = void 0;
const runtime_1 = require("../runtime");
const PaymentHistoryAccountSummary_1 = require("./PaymentHistoryAccountSummary");
const PaymentHistoryCustomerMonthlySummary_1 = require("./PaymentHistoryCustomerMonthlySummary");
const PaymentHistoryTransactionsSummary_1 = require("./PaymentHistoryTransactionsSummary");
/**
 * Check if a given object implements the PaymentHistoryAnalytics interface.
 */
function instanceOfPaymentHistoryAnalytics(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentHistoryAnalytics = instanceOfPaymentHistoryAnalytics;
function PaymentHistoryAnalyticsFromJSON(json) {
    return PaymentHistoryAnalyticsFromJSONTyped(json, false);
}
exports.PaymentHistoryAnalyticsFromJSON = PaymentHistoryAnalyticsFromJSON;
function PaymentHistoryAnalyticsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'riskScore': !(0, runtime_1.exists)(json, 'riskScore') ? undefined : json['riskScore'],
        'transactionHistory': !(0, runtime_1.exists)(json, 'transactionHistory') ? undefined : json['transactionHistory'],
        'transactionsSummary': !(0, runtime_1.exists)(json, 'transactionsSummary') ? undefined : (0, PaymentHistoryTransactionsSummary_1.PaymentHistoryTransactionsSummaryFromJSON)(json['transactionsSummary']),
        'accountSummaries': !(0, runtime_1.exists)(json, 'accountSummaries') ? undefined : (json['accountSummaries'].map(PaymentHistoryAccountSummary_1.PaymentHistoryAccountSummaryFromJSON)),
        'customerSummaryByMonths': !(0, runtime_1.exists)(json, 'customerSummaryByMonths') ? undefined : (json['customerSummaryByMonths'].map(PaymentHistoryCustomerMonthlySummary_1.PaymentHistoryCustomerMonthlySummaryFromJSON)),
    };
}
exports.PaymentHistoryAnalyticsFromJSONTyped = PaymentHistoryAnalyticsFromJSONTyped;
function PaymentHistoryAnalyticsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status': value.status,
        'riskScore': value.riskScore,
        'transactionHistory': value.transactionHistory,
        'transactionsSummary': (0, PaymentHistoryTransactionsSummary_1.PaymentHistoryTransactionsSummaryToJSON)(value.transactionsSummary),
        'accountSummaries': value.accountSummaries === undefined ? undefined : (value.accountSummaries.map(PaymentHistoryAccountSummary_1.PaymentHistoryAccountSummaryToJSON)),
        'customerSummaryByMonths': value.customerSummaryByMonths === undefined ? undefined : (value.customerSummaryByMonths.map(PaymentHistoryCustomerMonthlySummary_1.PaymentHistoryCustomerMonthlySummaryToJSON)),
    };
}
exports.PaymentHistoryAnalyticsToJSON = PaymentHistoryAnalyticsToJSON;
//# sourceMappingURL=PaymentHistoryAnalytics.js.map