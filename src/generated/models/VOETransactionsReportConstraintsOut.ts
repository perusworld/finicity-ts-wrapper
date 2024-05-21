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
import type { ReportCustomField } from './ReportCustomField';
import {
    ReportCustomFieldFromJSON,
    ReportCustomFieldFromJSONTyped,
    ReportCustomFieldToJSON,
} from './ReportCustomField';

/**
 * 
 * @export
 * @interface VOETransactionsReportConstraintsOut
 */
export interface VOETransactionsReportConstraintsOut {
    /**
     * A report ID
     * @type {string}
     * @memberof VOETransactionsReportConstraintsOut
     */
    reportId?: string;
    /**
     * An array of account IDs to be included in the report (all accounts will be included if not set)
     * @type {Array<string>}
     * @memberof VOETransactionsReportConstraintsOut
     */
    accountIds?: Array<string>;
    /**
     * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.
     * 
     * Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is "true" or "false".
     * * "true": (default) display the custom field in the PDF report
     * * "false": don't display the custom field in the PDF report
     * 
     * For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.
     * 
     * All custom fields display in the Reseller Billing API.
     * @type {Array<ReportCustomField>}
     * @memberof VOETransactionsReportConstraintsOut
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOETransactionsReportConstraintsOut
     */
    fromDate?: number;
    /**
     * Include income streams in the report, based on the income stream's confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.
     * @type {number}
     * @memberof VOETransactionsReportConstraintsOut
     */
    incomeStreamConfidenceMinimum?: number;
}

/**
 * Check if a given object implements the VOETransactionsReportConstraintsOut interface.
 */
export function instanceOfVOETransactionsReportConstraintsOut(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VOETransactionsReportConstraintsOutFromJSON(json: any): VOETransactionsReportConstraintsOut {
    return VOETransactionsReportConstraintsOutFromJSONTyped(json, false);
}

export function VOETransactionsReportConstraintsOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOETransactionsReportConstraintsOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reportId': !exists(json, 'reportId') ? undefined : json['reportId'],
        'accountIds': !exists(json, 'accountIds') ? undefined : json['accountIds'],
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'fromDate': !exists(json, 'fromDate') ? undefined : json['fromDate'],
        'incomeStreamConfidenceMinimum': !exists(json, 'incomeStreamConfidenceMinimum') ? undefined : json['incomeStreamConfidenceMinimum'],
    };
}

export function VOETransactionsReportConstraintsOutToJSON(value?: VOETransactionsReportConstraintsOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reportId': value.reportId,
        'accountIds': value.accountIds,
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'fromDate': value.fromDate,
        'incomeStreamConfidenceMinimum': value.incomeStreamConfidenceMinimum,
    };
}

