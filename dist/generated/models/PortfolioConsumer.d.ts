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
 *
 * @export
 * @interface PortfolioConsumer
 */
export interface PortfolioConsumer {
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof PortfolioConsumer
     */
    id: string;
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof PortfolioConsumer
     */
    firstName: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof PortfolioConsumer
     */
    lastName: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof PortfolioConsumer
     */
    customerId: number;
    /**
     * A full SSN with or without hyphens
     * @type {string}
     * @memberof PortfolioConsumer
     */
    ssn: string;
    /**
     *
     * @type {Birthday}
     * @memberof PortfolioConsumer
     */
    birthday: Birthday;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof PortfolioConsumer
     */
    suffix?: string;
}
/**
 * Check if a given object implements the PortfolioConsumer interface.
 */
export declare function instanceOfPortfolioConsumer(value: object): boolean;
export declare function PortfolioConsumerFromJSON(json: any): PortfolioConsumer;
export declare function PortfolioConsumerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortfolioConsumer;
export declare function PortfolioConsumerToJSON(value?: PortfolioConsumer | null): any;
