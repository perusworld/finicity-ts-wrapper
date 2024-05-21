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
import type { AccountOwnerDetails } from './AccountOwnerDetails';
/**
 *
 * @export
 * @interface AccountOwnerHolders
 */
export interface AccountOwnerHolders {
    /**
     * List of account owners
     * @type {Array<AccountOwnerDetails>}
     * @memberof AccountOwnerHolders
     */
    holders: Array<AccountOwnerDetails>;
}
/**
 * Check if a given object implements the AccountOwnerHolders interface.
 */
export declare function instanceOfAccountOwnerHolders(value: object): boolean;
export declare function AccountOwnerHoldersFromJSON(json: any): AccountOwnerHolders;
export declare function AccountOwnerHoldersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwnerHolders;
export declare function AccountOwnerHoldersToJSON(value?: AccountOwnerHolders | null): any;