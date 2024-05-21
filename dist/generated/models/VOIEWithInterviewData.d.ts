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
import type { TxVerifyInterview } from './TxVerifyInterview';
/**
 *
 * @export
 * @interface VOIEWithInterviewData
 */
export interface VOIEWithInterviewData {
    /**
     * An array of `TxVerifyInterview` objects
     * @type {Array<TxVerifyInterview>}
     * @memberof VOIEWithInterviewData
     */
    txVerifyInterview: Array<TxVerifyInterview>;
    /**
     * Field to indicate whether to extract the earnings on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractEarnings?: boolean;
    /**
     * Field to indicate whether to extract the deductions on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractDeductions?: boolean;
    /**
     * Field to indicate whether to extract the direct deposits on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    extractDirectDeposit?: boolean;
}
/**
 * Check if a given object implements the VOIEWithInterviewData interface.
 */
export declare function instanceOfVOIEWithInterviewData(value: object): boolean;
export declare function VOIEWithInterviewDataFromJSON(json: any): VOIEWithInterviewData;
export declare function VOIEWithInterviewDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEWithInterviewData;
export declare function VOIEWithInterviewDataToJSON(value?: VOIEWithInterviewData | null): any;