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
import type { CashFlowCashFlowBalanceSummary } from './CashFlowCashFlowBalanceSummary';
import type { CashFlowCashFlowCharacteristicsSummary } from './CashFlowCashFlowCharacteristicsSummary';
import type { CashFlowCashFlowCreditSummary } from './CashFlowCashFlowCreditSummary';
import type { CashFlowCashFlowDebitSummary } from './CashFlowCashFlowDebitSummary';
import type { CashFlowPossibleLoanDeposits } from './CashFlowPossibleLoanDeposits';
import type { ErrorMessage } from './ErrorMessage';
import type { PayrollEmploymentHistoryVOIE } from './PayrollEmploymentHistoryVOIE';
import type { PrequalificationReportAssetSummary } from './PrequalificationReportAssetSummary';
import type { ReportIncomeStreamSummary } from './ReportIncomeStreamSummary';
import type { ReportInstitution } from './ReportInstitution';
import type { VOIEPaystubWithStatementPayStatement } from './VOIEPaystubWithStatementPayStatement';
/**
 * A report
 * @export
 * @interface Report
 */
export interface Report {
    /**
     * A report ID
     * @type {string}
     * @memberof Report
     */
    id: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof Report
     */
    customerType: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof Report
     */
    customerId: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof Report
     */
    requestId: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof Report
     */
    requesterName: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof Report
     */
    createdDate: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof Report
     */
    title: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof Report
     */
    consumerId?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof Report
     */
    consumerSsn?: string;
    /**
     * A report type. Possible values:
     *
     * * `voi`
     *
     * * `voa`
     *
     * * `voaHistory`
     *
     * * `history`
     *
     * * `voieTxVerify`
     *
     * * `voieWithReport`
     *
     * * `voieWithInterview`
     *
     * * `paystatement`
     *
     * * `preQualVoa`
     *
     * * `assetSummary`
     *
     * * `voie`
     *
     * * `transactions`
     *
     * * `statement`
     *
     * * `voiePayroll`
     *
     * * `voeTransactions`
     *
     * * `voePayroll`
     *
     * * `cfrp`
     *
     * * `cfrb`
     *
     * @type {string}
     * @memberof Report
     */
    type: string;
    /**
     * A report generation status. Possible values:
     *
     * * `inProgress`
     *
     * * `success`
     *
     * * `failure`
     *
     * @type {string}
     * @memberof Report
     */
    status: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof Report
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof Report
     */
    portfolioId?: string;
    /**
     * The `postedDate` of the earliest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof Report
     */
    startDate?: number;
    /**
     * The `postedDate` of the latest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof Report
     */
    endDate?: number;
    /**
     * Number of days covered by the report
     * @type {number}
     * @memberof Report
     */
    days?: number;
    /**
     * "true" if the report covers more than 180 days
     * @type {boolean}
     * @memberof Report
     */
    seasoned?: boolean;
    /**
     * The details of the financial institution accounts included in the report.
     * @type {Array<ReportInstitution>}
     * @memberof Report
     */
    institutions?: Array<ReportInstitution>;
    /**
     *
     * @type {CashFlowCashFlowBalanceSummary}
     * @memberof Report
     */
    cashFlowBalanceSummary?: CashFlowCashFlowBalanceSummary;
    /**
     *
     * @type {CashFlowCashFlowCreditSummary}
     * @memberof Report
     */
    cashFlowCreditSummary?: CashFlowCashFlowCreditSummary;
    /**
     *
     * @type {CashFlowCashFlowDebitSummary}
     * @memberof Report
     */
    cashFlowDebitSummary?: CashFlowCashFlowDebitSummary;
    /**
     *
     * @type {CashFlowCashFlowCharacteristicsSummary}
     * @memberof Report
     */
    cashFlowCharacteristicsSummary?: CashFlowCashFlowCharacteristicsSummary;
    /**
     * A possible loan deposits record
     * @type {Array<CashFlowPossibleLoanDeposits>}
     * @memberof Report
     */
    possibleLoanDeposits?: Array<CashFlowPossibleLoanDeposits>;
    /**
     * The sum of available balance for all of the accounts included in the report
     * @type {number}
     * @memberof Report
     */
    consolidatedAvailableBalance?: number;
    /**
     *
     * @type {PrequalificationReportAssetSummary}
     * @memberof Report
     */
    assets?: PrequalificationReportAssetSummary;
    /**
     * A type of report
     * @type {string}
     * @memberof Report
     */
    reportStyle?: string;
    /**
     * Total number of billable pay statements included in the report
     * @type {number}
     * @memberof Report
     */
    numberOfBillableAssets?: number;
    /**
     * The pay statements included in the report
     * @type {Array<string>}
     * @memberof Report
     */
    assetIds?: Array<string>;
    /**
     * Extracted pay statement details, and the transaction matching summary
     * @type {Array<VOIEPaystubWithStatementPayStatement>}
     * @memberof Report
     */
    payStatements?: Array<VOIEPaystubWithStatementPayStatement>;
    /**
     * An asset ID. Generated by Connect or by using the Store Customer Pay Statement API.
     * @type {string}
     * @memberof Report
     */
    assetId?: string;
    /**
     * An array of employment histories, one for each of the consumer's verified employers
     * @type {Array<PayrollEmploymentHistoryVOIE>}
     * @memberof Report
     */
    employmentHistory?: Array<PayrollEmploymentHistoryVOIE>;
    /**
     * Mastercard Open Banking internal use only to flag reports that should not be retrieved by the GSE's (Government-Sponsored Enterprise).
     *
     * This is a mandatory field for VOE-payroll and VOIE-payroll report types.
     * @type {boolean}
     * @memberof Report
     */
    gseEnabled?: boolean;
    /**
     * Income details
     * @type {Array<ReportIncomeStreamSummary>}
     * @memberof Report
     */
    income?: Array<ReportIncomeStreamSummary>;
}
/**
 * Check if a given object implements the Report interface.
 */
export declare function instanceOfReport(value: object): boolean;
export declare function ReportFromJSON(json: any): Report;
export declare function ReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): Report;
export declare function ReportToJSON(value?: Report | null): any;
