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
import type { Birthday } from './Birthday';
/**
 * A new consumer to be created
 * @export
 * @interface NewConsumer
 */
export interface NewConsumer {
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof NewConsumer
     */
    firstName: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof NewConsumer
     */
    lastName: string;
    /**
     * A street address
     * @type {string}
     * @memberof NewConsumer
     */
    address: string;
    /**
     * City
     * @type {string}
     * @memberof NewConsumer
     */
    city: string;
    /**
     * State
     * @type {string}
     * @memberof NewConsumer
     */
    state: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof NewConsumer
     */
    zip: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof NewConsumer
     */
    phone: string;
    /**
     * A full SSN with or without hyphens
     * @type {string}
     * @memberof NewConsumer
     */
    ssn: string;
    /**
     *
     * @type {Birthday}
     * @memberof NewConsumer
     */
    birthday: Birthday;
    /**
     * An email address
     * @type {string}
     * @memberof NewConsumer
     */
    email?: string;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof NewConsumer
     */
    suffix?: string;
}
/**
 * Check if a given object implements the NewConsumer interface.
 */
export declare function instanceOfNewConsumer(value: object): boolean;
export declare function NewConsumerFromJSON(json: any): NewConsumer;
export declare function NewConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewConsumer;
export declare function NewConsumerToJSON(value?: NewConsumer | null): any;