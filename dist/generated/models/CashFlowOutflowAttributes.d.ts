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
import type { ObbDateRangeAndAmount } from './ObbDateRangeAndAmount';
import type { ObbDateRangeAndCount } from './ObbDateRangeAndCount';
/**
 * Outflow attributes
 * @export
 * @interface CashFlowOutflowAttributes
 */
export interface CashFlowOutflowAttributes {
    /**
     * Average value of withdrawals during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowOutflowAttributes
     */
    averageWithdrawalByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Count of all withdrawals during periods in the report
     * @type {Array<ObbDateRangeAndCount>}
     * @memberof CashFlowOutflowAttributes
     */
    countWithdrawalsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndCount>;
    /**
     * Count of ALL withdrawals over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowOutflowAttributes
     */
    historicCountOfWithdrawalTransactions: number;
    /**
     * Sum of ALL withdrawals over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowOutflowAttributes
     */
    historicSumOfWithdrawals?: number;
    /**
     * Maximum withdrawal value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowOutflowAttributes
     */
    maximumWithdrawalByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Minimum withdrawal value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowOutflowAttributes
     */
    minimumWithdrawalByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Sum of all withdrawals during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowOutflowAttributes
     */
    sumWithdrawalsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
}
/**
 * Check if a given object implements the CashFlowOutflowAttributes interface.
 */
export declare function instanceOfCashFlowOutflowAttributes(value: object): boolean;
export declare function CashFlowOutflowAttributesFromJSON(json: any): CashFlowOutflowAttributes;
export declare function CashFlowOutflowAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowOutflowAttributes;
export declare function CashFlowOutflowAttributesToJSON(value?: CashFlowOutflowAttributes | null): any;
