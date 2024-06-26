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
 * Requested attributes of the report
 * @export
 * @interface ObbCurrentReportRequestDetails
 */
export interface ObbCurrentReportRequestDetails {
    /**
     * Date from when the requested data is available
     * @type {string}
     * @memberof ObbCurrentReportRequestDetails
     */
    reportBeginDate?: string;
    /**
     * Date to which the requested data is available
     * @type {string}
     * @memberof ObbCurrentReportRequestDetails
     */
    reportEndDate?: string;
    /**
     * The date and time the report was requested
     * @type {string}
     * @memberof ObbCurrentReportRequestDetails
     */
    reportRequestDate: string;
    /**
     * Number of days requested for the report
     * @type {number}
     * @memberof ObbCurrentReportRequestDetails
     */
    requestedDaysForReport: number;
    /**
     * Date the report would have began on if enough data was available for which the partner requested
     * @type {string}
     * @memberof ObbCurrentReportRequestDetails
     */
    requestedReportBeginDate: string;
}

/**
 * Check if a given object implements the ObbCurrentReportRequestDetails interface.
 */
export function instanceOfObbCurrentReportRequestDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reportRequestDate" in value;
    isInstance = isInstance && "requestedDaysForReport" in value;
    isInstance = isInstance && "requestedReportBeginDate" in value;

    return isInstance;
}

export function ObbCurrentReportRequestDetailsFromJSON(json: any): ObbCurrentReportRequestDetails {
    return ObbCurrentReportRequestDetailsFromJSONTyped(json, false);
}

export function ObbCurrentReportRequestDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbCurrentReportRequestDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reportBeginDate': !exists(json, 'reportBeginDate') ? undefined : json['reportBeginDate'],
        'reportEndDate': !exists(json, 'reportEndDate') ? undefined : json['reportEndDate'],
        'reportRequestDate': json['reportRequestDate'],
        'requestedDaysForReport': json['requestedDaysForReport'],
        'requestedReportBeginDate': json['requestedReportBeginDate'],
    };
}

export function ObbCurrentReportRequestDetailsToJSON(value?: ObbCurrentReportRequestDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reportBeginDate': value.reportBeginDate,
        'reportEndDate': value.reportEndDate,
        'reportRequestDate': value.reportRequestDate,
        'requestedDaysForReport': value.requestedDaysForReport,
        'requestedReportBeginDate': value.requestedReportBeginDate,
    };
}

