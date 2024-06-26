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
import type { InsufficientFundsTransaction } from './InsufficientFundsTransaction';
/**
 * Non Sufficient Fund Fees
 * @export
 * @interface CashFlowInsufficientFundsFees
 */
export interface CashFlowInsufficientFundsFees {
    /**
     * Count of all NSF transactions during the report
     * @type {number}
     * @memberof CashFlowInsufficientFundsFees
     */
    countOfTransactionsForTheReportTimePeriod?: number;
    /**
     * Sum of all NSF transactions during the report
     * @type {number}
     * @memberof CashFlowInsufficientFundsFees
     */
    sumOfTransactionsForTheReportTimePeriod?: number;
    /**
     * Transactions categorized as NSF
     * @type {Array<InsufficientFundsTransaction>}
     * @memberof CashFlowInsufficientFundsFees
     */
    transactions?: Array<InsufficientFundsTransaction>;
}
/**
 * Check if a given object implements the CashFlowInsufficientFundsFees interface.
 */
export declare function instanceOfCashFlowInsufficientFundsFees(value: object): boolean;
export declare function CashFlowInsufficientFundsFeesFromJSON(json: any): CashFlowInsufficientFundsFees;
export declare function CashFlowInsufficientFundsFeesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowInsufficientFundsFees;
export declare function CashFlowInsufficientFundsFeesToJSON(value?: CashFlowInsufficientFundsFees | null): any;
