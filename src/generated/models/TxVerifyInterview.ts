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
 * @interface TxVerifyInterview
 */
export interface TxVerifyInterview {
    /**
     * An asset ID. Generated by Connect or by using the Store Customer Pay Statement API.
     * @type {string}
     * @memberof TxVerifyInterview
     */
    assetId: string;
    /**
     * An array of account IDs to be included in the report (all accounts will be included if not set)
     * @type {Array<string>}
     * @memberof TxVerifyInterview
     */
    accounts?: Array<string>;
}

/**
 * Check if a given object implements the TxVerifyInterview interface.
 */
export function instanceOfTxVerifyInterview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "assetId" in value;

    return isInstance;
}

export function TxVerifyInterviewFromJSON(json: any): TxVerifyInterview {
    return TxVerifyInterviewFromJSONTyped(json, false);
}

export function TxVerifyInterviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): TxVerifyInterview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetId': json['assetId'],
        'accounts': !exists(json, 'accounts') ? undefined : json['accounts'],
    };
}

export function TxVerifyInterviewToJSON(value?: TxVerifyInterview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assetId': value.assetId,
        'accounts': value.accounts,
    };
}

