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
 * @interface CashFlowActivityWithdrawalsDebits
 */
export interface CashFlowActivityWithdrawalsDebits {
    /**
     * Date the withdrawal transaction was posted
     * @type {string}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    date: string;
    /**
     * Description of transaction
     * @type {string}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    transactionDescription?: string;
    /**
     * Amount of the withdrawal
     * @type {number}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    withdrawalsDebits: number;
}
/**
 * Check if a given object implements the CashFlowActivityWithdrawalsDebits interface.
 */
export declare function instanceOfCashFlowActivityWithdrawalsDebits(value: object): boolean;
export declare function CashFlowActivityWithdrawalsDebitsFromJSON(json: any): CashFlowActivityWithdrawalsDebits;
export declare function CashFlowActivityWithdrawalsDebitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowActivityWithdrawalsDebits;
export declare function CashFlowActivityWithdrawalsDebitsToJSON(value?: CashFlowActivityWithdrawalsDebits | null): any;
