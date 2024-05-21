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
 * Owner of a customer account
 * @export
 * @interface AccountOwner
 */
export interface AccountOwner {
    /**
     * The name of the account owner. Can be multiple account owners in one string. This is how the source data is returned from the institution.
     * @type {string}
     * @memberof AccountOwner
     */
    ownerName: string;
    /**
     * A street address
     * @type {string}
     * @memberof AccountOwner
     */
    ownerAddress: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AccountOwner
     */
    asOfDate?: number;
}

/**
 * Check if a given object implements the AccountOwner interface.
 */
export function instanceOfAccountOwner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ownerName" in value;
    isInstance = isInstance && "ownerAddress" in value;

    return isInstance;
}

export function AccountOwnerFromJSON(json: any): AccountOwner {
    return AccountOwnerFromJSONTyped(json, false);
}

export function AccountOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ownerName': json['ownerName'],
        'ownerAddress': json['ownerAddress'],
        'asOfDate': !exists(json, 'asOfDate') ? undefined : json['asOfDate'],
    };
}

export function AccountOwnerToJSON(value?: AccountOwner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ownerName': value.ownerName,
        'ownerAddress': value.ownerAddress,
        'asOfDate': value.asOfDate,
    };
}

