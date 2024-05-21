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
 * @interface ReportTransactionBase2
 */
export interface ReportTransactionBase2 {
    /**
     * A normalized payee, derived from the transaction's `description` and `memo` fields
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    normalizedPayee?: string;
    /**
     * The unique identifier given by the FI for each transaction
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    institutionTransactionId?: string;
    /**
     * One of the values from Categories (assigned based on the payee name)
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    category?: string;
    /**
     * One of the values from transaction types
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    type?: string;
    /**
     * The type of investment security (VOA only)
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    securityType?: string;
    /**
     * Investment symbol (VOA only)
     * @type {string}
     * @memberof ReportTransactionBase2
     */
    symbol?: string;
    /**
     * A commission amount
     * @type {number}
     * @memberof ReportTransactionBase2
     */
    commission?: number;
}

/**
 * Check if a given object implements the ReportTransactionBase2 interface.
 */
export function instanceOfReportTransactionBase2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportTransactionBase2FromJSON(json: any): ReportTransactionBase2 {
    return ReportTransactionBase2FromJSONTyped(json, false);
}

export function ReportTransactionBase2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportTransactionBase2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'normalizedPayee': !exists(json, 'normalizedPayee') ? undefined : json['normalizedPayee'],
        'institutionTransactionId': !exists(json, 'institutionTransactionId') ? undefined : json['institutionTransactionId'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'securityType': !exists(json, 'securityType') ? undefined : json['securityType'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'commission': !exists(json, 'commission') ? undefined : json['commission'],
    };
}

export function ReportTransactionBase2ToJSON(value?: ReportTransactionBase2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'normalizedPayee': value.normalizedPayee,
        'institutionTransactionId': value.institutionTransactionId,
        'category': value.category,
        'type': value.type,
        'securityType': value.securityType,
        'symbol': value.symbol,
        'commission': value.commission,
    };
}

