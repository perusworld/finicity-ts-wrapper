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
import type { AccountOwnerDetails } from './AccountOwnerDetails';
import {
    AccountOwnerDetailsFromJSON,
    AccountOwnerDetailsFromJSONTyped,
    AccountOwnerDetailsToJSON,
} from './AccountOwnerDetails';

/**
 * 
 * @export
 * @interface AccountOwnerHolders
 */
export interface AccountOwnerHolders {
    /**
     * List of account owners
     * @type {Array<AccountOwnerDetails>}
     * @memberof AccountOwnerHolders
     */
    holders: Array<AccountOwnerDetails>;
}

/**
 * Check if a given object implements the AccountOwnerHolders interface.
 */
export function instanceOfAccountOwnerHolders(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "holders" in value;

    return isInstance;
}

export function AccountOwnerHoldersFromJSON(json: any): AccountOwnerHolders {
    return AccountOwnerHoldersFromJSONTyped(json, false);
}

export function AccountOwnerHoldersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwnerHolders {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'holders': ((json['holders'] as Array<any>).map(AccountOwnerDetailsFromJSON)),
    };
}

export function AccountOwnerHoldersToJSON(value?: AccountOwnerHolders | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'holders': ((value.holders as Array<any>).map(AccountOwnerDetailsToJSON)),
    };
}

