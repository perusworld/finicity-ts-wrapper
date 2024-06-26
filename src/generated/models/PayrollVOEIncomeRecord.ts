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
 * @interface PayrollVOEIncomeRecord
 */
export interface PayrollVOEIncomeRecord {
    /**
     * The current pay frequency or or how often a regular pay check is:
     * 
     * * `Daily` 
     * 
     * * `Weekly` 
     * 
     * * `Bi-Weekly` 
     * 
     * * `Semi-Monthly` 
     * 
     * * `Monthly` 
     * 
     * * `Quarterly` 
     * 
     * * `Semi-Annual` 
     * 
     * * `Annual` 
     * 
     * * `Every 2.6 wks` 
     * 
     * * `Every 4 wks` 
     * 
     * * `Every 5.2 wks` 
     * 
     * * `Other`
     * 
     * @type {string}
     * @memberof PayrollVOEIncomeRecord
     */
    payFrequency?: string;
}

/**
 * Check if a given object implements the PayrollVOEIncomeRecord interface.
 */
export function instanceOfPayrollVOEIncomeRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayrollVOEIncomeRecordFromJSON(json: any): PayrollVOEIncomeRecord {
    return PayrollVOEIncomeRecordFromJSONTyped(json, false);
}

export function PayrollVOEIncomeRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollVOEIncomeRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payFrequency': !exists(json, 'payFrequency') ? undefined : json['payFrequency'],
    };
}

export function PayrollVOEIncomeRecordToJSON(value?: PayrollVOEIncomeRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payFrequency': value.payFrequency,
    };
}

