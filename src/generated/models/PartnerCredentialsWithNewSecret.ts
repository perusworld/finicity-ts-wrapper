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
 * @interface PartnerCredentialsWithNewSecret
 */
export interface PartnerCredentialsWithNewSecret {
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    partnerId: string;
    /**
     * Your Partner Secret displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    partnerSecret: string;
    /**
     * A new value for the Partner Secret
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    newPartnerSecret: string;
}

/**
 * Check if a given object implements the PartnerCredentialsWithNewSecret interface.
 */
export function instanceOfPartnerCredentialsWithNewSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "partnerSecret" in value;
    isInstance = isInstance && "newPartnerSecret" in value;

    return isInstance;
}

export function PartnerCredentialsWithNewSecretFromJSON(json: any): PartnerCredentialsWithNewSecret {
    return PartnerCredentialsWithNewSecretFromJSONTyped(json, false);
}

export function PartnerCredentialsWithNewSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCredentialsWithNewSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partnerId': json['partnerId'],
        'partnerSecret': json['partnerSecret'],
        'newPartnerSecret': json['newPartnerSecret'],
    };
}

export function PartnerCredentialsWithNewSecretToJSON(value?: PartnerCredentialsWithNewSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'partnerId': value.partnerId,
        'partnerSecret': value.partnerSecret,
        'newPartnerSecret': value.newPartnerSecret,
    };
}

