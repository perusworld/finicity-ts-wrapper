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
 * @interface PayStat
 */
export interface PayStat {
    /**
     * The normalized category of the earnings with a number appended. The number is the will be the iterating number of the type's occurrence starting at one.
     * @type {string}
     * @memberof PayStat
     */
    name?: string;
    /**
     * The categorization based on the earning line's description. Possible values:
     * * "bereavement"
     * 
     * * "bonus"
     * 
     * * "commission"
     * 
     * * "holiday"
     * 
     * * "jury duty"
     * 
     * * "overtime"
     * 
     * * "pension"
     * 
     * * "pto"
     * 
     * * "regular"
     * 
     * * "sick"
     * 
     * * "tips"
     * 
     * * "unknown"
     * 
     * * "vacation"
     * 
     * * "reimbursement"
     * 
     * * "stock"
     * 
     * * "benefit"
     * @type {string}
     * @memberof PayStat
     */
    type?: string;
    /**
     * The earnings line's pay type description
     * @type {string}
     * @memberof PayStat
     */
    description?: string;
    /**
     * The amount for the earning line paid out to the employee for the specified pay period.
     * @type {number}
     * @memberof PayStat
     */
    amountCurrent?: number;
    /**
     * The amount for the earning line being paid out to the employee for the current pay year.
     * @type {number}
     * @memberof PayStat
     */
    amountYTD?: number;
}

/**
 * Check if a given object implements the PayStat interface.
 */
export function instanceOfPayStat(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayStatFromJSON(json: any): PayStat {
    return PayStatFromJSONTyped(json, false);
}

export function PayStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayStat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amountCurrent': !exists(json, 'amountCurrent') ? undefined : json['amountCurrent'],
        'amountYTD': !exists(json, 'amountYTD') ? undefined : json['amountYTD'],
    };
}

export function PayStatToJSON(value?: PayStat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'description': value.description,
        'amountCurrent': value.amountCurrent,
        'amountYTD': value.amountYTD,
    };
}

