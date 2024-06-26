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
import type { AppStatus } from './AppStatus';
/**
 * The response for the Get App Registration Status API which returns an array of status objects
 * @export
 * @interface AppStatuses
 */
export interface AppStatuses {
    /**
     * The total number of results
     * @type {number}
     * @memberof AppStatuses
     */
    totalRecords: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof AppStatuses
     */
    totalPages: number;
    /**
     * The current page number
     * @type {number}
     * @memberof AppStatuses
     */
    pageNumber: number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof AppStatuses
     */
    numberOfRecordsPerPage: number;
    /**
     * A list of applications with their statuses
     * @type {Array<AppStatus>}
     * @memberof AppStatuses
     */
    applications: Array<AppStatus>;
}
/**
 * Check if a given object implements the AppStatuses interface.
 */
export declare function instanceOfAppStatuses(value: object): boolean;
export declare function AppStatusesFromJSON(json: any): AppStatuses;
export declare function AppStatusesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStatuses;
export declare function AppStatusesToJSON(value?: AppStatuses | null): any;
