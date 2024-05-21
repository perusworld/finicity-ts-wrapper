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
/**
 *
 * @export
 * @interface TransactionsReportConstraintsOut
 */
export interface TransactionsReportConstraintsOut {
    /**
     * An array of account IDs to be included in the report (all accounts will be included if not set)
     * @type {Array<string>}
     * @memberof TransactionsReportConstraintsOut
     */
    accountIds?: Array<string>;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof TransactionsReportConstraintsOut
     */
    fromDate?: number;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof TransactionsReportConstraintsOut
     */
    toDate?: number;
    /**
     * If pending transactions must be included
     * @type {boolean}
     * @memberof TransactionsReportConstraintsOut
     */
    includePending?: boolean;
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
     * @memberof TransactionsReportConstraintsOut
     */
    reportCustomFields?: Array<ReportCustomField>;
}
/**
 * Check if a given object implements the TransactionsReportConstraintsOut interface.
 */
export declare function instanceOfTransactionsReportConstraintsOut(value: object): boolean;
export declare function TransactionsReportConstraintsOutFromJSON(json: any): TransactionsReportConstraintsOut;
export declare function TransactionsReportConstraintsOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsReportConstraintsOut;
export declare function TransactionsReportConstraintsOutToJSON(value?: TransactionsReportConstraintsOut | null): any;
