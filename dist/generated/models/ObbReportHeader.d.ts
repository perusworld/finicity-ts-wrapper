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
/**
 * Details about the business the report is generated for and metadata about the report
 * @export
 * @interface ObbReportHeader
 */
export interface ObbReportHeader {
    /**
     * Business address line 1
     * @type {string}
     * @memberof ObbReportHeader
     */
    businessAddress?: string;
    /**
     * Business address city
     * @type {string}
     * @memberof ObbReportHeader
     */
    businessCity?: string;
    /**
     * Name of the business
     * @type {string}
     * @memberof ObbReportHeader
     */
    businessName?: string;
    /**
     * Business address state
     * @type {string}
     * @memberof ObbReportHeader
     */
    businessState?: string;
    /**
     * Business address zip
     * @type {string}
     * @memberof ObbReportHeader
     */
    businessZip?: string;
    /**
     * Partner-provided reference number
     * @type {string}
     * @memberof ObbReportHeader
     */
    referenceNumber?: string;
    /**
     * Date the report was requested
     * @type {string}
     * @memberof ObbReportHeader
     */
    reportDate: string;
    /**
     * Generated unique report ID
     * @type {string}
     * @memberof ObbReportHeader
     */
    reportId: string;
}
/**
 * Check if a given object implements the ObbReportHeader interface.
 */
export declare function instanceOfObbReportHeader(value: object): boolean;
export declare function ObbReportHeaderFromJSON(json: any): ObbReportHeader;
export declare function ObbReportHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbReportHeader;
export declare function ObbReportHeaderToJSON(value?: ObbReportHeader | null): any;
