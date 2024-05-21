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
import type { PrequalificationReportAck, PrequalificationReportConstraints, VOAReportAck, VOAReportConstraints, VOAWithIncomeReportAck, VOAWithIncomeReportConstraints } from '../models/index';
export interface GeneratePrequalificationCRAReportRequest {
    customerId: string;
    prequalificationReportConstraints: PrequalificationReportConstraints;
    callbackUrl?: string;
}
export interface GeneratePrequalificationNonCRAReportRequest {
    customerId: string;
    prequalificationReportConstraints: PrequalificationReportConstraints;
    callbackUrl?: string;
}
export interface GenerateVOAReportRequest {
    customerId: string;
    vOAReportConstraints: VOAReportConstraints;
    callbackUrl?: string;
}
export interface GenerateVOAWithIncomeReportRequest {
    customerId: string;
    vOAWithIncomeReportConstraints: VOAWithIncomeReportConstraints;
    callbackUrl?: string;
}
/**
 *
 */
export declare class VerifyAssetsApi extends runtime.BaseAPI {
    /**
     * Retrieve all checking, savings, money market, and investment accounts for a consumer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Prequalification (CRA) Report
     */
    generatePrequalificationCRAReportRaw(requestParameters: GeneratePrequalificationCRAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrequalificationReportAck>>;
    /**
     * Retrieve all checking, savings, money market, and investment accounts for a consumer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Prequalification (CRA) Report
     */
    generatePrequalificationCRAReport(requestParameters: GeneratePrequalificationCRAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrequalificationReportAck>;
    /**
     * Retrieve all checking, savings, money market, and investment accounts for a customer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.  If no account type of checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Prequalification (Non-CRA) Report
     */
    generatePrequalificationNonCRAReportRaw(requestParameters: GeneratePrequalificationNonCRAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrequalificationReportAck>>;
    /**
     * Retrieve all checking, savings, money market, and investment accounts for a customer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.  If no account type of checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Prequalification (Non-CRA) Report
     */
    generatePrequalificationNonCRAReport(requestParameters: GeneratePrequalificationNonCRAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrequalificationReportAck>;
    /**
     * Generate a Verification of Assets (VOA) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to twelve months of transaction history for each account and uses this information to generate the VOA report.  This is a premium service. The billing rate is the variable rate for Verification of Assets under the current subscription plan. The billable event is the successful generation of a VOA report.  Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate VOA Report
     */
    generateVOAReportRaw(requestParameters: GenerateVOAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VOAReportAck>>;
    /**
     * Generate a Verification of Assets (VOA) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to twelve months of transaction history for each account and uses this information to generate the VOA report.  This is a premium service. The billing rate is the variable rate for Verification of Assets under the current subscription plan. The billable event is the successful generation of a VOA report.  Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate VOA Report
     */
    generateVOAReport(requestParameters: GenerateVOAReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VOAReportAck>;
    /**
     * Generate a Verification of Assets with Income (VOAI) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to 24 months of transaction history for each account and uses this information to generate the VOAI report. The report includes 1 - 6 months of all debit and credit transactions for asset verification. By default, the history is set to 61 days, however, you can change the transaction history in this section by setting the `fromDate` parameter. The report also includes up to 24 months of income credit transactions (ordered by account and confidence level) regardless of `fromDate` for income verification.  This is a premium service. The billable event is the successful generation of a VOAI report.  Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate VOA With Income Report
     */
    generateVOAWithIncomeReportRaw(requestParameters: GenerateVOAWithIncomeReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VOAWithIncomeReportAck>>;
    /**
     * Generate a Verification of Assets with Income (VOAI) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to 24 months of transaction history for each account and uses this information to generate the VOAI report. The report includes 1 - 6 months of all debit and credit transactions for asset verification. By default, the history is set to 61 days, however, you can change the transaction history in this section by setting the `fromDate` parameter. The report also includes up to 24 months of income credit transactions (ordered by account and confidence level) regardless of `fromDate` for income verification.  This is a premium service. The billable event is the successful generation of a VOAI report.  Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).  If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate VOA With Income Report
     */
    generateVOAWithIncomeReport(requestParameters: GenerateVOAWithIncomeReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VOAWithIncomeReportAck>;
}
