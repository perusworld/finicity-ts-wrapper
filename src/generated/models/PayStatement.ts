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
 * A pay statement document and pay statement label
 * @export
 * @interface PayStatement
 */
export interface PayStatement {
    /**
     * The label to be associated with the pay statement. This label will allow the paystub to go through data extraction.
     * * `lastPayPeriod`: default label that should be used for the VOIE - Paystub products
     * * `lastPayPeriodMinusOne`: the second most recent pay statement
     * * `lastPayPeriodMinusTwo`: the third most recent pay statement
     * * `previousYearLastPayPeriod` Last pay statement of the previous calendar year
     * * `previousYear2LastPayPeriod`: last pay statement of the calendar year 2 years prior
     * * `earliestPayPeriod`: the earliest pay statement
     * @type {string}
     * @memberof PayStatement
     */
    label: string;
    /**
     * A Base64 encoded pay statement file. Finicity supports PDF, JPG, or PNG files.
     * @type {string}
     * @memberof PayStatement
     */
    statement: string;
}

/**
 * Check if a given object implements the PayStatement interface.
 */
export function instanceOfPayStatement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "statement" in value;

    return isInstance;
}

export function PayStatementFromJSON(json: any): PayStatement {
    return PayStatementFromJSONTyped(json, false);
}

export function PayStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayStatement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'statement': json['statement'],
    };
}

export function PayStatementToJSON(value?: PayStatement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'statement': value.statement,
    };
}

