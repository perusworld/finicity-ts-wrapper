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
 * @interface CashFlowMonthlyCashFlowCredits
 */
export interface CashFlowMonthlyCashFlowCredits {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    month: number;
    /**
     * Number of credits by month
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    numberOfCredits: string;
    /**
     * Total amount of credits by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    totalCreditsAmount: number;
    /**
     * Largest credit by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    largestCredit: number;
    /**
     * Number of credits by month (less transfers)
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    numberOfCreditsLessTransfers: string;
    /**
     * Total amount of credits by month (less transfers)
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    totalCreditsAmountLessTransfers: number;
    /**
     * The average credit amount
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    averageCreditAmount: number;
    /**
     * The estimated number of loan deposits
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    estimatedNumberOfLoanDeposits: string;
    /**
     * The estimated loan deposit amount
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    estimatedLoanDepositAmount: number;
}
/**
 * Check if a given object implements the CashFlowMonthlyCashFlowCredits interface.
 */
export declare function instanceOfCashFlowMonthlyCashFlowCredits(value: object): boolean;
export declare function CashFlowMonthlyCashFlowCreditsFromJSON(json: any): CashFlowMonthlyCashFlowCredits;
export declare function CashFlowMonthlyCashFlowCreditsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowMonthlyCashFlowCredits;
export declare function CashFlowMonthlyCashFlowCreditsToJSON(value?: CashFlowMonthlyCashFlowCredits | null): any;
