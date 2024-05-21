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
 * @interface CashFlowMonthlyCashFlowCharacteristics
 */
export interface CashFlowMonthlyCashFlowCharacteristics {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCharacteristics
     */
    month: number;
    /**
     * Total Credits - Total Debits by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCharacteristics
     */
    totalCreditsLessTotalDebits: number;
    /**
     * Total Credits - Total Debits by month (Without Transfers)
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCharacteristics
     */
    totalCreditsLessTotalDebitsLessTransfers: number;
    /**
     * Average transaction amount by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCharacteristics
     */
    averageTransactionAmount: number;
}

/**
 * Check if a given object implements the CashFlowMonthlyCashFlowCharacteristics interface.
 */
export function instanceOfCashFlowMonthlyCashFlowCharacteristics(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "month" in value;
    isInstance = isInstance && "totalCreditsLessTotalDebits" in value;
    isInstance = isInstance && "totalCreditsLessTotalDebitsLessTransfers" in value;
    isInstance = isInstance && "averageTransactionAmount" in value;

    return isInstance;
}

export function CashFlowMonthlyCashFlowCharacteristicsFromJSON(json: any): CashFlowMonthlyCashFlowCharacteristics {
    return CashFlowMonthlyCashFlowCharacteristicsFromJSONTyped(json, false);
}

export function CashFlowMonthlyCashFlowCharacteristicsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowMonthlyCashFlowCharacteristics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'month': json['month'],
        'totalCreditsLessTotalDebits': json['totalCreditsLessTotalDebits'],
        'totalCreditsLessTotalDebitsLessTransfers': json['totalCreditsLessTotalDebitsLessTransfers'],
        'averageTransactionAmount': json['averageTransactionAmount'],
    };
}

export function CashFlowMonthlyCashFlowCharacteristicsToJSON(value?: CashFlowMonthlyCashFlowCharacteristics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'month': value.month,
        'totalCreditsLessTotalDebits': value.totalCreditsLessTotalDebits,
        'totalCreditsLessTotalDebitsLessTransfers': value.totalCreditsLessTotalDebitsLessTransfers,
        'averageTransactionAmount': value.averageTransactionAmount,
    };
}

