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
 * @interface CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
 */
export interface CashFlowTransactionAnalyticsAttributesLastTransactionDateInner {
    /**
     * Date the deposit transaction was posted
     * @type {string}
     * @memberof CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
     */
    date: string;
    /**
     * Amount of transaction if deposit, otherwise null
     * @type {number}
     * @memberof CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
     */
    depositsCredits?: number;
    /**
     * Amount of transaction if withdrawal, otherwise null
     * @type {number}
     * @memberof CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
     */
    withdrawalsDebits?: number;
    /**
     * Amount of transaction if zero, otherwise null
     * @type {number}
     * @memberof CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
     */
    zeroAmountTransaction?: number;
    /**
     * Description of transaction
     * @type {string}
     * @memberof CashFlowTransactionAnalyticsAttributesLastTransactionDateInner
     */
    transactionDescription?: string;
}
/**
 * Check if a given object implements the CashFlowTransactionAnalyticsAttributesLastTransactionDateInner interface.
 */
export declare function instanceOfCashFlowTransactionAnalyticsAttributesLastTransactionDateInner(value: object): boolean;
export declare function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerFromJSON(json: any): CashFlowTransactionAnalyticsAttributesLastTransactionDateInner;
export declare function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowTransactionAnalyticsAttributesLastTransactionDateInner;
export declare function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerToJSON(value?: CashFlowTransactionAnalyticsAttributesLastTransactionDateInner | null): any;
