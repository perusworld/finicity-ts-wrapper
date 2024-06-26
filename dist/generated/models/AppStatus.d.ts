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
import type { AppFinancialInstitutionStatus } from './AppFinancialInstitutionStatus';
/**
 * Registration status details for the application
 * @export
 * @interface AppStatus
 */
export interface AppStatus {
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof AppStatus
     */
    partnerId: string;
    /**
     * Identifier to track the application registration from the App Registration and Get App Registration Status APIs
     * @type {string}
     * @memberof AppStatus
     */
    preAppId: string;
    /**
     * A note on the registration. Typically used to indicate reasons for rejected apps.
     * @type {string}
     * @memberof AppStatus
     */
    note?: string;
    /**
     * `applicationId` value returned from the Get App Registration Status API and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved.
     * @type {string}
     * @memberof AppStatus
     */
    applicationId?: string;
    /**
     * The name of the application assigned to the customer
     * @type {string}
     * @memberof AppStatus
     */
    appName: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AppStatus
     */
    submittedDate: number;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AppStatus
     */
    modifiedDate: number;
    /**
     * The status of an app registration request. "A" means approved. "P" means pending which is the status when initially submitted or when the app is modified and awaiting approval. "R" means rejected. If it is rejected there will be a note with the rejected reason.
     * @type {string}
     * @memberof AppStatus
     */
    status: string;
    /**
     * Indicates scopes of data accessible to the app
     * @type {string}
     * @memberof AppStatus
     */
    scopes?: string;
    /**
     * A list of the registration status for each FI for the application
     * @type {Array<AppFinancialInstitutionStatus>}
     * @memberof AppStatus
     */
    institutionDetails?: Array<AppFinancialInstitutionStatus>;
}
/**
 * Check if a given object implements the AppStatus interface.
 */
export declare function instanceOfAppStatus(value: object): boolean;
export declare function AppStatusFromJSON(json: any): AppStatus;
export declare function AppStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStatus;
export declare function AppStatusToJSON(value?: AppStatus | null): any;
