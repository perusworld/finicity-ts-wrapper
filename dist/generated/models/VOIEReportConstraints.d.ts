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
import type { ReportCustomField } from './ReportCustomField';
import type { VOIEWithStatementData } from './VOIEWithStatementData';
/**
 * The request details from the report generation that were used to generate the report
 * @export
 * @interface VOIEReportConstraints
 */
export interface VOIEReportConstraints {
    /**
     *
     * @type {VOIEWithStatementData}
     * @memberof VOIEReportConstraints
     */
    voieWithStatementData: VOIEWithStatementData;
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
     * @memberof VOIEReportConstraints
     */
    reportCustomFields?: Array<ReportCustomField>;
}
/**
 * Check if a given object implements the VOIEReportConstraints interface.
 */
export declare function instanceOfVOIEReportConstraints(value: object): boolean;
export declare function VOIEReportConstraintsFromJSON(json: any): VOIEReportConstraints;
export declare function VOIEReportConstraintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEReportConstraints;
export declare function VOIEReportConstraintsToJSON(value?: VOIEReportConstraints | null): any;
