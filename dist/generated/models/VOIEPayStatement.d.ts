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
import type { Deduction } from './Deduction';
import type { DirectDeposit } from './DirectDeposit';
import type { Employee } from './Employee';
import type { Employer } from './Employer';
import type { PayStat } from './PayStat';
/**
 *
 * @export
 * @interface VOIEPayStatement
 */
export interface VOIEPayStatement {
    /**
     * The pay period of the pay statement
     * @type {string}
     * @memberof VOIEPayStatement
     */
    payPeriod?: string;
    /**
     * Designates whether the pay statement is billable
     * @type {boolean}
     * @memberof VOIEPayStatement
     */
    billable?: boolean;
    /**
     * The asset ID of the stored pay statement
     * @type {string}
     * @memberof VOIEPayStatement
     */
    assetId?: string;
    /**
     * The listed pay date for the pay statement
     * @type {number}
     * @memberof VOIEPayStatement
     */
    payDate?: number;
    /**
     * The beginning of the pay period
     * @type {number}
     * @memberof VOIEPayStatement
     */
    startDate?: number;
    /**
     * The end of the pay period
     * @type {number}
     * @memberof VOIEPayStatement
     */
    endDate?: number;
    /**
     * The total pay after deductions for the employee for the current pay period
     * @type {number}
     * @memberof VOIEPayStatement
     */
    netPayCurrent?: number;
    /**
     * The total accumulation of pay after deductions for the employee for the current pay year
     * @type {number}
     * @memberof VOIEPayStatement
     */
    netPayYTD?: number;
    /**
     * The total pay before deductions for the employee for the current pay period
     * @type {number}
     * @memberof VOIEPayStatement
     */
    grossPayCurrent?: number;
    /**
     * The total accumulation of pay before deductions for the employee for the current pay year
     * @type {number}
     * @memberof VOIEPayStatement
     */
    grossPayYTD?: number;
    /**
     * The company that provides the pay stub.
     * @type {string}
     * @memberof VOIEPayStatement
     */
    payrollProvider?: string;
    /**
     *
     * @type {Employer}
     * @memberof VOIEPayStatement
     */
    employer?: Employer;
    /**
     *
     * @type {Employee}
     * @memberof VOIEPayStatement
     */
    employee?: Employee;
    /**
     * Information pertaining to the earnings on the pay statement
     * @type {Array<PayStat>}
     * @memberof VOIEPayStatement
     */
    payStat?: Array<PayStat>;
    /**
     * Information pertaining to deductions on the pay statement
     * @type {Array<Deduction>}
     * @memberof VOIEPayStatement
     */
    deductions?: Array<Deduction>;
    /**
     * Information pertaining to direct deposits on the pay statement
     * @type {Array<DirectDeposit>}
     * @memberof VOIEPayStatement
     */
    directDeposits?: Array<DirectDeposit>;
}
/**
 * Check if a given object implements the VOIEPayStatement interface.
 */
export declare function instanceOfVOIEPayStatement(value: object): boolean;
export declare function VOIEPayStatementFromJSON(json: any): VOIEPayStatement;
export declare function VOIEPayStatementFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIEPayStatement;
export declare function VOIEPayStatementToJSON(value?: VOIEPayStatement | null): any;
