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
 * Details of the financial institution this account is home to
 * @export
 * @interface ObbInstitution
 */
export interface ObbInstitution {
    /**
     * URL of the institution logo icon for reporting
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionIconUrl?: string;
    /**
     * ID of the financial institution
     * @type {number}
     * @memberof ObbInstitution
     */
    institutionId: number;
    /**
     * Name of the financial institution
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionName?: string;
    /**
     * Primary branding color of the institution, in hex color format
     * @type {string}
     * @memberof ObbInstitution
     */
    institutionPrimaryColor?: string;
}
/**
 * Check if a given object implements the ObbInstitution interface.
 */
export declare function instanceOfObbInstitution(value: object): boolean;
export declare function ObbInstitutionFromJSON(json: any): ObbInstitution;
export declare function ObbInstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObbInstitution;
export declare function ObbInstitutionToJSON(value?: ObbInstitution | null): any;
