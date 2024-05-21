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
 * A fake transaction for TxPush testing
 * @export
 * @interface TestTxPushTransaction
 */
export interface TestTxPushTransaction {
    /**
     * The amount of the transaction
     * @type {number}
     * @memberof TestTxPushTransaction
     */
    amount: number;
    /**
     * The description of the transaction
     * @type {string}
     * @memberof TestTxPushTransaction
     */
    description: string;
    /**
     * "active" or "pending" (optional)
     * @type {string}
     * @memberof TestTxPushTransaction
     */
    status?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof TestTxPushTransaction
     */
    postedDate?: number;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof TestTxPushTransaction
     */
    transactionDate: number;
}

/**
 * Check if a given object implements the TestTxPushTransaction interface.
 */
export function instanceOfTestTxPushTransaction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "transactionDate" in value;

    return isInstance;
}

export function TestTxPushTransactionFromJSON(json: any): TestTxPushTransaction {
    return TestTxPushTransactionFromJSONTyped(json, false);
}

export function TestTxPushTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestTxPushTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'description': json['description'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'postedDate': !exists(json, 'postedDate') ? undefined : json['postedDate'],
        'transactionDate': json['transactionDate'],
    };
}

export function TestTxPushTransactionToJSON(value?: TestTxPushTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'description': value.description,
        'status': value.status,
        'postedDate': value.postedDate,
        'transactionDate': value.transactionDate,
    };
}

