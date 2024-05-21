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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * A list of transactions
 * @export
 * @interface Transactions
 */
export interface Transactions {
    /**
     * The total number of results matching search criteria
     * @type {number}
     * @memberof Transactions
     */
    found: number;
    /**
     * The number of results returned
     * @type {number}
     * @memberof Transactions
     */
    displaying: number;
    /**
     * If the value of `moreAvailable` is "true", you can retrieve the next page of results by increasing the value of the start parameter in your next request:"...&start=6&limit=5"
     * @type {boolean}
     * @memberof Transactions
     */
    moreAvailable: boolean;
    /**
     * Value of the `fromDate` request parameter that generated this response
     * @type {number}
     * @memberof Transactions
     */
    fromDate: number;
    /**
     * Value of the `toDate` request parameter that generated this response
     * @type {number}
     * @memberof Transactions
     */
    toDate: number;
    /**
     * Value of the sort request parameter that generated this response
     * @type {string}
     * @memberof Transactions
     */
    sort: string;
    /**
     * The array of transactions
     * @type {Array<Transaction>}
     * @memberof Transactions
     */
    transactions: Array<Transaction>;
}

/**
 * Check if a given object implements the Transactions interface.
 */
export function instanceOfTransactions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "found" in value;
    isInstance = isInstance && "displaying" in value;
    isInstance = isInstance && "moreAvailable" in value;
    isInstance = isInstance && "fromDate" in value;
    isInstance = isInstance && "toDate" in value;
    isInstance = isInstance && "sort" in value;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function TransactionsFromJSON(json: any): Transactions {
    return TransactionsFromJSONTyped(json, false);
}

export function TransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transactions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'found': json['found'],
        'displaying': json['displaying'],
        'moreAvailable': json['moreAvailable'],
        'fromDate': json['fromDate'],
        'toDate': json['toDate'],
        'sort': json['sort'],
        'transactions': ((json['transactions'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function TransactionsToJSON(value?: Transactions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'found': value.found,
        'displaying': value.displaying,
        'moreAvailable': value.moreAvailable,
        'fromDate': value.fromDate,
        'toDate': value.toDate,
        'sort': value.sort,
        'transactions': ((value.transactions as Array<any>).map(TransactionToJSON)),
    };
}
