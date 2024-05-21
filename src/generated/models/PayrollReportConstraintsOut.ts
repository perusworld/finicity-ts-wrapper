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
import type { PayrollDataOut } from './PayrollDataOut';
import {
    PayrollDataOutFromJSON,
    PayrollDataOutFromJSONTyped,
    PayrollDataOutToJSON,
} from './PayrollDataOut';
import type { ReportCustomField } from './ReportCustomField';
import {
    ReportCustomFieldFromJSON,
    ReportCustomFieldFromJSONTyped,
    ReportCustomFieldToJSON,
} from './ReportCustomField';

/**
 * 
 * @export
 * @interface PayrollReportConstraintsOut
 */
export interface PayrollReportConstraintsOut {
    /**
     * 
     * @type {PayrollDataOut}
     * @memberof PayrollReportConstraintsOut
     */
    payrollData: PayrollDataOut;
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
     * @memberof PayrollReportConstraintsOut
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof PayrollReportConstraintsOut
     */
    payStatementsFromDate?: number;
}

/**
 * Check if a given object implements the PayrollReportConstraintsOut interface.
 */
export function instanceOfPayrollReportConstraintsOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payrollData" in value;

    return isInstance;
}

export function PayrollReportConstraintsOutFromJSON(json: any): PayrollReportConstraintsOut {
    return PayrollReportConstraintsOutFromJSONTyped(json, false);
}

export function PayrollReportConstraintsOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollReportConstraintsOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payrollData': PayrollDataOutFromJSON(json['payrollData']),
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'payStatementsFromDate': !exists(json, 'payStatementsFromDate') ? undefined : json['payStatementsFromDate'],
    };
}

export function PayrollReportConstraintsOutToJSON(value?: PayrollReportConstraintsOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payrollData': PayrollDataOutToJSON(value.payrollData),
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'payStatementsFromDate': value.payStatementsFromDate,
    };
}
