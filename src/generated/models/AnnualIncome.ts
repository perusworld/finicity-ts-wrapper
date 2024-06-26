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
/**
 * 
 * @export
 * @interface AnnualIncome
 */
export interface AnnualIncome {
    /**
     * The year for the amounts given in YTD totals for an employer
     * @type {string}
     * @memberof AnnualIncome
     */
    year: string;
    /**
     * Year to date (YTD) gross pay amount for the indicated year
     * @type {number}
     * @memberof AnnualIncome
     */
    grossPayAmountYTD: number;
    /**
     * Year to date (YTD) net pay amount for the indicated year
     * @type {number}
     * @memberof AnnualIncome
     */
    netPayAmountYTD?: number;
    /**
     * Year to date (YTD) base pay amount for the year indicated
     * @type {number}
     * @memberof AnnualIncome
     */
    basePayAmountYTD?: number;
    /**
     * Year to date (YTD) overtime pay amount for the year indicated
     * @type {number}
     * @memberof AnnualIncome
     */
    overtimePayAmountYTD?: number;
    /**
     * Year to date (YTD) other pay amount for the indicated year. Other pay is pay that is not categorized into one of the other categories.
     * @type {number}
     * @memberof AnnualIncome
     */
    otherPayAmountYTD?: number;
    /**
     * Year to date (YTD) commission pay amount for the indicated year
     * @type {number}
     * @memberof AnnualIncome
     */
    commissionPayAmount?: number;
}

/**
 * Check if a given object implements the AnnualIncome interface.
 */
export function instanceOfAnnualIncome(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "year" in value;
    isInstance = isInstance && "grossPayAmountYTD" in value;

    return isInstance;
}

export function AnnualIncomeFromJSON(json: any): AnnualIncome {
    return AnnualIncomeFromJSONTyped(json, false);
}

export function AnnualIncomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnualIncome {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': json['year'],
        'grossPayAmountYTD': json['grossPayAmountYTD'],
        'netPayAmountYTD': !exists(json, 'netPayAmountYTD') ? undefined : json['netPayAmountYTD'],
        'basePayAmountYTD': !exists(json, 'basePayAmountYTD') ? undefined : json['basePayAmountYTD'],
        'overtimePayAmountYTD': !exists(json, 'overtimePayAmountYTD') ? undefined : json['overtimePayAmountYTD'],
        'otherPayAmountYTD': !exists(json, 'otherPayAmountYTD') ? undefined : json['otherPayAmountYTD'],
        'commissionPayAmount': !exists(json, 'commissionPayAmount') ? undefined : json['commissionPayAmount'],
    };
}

export function AnnualIncomeToJSON(value?: AnnualIncome | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': value.year,
        'grossPayAmountYTD': value.grossPayAmountYTD,
        'netPayAmountYTD': value.netPayAmountYTD,
        'basePayAmountYTD': value.basePayAmountYTD,
        'overtimePayAmountYTD': value.overtimePayAmountYTD,
        'otherPayAmountYTD': value.otherPayAmountYTD,
        'commissionPayAmount': value.commissionPayAmount,
    };
}

