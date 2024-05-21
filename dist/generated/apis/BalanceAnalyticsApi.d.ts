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
import * as runtime from '../runtime';
import type { BalanceAndCashFlowAnalyticsReportConstraints, ObbAnalyticsReport, ObbAnalyticsReportAck } from '../models/index';
import { GetObbAnalyticsReportFcraRequest, GetObbAnalyticsReportRequest } from './common';
export interface GenerateBalanceAnalyticsRequest {
    customerId: string;
    balanceAndCashFlowAnalyticsReportConstraints: BalanceAndCashFlowAnalyticsReportConstraints;
    referenceNumber?: string;
}
export interface GenerateBalanceAnalyticsFcraRequest {
    customerId: string;
    balanceAndCashFlowAnalyticsReportConstraints: BalanceAndCashFlowAnalyticsReportConstraints;
    referenceNumber?: string;
}
/**
 *
 */
export declare class BalanceAnalyticsApi extends runtime.BaseAPI {
    /**
     * Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Current/available account balances * Minimum/maximum/average account balances over the requested time   period and broken down by month  * Daily ending balance of accounts for each day in the requested time   period  * Propensity of the customer\'s account balances to increase week over   week  * Number of days in the requested time period ending with a negative   balance   This version of the API is intended for piloting and integration testing your application with the Balance Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Balance Analytics - FCRA_ for the FCRA compliant version of this API.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report_ (operation: _GetObbAnalyticsReport_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Balance Analytics
     */
    generateBalanceAnalyticsRaw(requestParameters: GenerateBalanceAnalyticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReportAck>>;
    /**
     * Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Current/available account balances * Minimum/maximum/average account balances over the requested time   period and broken down by month  * Daily ending balance of accounts for each day in the requested time   period  * Propensity of the customer\'s account balances to increase week over   week  * Number of days in the requested time period ending with a negative   balance   This version of the API is intended for piloting and integration testing your application with the Balance Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Balance Analytics - FCRA_ for the FCRA compliant version of this API.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report_ (operation: _GetObbAnalyticsReport_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Balance Analytics
     */
    generateBalanceAnalytics(requestParameters: GenerateBalanceAnalyticsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReportAck>;
    /**
     * Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Current/available account balances * Minimum/maximum/average account balances over the requested time   period and broken down by month  * Daily ending balance of accounts for each day in the requested time   period  * Propensity of the customer\'s account balances to increase week over   week  * Number of days in the requested time period ending with a negative   balance   This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report - FCRA_ (operation: _GetObbAnalyticsReportFCRA_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Balance Analytics - FCRA
     */
    generateBalanceAnalyticsFcraRaw(requestParameters: GenerateBalanceAnalyticsFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReportAck>>;
    /**
     * Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Current/available account balances * Minimum/maximum/average account balances over the requested time   period and broken down by month  * Daily ending balance of accounts for each day in the requested time   period  * Propensity of the customer\'s account balances to increase week over   week  * Number of days in the requested time period ending with a negative   balance   This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report - FCRA_ (operation: _GetObbAnalyticsReportFCRA_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Balance Analytics - FCRA
     */
    generateBalanceAnalyticsFcra(requestParameters: GenerateBalanceAnalyticsFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReportAck>;
    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    getObbAnalyticsReportRaw(requestParameters: GetObbAnalyticsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReport>>;
    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    getObbAnalyticsReport(requestParameters: GetObbAnalyticsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReport>;
    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    getObbAnalyticsReportFcraRaw(requestParameters: GetObbAnalyticsReportFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReport>>;
    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    getObbAnalyticsReportFcra(requestParameters: GetObbAnalyticsReportFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReport>;
}