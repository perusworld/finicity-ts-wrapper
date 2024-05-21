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
import type { CashFlowCashFlowBalance } from './CashFlowCashFlowBalance';
import type { CashFlowCashFlowCharacteristic } from './CashFlowCashFlowCharacteristic';
import type { CashFlowCashFlowCredit } from './CashFlowCashFlowCredit';
import type { CashFlowCashFlowDebit } from './CashFlowCashFlowDebit';
import type { ReportTransaction } from './ReportTransaction';
/**
 *
 * @export
 * @interface CashFlowReportAccount
 */
export interface CashFlowReportAccount {
    /**
     * Finicity account ID
     * @type {number}
     * @memberof CashFlowReportAccount
     */
    id?: number;
    /**
     * The name(s) of the account owner(s), retrieved from the institution.
     * @type {string}
     * @memberof CashFlowReportAccount
     */
    ownerName?: string;
    /**
     * The mailing address of the account owner, retrieved from the institution.
     * @type {string}
     * @memberof CashFlowReportAccount
     */
    ownerAddress?: string;
    /**
     * The account name from the institution
     * @type {string}
     * @memberof CashFlowReportAccount
     */
    name?: string;
    /**
     * The account number from the institution (obfuscated)
     * @type {string}
     * @memberof CashFlowReportAccount
     */
    number?: string;
    /**
     * CFR: `ALL` (`checking` / `savings` / `loan` / `mortgage` / `credit card` / `CD` / `MM` / `investment`...)
     * @type {string}
     * @memberof CashFlowReportAccount
     */
    type?: string;
    /**
     * The status of the most recent aggregation attempt for this account (non-zero means the account was not accessed successfully for this report, and additional fields for this account may not be reliable)
     * @type {number}
     * @memberof CashFlowReportAccount
     */
    aggregationStatusCode?: number;
    /**
     * The cleared balance of the account as-of `balanceDate`
     * @type {number}
     * @memberof CashFlowReportAccount
     */
    currentBalance?: number;
    /**
     * Available balance
     * @type {number}
     * @memberof CashFlowReportAccount
     */
    availableBalance?: number;
    /**
     * A timestamp showing when the `balance` was captured
     * @type {number}
     * @memberof CashFlowReportAccount
     */
    balanceDate?: number;
    /**
     * a list of transaction records
     * @type {Array<ReportTransaction>}
     * @memberof CashFlowReportAccount
     */
    transactions?: Array<ReportTransaction>;
    /**
     *
     * @type {CashFlowCashFlowBalance}
     * @memberof CashFlowReportAccount
     */
    cashFlowBalance?: CashFlowCashFlowBalance;
    /**
     *
     * @type {CashFlowCashFlowCredit}
     * @memberof CashFlowReportAccount
     */
    cashFlowCredit?: CashFlowCashFlowCredit;
    /**
     *
     * @type {CashFlowCashFlowDebit}
     * @memberof CashFlowReportAccount
     */
    cashFlowDebit?: CashFlowCashFlowDebit;
    /**
     *
     * @type {CashFlowCashFlowCharacteristic}
     * @memberof CashFlowReportAccount
     */
    cashFlowCharacteristic?: CashFlowCashFlowCharacteristic;
}
/**
 * Check if a given object implements the CashFlowReportAccount interface.
 */
export declare function instanceOfCashFlowReportAccount(value: object): boolean;
export declare function CashFlowReportAccountFromJSON(json: any): CashFlowReportAccount;
export declare function CashFlowReportAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowReportAccount;
export declare function CashFlowReportAccountToJSON(value?: CashFlowReportAccount | null): any;