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
 * Loan details
 * @export
 * @interface LoanPaymentDetailsLoan
 */
export interface LoanPaymentDetailsLoan {
    /**
     * An account ID
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    accountId: string;
    /**
     * Institution's ID of the Student Loan
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    loanNumber: string;
    /**
     * The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number.
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    loanPaymentNumber: string;
    /**
     * The payment address to which send manual payments should be sent
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    loanPaymentAddress: string;
    /**
     * The payoff amount for the loan
     * @type {number}
     * @memberof LoanPaymentDetailsLoan
     */
    loanFuturePayoffAmount?: number;
    /**
     * The date to which the "Future Payoff Amount" applies
     * @type {Date}
     * @memberof LoanPaymentDetailsLoan
     */
    loanFuturePayoffDate?: Date;
}
/**
 * Check if a given object implements the LoanPaymentDetailsLoan interface.
 */
export declare function instanceOfLoanPaymentDetailsLoan(value: object): boolean;
export declare function LoanPaymentDetailsLoanFromJSON(json: any): LoanPaymentDetailsLoan;
export declare function LoanPaymentDetailsLoanFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPaymentDetailsLoan;
export declare function LoanPaymentDetailsLoanToJSON(value?: LoanPaymentDetailsLoan | null): any;
