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
import type { Branding } from './Branding';
import {
    BrandingFromJSON,
    BrandingFromJSONTyped,
    BrandingToJSON,
} from './Branding';
import type { InstitutionAddress } from './InstitutionAddress';
import {
    InstitutionAddressFromJSON,
    InstitutionAddressFromJSONTyped,
    InstitutionAddressToJSON,
} from './InstitutionAddress';

/**
 * A financial institution
 * @export
 * @interface Institution
 */
export interface Institution {
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    id: number;
    /**
     * The name of the institution
     * @type {string}
     * @memberof Institution
     */
    name?: string;
    /**
     * "true": The institution is certified for the Transaction Aggregation product
     * "false": The institution is decertified for the Transaction Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    transAgg: boolean;
    /**
     * "true": The institution is certified for the ACH product
     * "false": The institution is decertified for the ACH product
     * @type {boolean}
     * @memberof Institution
     */
    ach: boolean;
    /**
     * "true": The institution is certified for the Statement Aggregation product
     * "false": The institution is decertified for the Statement Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    stateAgg: boolean;
    /**
     * "true": The institution is certified for the VOI product
     * "false": The institution is decertified for the VOI product
     * @type {boolean}
     * @memberof Institution
     */
    voi: boolean;
    /**
     * "true": The institution is certified for the VOA product
     * "false": The institution is decertified for the VOA product
     * @type {boolean}
     * @memberof Institution
     */
    voa: boolean;
    /**
     * "true": The institution is certified for the Account History Aggregation product
     * "false": The institution is decertified for the Account History Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    aha: boolean;
    /**
     * "true": The institution is certified for the Account Balance Check (ABC) product
     * "false": The institution is decertified for the Account Balance Check (ABC) product
     * @type {boolean}
     * @memberof Institution
     */
    availBalance: boolean;
    /**
     * "true": The institution is certified for the Account Owner product
     * "false": The institution is decertified for the Account Owner product
     * @type {boolean}
     * @memberof Institution
     */
    accountOwner: boolean;
    /**
     * "true": The institution is certified for the Student Loan Data product
     * 
     * "false": The institution is decertified for the Student Loan Data product
     * @type {boolean}
     * @memberof Institution
     */
    studentLoanData?: boolean;
    /**
     * "true": The institution is certified for the Loan Payment Detail product
     * 
     * "false": The institution is decertified for the Loan Payment Detail product
     * @type {boolean}
     * @memberof Institution
     */
    loanPaymentDetails?: boolean;
    /**
     * Values: Banking, Investments, Credit Cards/Accounts, Workplace Retirement, Mortgages and Loans, Insurance
     * @type {string}
     * @memberof Institution
     */
    accountTypeDescription?: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof Institution
     */
    phone?: string;
    /**
     * The URL of the institution's primary home page
     * @type {string}
     * @memberof Institution
     */
    urlHomeApp?: string;
    /**
     * The URL of the institution's login page
     * @type {string}
     * @memberof Institution
     */
    urlLogonApp?: string;
    /**
     * "true": The institution is an OAuth connection
     * 
     * "false": The institution isn't an OAuth connection
     * @type {boolean}
     * @memberof Institution
     */
    oauthEnabled: boolean;
    /**
     * Institution's forgot password page
     * @type {string}
     * @memberof Institution
     */
    urlForgotPassword?: string;
    /**
     * Institution's signup page
     * @type {string}
     * @memberof Institution
     */
    urlOnlineRegistration?: string;
    /**
     * Institution's class
     * @type {string}
     * @memberof Institution
     */
    _class?: string;
    /**
     * Special instructions given to customers for login
     * @type {string}
     * @memberof Institution
     */
    specialText?: string;
    /**
     * The time zone of the institution.
     * @type {string}
     * @memberof Institution
     */
    timeZone?: string;
    /**
     * Instructions given to the customer before they are sent to the institution website to login for OAuth institutions.
     * 
     * Note: this helps the customer to provide the proper permission for data needed for the application.
     * @type {Array<string>}
     * @memberof Institution
     */
    specialInstructions?: Array<string>;
    /**
     * The title of the special instructions, if one exists or is required.
     * @type {string}
     * @memberof Institution
     */
    specialInstutionsTitle?: string;
    /**
     * 
     * @type {InstitutionAddress}
     * @memberof Institution
     */
    address?: InstitutionAddress;
    /**
     * A currency code
     * @type {string}
     * @memberof Institution
     */
    currency: string;
    /**
     * An email address
     * @type {string}
     * @memberof Institution
     */
    email?: string;
    /**
     * Status for the institution: "online", "offline", "maintenance", "testing"
     * @type {string}
     * @memberof Institution
     */
    status: string;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    newInstitutionId?: number;
    /**
     * 
     * @type {Branding}
     * @memberof Institution
     */
    branding?: Branding;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    oauthInstitutionId?: number;
}

/**
 * Check if a given object implements the Institution interface.
 */
export function instanceOfInstitution(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "transAgg" in value;
    isInstance = isInstance && "ach" in value;
    isInstance = isInstance && "stateAgg" in value;
    isInstance = isInstance && "voi" in value;
    isInstance = isInstance && "voa" in value;
    isInstance = isInstance && "aha" in value;
    isInstance = isInstance && "availBalance" in value;
    isInstance = isInstance && "accountOwner" in value;
    isInstance = isInstance && "oauthEnabled" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function InstitutionFromJSON(json: any): Institution {
    return InstitutionFromJSONTyped(json, false);
}

export function InstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Institution {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'transAgg': json['transAgg'],
        'ach': json['ach'],
        'stateAgg': json['stateAgg'],
        'voi': json['voi'],
        'voa': json['voa'],
        'aha': json['aha'],
        'availBalance': json['availBalance'],
        'accountOwner': json['accountOwner'],
        'studentLoanData': !exists(json, 'studentLoanData') ? undefined : json['studentLoanData'],
        'loanPaymentDetails': !exists(json, 'loanPaymentDetails') ? undefined : json['loanPaymentDetails'],
        'accountTypeDescription': !exists(json, 'accountTypeDescription') ? undefined : json['accountTypeDescription'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'urlHomeApp': !exists(json, 'urlHomeApp') ? undefined : json['urlHomeApp'],
        'urlLogonApp': !exists(json, 'urlLogonApp') ? undefined : json['urlLogonApp'],
        'oauthEnabled': json['oauthEnabled'],
        'urlForgotPassword': !exists(json, 'urlForgotPassword') ? undefined : json['urlForgotPassword'],
        'urlOnlineRegistration': !exists(json, 'urlOnlineRegistration') ? undefined : json['urlOnlineRegistration'],
        '_class': !exists(json, 'class') ? undefined : json['class'],
        'specialText': !exists(json, 'specialText') ? undefined : json['specialText'],
        'timeZone': !exists(json, 'timeZone') ? undefined : json['timeZone'],
        'specialInstructions': !exists(json, 'specialInstructions') ? undefined : json['specialInstructions'],
        'specialInstutionsTitle': !exists(json, 'specialInstutionsTitle') ? undefined : json['specialInstutionsTitle'],
        'address': !exists(json, 'address') ? undefined : InstitutionAddressFromJSON(json['address']),
        'currency': json['currency'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'status': json['status'],
        'newInstitutionId': !exists(json, 'newInstitutionId') ? undefined : json['newInstitutionId'],
        'branding': !exists(json, 'branding') ? undefined : BrandingFromJSON(json['branding']),
        'oauthInstitutionId': !exists(json, 'oauthInstitutionId') ? undefined : json['oauthInstitutionId'],
    };
}

export function InstitutionToJSON(value?: Institution | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'transAgg': value.transAgg,
        'ach': value.ach,
        'stateAgg': value.stateAgg,
        'voi': value.voi,
        'voa': value.voa,
        'aha': value.aha,
        'availBalance': value.availBalance,
        'accountOwner': value.accountOwner,
        'studentLoanData': value.studentLoanData,
        'loanPaymentDetails': value.loanPaymentDetails,
        'accountTypeDescription': value.accountTypeDescription,
        'phone': value.phone,
        'urlHomeApp': value.urlHomeApp,
        'urlLogonApp': value.urlLogonApp,
        'oauthEnabled': value.oauthEnabled,
        'urlForgotPassword': value.urlForgotPassword,
        'urlOnlineRegistration': value.urlOnlineRegistration,
        'class': value._class,
        'specialText': value.specialText,
        'timeZone': value.timeZone,
        'specialInstructions': value.specialInstructions,
        'specialInstutionsTitle': value.specialInstutionsTitle,
        'address': InstitutionAddressToJSON(value.address),
        'currency': value.currency,
        'email': value.email,
        'status': value.status,
        'newInstitutionId': value.newInstitutionId,
        'branding': BrandingToJSON(value.branding),
        'oauthInstitutionId': value.oauthInstitutionId,
    };
}

