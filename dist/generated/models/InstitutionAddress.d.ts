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
 * The address of a financial institution
 * @export
 * @interface InstitutionAddress
 */
export interface InstitutionAddress {
    /**
     * City
     * @type {string}
     * @memberof InstitutionAddress
     */
    city?: string;
    /**
     * State
     * @type {string}
     * @memberof InstitutionAddress
     */
    state?: string;
    /**
     * Country code is Iso3166-1 Alpha-2 code and Alpha 3 standard (max length 3).
     * @type {string}
     * @memberof InstitutionAddress
     */
    country?: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof InstitutionAddress
     */
    postalCode?: string;
    /**
     * Address line 1
     * @type {string}
     * @memberof InstitutionAddress
     */
    addressLine1?: string;
    /**
     * Address line 2
     * @type {string}
     * @memberof InstitutionAddress
     */
    addressLine2?: string;
}
/**
 * Check if a given object implements the InstitutionAddress interface.
 */
export declare function instanceOfInstitutionAddress(value: object): boolean;
export declare function InstitutionAddressFromJSON(json: any): InstitutionAddress;
export declare function InstitutionAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionAddress;
export declare function InstitutionAddressToJSON(value?: InstitutionAddress | null): any;
