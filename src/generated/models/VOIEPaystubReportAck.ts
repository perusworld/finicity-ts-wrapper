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
import type { VOIEReportConstraints } from './VOIEReportConstraints';
import {
    VOIEReportConstraintsFromJSON,
    VOIEReportConstraintsFromJSONTyped,
    VOIEReportConstraintsToJSON,
} from './VOIEReportConstraints';

/**
 * A VOIE Paystub report being generated
 * @export
 * @interface VOIEPaystubReportAck
 */
export interface VOIEPaystubReportAck {
    /**
     * A report ID
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    id: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    customerType: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof VOIEPaystubReportAck
     */
    customerId: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    requestId: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    requesterName: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof VOIEPaystubReportAck
     */
    createdDate: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    title: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    consumerId: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    consumerSsn: string;
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
     * @memberof VOIEPaystubReportAck
     */
    type: string;
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
     * @memberof VOIEPaystubReportAck
     */
    status: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof VOIEPaystubReportAck
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof VOIEPaystubReportAck
     */
    portfolioId: string;
    /**
     * 
     * @type {VOIEReportConstraints}
     * @memberof VOIEPaystubReportAck
     */
    constraints: VOIEReportConstraints;
}

/**
 * Check if a given object implements the VOIEPaystubReportAck interface.
 */
export function instanceOfVOIEPaystubReportAck(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "customerType" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "requestId" in value;
    isInstance = isInstance && "requesterName" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "consumerId" in value;
    isInstance = isInstance && "consumerSsn" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "portfolioId" in value;
    isInstance = isInstance && "constraints" in value;

    return isInstance;
}

export function VOIEPaystubReportAckFromJSON(json: any): VOIEPaystubReportAck {
    return VOIEPaystubReportAckFromJSONTyped(json, false);
}

export function VOIEPaystubReportAckFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEPaystubReportAck {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'customerType': json['customerType'],
        'customerId': json['customerId'],
        'requestId': json['requestId'],
        'requesterName': json['requesterName'],
        'createdDate': json['createdDate'],
        'title': json['title'],
        'consumerId': json['consumerId'],
        'consumerSsn': json['consumerSsn'],
        'type': json['type'],
        'status': json['status'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorMessageFromJSON)),
        'portfolioId': json['portfolioId'],
        'constraints': VOIEReportConstraintsFromJSON(json['constraints']),
    };
}

export function VOIEPaystubReportAckToJSON(value?: VOIEPaystubReportAck | null): any {
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
        'constraints': VOIEReportConstraintsToJSON(value.constraints),
    };
}

