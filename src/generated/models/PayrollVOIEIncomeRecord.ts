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
import type { AnnualIncome } from './AnnualIncome';
import {
    AnnualIncomeFromJSON,
    AnnualIncomeFromJSONTyped,
    AnnualIncomeToJSON,
} from './AnnualIncome';
import type { DirectPayStatements } from './DirectPayStatements';
import {
    DirectPayStatementsFromJSON,
    DirectPayStatementsFromJSONTyped,
    DirectPayStatementsToJSON,
} from './DirectPayStatements';
import type { MonthlyIncome } from './MonthlyIncome';
import {
    MonthlyIncomeFromJSON,
    MonthlyIncomeFromJSONTyped,
    MonthlyIncomeToJSON,
} from './MonthlyIncome';

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
export function instanceOfPayrollVOIEIncomeRecord(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PayrollVOIEIncomeRecordFromJSON(json: any): PayrollVOIEIncomeRecord {
    return PayrollVOIEIncomeRecordFromJSONTyped(json, false);
}

export function PayrollVOIEIncomeRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollVOIEIncomeRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payFrequency': !exists(json, 'payFrequency') ? undefined : json['payFrequency'],
        'payType': !exists(json, 'payType') ? undefined : json['payType'],
        'basePayRate': !exists(json, 'basePayRate') ? undefined : json['basePayRate'],
        'basePayRateUnit': !exists(json, 'basePayRateUnit') ? undefined : json['basePayRateUnit'],
        'oldestPayStatementAvailable': !exists(json, 'oldestPayStatementAvailable') ? undefined : json['oldestPayStatementAvailable'],
        'annualIncome': !exists(json, 'annualIncome') ? undefined : ((json['annualIncome'] as Array<any>).map(AnnualIncomeFromJSON)),
        'monthlyIncome': !exists(json, 'monthlyIncome') ? undefined : MonthlyIncomeFromJSON(json['monthlyIncome']),
        'directPayStatements': !exists(json, 'directPayStatements') ? undefined : ((json['directPayStatements'] as Array<any>).map(DirectPayStatementsFromJSON)),
    };
}

export function PayrollVOIEIncomeRecordToJSON(value?: PayrollVOIEIncomeRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payFrequency': value.payFrequency,
        'payType': value.payType,
        'basePayRate': value.basePayRate,
        'basePayRateUnit': value.basePayRateUnit,
        'oldestPayStatementAvailable': value.oldestPayStatementAvailable,
        'annualIncome': value.annualIncome === undefined ? undefined : ((value.annualIncome as Array<any>).map(AnnualIncomeToJSON)),
        'monthlyIncome': MonthlyIncomeToJSON(value.monthlyIncome),
        'directPayStatements': value.directPayStatements === undefined ? undefined : ((value.directPayStatements as Array<any>).map(DirectPayStatementsToJSON)),
    };
}

