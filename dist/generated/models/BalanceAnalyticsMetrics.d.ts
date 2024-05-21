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
import type { ObbDailyBalance } from './ObbDailyBalance';
import type { ObbDateRangeAndAmount } from './ObbDateRangeAndAmount';
import type { ObbDateRangeAndCount } from './ObbDateRangeAndCount';
import type { ObbNumWeeksAverageBalanceIncreasing } from './ObbNumWeeksAverageBalanceIncreasing';
/**
 * Balance analytics metrics and calculations
 * @export
 * @interface BalanceAnalyticsMetrics
 */
export interface BalanceAnalyticsMetrics {
    /**
     * Available Balance
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    availableBalance?: number;
    /**
     * Available Balance date
     * @type {string}
     * @memberof BalanceAnalyticsMetrics
     */
    availableBalanceDate?: string;
    /**
     * Average daily ending balance each month over the report time period
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof BalanceAnalyticsMetrics
     */
    averageDailyBalanceByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Average Daily Balance
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    averageDailyBalanceForTheReportTimePeriod?: number;
    /**
     * Average Weekday Balance
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    averageWeekdayBalanceForTheReportTimePeriod?: number;
    /**
     * Number of negative daily ending balances each month over the report time period
     * @type {Array<ObbDateRangeAndCount>}
     * @memberof BalanceAnalyticsMetrics
     */
    countDailyNegativeBalancesByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndCount>;
    /**
     * Current Running Balance Date
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    currentRunningBalance?: number;
    /**
     * Current Running Balance date
     * @type {string}
     * @memberof BalanceAnalyticsMetrics
     */
    currentRunningBalanceDate?: string;
    /**
     * Daily balance of the account during weekdays over the length of the report
     * @type {Array<ObbDailyBalance>}
     * @memberof BalanceAnalyticsMetrics
     */
    dailyBalancesByWeekdayForTheReportTimePeriod?: Array<ObbDailyBalance>;
    /**
     * Daily balance of the account over the length of the report
     * @type {Array<ObbDailyBalance>}
     * @memberof BalanceAnalyticsMetrics
     */
    dailyBalancesForTheReportTimePeriod?: Array<ObbDailyBalance>;
    /**
     *
     * @type {ObbNumWeeksAverageBalanceIncreasing}
     * @memberof BalanceAnalyticsMetrics
     */
    historicNumberOfWeeksAverageBalanceIncreasing?: ObbNumWeeksAverageBalanceIncreasing;
    /**
     * Maximum daily ending balance each month over the report time period
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof BalanceAnalyticsMetrics
     */
    maximumDailyBalanceByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Maximum Running Balance
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    maximumRunningBalanceForTheReportTimePeriod?: number;
    /**
     * Minimum daily ending balance each month over the report time period
     * @type {Array<ObbDateRangeAndAmount>}
     * @memberof BalanceAnalyticsMetrics
     */
    minimumDailyBalanceByMonthForTheReportTimePeriod?: Array<ObbDateRangeAndAmount>;
    /**
     * Minimum Running Balance
     * @type {number}
     * @memberof BalanceAnalyticsMetrics
     */
    minimumRunningBalanceForTheReportTimePeriod?: number;
}
/**
 * Check if a given object implements the BalanceAnalyticsMetrics interface.
 */
export declare function instanceOfBalanceAnalyticsMetrics(value: object): boolean;
export declare function BalanceAnalyticsMetricsFromJSON(json: any): BalanceAnalyticsMetrics;
export declare function BalanceAnalyticsMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceAnalyticsMetrics;
export declare function BalanceAnalyticsMetricsToJSON(value?: BalanceAnalyticsMetrics | null): any;