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
 * @interface PayrollData
 */
export interface PayrollData {
    /**
     * The consumer's full SSN without hyphens
     * @type {string}
     * @memberof PayrollData
     */
    ssn: string;
    /**
     * The consumer's date of birth in Unix epoch time (in seconds). See: Handling Epoch Dates and Times. The timestamp should be set at the start of day of birth.
     * @type {number}
     * @memberof PayrollData
     */
    dob: number;
    /**
     * The report ID of the original payroll report for refresh use cases. If used, only the employment records from the original report will be included in the refreshed report response.
     * @type {string}
     * @memberof PayrollData
     */
    reportId?: string;
}
/**
 * Check if a given object implements the PayrollData interface.
 */
export declare function instanceOfPayrollData(value: object): boolean;
export declare function PayrollDataFromJSON(json: any): PayrollData;
export declare function PayrollDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollData;
export declare function PayrollDataToJSON(value?: PayrollData | null): any;
