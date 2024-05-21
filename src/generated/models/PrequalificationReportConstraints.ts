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
 * @interface PrequalificationReportConstraints
 */
export interface PrequalificationReportConstraints {
    /**
     * A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)
     * @type {string}
     * @memberof PrequalificationReportConstraints
     */
    accountIds?: string;
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
     * @memberof PrequalificationReportConstraints
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included:
     * * Account
     * 
     * * Total number of NSF funds
     * 
     * * Days since the most recent NFS funds fee
     * @type {boolean}
     * @memberof PrequalificationReportConstraints
     */
    showNsf?: boolean;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof PrequalificationReportConstraints
     */
    fromDate?: number;
}

/**
 * Check if a given object implements the PrequalificationReportConstraints interface.
 */
export function instanceOfPrequalificationReportConstraints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrequalificationReportConstraintsFromJSON(json: any): PrequalificationReportConstraints {
    return PrequalificationReportConstraintsFromJSONTyped(json, false);
}

export function PrequalificationReportConstraintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrequalificationReportConstraints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountIds': !exists(json, 'accountIds') ? undefined : json['accountIds'],
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'showNsf': !exists(json, 'showNsf') ? undefined : json['showNsf'],
        'fromDate': !exists(json, 'fromDate') ? undefined : json['fromDate'],
    };
}

export function PrequalificationReportConstraintsToJSON(value?: PrequalificationReportConstraints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountIds': value.accountIds,
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'showNsf': value.showNsf,
        'fromDate': value.fromDate,
    };
}
