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
import type { AccountDetailsTxBased } from './AccountDetailsTxBased';
import {
    AccountDetailsTxBasedFromJSON,
    AccountDetailsTxBasedFromJSONTyped,
    AccountDetailsTxBasedToJSON,
} from './AccountDetailsTxBased';
import type { ReportAccountPosition } from './ReportAccountPosition';
import {
    ReportAccountPositionFromJSON,
    ReportAccountPositionFromJSONTyped,
    ReportAccountPositionToJSON,
} from './ReportAccountPosition';
import type { ReportTransactionNewTxBased } from './ReportTransactionNewTxBased';
import {
    ReportTransactionNewTxBasedFromJSON,
    ReportTransactionNewTxBasedFromJSONTyped,
    ReportTransactionNewTxBasedToJSON,
} from './ReportTransactionNewTxBased';
import type { VOIETXVerifyReportIncomeStream } from './VOIETXVerifyReportIncomeStream';
import {
    VOIETXVerifyReportIncomeStreamFromJSON,
    VOIETXVerifyReportIncomeStreamFromJSONTyped,
    VOIETXVerifyReportIncomeStreamToJSON,
} from './VOIETXVerifyReportIncomeStream';

/**
 * 
 * @export
 * @interface VOIETXVerifyReportAccount
 */
export interface VOIETXVerifyReportAccount {
    /**
     * The ID of the account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    id: number;
    /**
     * The account number from the institution (all digits except the last four are obfuscated)
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    number: string;
    /**
     * The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    ownerName?: string;
    /**
     * The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    ownerAddress?: string;
    /**
     * The account name from the institution
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    name: string;
    /**
     * One of the values from account types
     * @type {string}
     * @memberof VOIETXVerifyReportAccount
     */
    type: string;
    /**
     * The status of the most recent aggregation attempt
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    aggregationStatusCode: number;
    /**
     * A list of income stream records
     * @type {Array<VOIETXVerifyReportIncomeStream>}
     * @memberof VOIETXVerifyReportAccount
     */
    incomeStreams?: Array<VOIETXVerifyReportIncomeStream>;
    /**
     * The cleared balance of the account as-of `balanceDate`
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    balance?: number;
    /**
     * The average monthly balance of this account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    averageMonthlyBalance?: number;
    /**
     * a list of transaction records
     * @type {Array<ReportTransactionNewTxBased>}
     * @memberof VOIETXVerifyReportAccount
     */
    transactions: Array<ReportTransactionNewTxBased>;
    /**
     * 
     * @type {AccountDetailsTxBased}
     * @memberof VOIETXVerifyReportAccount
     */
    details?: AccountDetailsTxBased;
    /**
     * 
     * @type {ReportAccountPosition}
     * @memberof VOIETXVerifyReportAccount
     */
    position?: ReportAccountPosition;
    /**
     * The available balance for the account
     * @type {number}
     * @memberof VOIETXVerifyReportAccount
     */
    availableBalance?: number;
}

/**
 * Check if a given object implements the VOIETXVerifyReportAccount interface.
 */
export function instanceOfVOIETXVerifyReportAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "number" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aggregationStatusCode" in value;
    isInstance = isInstance && "transactions" in value;

    return isInstance;
}

export function VOIETXVerifyReportAccountFromJSON(json: any): VOIETXVerifyReportAccount {
    return VOIETXVerifyReportAccountFromJSONTyped(json, false);
}

export function VOIETXVerifyReportAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): VOIETXVerifyReportAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'number': json['number'],
        'ownerName': !exists(json, 'ownerName') ? undefined : json['ownerName'],
        'ownerAddress': !exists(json, 'ownerAddress') ? undefined : json['ownerAddress'],
        'name': json['name'],
        'type': json['type'],
        'aggregationStatusCode': json['aggregationStatusCode'],
        'incomeStreams': !exists(json, 'incomeStreams') ? undefined : ((json['incomeStreams'] as Array<any>).map(VOIETXVerifyReportIncomeStreamFromJSON)),
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'averageMonthlyBalance': !exists(json, 'averageMonthlyBalance') ? undefined : json['averageMonthlyBalance'],
        'transactions': ((json['transactions'] as Array<any>).map(ReportTransactionNewTxBasedFromJSON)),
        'details': !exists(json, 'details') ? undefined : AccountDetailsTxBasedFromJSON(json['details']),
        'position': !exists(json, 'position') ? undefined : ReportAccountPositionFromJSON(json['position']),
        'availableBalance': !exists(json, 'availableBalance') ? undefined : json['availableBalance'],
    };
}

export function VOIETXVerifyReportAccountToJSON(value?: VOIETXVerifyReportAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'number': value.number,
        'ownerName': value.ownerName,
        'ownerAddress': value.ownerAddress,
        'name': value.name,
        'type': value.type,
        'aggregationStatusCode': value.aggregationStatusCode,
        'incomeStreams': value.incomeStreams === undefined ? undefined : ((value.incomeStreams as Array<any>).map(VOIETXVerifyReportIncomeStreamToJSON)),
        'balance': value.balance,
        'averageMonthlyBalance': value.averageMonthlyBalance,
        'transactions': ((value.transactions as Array<any>).map(ReportTransactionNewTxBasedToJSON)),
        'details': AccountDetailsTxBasedToJSON(value.details),
        'position': ReportAccountPositionToJSON(value.position),
        'availableBalance': value.availableBalance,
    };
}

