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
import type { VOIEWithTXVerifyReportConstraintsOut } from './VOIEWithTXVerifyReportConstraintsOut';
import {
    VOIEWithTXVerifyReportConstraintsOutFromJSON,
    VOIEWithTXVerifyReportConstraintsOutFromJSONTyped,
    VOIEWithTXVerifyReportConstraintsOutToJSON,
} from './VOIEWithTXVerifyReportConstraintsOut';

/**
 * A VOIE Paystub With TXVerify report being generated
 * @export
 * @interface VOIEPaystubWithTXVerifyReportAck
 */
export interface VOIEPaystubWithTXVerifyReportAck {
    /**
     * A report ID
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    id: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    customerType: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    customerId: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    requestId: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    requesterName: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    createdDate: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    title: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    consumerId: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
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
     * @memberof VOIEPaystubWithTXVerifyReportAck
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
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    status: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    portfolioId: string;
    /**
     * 
     * @type {VOIEWithTXVerifyReportConstraintsOut}
     * @memberof VOIEPaystubWithTXVerifyReportAck
     */
    constraints: VOIEWithTXVerifyReportConstraintsOut;
}

/**
 * Check if a given object implements the VOIEPaystubWithTXVerifyReportAck interface.
 */
export function instanceOfVOIEPaystubWithTXVerifyReportAck(value: object): boolean {
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

export function VOIEPaystubWithTXVerifyReportAckFromJSON(json: any): VOIEPaystubWithTXVerifyReportAck {
    return VOIEPaystubWithTXVerifyReportAckFromJSONTyped(json, false);
}

export function VOIEPaystubWithTXVerifyReportAckFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEPaystubWithTXVerifyReportAck {
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
        'constraints': VOIEWithTXVerifyReportConstraintsOutFromJSON(json['constraints']),
    };
}

export function VOIEPaystubWithTXVerifyReportAckToJSON(value?: VOIEPaystubWithTXVerifyReportAck | null): any {
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
        'constraints': VOIEWithTXVerifyReportConstraintsOutToJSON(value.constraints),
    };
}

