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
 * Account owner address
 * @export
 * @interface AccountOwnerAddress
 */
export interface AccountOwnerAddress {
    /**
     * A street address
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    ownerAddress?: string;
    /**
     * The type of address location:
     * * "Business"
     * * "Home"
     * * "Mailing"
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    type?: string;
    /**
     * Address line 1
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line1?: string;
    /**
     * Address line 2
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line2?: string;
    /**
     * Address line 3
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line3?: string;
    /**
     * City
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    city?: string;
    /**
     * State
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    state?: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    postalCode?: string;
    /**
     * Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3).
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    country?: string;
}

/**
 * Check if a given object implements the AccountOwnerAddress interface.
 */
export function instanceOfAccountOwnerAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountOwnerAddressFromJSON(json: any): AccountOwnerAddress {
    return AccountOwnerAddressFromJSONTyped(json, false);
}

export function AccountOwnerAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwnerAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ownerAddress': !exists(json, 'ownerAddress') ? undefined : json['ownerAddress'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'line1': !exists(json, 'line1') ? undefined : json['line1'],
        'line2': !exists(json, 'line2') ? undefined : json['line2'],
        'line3': !exists(json, 'line3') ? undefined : json['line3'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'country': !exists(json, 'country') ? undefined : json['country'],
    };
}

export function AccountOwnerAddressToJSON(value?: AccountOwnerAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ownerAddress': value.ownerAddress,
        'type': value.type,
        'line1': value.line1,
        'line2': value.line2,
        'line3': value.line3,
        'city': value.city,
        'state': value.state,
        'postalCode': value.postalCode,
        'country': value.country,
    };
}

