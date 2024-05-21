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
 * @interface ObbDailyBalance
 */
export interface ObbDailyBalance {
    /**
     * Date of balance information
     * @type {string}
     * @memberof ObbDailyBalance
     */
    date: string;
    /**
     * Day of the week for which balance information available
     * @type {string}
     * @memberof ObbDailyBalance
     */
    dayOfWeek: string;
    /**
     * End of day balance
     * @type {number}
     * @memberof ObbDailyBalance
     */
    endingBalance: number;
}
/**
 * Check if a given object implements the ObbDailyBalance interface.
 */
export declare function instanceOfObbDailyBalance(value: object): boolean;
export declare function ObbDailyBalanceFromJSON(json: any): ObbDailyBalance;
export declare function ObbDailyBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbDailyBalance;
export declare function ObbDailyBalanceToJSON(value?: ObbDailyBalance | null): any;
