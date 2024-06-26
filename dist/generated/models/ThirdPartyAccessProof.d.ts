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
 * An object representing a digital signature of the access key
 * @export
 * @interface ThirdPartyAccessProof
 */
export interface ThirdPartyAccessProof {
    /**
     * The digital signature for the "receipt" portion of the access key
     * @type {string}
     * @memberof ThirdPartyAccessProof
     */
    signature?: string;
    /**
     * The Finicity key identifier is used to sign the access key
     * @type {string}
     * @memberof ThirdPartyAccessProof
     */
    keyId?: string;
    /**
     * A date-time with time zone
     * @type {Date}
     * @memberof ThirdPartyAccessProof
     */
    timestamp?: Date;
}
/**
 * Check if a given object implements the ThirdPartyAccessProof interface.
 */
export declare function instanceOfThirdPartyAccessProof(value: object): boolean;
export declare function ThirdPartyAccessProofFromJSON(json: any): ThirdPartyAccessProof;
export declare function ThirdPartyAccessProofFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThirdPartyAccessProof;
export declare function ThirdPartyAccessProofToJSON(value?: ThirdPartyAccessProof | null): any;
