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
import type { ThirdPartyAccessProduct } from './ThirdPartyAccessProduct';
import type { ThirdPartyAccessProvenance } from './ThirdPartyAccessProvenance';
/**
 * An object representing the third party access key request
 *
 * * `customerId`: This is recipient's customer identifier
 * * `partnerId`: This is recipient partner identifier
 * * `thirdPartyPartnerId`: This is requester's partner identifier
 * * `products`: Array of values representing the Mastercard Open Banking APIs for
 * which access needs to be generated.
 * @export
 * @interface ThirdPartyAccessKeyData
 */
export interface ThirdPartyAccessKeyData {
    /**
     * A customer ID. See Add Customer API for how to create a customer ID.
     * @type {string}
     * @memberof ThirdPartyAccessKeyData
     */
    customerId: string;
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof ThirdPartyAccessKeyData
     */
    partnerId: string;
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof ThirdPartyAccessKeyData
     */
    thirdPartyPartnerId: string;
    /**
     *
     * @type {ThirdPartyAccessProvenance}
     * @memberof ThirdPartyAccessKeyData
     */
    provenance?: ThirdPartyAccessProvenance;
    /**
     *
     * @type {Array<ThirdPartyAccessProduct>}
     * @memberof ThirdPartyAccessKeyData
     */
    products: Array<ThirdPartyAccessProduct>;
}
/**
 * Check if a given object implements the ThirdPartyAccessKeyData interface.
 */
export declare function instanceOfThirdPartyAccessKeyData(value: object): boolean;
export declare function ThirdPartyAccessKeyDataFromJSON(json: any): ThirdPartyAccessKeyData;
export declare function ThirdPartyAccessKeyDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThirdPartyAccessKeyData;
export declare function ThirdPartyAccessKeyDataToJSON(value?: ThirdPartyAccessKeyData | null): any;