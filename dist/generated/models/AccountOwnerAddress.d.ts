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
 * Account owner address
 * @export
 * @interface AccountOwnerAddress
 */
export interface AccountOwnerAddress {
    /**
     * A street address
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    ownerAddress?: string;
    /**
     * The type of address location:
     * * "Business"
     * * "Home"
     * * "Mailing"
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    type?: string;
    /**
     * Address line 1
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line1?: string;
    /**
     * Address line 2
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line2?: string;
    /**
     * Address line 3
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    line3?: string;
    /**
     * City
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    city?: string;
    /**
     * State
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    state?: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    postalCode?: string;
    /**
     * Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3).
     * @type {string}
     * @memberof AccountOwnerAddress
     */
    country?: string;
}
/**
 * Check if a given object implements the AccountOwnerAddress interface.
 */
export declare function instanceOfAccountOwnerAddress(value: object): boolean;
export declare function AccountOwnerAddressFromJSON(json: any): AccountOwnerAddress;
export declare function AccountOwnerAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwnerAddress;
export declare function AccountOwnerAddressToJSON(value?: AccountOwnerAddress | null): any;
