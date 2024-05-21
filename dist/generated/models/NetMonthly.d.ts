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
 * @interface NetMonthly
 */
export interface NetMonthly {
    /**
     * Timestamp for the first day of this month
     * @type {number}
     * @memberof NetMonthly
     */
    month: number;
    /**
     * Total income during the given month, across all income streams
     * @type {number}
     * @memberof NetMonthly
     */
    net: number;
}
/**
 * Check if a given object implements the NetMonthly interface.
 */
export declare function instanceOfNetMonthly(value: object): boolean;
export declare function NetMonthlyFromJSON(json: any): NetMonthly;
export declare function NetMonthlyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetMonthly;
export declare function NetMonthlyToJSON(value?: NetMonthly | null): any;
