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
import type { PayrollEmploymentHistoryVOIE } from './PayrollEmploymentHistoryVOIE';
import {
    PayrollEmploymentHistoryVOIEFromJSON,
    PayrollEmploymentHistoryVOIEFromJSONTyped,
    PayrollEmploymentHistoryVOIEToJSON,
} from './PayrollEmploymentHistoryVOIE';

/**
 * A VOIE Payroll report
 * @export
 * @interface VOIEPayrollReport
 */
export interface VOIEPayrollReport {
    /**
     * A report ID
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    id?: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    customerType?: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof VOIEPayrollReport
     */
    customerId?: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    requestId?: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    requesterName?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof VOIEPayrollReport
     */
    createdDate?: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    title?: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    consumerId?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof VOIEPayrollReport
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
     * @memberof VOIEPayrollReport
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
     * @memberof VOIEPayrollReport
     */
    status?: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof VOIEPayrollReport
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof VOIEPayrollReport
     */
    portfolioId?: string;
    /**
     * An array of employment histories, one for each of the consumer's verified employers
     * @type {Array<PayrollEmploymentHistoryVOIE>}
     * @memberof VOIEPayrollReport
     */
    employmentHistory?: Array<PayrollEmploymentHistoryVOIE>;
    /**
     * Mastercard Open Banking internal use only to flag reports that should not be retrieved by the GSE's (Government-Sponsored Enterprise).
     * 
     * This is a mandatory field for VOE-payroll and VOIE-payroll report types.
     * @type {boolean}
     * @memberof VOIEPayrollReport
     */
    gseEnabled?: boolean;
}

/**
 * Check if a given object implements the VOIEPayrollReport interface.
 */
export function instanceOfVOIEPayrollReport(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VOIEPayrollReportFromJSON(json: any): VOIEPayrollReport {
    return VOIEPayrollReportFromJSONTyped(json, false);
}

export function VOIEPayrollReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEPayrollReport {
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
        'employmentHistory': !exists(json, 'employmentHistory') ? undefined : ((json['employmentHistory'] as Array<any>).map(PayrollEmploymentHistoryVOIEFromJSON)),
        'gseEnabled': !exists(json, 'gseEnabled') ? undefined : json['gseEnabled'],
    };
}

export function VOIEPayrollReportToJSON(value?: VOIEPayrollReport | null): any {
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
        'employmentHistory': value.employmentHistory === undefined ? undefined : ((value.employmentHistory as Array<any>).map(PayrollEmploymentHistoryVOIEToJSON)),
        'gseEnabled': value.gseEnabled,
    };
}
