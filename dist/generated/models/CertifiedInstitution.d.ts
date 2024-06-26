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
import type { ChildInstitution } from './ChildInstitution';
/**
 *
 * @export
 * @interface CertifiedInstitution
 */
export interface CertifiedInstitution {
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof CertifiedInstitution
     */
    id: number;
    /**
     * The RSSD ID is a unique identifier assigned to financial institutions by the Federal Reserve. While the length of the RSSD ID varies by institution, it cannot exceed 10 numerical digits.
     * @type {number}
     * @memberof CertifiedInstitution
     */
    rssd?: number;
    /**
     * The name of the institution
     * @type {string}
     * @memberof CertifiedInstitution
     */
    name: string;
    /**
     * "true": The institution is certified for the Transaction Aggregation product
     * "false": The institution is decertified for the Transaction Aggregation product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    transAgg: boolean;
    /**
     * "true": The institution is certified for the ACH product
     * "false": The institution is decertified for the ACH product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    ach: boolean;
    /**
     * "true": The institution is certified for the Statement Aggregation product
     * "false": The institution is decertified for the Statement Aggregation product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    stateAgg: boolean;
    /**
     * "true": The institution is certified for the VOI product
     * "false": The institution is decertified for the VOI product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    voi: boolean;
    /**
     * "true": The institution is certified for the VOA product
     * "false": The institution is decertified for the VOA product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    voa: boolean;
    /**
     * "true": The institution is certified for the Account History Aggregation product
     * "false": The institution is decertified for the Account History Aggregation product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    aha: boolean;
    /**
     * "true": The institution is certified for the Account Balance Check (ABC) product
     * "false": The institution is decertified for the Account Balance Check (ABC) product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    availBalance: boolean;
    /**
     * "true": The institution is certified for the Account Owner product
     * "false": The institution is decertified for the Account Owner product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    accountOwner: boolean;
    /**
     * "true": The institution is certified for the Student Loan Data product
     *
     * "false": The institution is decertified for the Student Loan Data product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    studentLoanData: boolean;
    /**
     * "true": The institution is certified for the Loan Payment Detail product
     *
     * "false": The institution is decertified for the Loan Payment Detail product
     * @type {boolean}
     * @memberof CertifiedInstitution
     */
    loanPaymentDetails: boolean;
    /**
     * An array of child financial institutions
     * @type {Array<ChildInstitution>}
     * @memberof CertifiedInstitution
     */
    childInstitutions?: Array<ChildInstitution>;
}
/**
 * Check if a given object implements the CertifiedInstitution interface.
 */
export declare function instanceOfCertifiedInstitution(value: object): boolean;
export declare function CertifiedInstitutionFromJSON(json: any): CertifiedInstitution;
export declare function CertifiedInstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertifiedInstitution;
export declare function CertifiedInstitutionToJSON(value?: CertifiedInstitution | null): any;
