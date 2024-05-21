/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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
export function instanceOfCashFlowTransactionAnalyticsAttributesLastTransactionDateInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerFromJSON(json: any): CashFlowTransactionAnalyticsAttributesLastTransactionDateInner {
    return CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerFromJSONTyped(json, false);
}

export function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowTransactionAnalyticsAttributesLastTransactionDateInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': json['date'],
        'depositsCredits': !exists(json, 'depositsCredits') ? undefined : json['depositsCredits'],
        'withdrawalsDebits': !exists(json, 'withdrawalsDebits') ? undefined : json['withdrawalsDebits'],
        'zeroAmountTransaction': !exists(json, 'zeroAmountTransaction') ? undefined : json['zeroAmountTransaction'],
        'transactionDescription': !exists(json, 'transactionDescription') ? undefined : json['transactionDescription'],
    };
}

export function CashFlowTransactionAnalyticsAttributesLastTransactionDateInnerToJSON(value?: CashFlowTransactionAnalyticsAttributesLastTransactionDateInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'depositsCredits': value.depositsCredits,
        'withdrawalsDebits': value.withdrawalsDebits,
        'zeroAmountTransaction': value.zeroAmountTransaction,
        'transactionDescription': value.transactionDescription,
    };
}
