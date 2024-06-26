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
 * Represent an update to customer fields
 * @export
 * @interface CustomerUpdate
 */
export interface CustomerUpdate {
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof CustomerUpdate
     */
    firstName?: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof CustomerUpdate
     */
    lastName?: string;
}
/**
 * Check if a given object implements the CustomerUpdate interface.
 */
export declare function instanceOfCustomerUpdate(value: object): boolean;
export declare function CustomerUpdateFromJSON(json: any): CustomerUpdate;
export declare function CustomerUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerUpdate;
export declare function CustomerUpdateToJSON(value?: CustomerUpdate | null): any;
