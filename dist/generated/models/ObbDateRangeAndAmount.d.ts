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
 * @interface ObbDateRangeAndAmount
 */
export interface ObbDateRangeAndAmount {
    /**
     * Metric value for the given period
     * @type {number}
     * @memberof ObbDateRangeAndAmount
     */
    amount?: number;
    /**
     * Period represented by this metric
     * @type {string}
     * @memberof ObbDateRangeAndAmount
     */
    period: string;
    /**
     * Begin date of the period being reported
     * @type {string}
     * @memberof ObbDateRangeAndAmount
     */
    periodBeginDate: string;
    /**
     * End date of the period being reported
     * @type {string}
     * @memberof ObbDateRangeAndAmount
     */
    periodEndDate: string;
}
/**
 * Check if a given object implements the ObbDateRangeAndAmount interface.
 */
export declare function instanceOfObbDateRangeAndAmount(value: object): boolean;
export declare function ObbDateRangeAndAmountFromJSON(json: any): ObbDateRangeAndAmount;
export declare function ObbDateRangeAndAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbDateRangeAndAmount;
export declare function ObbDateRangeAndAmountToJSON(value?: ObbDateRangeAndAmount | null): any;
