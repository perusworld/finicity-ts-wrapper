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
 * @interface Receiver
 */
export interface Receiver {
    /**
     * Routing number of receiving bank
     * @type {string}
     * @memberof Receiver
     */
    routingNumber: string;
    /**
     * Micro entries receiving account number of bank
     * @type {string}
     * @memberof Receiver
     */
    accountNumber: string;
    /**
     * The list of supported account types.
     * * "checking": Standard checking
     * * "savings": Standard savings
     * @type {string}
     * @memberof Receiver
     */
    accountType: string;
    /**
     * Name of the customer
     * @type {string}
     * @memberof Receiver
     */
    name: string;
    /**
     * Transaction memo to be displayed for transactions
     * @type {string}
     * @memberof Receiver
     */
    memo?: string;
}
/**
 * Check if a given object implements the Receiver interface.
 */
export declare function instanceOfReceiver(value: object): boolean;
export declare function ReceiverFromJSON(json: any): Receiver;
export declare function ReceiverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Receiver;
export declare function ReceiverToJSON(value?: Receiver | null): any;
