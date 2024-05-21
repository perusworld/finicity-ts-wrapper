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
 * @interface ReportCustomField
 */
export interface ReportCustomField {
    /**
     * The name of the custom field
     * @type {string}
     * @memberof ReportCustomField
     */
    label?: string;
    /**
     * The value of the custom field
     * @type {string}
     * @memberof ReportCustomField
     */
    value?: string;
    /**
     * If the custom field will show on the PDF or not
     * @type {boolean}
     * @memberof ReportCustomField
     */
    shown?: boolean;
}

/**
 * Check if a given object implements the ReportCustomField interface.
 */
export function instanceOfReportCustomField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportCustomFieldFromJSON(json: any): ReportCustomField {
    return ReportCustomFieldFromJSONTyped(json, false);
}

export function ReportCustomFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportCustomField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'shown': !exists(json, 'shown') ? undefined : json['shown'],
    };
}

export function ReportCustomFieldToJSON(value?: ReportCustomField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': value.value,
        'shown': value.shown,
    };
}
