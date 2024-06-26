/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { LoanPaymentDetailsAccount } from './LoanPaymentDetailsAccount';
import {
    LoanPaymentDetailsAccountFromJSON,
    LoanPaymentDetailsAccountFromJSONTyped,
    LoanPaymentDetailsAccountToJSON,
} from './LoanPaymentDetailsAccount';

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
export function instanceOfLoanPaymentDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "loanNumber" in value;
    isInstance = isInstance && "loanPaymentNumber" in value;
    isInstance = isInstance && "loanPaymentAddress" in value;

    return isInstance;
}

export function LoanPaymentDetailsFromJSON(json: any): LoanPaymentDetails {
    return LoanPaymentDetailsFromJSONTyped(json, false);
}

export function LoanPaymentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPaymentDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loanNumber': json['loanNumber'],
        'loanPaymentNumber': json['loanPaymentNumber'],
        'loanPaymentAddress': json['loanPaymentAddress'],
        'accountDetail': !exists(json, 'accountDetail') ? undefined : LoanPaymentDetailsAccountFromJSON(json['accountDetail']),
    };
}

export function LoanPaymentDetailsToJSON(value?: LoanPaymentDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loanNumber': value.loanNumber,
        'loanPaymentNumber': value.loanPaymentNumber,
        'loanPaymentAddress': value.loanPaymentAddress,
        'accountDetail': LoanPaymentDetailsAccountToJSON(value.accountDetail),
    };
}

