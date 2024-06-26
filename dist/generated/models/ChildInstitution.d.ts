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
 * @interface ChildInstitution
 */
export interface ChildInstitution {
    /**
     * The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits.
     * @type {number}
     * @memberof ChildInstitution
     */
    rssd: number;
    /**
     * The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits.
     * @type {number}
     * @memberof ChildInstitution
     */
    parentRSSD: number;
    /**
     * The name of the institution
     * @type {string}
     * @memberof ChildInstitution
     */
    name: string;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof ChildInstitution
     */
    institutionId: number;
}
/**
 * Check if a given object implements the ChildInstitution interface.
 */
export declare function instanceOfChildInstitution(value: object): boolean;
export declare function ChildInstitutionFromJSON(json: any): ChildInstitution;
export declare function ChildInstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChildInstitution;
export declare function ChildInstitutionToJSON(value?: ChildInstitution | null): any;
