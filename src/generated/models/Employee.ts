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
 * @interface Employee
 */
export interface Employee {
    /**
     * The name of the employee
     * @type {string}
     * @memberof Employee
     */
    name?: string;
}

/**
 * Check if a given object implements the Employee interface.
 */
export function instanceOfEmployee(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmployeeFromJSON(json: any): Employee {
    return EmployeeFromJSONTyped(json, false);
}

export function EmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Employee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function EmployeeToJSON(value?: Employee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

