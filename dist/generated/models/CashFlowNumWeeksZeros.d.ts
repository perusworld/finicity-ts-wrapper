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
import type { ObbWeekOfYear } from './ObbWeekOfYear';
/**
 * Weeks with zero transactions during the known history of the account
 * @export
 * @interface CashFlowNumWeeksZeros
 */
export interface CashFlowNumWeeksZeros {
    /**
     * Number of weeks during known history of account in which data was available
     * @type {number}
     * @memberof CashFlowNumWeeksZeros
     */
    historicNumberOfWeeksWithDataAvailable: number;
    /**
     * Number of weeks during known history of account where zero transactions were posted
     * @type {number}
     * @memberof CashFlowNumWeeksZeros
     */
    historicNumberOfWeeksZeroTransactions: number;
    /**
     * List of weeks with zero reported transactions
     * @type {Array<ObbWeekOfYear>}
     * @memberof CashFlowNumWeeksZeros
     */
    historicWeeksWithZeroTransactions: Array<ObbWeekOfYear>;
}
/**
 * Check if a given object implements the CashFlowNumWeeksZeros interface.
 */
export declare function instanceOfCashFlowNumWeeksZeros(value: object): boolean;
export declare function CashFlowNumWeeksZerosFromJSON(json: any): CashFlowNumWeeksZeros;
export declare function CashFlowNumWeeksZerosFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowNumWeeksZeros;
export declare function CashFlowNumWeeksZerosToJSON(value?: CashFlowNumWeeksZeros | null): any;
