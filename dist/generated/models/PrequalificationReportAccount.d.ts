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
import type { AccountDetails } from './AccountDetails';
import type { PrequalificationReportAssetSummary } from './PrequalificationReportAssetSummary';
import type { ReportTransaction } from './ReportTransaction';
/**
 *
 * @export
 * @interface PrequalificationReportAccount
 */
export interface PrequalificationReportAccount {
    /**
     * The ID of the account
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    id?: number;
    /**
     * The account number from the institution (all digits except the last four are obfuscated)
     * @type {string}
     * @memberof PrequalificationReportAccount
     */
    number?: string;
    /**
     * The name of the account owner. If no owner information is available, this field won't appear in the report.
     * @type {string}
     * @memberof PrequalificationReportAccount
     */
    ownerName?: string;
    /**
     * The mailing address of the account owner. If no owner information is available, this field won't appear in the report.
     * @type {string}
     * @memberof PrequalificationReportAccount
     */
    ownerAddress?: string;
    /**
     * The account name from the institution
     * @type {string}
     * @memberof PrequalificationReportAccount
     */
    name?: string;
    /**
     * One of the values from account types
     * @type {string}
     * @memberof PrequalificationReportAccount
     */
    type?: string;
    /**
     * The status of the most recent aggregation attempt
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    aggregationStatusCode?: number;
    /**
     * The cleared balance of the account as-of `balanceDate`
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    balance?: number;
    /**
     * A timestamp of the balance
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    balanceDate?: number;
    /**
     * Available balance
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    availableBalance?: number;
    /**
     * The average monthly balance of the account
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    averageMonthlyBalance?: number;
    /**
     * The count for the total number of insufficient funds transactions, based on the `fromDate` of the report
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    totNumberInsufficientFundsFeeDebitTxAccount?: number;
    /**
     * The total number of  insufficient funds fees for the account over six months
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    totNumberInsufficientFundsFeeDebitTxOver6MonthsAccount?: number;
    /**
     * The total number of days since the most recent insufficient funds fee for the account
     * @type {number}
     * @memberof PrequalificationReportAccount
     */
    totNumberDaysSinceMostRecentInsufficientFundsFeeDebitTxAccount?: number;
    /**
     * a list of transaction records
     * @type {Array<ReportTransaction>}
     * @memberof PrequalificationReportAccount
     */
    transactions?: Array<ReportTransaction>;
    /**
     *
     * @type {PrequalificationReportAssetSummary}
     * @memberof PrequalificationReportAccount
     */
    asset?: PrequalificationReportAssetSummary;
    /**
     *
     * @type {AccountDetails}
     * @memberof PrequalificationReportAccount
     */
    details?: AccountDetails;
}
/**
 * Check if a given object implements the PrequalificationReportAccount interface.
 */
export declare function instanceOfPrequalificationReportAccount(value: object): boolean;
export declare function PrequalificationReportAccountFromJSON(json: any): PrequalificationReportAccount;
export declare function PrequalificationReportAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrequalificationReportAccount;
export declare function PrequalificationReportAccountToJSON(value?: PrequalificationReportAccount | null): any;
