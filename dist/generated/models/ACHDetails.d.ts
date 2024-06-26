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
 * The routing and account number information to initiate ACH transfers
 * @export
 * @interface ACHDetails
 */
export interface ACHDetails {
    /**
     * The routing number of the financial institution for specific customer account
     * @type {string}
     * @memberof ACHDetails
     */
    routingNumber: string;
    /**
     * The account number for initiating ACH transfers for this account
     * @type {string}
     * @memberof ACHDetails
     */
    realAccountNumber: string;
}
/**
 * Check if a given object implements the ACHDetails interface.
 */
export declare function instanceOfACHDetails(value: object): boolean;
export declare function ACHDetailsFromJSON(json: any): ACHDetails;
export declare function ACHDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ACHDetails;
export declare function ACHDetailsToJSON(value?: ACHDetails | null): any;
