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
import type { ObbDateRangeAndAmount } from './ObbDateRangeAndAmount';
import {
    ObbDateRangeAndAmountFromJSON,
    ObbDateRangeAndAmountFromJSONTyped,
    ObbDateRangeAndAmountToJSON,
} from './ObbDateRangeAndAmount';
import type { ObbDateRangeAndCount } from './ObbDateRangeAndCount';
import {
    ObbDateRangeAndCountFromJSON,
    ObbDateRangeAndCountFromJSONTyped,
    ObbDateRangeAndCountToJSON,
} from './ObbDateRangeAndCount';

/**
 * Inflow Attributes
 * @export
 * @interface CashFlowInflowAttributes
 */
export interface CashFlowInflowAttributes {
    /**
     * Average value of deposits during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    averageDepositByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Count of all deposits during periods in the report
     * @type {Array<ObbDateRangeAndCount>}
     * @memberof CashFlowInflowAttributes
     */
    countDepositsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndCount>;
    /**
     * Count of ALL deposits over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowInflowAttributes
     */
    historicCountOfDepositTransactions: number;
    /**
     * Sum of ALL deposits over entire known history of the account (may exceed requested length of report)
     * @type {number}
     * @memberof CashFlowInflowAttributes
     */
    historicSumOfDeposits?: number;
    /**
     * Maximum deposit value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    maximumDepositByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Minimum deposit value for different periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    minimumDepositByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
    /**
     * Sum of all deposits during periods in the report
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof CashFlowInflowAttributes
     */
    sumDepositsByMonthForTheReportTimePeriod: Array<ObbDateRangeAndAmount>;
}

/**
 * Check if a given object implements the CashFlowInflowAttributes interface.
 */
export function instanceOfCashFlowInflowAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "countDepositsByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "historicCountOfDepositTransactions" in value;
    isInstance = isInstance && "maximumDepositByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "minimumDepositByMonthForTheReportTimePeriod" in value;
    isInstance = isInstance && "sumDepositsByMonthForTheReportTimePeriod" in value;

    return isInstance;
}

export function CashFlowInflowAttributesFromJSON(json: any): CashFlowInflowAttributes {
    return CashFlowInflowAttributesFromJSONTyped(json, false);
}

export function CashFlowInflowAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowInflowAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageDepositByMonthForTheReportTimePeriod': !exists(json, 'averageDepositByMonthForTheReportTimePeriod') ? undefined : ((json['averageDepositByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndAmountFromJSON)),
        'countDepositsByMonthForTheReportTimePeriod': ((json['countDepositsByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndCountFromJSON)),
        'historicCountOfDepositTransactions': json['historicCountOfDepositTransactions'],
        'historicSumOfDeposits': !exists(json, 'historicSumOfDeposits') ? undefined : json['historicSumOfDeposits'],
        'maximumDepositByMonthForTheReportTimePeriod': ((json['maximumDepositByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndAmountFromJSON)),
        'minimumDepositByMonthForTheReportTimePeriod': ((json['minimumDepositByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndAmountFromJSON)),
        'sumDepositsByMonthForTheReportTimePeriod': ((json['sumDepositsByMonthForTheReportTimePeriod'] as Array<any>).map(ObbDateRangeAndAmountFromJSON)),
    };
}

export function CashFlowInflowAttributesToJSON(value?: CashFlowInflowAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageDepositByMonthForTheReportTimePeriod': value.averageDepositByMonthForTheReportTimePeriod === undefined ? undefined : ((value.averageDepositByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndAmountToJSON)),
        'countDepositsByMonthForTheReportTimePeriod': ((value.countDepositsByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndCountToJSON)),
        'historicCountOfDepositTransactions': value.historicCountOfDepositTransactions,
        'historicSumOfDeposits': value.historicSumOfDeposits,
        'maximumDepositByMonthForTheReportTimePeriod': ((value.maximumDepositByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndAmountToJSON)),
        'minimumDepositByMonthForTheReportTimePeriod': ((value.minimumDepositByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndAmountToJSON)),
        'sumDepositsByMonthForTheReportTimePeriod': ((value.sumDepositsByMonthForTheReportTimePeriod as Array<any>).map(ObbDateRangeAndAmountToJSON)),
    };
}

