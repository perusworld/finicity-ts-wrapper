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
 * @interface PartnerCredentialsWithNewSecret
 */
export interface PartnerCredentialsWithNewSecret {
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    partnerId: string;
    /**
     * Your Partner Secret displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    partnerSecret: string;
    /**
     * A new value for the Partner Secret
     * @type {string}
     * @memberof PartnerCredentialsWithNewSecret
     */
    newPartnerSecret: string;
}
/**
 * Check if a given object implements the PartnerCredentialsWithNewSecret interface.
 */
export declare function instanceOfPartnerCredentialsWithNewSecret(value: object): boolean;
export declare function PartnerCredentialsWithNewSecretFromJSON(json: any): PartnerCredentialsWithNewSecret;
export declare function PartnerCredentialsWithNewSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCredentialsWithNewSecret;
export declare function PartnerCredentialsWithNewSecretToJSON(value?: PartnerCredentialsWithNewSecret | null): any;
