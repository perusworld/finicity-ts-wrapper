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
 * Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF.
 * @export
 * @interface ObbAnalyticsReportAck
 */
export interface ObbAnalyticsReportAck {
    /**
     * List of account IDs included in the report
     * @type {Array<number>}
     * @memberof ObbAnalyticsReportAck
     */
    accountIds: Array<number>;
    /**
     * Business ID associated with the requested customer
     * @type {number}
     * @memberof ObbAnalyticsReportAck
     */
    businessId?: number;
    /**
     * Created date of balance analytics request
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    createdDate: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof ObbAnalyticsReportAck
     */
    customerId: number;
    /**
     * A report ID
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    reportId: string;
    /**
     * PIN that may be used to access the report
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    reportPin: string;
    /**
     * Name of requester
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    requesterName?: string;
    /**
     * Title of the report
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    title: string;
}

/**
 * Check if a given object implements the ObbAnalyticsReportAck interface.
 */
export function instanceOfObbAnalyticsReportAck(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountIds" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "reportId" in value;
    isInstance = isInstance && "reportPin" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function ObbAnalyticsReportAckFromJSON(json: any): ObbAnalyticsReportAck {
    return ObbAnalyticsReportAckFromJSONTyped(json, false);
}

export function ObbAnalyticsReportAckFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbAnalyticsReportAck {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountIds': json['accountIds'],
        'businessId': !exists(json, 'businessId') ? undefined : json['businessId'],
        'createdDate': json['createdDate'],
        'customerId': json['customerId'],
        'reportId': json['reportId'],
        'reportPin': json['reportPin'],
        'requesterName': !exists(json, 'requesterName') ? undefined : json['requesterName'],
        'title': json['title'],
    };
}

export function ObbAnalyticsReportAckToJSON(value?: ObbAnalyticsReportAck | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountIds': value.accountIds,
        'businessId': value.businessId,
        'createdDate': value.createdDate,
        'customerId': value.customerId,
        'reportId': value.reportId,
        'reportPin': value.reportPin,
        'requesterName': value.requesterName,
        'title': value.title,
    };
}

