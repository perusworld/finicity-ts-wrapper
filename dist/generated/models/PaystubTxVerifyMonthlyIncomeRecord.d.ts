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
 * @interface PaystubTxVerifyMonthlyIncomeRecord
 */
export interface PaystubTxVerifyMonthlyIncomeRecord {
    /**
     * The estimated monthly base pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyBasePay?: number;
    /**
     * The estimated monthly overtime pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyOvertimePay?: number;
    /**
     * The estimated monthly bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyBonusPay?: number;
    /**
     * The estimated commission bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyCommissionPay?: number;
    /**
     * The estimated monthly other pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyOtherPay?: number;
    /**
     * The estimated monthly total pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    estimatedMonthlyTotalPay?: number;
}
/**
 * Check if a given object implements the PaystubTxVerifyMonthlyIncomeRecord interface.
 */
export declare function instanceOfPaystubTxVerifyMonthlyIncomeRecord(value: object): boolean;
export declare function PaystubTxVerifyMonthlyIncomeRecordFromJSON(json: any): PaystubTxVerifyMonthlyIncomeRecord;
export declare function PaystubTxVerifyMonthlyIncomeRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaystubTxVerifyMonthlyIncomeRecord;
export declare function PaystubTxVerifyMonthlyIncomeRecordToJSON(value?: PaystubTxVerifyMonthlyIncomeRecord | null): any;