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
import type { CashFlowInflowAttributes } from './CashFlowInflowAttributes';
import {
    CashFlowInflowAttributesFromJSON,
    CashFlowInflowAttributesFromJSONTyped,
    CashFlowInflowAttributesToJSON,
} from './CashFlowInflowAttributes';
import type { CashFlowNegativeTriggers } from './CashFlowNegativeTriggers';
import {
    CashFlowNegativeTriggersFromJSON,
    CashFlowNegativeTriggersFromJSONTyped,
    CashFlowNegativeTriggersToJSON,
} from './CashFlowNegativeTriggers';
import type { CashFlowOutflowAttributes } from './CashFlowOutflowAttributes';
import {
    CashFlowOutflowAttributesFromJSON,
    CashFlowOutflowAttributesFromJSONTyped,
    CashFlowOutflowAttributesToJSON,
} from './CashFlowOutflowAttributes';
import type { CashFlowTransactionAnalyticsAttributes } from './CashFlowTransactionAnalyticsAttributes';
import {
    CashFlowTransactionAnalyticsAttributesFromJSON,
    CashFlowTransactionAnalyticsAttributesFromJSONTyped,
    CashFlowTransactionAnalyticsAttributesToJSON,
} from './CashFlowTransactionAnalyticsAttributes';
import type { ObbDateRangeAndAmount } from './ObbDateRangeAndAmount';
import {
    ObbDateRangeAndAmountFromJSON,
    ObbDateRangeAndAmountFromJSONTyped,
    ObbDateRangeAndAmountToJSON,
} from './ObbDateRangeAndAmount';

/**
 * Cash flow analytics metrics and calculations
 * @export
 * @interface CashFlowAnalyticsMetrics
 */
export interface CashFlowAnalyticsMetrics {
    /**
     * 
     * @type {CashFlowInflowAttributes}
     * @memberof CashFlowAnalyticsMetrics
     */
    inflow?: CashFlowInflowAttributes;
    /**
     * 
     * @type {CashFlowNegativeTriggers}
     * @memberof CashFlowAnalyticsMetrics
     */
    negativeTriggers?: CashFlowNegativeTriggers;
    /**
     * 
     * @type {CashFlowOutflowAttributes}
     * @memberof CashFlowAnalyticsMetrics
     */
    outflow?: CashFlowOutflowAttributes;
    /**
     * Sum of all transactions categorized as revenue, split by months
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowAnalyticsMetrics
     */
    revenueByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Sum of all transactions categorized as revenue
     * @type {number}
     * @memberof CashFlowAnalyticsMetrics
     */
    revenueForTheReportTimePeriod?: number;
    /**
     * 
     * @type {CashFlowTransactionAnalyticsAttributes}
     * @memberof CashFlowAnalyticsMetrics
     */
    transactionAnalytics?: CashFlowTransactionAnalyticsAttributes;
}

/**
 * Check if a given object implements the CashFlowAnalyticsMetrics interface.
 */
export function instanceOfCashFlowAnalyticsMetrics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CashFlowAnalyticsMetricsFromJSON(json: any): CashFlowAnalyticsMetrics {
    return CashFlowAnalyticsMetricsFromJSONTyped(json, false);
}

export function CashFlowAnalyticsMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowAnalyticsMetrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inflow': !exists(json, 'inflow') ? undefined : CashFlowInflowAttributesFromJSON(json['inflow']),
        'negativeTriggers': !exists(json, 'negativeTriggers') ? undefined : CashFlowNegativeTriggersFromJSON(json['negativeTriggers']),
        'outflow': !exists(json, 'outflow') ? undefined : CashFlowOutflowAttributesFromJSON(json['outflow']),
        'revenueByMonthForTheReportTimePeriod': !exists(json, 'revenueByMonthForTheReportTimePeriod') ? undefined : ((json['revenueByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndAmountFromJSON)),
        'revenueForTheReportTimePeriod': !exists(json, 'revenueForTheReportTimePeriod') ? undefined : json['revenueForTheReportTimePeriod'],
        'transactionAnalytics': !exists(json, 'transactionAnalytics') ? undefined : CashFlowTransactionAnalyticsAttributesFromJSON(json['transactionAnalytics']),
    };
}

export function CashFlowAnalyticsMetricsToJSON(value?: CashFlowAnalyticsMetrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inflow': CashFlowInflowAttributesToJSON(value.inflow),
        'negativeTriggers': CashFlowNegativeTriggersToJSON(value.negativeTriggers),
        'outflow': CashFlowOutflowAttributesToJSON(value.outflow),
        'revenueByMonthForTheReportTimePeriod': value.revenueByMonthForTheReportTimePeriod === undefined ? undefined : ((value.revenueByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndAmountToJSON)),
        'revenueForTheReportTimePeriod': value.revenueForTheReportTimePeriod,
        'transactionAnalytics': CashFlowTransactionAnalyticsAttributesToJSON(value.transactionAnalytics),
    };
}
