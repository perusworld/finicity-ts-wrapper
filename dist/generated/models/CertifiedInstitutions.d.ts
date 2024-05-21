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
import type { CertifiedInstitution } from './CertifiedInstitution';
/**
 * A list of financial institutions from the Get Certified Institutions API
 * @export
 * @interface CertifiedInstitutions
 */
export interface CertifiedInstitutions {
    /**
     * The total number of results matching search criteria
     * @type {number}
     * @memberof CertifiedInstitutions
     */
    found: number;
    /**
     * The number of results returned
     * @type {number}
     * @memberof CertifiedInstitutions
     */
    displaying: number;
    /**
     * If the value of `moreAvailable` is "true", you can retrieve the next page of results by increasing the value of the start parameter in your next request:"...&start=6&limit=5"
     * @type {boolean}
     * @memberof CertifiedInstitutions
     */
    moreAvailable: boolean;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CertifiedInstitutions
     */
    requestedDate: number;
    /**
     * A list of institutions
     * @type {Array<CertifiedInstitution>}
     * @memberof CertifiedInstitutions
     */
    institutions: Array<CertifiedInstitution>;
}
/**
 * Check if a given object implements the CertifiedInstitutions interface.
 */
export declare function instanceOfCertifiedInstitutions(value: object): boolean;
export declare function CertifiedInstitutionsFromJSON(json: any): CertifiedInstitutions;
export declare function CertifiedInstitutionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertifiedInstitutions;
export declare function CertifiedInstitutionsToJSON(value?: CertifiedInstitutions | null): any;
