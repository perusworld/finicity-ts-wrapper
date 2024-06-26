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
import type { ConsumerInfo } from './ConsumerInfo';
import {
    ConsumerInfoFromJSON,
    ConsumerInfoFromJSONTyped,
    ConsumerInfoToJSON,
} from './ConsumerInfo';

/**
 * 
 * @export
 * @interface Borrower
 */
export interface Borrower {
    /**
     * A customer ID. See Add Customer API for how to create a customer ID.
     * @type {string}
     * @memberof Borrower
     */
    customerId: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof Borrower
     */
    consumerId: string;
    /**
     * "primary" or "jointBorrower"
     * @type {string}
     * @memberof Borrower
     */
    type: string;
    /**
     * 
     * @type {ConsumerInfo}
     * @memberof Borrower
     */
    optionalConsumerInfo?: ConsumerInfo;
}

/**
 * Check if a given object implements the Borrower interface.
 */
export function instanceOfBorrower(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "consumerId" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function BorrowerFromJSON(json: any): Borrower {
    return BorrowerFromJSONTyped(json, false);
}

export function BorrowerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Borrower {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerId': json['customerId'],
        'consumerId': json['consumerId'],
        'type': json['type'],
        'optionalConsumerInfo': !exists(json, 'optionalConsumerInfo') ? undefined : ConsumerInfoFromJSON(json['optionalConsumerInfo']),
    };
}

export function BorrowerToJSON(value?: Borrower | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerId': value.customerId,
        'consumerId': value.consumerId,
        'type': value.type,
        'optionalConsumerInfo': ConsumerInfoToJSON(value.optionalConsumerInfo),
    };
}

