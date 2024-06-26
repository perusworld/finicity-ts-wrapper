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
import type { ObbAccountDetails } from './ObbAccountDetails';
import {
    ObbAccountDetailsFromJSON,
    ObbAccountDetailsFromJSONTyped,
    ObbAccountDetailsToJSON,
} from './ObbAccountDetails';
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
 * 
 * @export
 * @interface BalanceAnalyticsAccountResult
 */
export interface BalanceAnalyticsAccountResult {
    /**
     * 
     * @type {ObbAccountDetails}
     * @memberof BalanceAnalyticsAccountResult
     */
    accountDetails: ObbAccountDetails;
    /**
     * An account ID represented as a number
     * @type {number}
     * @memberof BalanceAnalyticsAccountResult
     */
    accountId: number;
    /**
     * 
     * @type {BalanceAnalyticsMetrics}
     * @memberof BalanceAnalyticsAccountResult
     */
    balanceAnalyticsMetrics?: BalanceAnalyticsMetrics;
    /**
     * 
     * @type {ObbCurrentReportRequestDetails}
     * @memberof BalanceAnalyticsAccountResult
     */
    currentReportRequest: ObbCurrentReportRequestDetails;
    /**
     * 
     * @type {ObbDataAvailability}
     * @memberof BalanceAnalyticsAccountResult
     */
    historicDataAvailability: ObbDataAvailability;
}

/**
 * Check if a given object implements the BalanceAnalyticsAccountResult interface.
 */
export function instanceOfBalanceAnalyticsAccountResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountDetails" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "currentReportRequest" in value;
    isInstance = isInstance && "historicDataAvailability" in value;

    return isInstance;
}

export function BalanceAnalyticsAccountResultFromJSON(json: any): BalanceAnalyticsAccountResult {
    return BalanceAnalyticsAccountResultFromJSONTyped(json, false);
}

export function BalanceAnalyticsAccountResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceAnalyticsAccountResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountDetails': ObbAccountDetailsFromJSON(json['accountDetails']),
        'accountId': json['accountId'],
        'balanceAnalyticsMetrics': !exists(json, 'balanceAnalyticsMetrics') ? undefined : BalanceAnalyticsMetricsFromJSON(json['balanceAnalyticsMetrics']),
        'currentReportRequest': ObbCurrentReportRequestDetailsFromJSON(json['currentReportRequest']),
        'historicDataAvailability': ObbDataAvailabilityFromJSON(json['historicDataAvailability']),
    };
}

export function BalanceAnalyticsAccountResultToJSON(value?: BalanceAnalyticsAccountResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountDetails': ObbAccountDetailsToJSON(value.accountDetails),
        'accountId': value.accountId,
        'balanceAnalyticsMetrics': BalanceAnalyticsMetricsToJSON(value.balanceAnalyticsMetrics),
        'currentReportRequest': ObbCurrentReportRequestDetailsToJSON(value.currentReportRequest),
        'historicDataAvailability': ObbDataAvailabilityToJSON(value.historicDataAvailability),
    };
}

