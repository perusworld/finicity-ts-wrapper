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
import type { AccountDetailsTxBased } from './AccountDetailsTxBased';
import type { ReportAccountPosition } from './ReportAccountPosition';
import type { ReportTransactionNewTxBased } from './ReportTransactionNewTxBased';
import type { VOIETXVerifyReportIncomeStream } from './VOIETXVerifyReportIncomeStream';
/**
 *
 * @export
 * @interface VOIETXVerifyReportAccount
 */
export interface VOIETXVerifyReportAccount {
    /**
     * The ID of the account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    id: number;
    /**
     * The account number from the institution (all digits except the last four are obfuscated)
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    number: string;
    /**
     * The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    ownerName?: string;
    /**
     * The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    ownerAddress?: string;
    /**
     * The account name from the institution
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    name: string;
    /**
     * One of the values from account types
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    type: string;
    /**
     * The status of the most recent aggregation attempt
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    aggregationStatusCode: number;
    /**
     * A list of income stream records
     * @type {Array<VOIETXVerifyReportIncomeStream>}
     * @memberof VOIETXVerifyReportAccount
     */
    incomeStreams?: Array<VOIETXVerifyReportIncomeStream>;
    /**
     * The cleared balance of the account as-of `balanceDate`
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    balance?: number;
    /**
     * The average monthly balance of this account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    averageMonthlyBalance?: number;
    /**
     * a list of transaction records
     * @type {Array<ReportTransactionNewTxBased>}
     * @memberof VOIETXVerifyReportAccount
     */
    transactions: Array<ReportTransactionNewTxBased>;
    /**
     *
     * @type {AccountDetailsTxBased}
     * @memberof VOIETXVerifyReportAccount
     */
    details?: AccountDetailsTxBased;
    /**
     *
     * @type {ReportAccountPosition}
     * @memberof VOIETXVerifyReportAccount
     */
    position?: ReportAccountPosition;
    /**
     * The available balance for the account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    availableBalance?: number;
}
/**
 * Check if a given object implements the VOIETXVerifyReportAccount interface.
 */
export declare function instanceOfVOIETXVerifyReportAccount(value: object): boolean;
export declare function VOIETXVerifyReportAccountFromJSON(json: any): VOIETXVerifyReportAccount;
export declare function VOIETXVerifyReportAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIETXVerifyReportAccount;
export declare function VOIETXVerifyReportAccountToJSON(value?: VOIETXVerifyReportAccount | null): any;
