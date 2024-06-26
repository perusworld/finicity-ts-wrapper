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
import type { ReportTransaction } from './ReportTransaction';
/**
 * Fields used for the Transaction History Report (CRA products)
 * @export
 * @interface TransactionsReportAccount
 */
export interface TransactionsReportAccount {
    /**
     * The Finicity account ID
     * @type {number}
     * @memberof TransactionsReportAccount
     */
    id?: number;
    /**
     * The account name from the financial institution.
     * @type {string}
     * @memberof TransactionsReportAccount
     */
    name?: string;
    /**
     * The account number from the financial institution (obfuscated)
     * @type {string}
     * @memberof TransactionsReportAccount
     */
    number?: string;
    /**
     * The list of supported account types.
     * * "checking": Standard checking
     * * "savings": Standard savings
     * * "cd": Certificates of deposit
     * * "moneyMarket": Money Market
     * * "creditCard": Standard credit cards
     * * "lineOfCredit": Home equity, line of credit
     * * "investment": Generic investment (no details)
     * * "investmentTaxDeferred": Generic tax-advantaged investment (no details)
     * * "employeeStockPurchasePlan": ESPP, Employee Stock Ownership Plans (ESOP), Stock Purchase Plans
     * * "ira": Individual Retirement Account (not Rollover or Roth)
     * * "401k": 401K Plan
     * * "roth": Roth IRA, Roth 401K
     * * "403b": 403B Plan
     * * "529plan": 529 Plan (True value is 529)
     * * "rollover": Rollover IRA
     * * "ugma": Uniform Gifts to Minors Act
     * * "utma": Uniform Transfers to Minors Act
     * * "keogh": Keogh Plan
     * * "457plan": 457 Plan (True value is 457)
     * * "401a": 401A Plan
     * * "brokerageAccount": Brokerage Account
     * * "educationSavings": Education Savings Account that is not a 529
     * * "healthSavingsAccount": HSA (Health Savings Accounts)
     * * "pension": Pension
     * * "profitSharingPlan": Profit Sharing Plan
     * * "roth401k": Roth 401K
     * * "sepIRA": Simplified Employee Pension IRA
     * * "simpleIRA": Simple IRA
     * * "thriftSavingsPlan": Thrift Savings Plan
     * * "variableAnnuity": Variable Annuity
     * * "cryptocurrency": Cryptocurrency Wallet, Cryptocurrency Account
     * * "mortgage": Standard Mortgages
     * * "loan": Auto loans, equity loans, other loans
     * * "studentLoan": Student Loan
     * * "studentLoanGroup": Student Loan Group
     * * "studentLoanAccount": Student Loan Account
     * @type {string}
     * @memberof TransactionsReportAccount
     */
    type?: string;
    /**
     * The status of the most recent aggregation attempt for this account. Note: non-zero means the account was not accessed successfully for this report, and additional fields for this account may not be reliable.
     * @type {number}
     * @memberof TransactionsReportAccount
     */
    aggregationStatusCode?: number;
    /**
     * The cleared balance of the account as-of `balanceDate`
     * @type {number}
     * @memberof TransactionsReportAccount
     */
    balance?: number;
    /**
     * A timestamp showing when the balance was captured
     * @type {number}
     * @memberof TransactionsReportAccount
     */
    balanceDate?: number;
    /**
     * a list of transaction records
     * @type {Array<ReportTransaction>}
     * @memberof TransactionsReportAccount
     */
    transactions?: Array<ReportTransaction>;
}
/**
 * Check if a given object implements the TransactionsReportAccount interface.
 */
export declare function instanceOfTransactionsReportAccount(value: object): boolean;
export declare function TransactionsReportAccountFromJSON(json: any): TransactionsReportAccount;
export declare function TransactionsReportAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsReportAccount;
export declare function TransactionsReportAccountToJSON(value?: TransactionsReportAccount | null): any;
