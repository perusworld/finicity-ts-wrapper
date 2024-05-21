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
 * @interface AccountDetailsTxBased
 */
export interface AccountDetailsTxBased {
    /**
     * Only available for investment accounts. Net interest earned after deducting interest paid out.
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    interestMarginBalance?: number;
    /**
     * Only available for investment accounts. Amount available for cash withdrawal.
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    availableCashBalance?: number;
    /**
     * Only available for investment accounts. Vested amount in account.
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    vestedBalance?: number;
    /**
     * Only available for investment accounts. Current loan balance.
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    currentLoanBalance?: number;
    /**
     * The available balance for the account
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    availableBalanceAmount?: number;
    /**
     * Net interest earned after deducting interest paid out
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    marginBalance?: number;
    /**
     * Current balance
     * @type {number}
     * @memberof AccountDetailsTxBased
     */
    currentBalance?: number;
}
/**
 * Check if a given object implements the AccountDetailsTxBased interface.
 */
export declare function instanceOfAccountDetailsTxBased(value: object): boolean;
export declare function AccountDetailsTxBasedFromJSON(json: any): AccountDetailsTxBased;
export declare function AccountDetailsTxBasedFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountDetailsTxBased;
export declare function AccountDetailsTxBasedToJSON(value?: AccountDetailsTxBased | null): any;
