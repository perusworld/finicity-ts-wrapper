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
import type { PayrollData } from './PayrollData';
import {
    PayrollDataFromJSON,
    PayrollDataFromJSONTyped,
    PayrollDataToJSON,
} from './PayrollData';
import type { ReportCustomField } from './ReportCustomField';
import {
    ReportCustomFieldFromJSON,
    ReportCustomFieldFromJSONTyped,
    ReportCustomFieldToJSON,
} from './ReportCustomField';

/**
 * 
 * @export
 * @interface PayrollReportConstraints
 */
export interface PayrollReportConstraints {
    /**
     * 
     * @type {PayrollData}
     * @memberof PayrollReportConstraints
     */
    payrollData: PayrollData;
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
     * @memberof PayrollReportConstraints
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * Limits the pay statement history in the VOIE - Payroll report income record. Pay statements are only included if the payDate of the statement is equal to or greater than the start date requested. Date should be in Unix epoch time (in seconds). See: Handling Epoch Dates and Times.
     * @type {number}
     * @memberof PayrollReportConstraints
     */
    payStatementsFromDate?: number;
    /**
     * Use case for requesting the consumer's data. Current supported enumerations are "Mortgage" and "KYC". If your use case doesn't match one of these please reach out to your technical point of contact.
     * @type {string}
     * @memberof PayrollReportConstraints
     */
    marketSegment?: string;
    /**
     * Only used on an exception basis for clients that need to exclude EmpInfo data from the VOE-Payroll or VOIE-Payroll report. If true is passed EmpInfo payroll provider's data will not be searched or returned.
     * @type {boolean}
     * @memberof PayrollReportConstraints
     */
    excludeEmpInfo?: boolean;
    /**
     * FCRA required 2-digit Permissible Purpose Code, specifying the reason for retrieving this report.
     * @type {string}
     * @memberof PayrollReportConstraints
     */
    purpose?: string;
}

/**
 * Check if a given object implements the PayrollReportConstraints interface.
 */
export function instanceOfPayrollReportConstraints(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payrollData" in value;

    return isInstance;
}

export function PayrollReportConstraintsFromJSON(json: any): PayrollReportConstraints {
    return PayrollReportConstraintsFromJSONTyped(json, false);
}

export function PayrollReportConstraintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollReportConstraints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payrollData': PayrollDataFromJSON(json['payrollData']),
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'payStatementsFromDate': !exists(json, 'payStatementsFromDate') ? undefined : json['payStatementsFromDate'],
        'marketSegment': !exists(json, 'marketSegment') ? undefined : json['marketSegment'],
        'excludeEmpInfo': !exists(json, 'excludeEmpInfo') ? undefined : json['excludeEmpInfo'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
    };
}

export function PayrollReportConstraintsToJSON(value?: PayrollReportConstraints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payrollData': PayrollDataToJSON(value.payrollData),
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'payStatementsFromDate': value.payStatementsFromDate,
        'marketSegment': value.marketSegment,
        'excludeEmpInfo': value.excludeEmpInfo,
        'purpose': value.purpose,
    };
}

