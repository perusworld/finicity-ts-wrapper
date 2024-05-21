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
import type { PayrollEmployeeAddress } from './PayrollEmployeeAddress';
/**
 *
 * @export
 * @interface PayrollEmployeeRecord
 */
export interface PayrollEmployeeRecord {
    /**
     * Full name of the employee: first, middle (if stated), and last name
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    name: string;
    /**
     * First name of employee
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    givenName: string;
    /**
     * Middle name of employee, if stated
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    middleName?: string;
    /**
     * Last name of employee
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    familyName: string;
    /**
     * Array of addresses
     * @type {Array<PayrollEmployeeAddress>}
     * @memberof PayrollEmployeeRecord
     */
    address?: Array<PayrollEmployeeAddress>;
}
/**
 * Check if a given object implements the PayrollEmployeeRecord interface.
 */
export declare function instanceOfPayrollEmployeeRecord(value: object): boolean;
export declare function PayrollEmployeeRecordFromJSON(json: any): PayrollEmployeeRecord;
export declare function PayrollEmployeeRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollEmployeeRecord;
export declare function PayrollEmployeeRecordToJSON(value?: PayrollEmployeeRecord | null): any;