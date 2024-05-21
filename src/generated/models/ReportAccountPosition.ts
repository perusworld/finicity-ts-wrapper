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
 * @interface ReportAccountPosition
 */
export interface ReportAccountPosition {
    /**
     * The id of the investment position
     * @type {number}
     * @memberof ReportAccountPosition
     */
    id?: number;
    /**
     * What currency the account operates in
     * @type {string}
     * @memberof ReportAccountPosition
     */
    currency?: string;
    /**
     * The investment positionâ€™s market ticker symbol
     * @type {string}
     * @memberof ReportAccountPosition
     */
    symbol?: string;
    /**
     * The security name for the investment holding
     * @type {string}
     * @memberof ReportAccountPosition
     */
    securityName?: string;
    /**
     * The number of units of the holding
     * @type {number}
     * @memberof ReportAccountPosition
     */
    units?: number;
    /**
     * Market value of an investment position at the time of retrieval
     * @type {number}
     * @memberof ReportAccountPosition
     */
    marketValue?: number;
    /**
     * The current price of the investment holding
     * @type {number}
     * @memberof ReportAccountPosition
     */
    currentPrice?: number;
    /**
     * Type of security of the investment position
     * @type {number}
     * @memberof ReportAccountPosition
     */
    securityType?: number;
}

/**
 * Check if a given object implements the ReportAccountPosition interface.
 */
export function instanceOfReportAccountPosition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportAccountPositionFromJSON(json: any): ReportAccountPosition {
    return ReportAccountPositionFromJSONTyped(json, false);
}

export function ReportAccountPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportAccountPosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
        'securityName': !exists(json, 'securityName') ? undefined : json['securityName'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'marketValue': !exists(json, 'marketValue') ? undefined : json['marketValue'],
        'currentPrice': !exists(json, 'currentPrice') ? undefined : json['currentPrice'],
        'securityType': !exists(json, 'securityType') ? undefined : json['securityType'],
    };
}

export function ReportAccountPositionToJSON(value?: ReportAccountPosition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'currency': value.currency,
        'symbol': value.symbol,
        'securityName': value.securityName,
        'units': value.units,
        'marketValue': value.marketValue,
        'currentPrice': value.currentPrice,
        'securityType': value.securityType,
    };
}
