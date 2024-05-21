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
 * Details of the financial institution this account is home to
 * @export
 * @interface ObbInstitution
 */
export interface ObbInstitution {
    /**
     * URL of the institution logo icon for reporting
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionIconUrl?: string;
    /**
     * ID of the financial institution
     * @type {number}
     * @memberof ObbInstitution
     */
    institutionId: number;
    /**
     * Name of the financial institution
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionName?: string;
    /**
     * Primary branding color of the institution, in hex color format
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionPrimaryColor?: string;
}

/**
 * Check if a given object implements the ObbInstitution interface.
 */
export function instanceOfObbInstitution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "institutionId" in value;

    return isInstance;
}

export function ObbInstitutionFromJSON(json: any): ObbInstitution {
    return ObbInstitutionFromJSONTyped(json, false);
}

export function ObbInstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbInstitution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'institutionIconUrl': !exists(json, 'institutionIconUrl') ? undefined : json['institutionIconUrl'],
        'institutionId': json['institutionId'],
        'institutionName': !exists(json, 'institutionName') ? undefined : json['institutionName'],
        'institutionPrimaryColor': !exists(json, 'institutionPrimaryColor') ? undefined : json['institutionPrimaryColor'],
    };
}

export function ObbInstitutionToJSON(value?: ObbInstitution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'institutionIconUrl': value.institutionIconUrl,
        'institutionId': value.institutionId,
        'institutionName': value.institutionName,
        'institutionPrimaryColor': value.institutionPrimaryColor,
    };
}

