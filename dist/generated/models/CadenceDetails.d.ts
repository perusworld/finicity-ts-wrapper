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
 * @interface CadenceDetails
 */
export interface CadenceDetails {
    /**
     * `postedDate` of the first deposit transaction
     * @type {number}
     * @memberof CadenceDetails
     */
    startDate?: number;
    /**
     * `postedDate` of the final deposit transaction (omitted if status is active)
     * @type {number}
     * @memberof CadenceDetails
     */
    stopDate?: number;
    /**
     * Number of days between the recurring deposits
     * @type {number}
     * @memberof CadenceDetails
     */
    days?: number;
}
/**
 * Check if a given object implements the CadenceDetails interface.
 */
export declare function instanceOfCadenceDetails(value: object): boolean;
export declare function CadenceDetailsFromJSON(json: any): CadenceDetails;
export declare function CadenceDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CadenceDetails;
export declare function CadenceDetailsToJSON(value?: CadenceDetails | null): any;