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
export declare function instanceOfReportAccountPosition(value: object): boolean;
export declare function ReportAccountPositionFromJSON(json: any): ReportAccountPosition;
export declare function ReportAccountPositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportAccountPosition;
export declare function ReportAccountPositionToJSON(value?: ReportAccountPosition | null): any;
