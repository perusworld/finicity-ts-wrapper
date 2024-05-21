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
import type { LoanPaymentDetailsAccount } from './LoanPaymentDetailsAccount';
/**
 * Loan payment details for a customer account
 * @export
 * @interface LoanPaymentDetails
 */
export interface LoanPaymentDetails {
    /**
     * The number of the specific loan under the account.
     * @type {string}
     * @memberof LoanPaymentDetails
     */
    loanNumber: string;
    /**
     * The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number.
     * @type {string}
     * @memberof LoanPaymentDetails
     */
    loanPaymentNumber: string;
    /**
     * The payment address to send manual payments to
     * @type {string}
     * @memberof LoanPaymentDetails
     */
    loanPaymentAddress: string;
    /**
     *
     * @type {LoanPaymentDetailsAccount}
     * @memberof LoanPaymentDetails
     */
    accountDetail?: LoanPaymentDetailsAccount;
}
/**
 * Check if a given object implements the LoanPaymentDetails interface.
 */
export declare function instanceOfLoanPaymentDetails(value: object): boolean;
export declare function LoanPaymentDetailsFromJSON(json: any): LoanPaymentDetails;
export declare function LoanPaymentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPaymentDetails;
export declare function LoanPaymentDetailsToJSON(value?: LoanPaymentDetails | null): any;