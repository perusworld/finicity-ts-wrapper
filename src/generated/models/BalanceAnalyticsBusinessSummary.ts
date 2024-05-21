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

import { exists, mapValues } from '../runtime';
import type { BalanceAnalyticsMetrics } from './BalanceAnalyticsMetrics';
import {
    BalanceAnalyticsMetricsFromJSON,
    BalanceAnalyticsMetricsFromJSONTyped,
    BalanceAnalyticsMetricsToJSON,
} from './BalanceAnalyticsMetrics';
import type { ObbCurrentReportRequestDetails } from './ObbCurrentReportRequestDetails';
import {
    ObbCurrentReportRequestDetailsFromJSON,
    ObbCurrentReportRequestDetailsFromJSONTyped,
    ObbCurrentReportRequestDetailsToJSON,
} from './ObbCurrentReportRequestDetails';
import type { ObbDataAvailability } from './ObbDataAvailability';
import {
    ObbDataAvailabilityFromJSON,
    ObbDataAvailabilityFromJSONTyped,
    ObbDataAvailabilityToJSON,
} from './ObbDataAvailability';

/**
 * Balance analytics summarized across all accounts in the report
 * @export
 * @interface BalanceAnalyticsBusinessSummary
 */
export interface BalanceAnalyticsBusinessSummary {
    /**
     * 
     * @type {BalanceAnalyticsMetrics}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    balanceAnalyticsMetrics?: BalanceAnalyticsMetrics;
    /**
     * 
     * @type {ObbCurrentReportRequestDetails}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    currentReportRequest?: ObbCurrentReportRequestDetails;
    /**
     * 
     * @type {ObbDataAvailability}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    historicDataAvailability?: ObbDataAvailability;
}

/**
 * Check if a given object implements the BalanceAnalyticsBusinessSummary interface.
 */
export function instanceOfBalanceAnalyticsBusinessSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BalanceAnalyticsBusinessSummaryFromJSON(json: any): BalanceAnalyticsBusinessSummary {
    return BalanceAnalyticsBusinessSummaryFromJSONTyped(json, false);
}

export function BalanceAnalyticsBusinessSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceAnalyticsBusinessSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceAnalyticsMetrics': !exists(json, 'balanceAnalyticsMetrics') ? undefined : BalanceAnalyticsMetricsFromJSON(json['balanceAnalyticsMetrics']),
        'currentReportRequest': !exists(json, 'currentReportRequest') ? undefined : ObbCurrentReportRequestDetailsFromJSON(json['currentReportRequest']),
        'historicDataAvailability': !exists(json, 'historicDataAvailability') ? undefined : ObbDataAvailabilityFromJSON(json['historicDataAvailability']),
    };
}

export function BalanceAnalyticsBusinessSummaryToJSON(value?: BalanceAnalyticsBusinessSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balanceAnalyticsMetrics': BalanceAnalyticsMetricsToJSON(value.balanceAnalyticsMetrics),
        'currentReportRequest': ObbCurrentReportRequestDetailsToJSON(value.currentReportRequest),
        'historicDataAvailability': ObbDataAvailabilityToJSON(value.historicDataAvailability),
    };
}

