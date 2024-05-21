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
import type { PrequalificationReportConstraintsOut } from './PrequalificationReportConstraintsOut';
/**
 * A Prequalification report being generated
 * @export
 * @interface PrequalificationReportAck
 */
export interface PrequalificationReportAck {
    /**
     * A report ID
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    id: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    customerType: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof PrequalificationReportAck
     */
    customerId: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    requestId: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    requesterName: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof PrequalificationReportAck
     */
    createdDate: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    title: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    consumerId: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof PrequalificationReportAck
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
     * @memberof PrequalificationReportAck
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
     * @memberof PrequalificationReportAck
     */
    status: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof PrequalificationReportAck
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof PrequalificationReportAck
     */
    portfolioId: string;
    /**
     *
     * @type {PrequalificationReportConstraintsOut}
     * @memberof PrequalificationReportAck
     */
    constraints: PrequalificationReportConstraintsOut;
}
/**
 * Check if a given object implements the PrequalificationReportAck interface.
 */
export declare function instanceOfPrequalificationReportAck(value: object): boolean;
export declare function PrequalificationReportAckFromJSON(json: any): PrequalificationReportAck;
export declare function PrequalificationReportAckFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrequalificationReportAck;
export declare function PrequalificationReportAckToJSON(value?: PrequalificationReportAck | null): any;