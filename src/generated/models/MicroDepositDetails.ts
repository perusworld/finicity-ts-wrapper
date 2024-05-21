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
 * @interface MicroDepositDetails
 */
export interface MicroDepositDetails {
    /**
     * The following values may be returned in the field of a status:
     * 
     * * "Pending" : Micro entries not yet deposited to customer's account
     * * "Completed": Micro entries deposited to customer's account
     * * "Verified": Micro entries got successfully verified
     * * "Rejected": Micro entries got rejected due to some reason
     * * "Returned": Micro entries got returned back
     * * "Failed": Micro entries got failed due to some reason
     * * "Expired": Micro entries got expired as they remains unverified for
     * certain defined days
     * @type {string}
     * @memberof MicroDepositDetails
     */
    status?: string;
    /**
     * Micro entries status description
     * @type {string}
     * @memberof MicroDepositDetails
     */
    statusDescription?: string;
    /**
     * A date-time without time zone
     * @type {string}
     * @memberof MicroDepositDetails
     */
    creationDate?: string;
    /**
     * Routing number of receiving bank
     * @type {string}
     * @memberof MicroDepositDetails
     */
    routingNumber?: string;
    /**
     * The last 4 digits of the ACH account number
     * @type {string}
     * @memberof MicroDepositDetails
     */
    accountNumberLast4?: string;
}

/**
 * Check if a given object implements the MicroDepositDetails interface.
 */
export function instanceOfMicroDepositDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MicroDepositDetailsFromJSON(json: any): MicroDepositDetails {
    return MicroDepositDetailsFromJSONTyped(json, false);
}

export function MicroDepositDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MicroDepositDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusDescription': !exists(json, 'statusDescription') ? undefined : json['statusDescription'],
        'creationDate': !exists(json, 'creationDate') ? undefined : json['creationDate'],
        'routingNumber': !exists(json, 'routingNumber') ? undefined : json['routingNumber'],
        'accountNumberLast4': !exists(json, 'accountNumberLast4') ? undefined : json['accountNumberLast4'],
    };
}

export function MicroDepositDetailsToJSON(value?: MicroDepositDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'statusDescription': value.statusDescription,
        'creationDate': value.creationDate,
        'routingNumber': value.routingNumber,
        'accountNumberLast4': value.accountNumberLast4,
    };
}

