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
/**
 *
 * @export
 * @interface CashFlowMonthlyCashFlowBalanceSummaries
 */
export interface CashFlowMonthlyCashFlowBalanceSummaries {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    month: number;
    /**
     * Min Daily Balance for each month for all accounts
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    minDailyBalance: number;
    /**
     * Max Daily Balance for each month for all accounts
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    maxDailyBalance: number;
    /**
     * Average Daily Balance for each month for all accounts
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    averageDailyBalance: number;
    /**
     * Standard Deviation of Daily Balance for each month for all accounts
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    standardDeviationOfDailyBalance?: string;
    /**
     * Number of Days Negative Balance for each month for all accounts
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    numberOfDaysNegativeBalance: string;
    /**
     * Number of Days Positive Balance for each month for all accounts
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalanceSummaries
     */
    numberOfDaysPositiveBalance: string;
}
/**
 * Check if a given object implements the CashFlowMonthlyCashFlowBalanceSummaries interface.
 */
export declare function instanceOfCashFlowMonthlyCashFlowBalanceSummaries(value: object): boolean;
export declare function CashFlowMonthlyCashFlowBalanceSummariesFromJSON(json: any): CashFlowMonthlyCashFlowBalanceSummaries;
export declare function CashFlowMonthlyCashFlowBalanceSummariesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowMonthlyCashFlowBalanceSummaries;
export declare function CashFlowMonthlyCashFlowBalanceSummariesToJSON(value?: CashFlowMonthlyCashFlowBalanceSummaries | null): any;
