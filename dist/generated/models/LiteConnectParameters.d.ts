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
 * @interface LiteConnectParameters
 */
export interface LiteConnectParameters {
    /**
     * By default, the Connect application is in English. You don't need to pass this parameter unless
     * you want to translate Connect into one of our supported languages.
     *
     * * Spanish (United States): `es`
     * * French (Canada): `fr`
     *
     * @type {string}
     * @memberof LiteConnectParameters
     */
    language?: string;
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof LiteConnectParameters
     */
    partnerId: string;
    /**
     * A customer ID. See Add Customer API for how to create a customer ID.
     * @type {string}
     * @memberof LiteConnectParameters
     */
    customerId: string;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof LiteConnectParameters
     */
    institutionId: number;
    /**
     * The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).
     * @type {string}
     * @memberof LiteConnectParameters
     */
    redirectUri?: string;
    /**
     * The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.
     * @type {string}
     * @memberof LiteConnectParameters
     */
    webhook?: string;
    /**
     * The content type the webhook events will be sent in. Supported types: "application/json" and "application/xml".
     * @type {string}
     * @memberof LiteConnectParameters
     */
    webhookContentType?: string;
    /**
     * Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).
     * @type {object}
     * @memberof LiteConnectParameters
     */
    webhookData?: object;
    /**
     * Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).
     * @type {object}
     * @memberof LiteConnectParameters
     */
    webhookHeaders?: object;
    /**
     * The `experience` field allows you to customize:
     * * Brand: color and logo
     * * Icon: displayed on the "Share your data" page
     * * Popular institutions: displayed on the Bank Search page
     * * Report: the credit decisioning report to send when Connect completes.
     * * MVS modules: financial, payroll, paystub
     *
     * Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they'll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).
     *
     * Experience values options:
     * * "default": your default experience (must be defined)
     * * GUID: the code for a different experience
     * * Not defined: If you don't pass the experience parameter, then Connect's out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.
     * @type {string}
     * @memberof LiteConnectParameters
     */
    experience?: string;
    /**
     * "true": The URL link expires after a Connect session successfully completes.
     *
     * Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.
     * @type {boolean}
     * @memberof LiteConnectParameters
     */
    singleUseUrl?: boolean;
    /**
     * "true": Indicates that the Connect Session will be displayed within a WebView.
     * Note: when the `isWebView` parameter is `true` the `redirectUri` parameter is required.
     * @type {boolean}
     * @memberof LiteConnectParameters
     */
    isWebView?: boolean;
}
/**
 * Check if a given object implements the LiteConnectParameters interface.
 */
export declare function instanceOfLiteConnectParameters(value: object): boolean;
export declare function LiteConnectParametersFromJSON(json: any): LiteConnectParameters;
export declare function LiteConnectParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteConnectParameters;
export declare function LiteConnectParametersToJSON(value?: LiteConnectParameters | null): any;
