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
import type { TxVerifyInterview } from './TxVerifyInterview';
import {
    TxVerifyInterviewFromJSON,
    TxVerifyInterviewFromJSONTyped,
    TxVerifyInterviewToJSON,
} from './TxVerifyInterview';

/**
 * 
 * @export
 * @interface VOIEWithInterviewData
 */
export interface VOIEWithInterviewData {
    /**
     * An array of `TxVerifyInterview` objects
     * @type {Array<TxVerifyInterview>}
     * @memberof VOIEWithInterviewData
     */
    txVerifyInterview: Array<TxVerifyInterview>;
    /**
     * Field to indicate whether to extract the earnings on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractEarnings?: boolean;
    /**
     * Field to indicate whether to extract the deductions on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractDeductions?: boolean;
    /**
     * Field to indicate whether to extract the direct deposits on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractDirectDeposit?: boolean;
}

/**
 * Check if a given object implements the VOIEWithInterviewData interface.
 */
export function instanceOfVOIEWithInterviewData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "txVerifyInterview" in value;

    return isInstance;
}

export function VOIEWithInterviewDataFromJSON(json: any): VOIEWithInterviewData {
    return VOIEWithInterviewDataFromJSONTyped(json, false);
}

export function VOIEWithInterviewDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEWithInterviewData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txVerifyInterview': ((json['txVerifyInterview'] as Array<any>).map(TxVerifyInterviewFromJSON)),
        'extractEarnings': !exists(json, 'extractEarnings') ? undefined : json['extractEarnings'],
        'extractDeductions': !exists(json, 'extractDeductions') ? undefined : json['extractDeductions'],
        'extractDirectDeposit': !exists(json, 'extractDirectDeposit') ? undefined : json['extractDirectDeposit'],
    };
}

export function VOIEWithInterviewDataToJSON(value?: VOIEWithInterviewData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txVerifyInterview': ((value.txVerifyInterview as Array<any>).map(TxVerifyInterviewToJSON)),
        'extractEarnings': value.extractEarnings,
        'extractDeductions': value.extractDeductions,
        'extractDirectDeposit': value.extractDirectDeposit,
    };
}

