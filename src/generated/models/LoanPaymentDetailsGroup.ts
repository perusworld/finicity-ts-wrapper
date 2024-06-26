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
import type { LoanPaymentDetailsLoan } from './LoanPaymentDetailsLoan';
import {
    LoanPaymentDetailsLoanFromJSON,
    LoanPaymentDetailsLoanFromJSONTyped,
    LoanPaymentDetailsLoanToJSON,
} from './LoanPaymentDetailsLoan';

/**
 * Group details
 * @export
 * @interface LoanPaymentDetailsGroup
 */
export interface LoanPaymentDetailsGroup {
    /**
     * An account ID
     * @type {string}
     * @memberof LoanPaymentDetailsGroup
     */
    accountId: string;
    /**
     * Institution's ID of the Student Loan Group
     * @type {string}
     * @memberof LoanPaymentDetailsGroup
     */
    groupNumber: string;
    /**
     * The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number.
     * @type {string}
     * @memberof LoanPaymentDetailsGroup
     */
    groupPaymentNumber: string;
    /**
     * The payment address to which send manual payments should be sent
     * @type {string}
     * @memberof LoanPaymentDetailsGroup
     */
    groupPaymentAddress: string;
    /**
     * The payoff amount for the group
     * @type {number}
     * @memberof LoanPaymentDetailsGroup
     */
    groupFuturePayoffAmount?: number;
    /**
     * The date to which the "Future Payoff Amount" applies
     * @type {Date}
     * @memberof LoanPaymentDetailsGroup
     */
    groupFuturePayoffDate?: Date;
    /**
     * 
     * @type {Array<LoanPaymentDetailsLoan>}
     * @memberof LoanPaymentDetailsGroup
     */
    groupLoanDetail: Array<LoanPaymentDetailsLoan>;
}

/**
 * Check if a given object implements the LoanPaymentDetailsGroup interface.
 */
export function instanceOfLoanPaymentDetailsGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "groupNumber" in value;
    isInstance = isInstance && "groupPaymentNumber" in value;
    isInstance = isInstance && "groupPaymentAddress" in value;
    isInstance = isInstance && "groupLoanDetail" in value;

    return isInstance;
}

export function LoanPaymentDetailsGroupFromJSON(json: any): LoanPaymentDetailsGroup {
    return LoanPaymentDetailsGroupFromJSONTyped(json, false);
}

export function LoanPaymentDetailsGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanPaymentDetailsGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['accountId'],
        'groupNumber': json['groupNumber'],
        'groupPaymentNumber': json['groupPaymentNumber'],
        'groupPaymentAddress': json['groupPaymentAddress'],
        'groupFuturePayoffAmount': !exists(json, 'groupFuturePayoffAmount') ? undefined : json['groupFuturePayoffAmount'],
        'groupFuturePayoffDate': !exists(json, 'groupFuturePayoffDate') ? undefined : (new Date(json['groupFuturePayoffDate'])),
        'groupLoanDetail': ((json['groupLoanDetail'] as Array<any>).map(LoanPaymentDetailsLoanFromJSON)),
    };
}

export function LoanPaymentDetailsGroupToJSON(value?: LoanPaymentDetailsGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountId': value.accountId,
        'groupNumber': value.groupNumber,
        'groupPaymentNumber': value.groupPaymentNumber,
        'groupPaymentAddress': value.groupPaymentAddress,
        'groupFuturePayoffAmount': value.groupFuturePayoffAmount,
        'groupFuturePayoffDate': value.groupFuturePayoffDate === undefined ? undefined : (value.groupFuturePayoffDate.toISOString()),
        'groupLoanDetail': ((value.groupLoanDetail as Array<any>).map(LoanPaymentDetailsLoanToJSON)),
    };
}

