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
 * @interface Deductions
 */
export interface Deductions {
    /**
     * Deduction types:
     * 
     * * `Federal tax`: Federal tax withholdings 
     * 
     * * `State tax`: State tax withholdings 
     * 
     * * `Local tax`: Local tax withholdings 
     * 
     * * `Social security tax`: Social security tax withholdings 
     * 
     * * `Medicare tax`: Medicare withholdings 
     * 
     * * `SUI SDI VPDI tax`: SUI SDI VPDI tax 
     * 
     * * Retirement deductions: Retirement withholdings 
     * 
     * * `Benefit deductions`: Medical/Health benefits withholdings (i.e. medical, dental, vision, insurance) 
     * 
     * * `Garnishment deductions`: Garnishment withholdings, (i.e. bankruptcy, student loan, state garnishments, tax levy garnishments, child support) 
     * 
     * * `Other deductions`: Other withholdings, includes any other uncommon withholdings, pension plan, stock plans, etc.
     * 
     * @type {string}
     * @memberof Deductions
     */
    type: string;
    /**
     * Amount associated with deduction
     * @type {number}
     * @memberof Deductions
     */
    amount: number;
}

/**
 * Check if a given object implements the Deductions interface.
 */
export function instanceOfDeductions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function DeductionsFromJSON(json: any): Deductions {
    return DeductionsFromJSONTyped(json, false);
}

export function DeductionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Deductions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'amount': json['amount'],
    };
}

export function DeductionsToJSON(value?: Deductions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'amount': value.amount,
    };
}

