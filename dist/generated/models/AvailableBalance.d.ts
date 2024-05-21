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
 * @interface AvailableBalance
 */
export interface AvailableBalance {
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof AvailableBalance
     */
    id: number;
    /**
     * The last 4 digits of the ACH account number
     * @type {string}
     * @memberof AvailableBalance
     */
    realAccountNumberLast4: string;
    /**
     * The available balance of the account
     * @type {number}
     * @memberof AvailableBalance
     */
    availableBalance: number;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AvailableBalance
     */
    availableBalanceDate: number;
    /**
     * The cleared balance of the account. Also referred as posted balance, current balance, ledger balance
     * @type {number}
     * @memberof AvailableBalance
     */
    clearedBalance: number;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AvailableBalance
     */
    clearedBalanceDate: number;
    /**
     * The status of the most recent aggregation attempt (see [Aggregation Status Codes](https://developer.mastercard.com/open-banking-us/documentation/products/manage/account-aggregation/#aggregation-status-codes)). Won't be present until you have run your first aggregation for the account.
     * @type {number}
     * @memberof AvailableBalance
     */
    aggregationStatusCode?: number;
    /**
     * A currency code
     * @type {string}
     * @memberof AvailableBalance
     */
    currency: string;
}
/**
 * Check if a given object implements the AvailableBalance interface.
 */
export declare function instanceOfAvailableBalance(value: object): boolean;
export declare function AvailableBalanceFromJSON(json: any): AvailableBalance;
export declare function AvailableBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableBalance;
export declare function AvailableBalanceToJSON(value?: AvailableBalance | null): any;