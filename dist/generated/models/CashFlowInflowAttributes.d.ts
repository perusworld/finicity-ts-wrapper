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
 * Inflow Attributes
 * @export
 * @interface CashFlowInflowAttributes
 */
export interface CashFlowInflowAttributes {
    /**
     * Average value of deposits during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    averageDepositByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Count of all deposits during periods in the report
     * @type {Array<ObbDateRangeAndCount>}
     * @memberof CashFlowInflowAttributes
     */
    countDepositsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndCount>;
    /**
     * Count of ALL deposits over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowInflowAttributes
     */
    historicCountOfDepositTransactions: number;
    /**
     * Sum of ALL deposits over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowInflowAttributes
     */
    historicSumOfDeposits?: number;
    /**
     * Maximum deposit value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    maximumDepositByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Minimum deposit value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    minimumDepositByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Sum of all deposits during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    sumDepositsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
}
/**
 * Check if a given object implements the CashFlowInflowAttributes interface.
 */
export declare function instanceOfCashFlowInflowAttributes(value: object): boolean;
export declare function CashFlowInflowAttributesFromJSON(json: any): CashFlowInflowAttributes;
export declare function CashFlowInflowAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowInflowAttributes;
export declare function CashFlowInflowAttributesToJSON(value?: CashFlowInflowAttributes | null): any;
