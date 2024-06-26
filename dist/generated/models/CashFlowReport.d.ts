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
import type { ReportInstitution } from './ReportInstitution';
/**
 * A Cash Flow report
 * @export
 * @interface CashFlowReport
 */
export interface CashFlowReport {
    /**
     * A report ID
     * @type {string}
     * @memberof CashFlowReport
     */
    id?: string;
    /**
     * The type of customer ("active" or "testing" or "" for all types)
     * @type {string}
     * @memberof CashFlowReport
     */
    customerType?: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof CashFlowReport
     */
    customerId?: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof CashFlowReport
     */
    requestId?: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof CashFlowReport
     */
    requesterName?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a "Retrieved Date" populated.
     * @type {number}
     * @memberof CashFlowReport
     */
    createdDate?: number;
    /**
     * Title of the report
     * @type {string}
     * @memberof CashFlowReport
     */
    title?: string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof CashFlowReport
     */
    consumerId?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof CashFlowReport
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
     * @memberof CashFlowReport
     */
    type?: string;
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
     * @memberof CashFlowReport
     */
    status?: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof CashFlowReport
     */
    errors?: Array<ErrorMessage>;
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof CashFlowReport
     */
    portfolioId?: string;
    /**
     * The `postedDate` of the earliest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CashFlowReport
     */
    startDate?: number;
    /**
     * The `postedDate` of the latest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CashFlowReport
     */
    endDate?: number;
    /**
     * Number of days covered by the report
     * @type {number}
     * @memberof CashFlowReport
     */
    days?: number;
    /**
     * "true" if the report covers more than 365 days
     * @type {boolean}
     * @memberof CashFlowReport
     */
    seasoned?: boolean;
    /**
     * A list of institution records, including information about the individual accounts used in this report
     * @type {Array<ReportInstitution>}
     * @memberof CashFlowReport
     */
    institutions?: Array<ReportInstitution>;
    /**
     *
     * @type {CashFlowCashFlowBalanceSummary}
     * @memberof CashFlowReport
     */
    cashFlowBalanceSummary?: CashFlowCashFlowBalanceSummary;
    /**
     *
     * @type {CashFlowCashFlowCreditSummary}
     * @memberof CashFlowReport
     */
    cashFlowCreditSummary?: CashFlowCashFlowCreditSummary;
    /**
     *
     * @type {CashFlowCashFlowDebitSummary}
     * @memberof CashFlowReport
     */
    cashFlowDebitSummary?: CashFlowCashFlowDebitSummary;
    /**
     *
     * @type {CashFlowCashFlowCharacteristicsSummary}
     * @memberof CashFlowReport
     */
    cashFlowCharacteristicsSummary?: CashFlowCashFlowCharacteristicsSummary;
    /**
     * A possible loan deposits record
     * @type {Array<CashFlowPossibleLoanDeposits>}
     * @memberof CashFlowReport
     */
    possibleLoanDeposits?: Array<CashFlowPossibleLoanDeposits>;
}
/**
 * Check if a given object implements the CashFlowReport interface.
 */
export declare function instanceOfCashFlowReport(value: object): boolean;
export declare function CashFlowReportFromJSON(json: any): CashFlowReport;
export declare function CashFlowReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashFlowReport;
export declare function CashFlowReportToJSON(value?: CashFlowReport | null): any;
