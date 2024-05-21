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
/**
 * A new customer to be enrolled
 * @export
 * @interface NewCustomer
 */
export interface NewCustomer {
    /**
     * The customer's username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ - + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. Ã­, Ã¼, etc.). Usernames are unique. A username used in Test Drive can't be reused in other plans.
     * @type {string}
     * @memberof NewCustomer
     */
    username: string;
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof NewCustomer
     */
    firstName?: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof NewCustomer
     */
    lastName?: string;
    /**
     * `applicationId` value returned from the Get App Registration Status API and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved.
     * @type {string}
     * @memberof NewCustomer
     */
    applicationId?: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof NewCustomer
     */
    phone?: string;
    /**
     * An email address
     * @type {string}
     * @memberof NewCustomer
     */
    email?: string;
}

/**
 * Check if a given object implements the NewCustomer interface.
 */
export function instanceOfNewCustomer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function NewCustomerFromJSON(json: any): NewCustomer {
    return NewCustomerFromJSONTyped(json, false);
}

export function NewCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'applicationId': !exists(json, 'applicationId') ? undefined : json['applicationId'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function NewCustomerToJSON(value?: NewCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'applicationId': value.applicationId,
        'phone': value.phone,
        'email': value.email,
    };
}

