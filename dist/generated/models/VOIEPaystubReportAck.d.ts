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
import type { ErrorMessage } from './ErrorMessage';
import type { VOIEReportConstraints } from './VOIEReportConstraints';
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
export declare function instanceOfVOIEPaystubReportAck(value: object): boolean;
export declare function VOIEPaystubReportAckFromJSON(json: any): VOIEPaystubReportAck;
export declare function VOIEPaystubReportAckFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEPaystubReportAck;
export declare function VOIEPaystubReportAckToJSON(value?: VOIEPaystubReportAck | null): any;