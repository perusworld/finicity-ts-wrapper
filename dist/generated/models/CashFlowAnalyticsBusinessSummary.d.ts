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
import type { CashFlowAnalyticsMetrics } from './CashFlowAnalyticsMetrics';
import type { ObbCurrentReportRequestDetails } from './ObbCurrentReportRequestDetails';
import type { ObbDataAvailability } from './ObbDataAvailability';
/**
 * Cash flow analytics summarized across all accounts in the report
 * @export
 * @interface CashFlowAnalyticsBusinessSummary
 */
export interface CashFlowAnalyticsBusinessSummary {
    /**
     *
     * @type {CashFlowAnalyticsMetrics}
     * @memberof CashFlowAnalyticsBusinessSummary
     */
    cashflowAnalyticsMetrics?: CashFlowAnalyticsMetrics;
    /**
     *
     * @type {ObbCurrentReportRequestDetails}
     * @memberof CashFlowAnalyticsBusinessSummary
     */
    currentReportRequest: ObbCurrentReportRequestDetails;
    /**
     *
     * @type {ObbDataAvailability}
     * @memberof CashFlowAnalyticsBusinessSummary
     */
    historicDataAvailability: ObbDataAvailability;
}
/**
 * Check if a given object implements the CashFlowAnalyticsBusinessSummary interface.
 */
export declare function instanceOfCashFlowAnalyticsBusinessSummary(value: object): boolean;
export declare function CashFlowAnalyticsBusinessSummaryFromJSON(json: any): CashFlowAnalyticsBusinessSummary;
export declare function CashFlowAnalyticsBusinessSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowAnalyticsBusinessSummary;
export declare function CashFlowAnalyticsBusinessSummaryToJSON(value?: CashFlowAnalyticsBusinessSummary | null): any;
