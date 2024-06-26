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
import type { ThirdPartyAccessReceiptData } from './ThirdPartyAccessReceiptData';
import {
    ThirdPartyAccessReceiptDataFromJSON,
    ThirdPartyAccessReceiptDataFromJSONTyped,
    ThirdPartyAccessReceiptDataToJSON,
} from './ThirdPartyAccessReceiptData';

/**
 * An object representing the third party access key receipt
 * 
 *   * `customerId`: This is recipient's customerId represented as a
 *   pseudoidentifier. 
 *   * `accountId`: This is the value provided to recipient
 *   represented as a pseudoidentifier for the accountId.
 * @export
 * @interface ThirdPartyAccessKeyReceiptData
 */
export interface ThirdPartyAccessKeyReceiptData {
    /**
     * 
     * @type {Array<ThirdPartyAccessReceiptData>}
     * @memberof ThirdPartyAccessKeyReceiptData
     */
    data?: Array<ThirdPartyAccessReceiptData>;
}

/**
 * Check if a given object implements the ThirdPartyAccessKeyReceiptData interface.
 */
export function instanceOfThirdPartyAccessKeyReceiptData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThirdPartyAccessKeyReceiptDataFromJSON(json: any): ThirdPartyAccessKeyReceiptData {
    return ThirdPartyAccessKeyReceiptDataFromJSONTyped(json, false);
}

export function ThirdPartyAccessKeyReceiptDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThirdPartyAccessKeyReceiptData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ThirdPartyAccessReceiptDataFromJSON)),
    };
}

export function ThirdPartyAccessKeyReceiptDataToJSON(value?: ThirdPartyAccessKeyReceiptData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ThirdPartyAccessReceiptDataToJSON)),
    };
}

