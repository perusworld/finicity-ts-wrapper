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
import type { AnnualIncome } from './AnnualIncome';
import type { DirectPayStatements } from './DirectPayStatements';
import type { MonthlyIncome } from './MonthlyIncome';
/**
 *
 * @export
 * @interface PayrollVOIEIncomeRecord
 */
export interface PayrollVOIEIncomeRecord {
    /**
     * The current pay frequency or or how often a regular pay check is:
     *
     * * `Daily`
     *
     * * `Weekly`
     *
     * * `Bi-Weekly`
     *
     * * `Semi-Monthly`
     *
     * * `Monthly`
     *
     * * `Quarterly`
     *
     * * `Semi-Annual`
     *
     * * `Annual`
     *
     * * `Every 2.6 wks`
     *
     * * `Every 4 wks`
     *
     * * `Every 5.2 wks`
     *
     * * `Other`
     *
     * @type {string}
     * @memberof PayrollVOIEIncomeRecord
     */
    payFrequency?: string;
    /**
     * The current pay type:
     *
     * * `Salary`
     *
     * * `Hourly`
     *
     * * `Daily`
     *
     * @type {string}
     * @memberof PayrollVOIEIncomeRecord
     */
    payType?: string;
    /**
     * The current base or regular pay rate. Please use in conjunction with the `basePayRateUnit` field.
     * @type {number}
     * @memberof PayrollVOIEIncomeRecord
     */
    basePayRate?: number;
    /**
     * Unit for the base pay rate:
     *
     * * `Hourly`
     *
     * * `Daily`
     *
     * * `Weekly`
     *
     * * `Bi-Weekly`
     *
     * * `Semi-Monthly`
     *
     * * `Monthly`
     *
     * * `Quarterly`
     *
     * * `Semi-Annual`
     *
     * * `Annual`
     *
     * * `Every 2.6 wks`
     *
     * * `Every 5.2 wks`
     *
     * * `Other`
     *
     * @type {string}
     * @memberof PayrollVOIEIncomeRecord
     */
    basePayRateUnit?: string;
    /**
     * The date of the oldest direct pay statement available from the payroll source, as measured by the oldest `payDate` from all the pay statements delivered.
     * @type {string}
     * @memberof PayrollVOIEIncomeRecord
     */
    oldestPayStatementAvailable?: string;
    /**
     * The annual pay for the current year, through prior year 2 (as available)
     *
     * This is a mandatory field only for VOIE-payroll report type.
     * @type {Array<AnnualIncome>}
     * @memberof PayrollVOIEIncomeRecord
     */
    annualIncome?: Array<AnnualIncome>;
    /**
     *
     * @type {MonthlyIncome}
     * @memberof PayrollVOIEIncomeRecord
     */
    monthlyIncome?: MonthlyIncome;
    /**
     * An array of payment histories for each available paycheck
     * @type {Array<DirectPayStatements>}
     * @memberof PayrollVOIEIncomeRecord
     */
    directPayStatements?: Array<DirectPayStatements>;
}
/**
 * Check if a given object implements the PayrollVOIEIncomeRecord interface.
 */
export declare function instanceOfPayrollVOIEIncomeRecord(value: object): boolean;
export declare function PayrollVOIEIncomeRecordFromJSON(json: any): PayrollVOIEIncomeRecord;
export declare function PayrollVOIEIncomeRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollVOIEIncomeRecord;
export declare function PayrollVOIEIncomeRecordToJSON(value?: PayrollVOIEIncomeRecord | null): any;
