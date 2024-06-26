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
 * @interface ObbAverageWeeklyBalance
 */
export interface ObbAverageWeeklyBalance {
    /**
     * Average daily ending balance during the week
     * @type {number}
     * @memberof ObbAverageWeeklyBalance
     */
    amount: number;
    /**
     * Begin date of the week
     * @type {string}
     * @memberof ObbAverageWeeklyBalance
     */
    fromDate: string;
    /**
     * End date of the week
     * @type {string}
     * @memberof ObbAverageWeeklyBalance
     */
    toDate: string;
    /**
     * Week number, where the first week of each year begins on January 1st and ends on January 7th. May be in the range [1, 53]
     * @type {number}
     * @memberof ObbAverageWeeklyBalance
     */
    week: number;
}

/**
 * Check if a given object implements the ObbAverageWeeklyBalance interface.
 */
export function instanceOfObbAverageWeeklyBalance(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "fromDate" in value;
    isInstance = isInstance && "toDate" in value;
    isInstance = isInstance && "week" in value;

    return isInstance;
}

export function ObbAverageWeeklyBalanceFromJSON(json: any): ObbAverageWeeklyBalance {
    return ObbAverageWeeklyBalanceFromJSONTyped(json, false);
}

export function ObbAverageWeeklyBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbAverageWeeklyBalance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'fromDate': json['fromDate'],
        'toDate': json['toDate'],
        'week': json['week'],
    };
}

export function ObbAverageWeeklyBalanceToJSON(value?: ObbAverageWeeklyBalance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'fromDate': value.fromDate,
        'toDate': value.toDate,
        'week': value.week,
    };
}

