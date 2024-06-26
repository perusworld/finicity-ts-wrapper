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
 *
 * @export
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     * An error code (can be returned as a number or a string). Useful links: [Common API Status Codes](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/#common-api-status-codes), [Aggregation Status Codes](https://developer.mastercard.com/open-banking-us/documentation/products/manage/account-aggregation/#aggregation-status-codes).
     * @type {object}
     * @memberof ErrorMessage
     */
    code: object;
    /**
     * A status code
     * @type {string}
     * @memberof ErrorMessage
     */
    status?: string;
    /**
     * A title for the error
     * @type {string}
     * @memberof ErrorMessage
     */
    title?: string;
    /**
     * An error level
     * @type {string}
     * @memberof ErrorMessage
     */
    level?: string;
    /**
     * An error message
     * @type {string}
     * @memberof ErrorMessage
     */
    message?: string;
    /**
     * Some more details about the error
     * @type {string}
     * @memberof ErrorMessage
     */
    userMessage?: string;
    /**
     * An asset ID. Generated by Connect or by using the Store Customer Pay Statement API.
     * @type {string}
     * @memberof ErrorMessage
     */
    assetId?: string;
    /**
     * An account ID
     * @type {string}
     * @memberof ErrorMessage
     */
    accountId?: string;
}
/**
 * Check if a given object implements the ErrorMessage interface.
 */
export declare function instanceOfErrorMessage(value: object): boolean;
export declare function ErrorMessageFromJSON(json: any): ErrorMessage;
export declare function ErrorMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorMessage;
export declare function ErrorMessageToJSON(value?: ErrorMessage | null): any;
