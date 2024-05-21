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
import type { DirectDeposit } from './DirectDeposit';
import {
    DirectDepositFromJSON,
    DirectDepositFromJSONTyped,
    DirectDepositToJSON,
} from './DirectDeposit';
import type { Employee } from './Employee';
import {
    EmployeeFromJSON,
    EmployeeFromJSONTyped,
    EmployeeToJSON,
} from './Employee';
import type { Employer } from './Employer';
import {
    EmployerFromJSON,
    EmployerFromJSONTyped,
    EmployerToJSON,
} from './Employer';
import type { PayStat } from './PayStat';
import {
    PayStatFromJSON,
    PayStatFromJSONTyped,
    PayStatToJSON,
} from './PayStat';

/**
 * 
 * @export
 * @interface PayStatementForVoie
 */
export interface PayStatementForVoie {
    /**
     * The pay period of the pay statement
     * @type {string}
     * @memberof PayStatementForVoie
     */
    payPeriod?: string;
    /**
     * This will display true if the pay statement is billable. If a pay statement has been digitized previously, this will display as false as it will not be billable.
     * @type {boolean}
     * @memberof PayStatementForVoie
     */
    billable: boolean;
    /**
     * The asset ID of the stored pay statement
     * @type {string}
     * @memberof PayStatementForVoie
     */
    assetId: string;
    /**
     * The listed pay date for the pay statement
     * @type {number}
     * @memberof PayStatementForVoie
     */
    payDate?: number;
    /**
     * The beginning of the pay period
     * @type {number}
     * @memberof PayStatementForVoie
     */
    startDate?: number;
    /**
     * The end of the pay period
     * @type {number}
     * @memberof PayStatementForVoie
     */
    endDate?: number;
    /**
     * The total pay after deductions for the employee for the current pay period
     * @type {number}
     * @memberof PayStatementForVoie
     */
    netPayCurrent?: number;
    /**
     * The total accumulation of pay after deductions for the employee for the current pay year
     * @type {number}
     * @memberof PayStatementForVoie
     */
    netPayYTD?: number;
    /**
     * The total pay before deductions for the employee for the current pay period
     * @type {number}
     * @memberof PayStatementForVoie
     */
    grossPayCurrent?: number;
    /**
     * The total accumulation of pay before deductions for the employee for the current pay year
     * @type {number}
     * @memberof PayStatementForVoie
     */
    grossPayYTD?: number;
    /**
     * The payroll provider extracted from the pay statement
     * @type {string}
     * @memberof PayStatementForVoie
     */
    payrollProvider?: string;
    /**
     * 
     * @type {Employer}
     * @memberof PayStatementForVoie
     */
    employer: Employer;
    /**
     * 
     * @type {Employee}
     * @memberof PayStatementForVoie
     */
    employee: Employee;
    /**
     * Information pertaining to the earnings on the pay statement
     * @type {Array<PayStat>}
     * @memberof PayStatementForVoie
     */
    payStat: Array<PayStat>;
    /**
     * Information pertaining to the direct deposits on the pay statement
     * @type {Array<DirectDeposit>}
     * @memberof PayStatementForVoie
     */
    directDeposits?: Array<DirectDeposit>;
    /**
     * Not populated for the voieWithStatement style of paystub report. For the VOIE - Paystub (with TXVerify) reports this would include details of the financial institution accounts and income streams with matching transactions to the pay statement.
     * @type {Array<string>}
     * @memberof PayStatementForVoie
     */
    institutions: Array<string>;
    /**
     * Error code for the asset
     * @type {number}
     * @memberof PayStatementForVoie
     */
    errorCode?: number;
    /**
     * Error message for the asset
     * @type {string}
     * @memberof PayStatementForVoie
     */
    errorMessage?: string;
}

/**
 * Check if a given object implements the PayStatementForVoie interface.
 */
export function instanceOfPayStatementForVoie(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "billable" in value;
    isInstance = isInstance && "assetId" in value;
    isInstance = isInstance && "employer" in value;
    isInstance = isInstance && "employee" in value;
    isInstance = isInstance && "payStat" in value;
    isInstance = isInstance && "institutions" in value;

    return isInstance;
}

export function PayStatementForVoieFromJSON(json: any): PayStatementForVoie {
    return PayStatementForVoieFromJSONTyped(json, false);
}

export function PayStatementForVoieFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayStatementForVoie {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payPeriod': !exists(json, 'payPeriod') ? undefined : json['payPeriod'],
        'billable': json['billable'],
        'assetId': json['assetId'],
        'payDate': !exists(json, 'payDate') ? undefined : json['payDate'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'netPayCurrent': !exists(json, 'netPayCurrent') ? undefined : json['netPayCurrent'],
        'netPayYTD': !exists(json, 'netPayYTD') ? undefined : json['netPayYTD'],
        'grossPayCurrent': !exists(json, 'grossPayCurrent') ? undefined : json['grossPayCurrent'],
        'grossPayYTD': !exists(json, 'grossPayYTD') ? undefined : json['grossPayYTD'],
        'payrollProvider': !exists(json, 'payrollProvider') ? undefined : json['payrollProvider'],
        'employer': EmployerFromJSON(json['employer']),
        'employee': EmployeeFromJSON(json['employee']),
        'payStat': ((json['payStat'] as Array<any>).map(PayStatFromJSON)),
        'directDeposits': !exists(json, 'directDeposits') ? undefined : ((json['directDeposits'] as Array<any>).map(DirectDepositFromJSON)),
        'institutions': json['institutions'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
    };
}

export function PayStatementForVoieToJSON(value?: PayStatementForVoie | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payPeriod': value.payPeriod,
        'billable': value.billable,
        'assetId': value.assetId,
        'payDate': value.payDate,
        'startDate': value.startDate,
        'endDate': value.endDate,
        'netPayCurrent': value.netPayCurrent,
        'netPayYTD': value.netPayYTD,
        'grossPayCurrent': value.grossPayCurrent,
        'grossPayYTD': value.grossPayYTD,
        'payrollProvider': value.payrollProvider,
        'employer': EmployerToJSON(value.employer),
        'employee': EmployeeToJSON(value.employee),
        'payStat': ((value.payStat as Array<any>).map(PayStatToJSON)),
        'directDeposits': value.directDeposits === undefined ? undefined : ((value.directDeposits as Array<any>).map(DirectDepositToJSON)),
        'institutions': value.institutions,
        'errorCode': value.errorCode,
        'errorMessage': value.errorMessage,
    };
}

