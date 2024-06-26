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
import type { CashFlowMonthlyCashFlowDebitSummaries } from './CashFlowMonthlyCashFlowDebitSummaries';
/**
 *
 * @export
 * @interface CashFlowCashFlowDebitSummary
 */
export interface CashFlowCashFlowDebitSummary {
    /**
     * List of attributes for each month
     * @type {Array<CashFlowMonthlyCashFlowDebitSummaries>}
     * @memberof CashFlowCashFlowDebitSummary
     */
    monthlyCashFlowDebitSummaries: Array<CashFlowMonthlyCashFlowDebitSummaries>;
    /**
     * Sum of all monthly debit transactions for each month by account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    twelveMonthDebitTotal: number;
    /**
     * Sum of all monthly debit transactions without transfers for the account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    twelveMonthDebitTotalLessTransfers: number;
    /**
     * Six month sum of all debit transactions by account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    sixMonthDebitTotal: number;
    /**
     * Six month sum of all debit transactions without transfers for the account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    sixMonthDebitTotalLessTransfers: number;
    /**
     * Two month sum of all debit transactions by account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    twoMonthDebitTotal: number;
    /**
     * Two month sum of all debit transactions without transfers for the account
     * @type {number}
     * @memberof CashFlowCashFlowDebitSummary
     */
    twoMonthDebitTotalLessTransfers: number;
}
/**
 * Check if a given object implements the CashFlowCashFlowDebitSummary interface.
 */
export declare function instanceOfCashFlowCashFlowDebitSummary(value: object): boolean;
export declare function CashFlowCashFlowDebitSummaryFromJSON(json: any): CashFlowCashFlowDebitSummary;
export declare function CashFlowCashFlowDebitSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowCashFlowDebitSummary;
export declare function CashFlowCashFlowDebitSummaryToJSON(value?: CashFlowCashFlowDebitSummary | null): any;
