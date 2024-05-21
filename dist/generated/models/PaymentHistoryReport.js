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
exports.PaymentHistoryReportToJSON = exports.PaymentHistoryReportFromJSONTyped = exports.PaymentHistoryReportFromJSON = exports.instanceOfPaymentHistoryReport = void 0;
const runtime_1 = require("../runtime");
const ObbReportHeader_1 = require("./ObbReportHeader");
const PaymentHistoryAnalytics_1 = require("./PaymentHistoryAnalytics");
/**
 * Check if a given object implements the PaymentHistoryReport interface.
 */
function instanceOfPaymentHistoryReport(value) {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "reportHeader" in value;
    return isInstance;
}
exports.instanceOfPaymentHistoryReport = instanceOfPaymentHistoryReport;
function PaymentHistoryReportFromJSON(json) {
    return PaymentHistoryReportFromJSONTyped(json, false);
}
exports.PaymentHistoryReportFromJSON = PaymentHistoryReportFromJSON;
function PaymentHistoryReportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'title': json['title'],
        'customerId': json['customerId'],
        'accountIds': !(0, runtime_1.exists)(json, 'accountIds') ? undefined : json['accountIds'],
        'businessId': !(0, runtime_1.exists)(json, 'businessId') ? undefined : json['businessId'],
        'requesterName': !(0, runtime_1.exists)(json, 'requesterName') ? undefined : json['requesterName'],
        'reportHeader': (0, ObbReportHeader_1.ObbReportHeaderFromJSON)(json['reportHeader']),
        'analytics': !(0, runtime_1.exists)(json, 'analytics') ? undefined : (0, PaymentHistoryAnalytics_1.PaymentHistoryAnalyticsFromJSON)(json['analytics']),
    };
}
exports.PaymentHistoryReportFromJSONTyped = PaymentHistoryReportFromJSONTyped;
function PaymentHistoryReportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'title': value.title,
        'customerId': value.customerId,
        'accountIds': value.accountIds,
        'businessId': value.businessId,
        'requesterName': value.requesterName,
        'reportHeader': (0, ObbReportHeader_1.ObbReportHeaderToJSON)(value.reportHeader),
        'analytics': (0, PaymentHistoryAnalytics_1.PaymentHistoryAnalyticsToJSON)(value.analytics),
    };
}
exports.PaymentHistoryReportToJSON = PaymentHistoryReportToJSON;
//# sourceMappingURL=PaymentHistoryReport.js.map