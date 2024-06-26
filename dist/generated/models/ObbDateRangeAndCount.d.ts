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
 * @interface ObbDateRangeAndCount
 */
export interface ObbDateRangeAndCount {
    /**
     * Count of occurrences for the given period
     * @type {number}
     * @memberof ObbDateRangeAndCount
     */
    count: number;
    /**
     * Period represented by this metric
     * @type {string}
     * @memberof ObbDateRangeAndCount
     */
    period: string;
    /**
     * Begin date of the period being reported
     * @type {string}
     * @memberof ObbDateRangeAndCount
     */
    periodBeginDate: string;
    /**
     * End date of the period being reported
     * @type {string}
     * @memberof ObbDateRangeAndCount
     */
    periodEndDate: string;
}
/**
 * Check if a given object implements the ObbDateRangeAndCount interface.
 */
export declare function instanceOfObbDateRangeAndCount(value: object): boolean;
export declare function ObbDateRangeAndCountFromJSON(json: any): ObbDateRangeAndCount;
export declare function ObbDateRangeAndCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbDateRangeAndCount;
export declare function ObbDateRangeAndCountToJSON(value?: ObbDateRangeAndCount | null): any;
