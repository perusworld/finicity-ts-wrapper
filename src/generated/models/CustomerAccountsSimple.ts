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
import type { CustomerAccountSimple } from './CustomerAccountSimple';
import {
    CustomerAccountSimpleFromJSON,
    CustomerAccountSimpleFromJSONTyped,
    CustomerAccountSimpleToJSON,
} from './CustomerAccountSimple';

/**
 * A list of accounts with basic information of a customer
 * @export
 * @interface CustomerAccountsSimple
 */
export interface CustomerAccountsSimple {
    /**
     * A list of accounts with basic information of a customer
     * @type {Array<CustomerAccountSimple>}
     * @memberof CustomerAccountsSimple
     */
    accounts: Array<CustomerAccountSimple>;
}

/**
 * Check if a given object implements the CustomerAccountsSimple interface.
 */
export function instanceOfCustomerAccountsSimple(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accounts" in value;

    return isInstance;
}

export function CustomerAccountsSimpleFromJSON(json: any): CustomerAccountsSimple {
    return CustomerAccountsSimpleFromJSONTyped(json, false);
}

export function CustomerAccountsSimpleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAccountsSimple {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounts': ((json['accounts'] as Array<any>).map(CustomerAccountSimpleFromJSON)),
    };
}

export function CustomerAccountsSimpleToJSON(value?: CustomerAccountsSimple | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounts': ((value.accounts as Array<any>).map(CustomerAccountSimpleToJSON)),
    };
}
