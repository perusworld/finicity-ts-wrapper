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
import type { Borrower } from './Borrower';
import {
    BorrowerFromJSON,
    BorrowerFromJSONTyped,
    BorrowerToJSON,
} from './Borrower';
import type { EmailOptions } from './EmailOptions';
import {
    EmailOptionsFromJSON,
    EmailOptionsFromJSONTyped,
    EmailOptionsToJSON,
} from './EmailOptions';
import type { ReportCustomField } from './ReportCustomField';
import {
    ReportCustomFieldFromJSON,
    ReportCustomFieldFromJSONTyped,
    ReportCustomFieldToJSON,
} from './ReportCustomField';

/**
 * 
 * @export
 * @interface ConnectJointBorrowerEmailParameters
 */
export interface ConnectJointBorrowerEmailParameters {
    /**
     * By default, the Connect application is in English. You don't need to pass this parameter unless
     * you want to translate Connect into one of our supported languages.
     * 
     * * Spanish (United States): `es`
     * * French (Canada): `fr`
     * 
     * @type {string}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    language?: string;
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    partnerId: string;
    /**
     * (MVS) Array of borrowers to pass the primary and joint borrower's customer and consumer IDs
     * @type {Array<Borrower>}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    borrowers: Array<Borrower>;
    /**
     * The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).
     * @type {string}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    redirectUri?: string;
    /**
     * The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.
     * @type {string}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    webhook?: string;
    /**
     * The content type the webhook events will be sent in. Supported types: "application/json" and "application/xml".
     * @type {string}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    webhookContentType?: string;
    /**
     * Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).
     * @type {object}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    webhookData?: object;
    /**
     * Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).
     * @type {object}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    webhookHeaders?: object;
    /**
     * Advanced options for configuration of which institutions to display in. See [Institution Settings](https://developer.mastercard.com/open-banking-us/documentation/connect/connect-institutions-settings/).
     * @type {object}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    institutionSettings?: object;
    /**
     * 
     * @type {EmailOptions}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    email: EmailOptions;
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
     * @memberof ConnectJointBorrowerEmailParameters
     */
    experience: string;
    /**
     * The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it's greater than 10 digits, then the `fromDate` is set to the credit decisioning report's default `fromDate`.
     * 
     * For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.
     * 
     * However, Connect doesn't pass this parameter to the following reports:
     * * Pay Statement Extraction Report 
     * * VOIE - Paystub (with TXVerify) Report 
     * * Statement Report 
     * * Verification of Income Report 
     * * VOIE - Payroll Report 
     * 
     * Note: this field isn't used if you're only collecting transaction data without a report.
     * @type {number}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    fromDate?: number;
    /**
     * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.
     * 
     * Designate up to 5 custom fields that you'd like associated with the report when it's generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is "true" or "false".
     * * "true": (default) display the custom field in the PDF report
     * * "false": don't display the custom field in the PDF report
     * 
     * For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.
     * 
     * All custom fields display in the Reseller Billing API.
     * @type {Array<ReportCustomField>}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    reportCustomFields?: Array<ReportCustomField>;
    /**
     * "true": The URL link expires after a Connect session successfully completes.
     * 
     * Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.
     * @type {boolean}
     * @memberof ConnectJointBorrowerEmailParameters
     */
    singleUseUrl?: boolean;
}

/**
 * Check if a given object implements the ConnectJointBorrowerEmailParameters interface.
 */
export function instanceOfConnectJointBorrowerEmailParameters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "partnerId" in value;
    isInstance = isInstance && "borrowers" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "experience" in value;

    return isInstance;
}

export function ConnectJointBorrowerEmailParametersFromJSON(json: any): ConnectJointBorrowerEmailParameters {
    return ConnectJointBorrowerEmailParametersFromJSONTyped(json, false);
}

export function ConnectJointBorrowerEmailParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectJointBorrowerEmailParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': !exists(json, 'language') ? undefined : json['language'],
        'partnerId': json['partnerId'],
        'borrowers': ((json['borrowers'] as Array<any>).map(BorrowerFromJSON)),
        'redirectUri': !exists(json, 'redirectUri') ? undefined : json['redirectUri'],
        'webhook': !exists(json, 'webhook') ? undefined : json['webhook'],
        'webhookContentType': !exists(json, 'webhookContentType') ? undefined : json['webhookContentType'],
        'webhookData': !exists(json, 'webhookData') ? undefined : json['webhookData'],
        'webhookHeaders': !exists(json, 'webhookHeaders') ? undefined : json['webhookHeaders'],
        'institutionSettings': !exists(json, 'institutionSettings') ? undefined : json['institutionSettings'],
        'email': EmailOptionsFromJSON(json['email']),
        'experience': json['experience'],
        'fromDate': !exists(json, 'fromDate') ? undefined : json['fromDate'],
        'reportCustomFields': !exists(json, 'reportCustomFields') ? undefined : ((json['reportCustomFields'] as Array<any>).map(ReportCustomFieldFromJSON)),
        'singleUseUrl': !exists(json, 'singleUseUrl') ? undefined : json['singleUseUrl'],
    };
}

export function ConnectJointBorrowerEmailParametersToJSON(value?: ConnectJointBorrowerEmailParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
        'partnerId': value.partnerId,
        'borrowers': ((value.borrowers as Array<any>).map(BorrowerToJSON)),
        'redirectUri': value.redirectUri,
        'webhook': value.webhook,
        'webhookContentType': value.webhookContentType,
        'webhookData': value.webhookData,
        'webhookHeaders': value.webhookHeaders,
        'institutionSettings': value.institutionSettings,
        'email': EmailOptionsToJSON(value.email),
        'experience': value.experience,
        'fromDate': value.fromDate,
        'reportCustomFields': value.reportCustomFields === undefined ? undefined : ((value.reportCustomFields as Array<any>).map(ReportCustomFieldToJSON)),
        'singleUseUrl': value.singleUseUrl,
    };
}
