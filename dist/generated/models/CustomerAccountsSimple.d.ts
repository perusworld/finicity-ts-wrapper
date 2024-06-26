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
import type { CustomerAccountSimple } from './CustomerAccountSimple';
/**
 * A list of accounts with basic information of a customer
 * @export
 * @interface CustomerAccountsSimple
 */
export interface CustomerAccountsSimple {
    /**
     * A list of accounts with basic information of a customer
     * @type {Array<CustomerAccountSimple>}
     * @memberof CustomerAccountsSimple
     */
    accounts: Array<CustomerAccountSimple>;
}
/**
 * Check if a given object implements the CustomerAccountsSimple interface.
 */
export declare function instanceOfCustomerAccountsSimple(value: object): boolean;
export declare function CustomerAccountsSimpleFromJSON(json: any): CustomerAccountsSimple;
export declare function CustomerAccountsSimpleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAccountsSimple;
export declare function CustomerAccountsSimpleToJSON(value?: CustomerAccountsSimple | null): any;
