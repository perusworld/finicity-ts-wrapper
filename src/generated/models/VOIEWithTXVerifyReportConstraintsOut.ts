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
import type { VOIEWithInterviewData } from './VOIEWithInterviewData';
import {
    VOIEWithInterviewDataFromJSON,
    VOIEWithInterviewDataFromJSONTyped,
    VOIEWithInterviewDataToJSON,
} from './VOIEWithInterviewData';

/**
 * 
 * @export
 * @interface VOIEWithTXVerifyReportConstraintsOut
 */
export interface VOIEWithTXVerifyReportConstraintsOut {
    /**
     * An array of account IDs to be included in the report (all accounts will be included if not set)
     * @type {Array<string>}
     * @memberof VOIEWithTXVerifyReportConstraintsOut
     */
    accountIds?: Array<string>;
    /**
     * 
     * @type {VOIEWithInterviewData}
     * @memberof VOIEWithTXVerifyReportConstraintsOut
     */
    voieWithInterviewData: VOIEWithInterviewData;
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
     * @memberof VOIEWithTXVerifyReportConstraintsOut
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOIEWithTXVerifyReportConstraintsOut
     */
    fromDate?: number;
    /**
     * Include income streams in the report, based on the income stream's confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.
     * @type {number}
     * @memberof VOIEWithTXVerifyReportConstraintsOut
     */
    incomeStreamConfidenceMinimum?: number;
}

/**
 * Check if a given object implements the VOIEWithTXVerifyReportConstraintsOut interface.
 */
export function instanceOfVOIEWithTXVerifyReportConstraintsOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "voieWithInterviewData" in value;

    return isInstance;
}

export function VOIEWithTXVerifyReportConstraintsOutFromJSON(json: any): VOIEWithTXVerifyReportConstraintsOut {
    return VOIEWithTXVerifyReportConstraintsOutFromJSONTyped(json, false);
}

export function VOIEWithTXVerifyReportConstraintsOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEWithTXVerifyReportConstraintsOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountIds': !exists(json, 'accountIds') ? undefined : json['accountIds'],
        'voieWithInterviewData': VOIEWithInterviewDataFromJSON(json['voieWithInterviewData']),
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'fromDate': !exists(json, 'fromDate') ? undefined : json['fromDate'],
        'incomeStreamConfidenceMinimum': !exists(json, 'incomeStreamConfidenceMinimum') ? undefined : json['incomeStreamConfidenceMinimum'],
    };
}

export function VOIEWithTXVerifyReportConstraintsOutToJSON(value?: VOIEWithTXVerifyReportConstraintsOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountIds': value.accountIds,
        'voieWithInterviewData': VOIEWithInterviewDataToJSON(value.voieWithInterviewData),
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'fromDate': value.fromDate,
        'incomeStreamConfidenceMinimum': value.incomeStreamConfidenceMinimum,
    };
}

