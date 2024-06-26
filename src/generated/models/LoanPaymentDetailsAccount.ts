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
import type { LoanPaymentDetailsGroup } from './LoanPaymentDetailsGroup';
import {
    LoanPaymentDetailsGroupFromJSON,
    LoanPaymentDetailsGroupFromJSONTyped,
    LoanPaymentDetailsGroupToJSON,
} from './LoanPaymentDetailsGroup';
import type { LoanPaymentDetailsLoan } from './LoanPaymentDetailsLoan';
import {
    LoanPaymentDetailsLoanFromJSON,
    LoanPaymentDetailsLoanFromJSONTyped,
    LoanPaymentDetailsLoanToJSON,
} from './LoanPaymentDetailsLoan';

/**
 * 
 * @export
 * @interface LoanPaymentDetailsAccount
 */
export interface LoanPaymentDetailsAccount {
    /**
     * An account ID
     * @type {string}
     * @memberof LoanPaymentDetailsAccount
     */
    accountId: string;
    /**
     * Institution's ID of the Student Loan Account
     * @type {string}
     * @memberof LoanPaymentDetailsAccount
     */
    accountNumber: string;
    /**
     * The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number.
     * @type {string}
     * @memberof LoanPaymentDetailsAccount
     */
    accountPaymentNumber: string;
    /**
     * The payment address to which send manual payments should be sent
     * @type {string}
     * @memberof LoanPaymentDetailsAccount
     */
    accountPaymentAddress: string;
    /**
     * The payoff amount for the account
     * @type {number}
     * @memberof LoanPaymentDetailsAccount
     */
    accountFuturePayoffAmount?: number;
    /**
     * The date to which the "Future Payoff Amount" applies
     * @type {Date}
     * @memberof LoanPaymentDetailsAccount
     */
    accountFuturePayoffDate?: Date;
    /**
     * Group details
     * @type {Array<LoanPaymentDetailsGroup>}
     * @memberof LoanPaymentDetailsAccount
     */
    groupDetail?: Array<LoanPaymentDetailsGroup>;
    /**
     * Loan details
     * @type {Array<LoanPaymentDetailsLoan>}
     * @memberof LoanPaymentDetailsAccount
     */
    loanDetail?: Array<LoanPaymentDetailsLoan>;
}

/**
 * Check if a given object implements the LoanPaymentDetailsAccount interface.
 */
export function instanceOfLoanPaymentDetailsAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "accountNumber" in value;
    isInstance = isInstance && "accountPaymentNumber" in value;
    isInstance = isInstance && "accountPaymentAddress" in value;

    return isInstance;
}

export function LoanPaymentDetailsAccountFromJSON(json: any): LoanPaymentDetailsAccount {
    return LoanPaymentDetailsAccountFromJSONTyped(json, false);
}

export function LoanPaymentDetailsAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPaymentDetailsAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['accountId'],
        'accountNumber': json['accountNumber'],
        'accountPaymentNumber': json['accountPaymentNumber'],
        'accountPaymentAddress': json['accountPaymentAddress'],
        'accountFuturePayoffAmount': !exists(json, 'accountFuturePayoffAmount') ? undefined : json['accountFuturePayoffAmount'],
        'accountFuturePayoffDate': !exists(json, 'accountFuturePayoffDate') ? undefined : (new Date(json['accountFuturePayoffDate'])),
        'groupDetail': !exists(json, 'groupDetail') ? undefined : ((json['groupDetail'] as Array<any>).map(LoanPaymentDetailsGroupFromJSON)),
        'loanDetail': !exists(json, 'loanDetail') ? undefined : ((json['loanDetail'] as Array<any>).map(LoanPaymentDetailsLoanFromJSON)),
    };
}

export function LoanPaymentDetailsAccountToJSON(value?: LoanPaymentDetailsAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'accountNumber': value.accountNumber,
        'accountPaymentNumber': value.accountPaymentNumber,
        'accountPaymentAddress': value.accountPaymentAddress,
        'accountFuturePayoffAmount': value.accountFuturePayoffAmount,
        'accountFuturePayoffDate': value.accountFuturePayoffDate === undefined ? undefined : (value.accountFuturePayoffDate.toISOString()),
        'groupDetail': value.groupDetail === undefined ? undefined : ((value.groupDetail as Array<any>).map(LoanPaymentDetailsGroupToJSON)),
        'loanDetail': value.loanDetail === undefined ? undefined : ((value.loanDetail as Array<any>).map(LoanPaymentDetailsLoanToJSON)),
    };
}

