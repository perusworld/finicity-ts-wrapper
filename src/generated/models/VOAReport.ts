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
import type { ErrorMessage } from './ErrorMessage';
import {
    ErrorMessageFromJSON,
    ErrorMessageFromJSONTyped,
    ErrorMessageToJSON,
} from './ErrorMessage';
import type { PrequalificationReportAssetSummary } from './PrequalificationReportAssetSummary';
import {
    PrequalificationReportAssetSummaryFromJSON,
    PrequalificationReportAssetSummaryFromJSONTyped,
    PrequalificationReportAssetSummaryToJSON,
} from './PrequalificationReportAssetSummary';
import type { ReportInstitution } from './ReportInstitution';
import {
    ReportInstitutionFromJSON,
    ReportInstitutionFromJSONTyped,
    ReportInstitutionToJSON,
} from './ReportInstitution';

/**
 * A VOA report
 * @export
 * @interface VOAReport
 */
export interface VOAReport {
    /**
     * A report ID
     * @type {string}
     * @memberof VOAReport
     */
    id?: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof VOAReport
     */
    customerType?: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof VOAReport
     */
    customerId?: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof VOAReport
     */
    requestId?: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof VOAReport
     */
    requesterName?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof VOAReport
     */
    createdDate?: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof VOAReport
     */
    title?: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof VOAReport
     */
    consumerId?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof VOAReport
     */
    consumerSsn?: string;
    /**
     * A report type. Possible values:
     * 
     * * `voi` 
     * 
     * * `voa` 
     * 
     * * `voaHistory` 
     * 
     * * `history` 
     * 
     * * `voieTxVerify` 
     * 
     * * `voieWithReport` 
     * 
     * * `voieWithInterview` 
     * 
     * * `paystatement` 
     * 
     * * `preQualVoa` 
     * 
     * * `assetSummary` 
     * 
     * * `voie` 
     * 
     * * `transactions` 
     * 
     * * `statement` 
     * 
     * * `voiePayroll` 
     * 
     * * `voeTransactions` 
     * 
     * * `voePayroll` 
     * 
     * * `cfrp` 
     * 
     * * `cfrb`
     * 
     * @type {string}
     * @memberof VOAReport
     */
    type?: string;
    /**
     * A report generation status. Possible values:
     * 
     * * `inProgress`
     * 
     * * `success`
     * 
     * * `failure`
     * 
     * @type {string}
     * @memberof VOAReport
     */
    status?: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof VOAReport
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof VOAReport
     */
    portfolioId?: string;
    /**
     * The `postedDate` of the earliest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOAReport
     */
    startDate?: number;
    /**
     * The `postedDate` of the latest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOAReport
     */
    endDate?: number;
    /**
     * Number of days covered by the report
     * @type {number}
     * @memberof VOAReport
     */
    days?: number;
    /**
     * "true" if the report covers more than 180 days
     * @type {boolean}
     * @memberof VOAReport
     */
    seasoned?: boolean;
    /**
     * The sum of available balance for all of the accounts included in the report
     * @type {number}
     * @memberof VOAReport
     */
    consolidatedAvailableBalance?: number;
    /**
     * A list of institution records
     * @type {Array<ReportInstitution>}
     * @memberof VOAReport
     */
    institutions?: Array<ReportInstitution>;
    /**
     * 
     * @type {PrequalificationReportAssetSummary}
     * @memberof VOAReport
     */
    assets?: PrequalificationReportAssetSummary;
}

/**
 * Check if a given object implements the VOAReport interface.
 */
export function instanceOfVOAReport(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VOAReportFromJSON(json: any): VOAReport {
    return VOAReportFromJSONTyped(json, false);
}

export function VOAReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOAReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'customerType': !exists(json, 'customerType') ? undefined : json['customerType'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'requestId': !exists(json, 'requestId') ? undefined : json['requestId'],
        'requesterName': !exists(json, 'requesterName') ? undefined : json['requesterName'],
        'createdDate': !exists(json, 'createdDate') ? undefined : json['createdDate'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'consumerId': !exists(json, 'consumerId') ? undefined : json['consumerId'],
        'consumerSsn': !exists(json, 'consumerSsn') ? undefined : json['consumerSsn'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorMessageFromJSON)),
        'portfolioId': !exists(json, 'portfolioId') ? undefined : json['portfolioId'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'days': !exists(json, 'days') ? undefined : json['days'],
        'seasoned': !exists(json, 'seasoned') ? undefined : json['seasoned'],
        'consolidatedAvailableBalance': !exists(json, 'consolidatedAvailableBalance') ? undefined : json['consolidatedAvailableBalance'],
        'institutions': !exists(json, 'institutions') ? undefined : ((json['institutions'] as Array<any>).map(ReportInstitutionFromJSON)),
        'assets': !exists(json, 'assets') ? undefined : PrequalificationReportAssetSummaryFromJSON(json['assets']),
    };
}

export function VOAReportToJSON(value?: VOAReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'customerType': value.customerType,
        'customerId': value.customerId,
        'requestId': value.requestId,
        'requesterName': value.requesterName,
        'createdDate': value.createdDate,
        'title': value.title,
        'consumerId': value.consumerId,
        'consumerSsn': value.consumerSsn,
        'type': value.type,
        'status': value.status,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorMessageToJSON)),
        'portfolioId': value.portfolioId,
        'startDate': value.startDate,
        'endDate': value.endDate,
        'days': value.days,
        'seasoned': value.seasoned,
        'consolidatedAvailableBalance': value.consolidatedAvailableBalance,
        'institutions': value.institutions === undefined ? undefined : ((value.institutions as Array<any>).map(ReportInstitutionToJSON)),
        'assets': PrequalificationReportAssetSummaryToJSON(value.assets),
    };
}

