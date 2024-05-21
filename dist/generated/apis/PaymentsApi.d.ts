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
import type { ACHDetails, AccountOwner, AccountOwnerHolders, AvailableBalance, LoanPaymentDetails } from '../models/index';
export interface GetAccountACHDetailsRequest {
    customerId: string;
    accountId: string;
}
export interface GetAccountOwnerRequest {
    customerId: string;
    accountId: string;
}
export interface GetAccountOwnerDetailsRequest {
    customerId: string;
    accountId: string;
    withInsights?: boolean;
}
export interface GetAvailableBalanceRequest {
    customerId: string;
    accountId: string;
}
export interface GetAvailableBalanceLiveRequest {
    customerId: string;
    accountId: string;
}
export interface GetLoanPaymentDetailsRequest {
    customerId: string;
    accountId: string;
}
/**
 *
 */
export declare class PaymentsApi extends runtime.BaseAPI {
    /**
     * Return the real account number and routing number details for an ACH payment.  Note: this is a premium service, billable per every successful API call.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"loan\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account ACH Details
     */
    getAccountACHDetailsRaw(requestParameters: GetAccountACHDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ACHDetails>>;
    /**
     * Return the real account number and routing number details for an ACH payment.  Note: this is a premium service, billable per every successful API call.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"loan\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account ACH Details
     */
    getAccountACHDetails(requestParameters: GetAccountACHDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ACHDetails>;
    /**
     * Retrieve the names and addresses of the account owner from a financial institution.  Note: this is a premium service, billable per every successful API call.  This service retrieves account data from the institution. This usually returns quickly, but in some scenarios may take a few minutes to complete. In the event of a timeout condition, retry the call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account Owner
     */
    getAccountOwnerRaw(requestParameters: GetAccountOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOwner>>;
    /**
     * Retrieve the names and addresses of the account owner from a financial institution.  Note: this is a premium service, billable per every successful API call.  This service retrieves account data from the institution. This usually returns quickly, but in some scenarios may take a few minutes to complete. In the event of a timeout condition, retry the call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account Owner
     */
    getAccountOwner(requestParameters: GetAccountOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOwner>;
    /**
     * This service retrieves the account details for an account holder from an institution. The following data objects are available.  * Account holders  * Addresses  * Emails  * Phones  * Documentations  * Identity Insights   Note: The data returned varies from institution to institution as not all of them make the same data available. This is a premium service, billable per each successful API call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account Owner Details
     */
    getAccountOwnerDetailsRaw(requestParameters: GetAccountOwnerDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOwnerHolders>>;
    /**
     * This service retrieves the account details for an account holder from an institution. The following data objects are available.  * Account holders  * Addresses  * Emails  * Phones  * Documentations  * Identity Insights   Note: The data returned varies from institution to institution as not all of them make the same data available. This is a premium service, billable per each successful API call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Account Owner Details
     */
    getAccountOwnerDetails(requestParameters: GetAccountOwnerDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOwnerHolders>;
    /**
     * Retrieve the latest cached available and cleared account balances for a customer. Since we update and store balances throughout the day, this is the most accurate balance information available when a connection to a financial institution is unavailable or when a faster response is needed. Only deposit account types are supported: Checking, Savings, Money Market, and CD.  Note: this is a premium service, billable per every successful API call. Enrollment is required.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"cd\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Available Balance
     */
    getAvailableBalanceRaw(requestParameters: GetAvailableBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AvailableBalance>>;
    /**
     * Retrieve the latest cached available and cleared account balances for a customer. Since we update and store balances throughout the day, this is the most accurate balance information available when a connection to a financial institution is unavailable or when a faster response is needed. Only deposit account types are supported: Checking, Savings, Money Market, and CD.  Note: this is a premium service, billable per every successful API call. Enrollment is required.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"cd\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Available Balance
     */
    getAvailableBalance(requestParameters: GetAvailableBalanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AvailableBalance>;
    /**
     * Retrieve the available and cleared account balances for a single account in real-time directly from a financial institution.  Note: this is a premium service, billable per every successful API call.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"cd\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Available Balance - Live
     */
    getAvailableBalanceLiveRaw(requestParameters: GetAvailableBalanceLiveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AvailableBalance>>;
    /**
     * Retrieve the available and cleared account balances for a single account in real-time directly from a financial institution.  Note: this is a premium service, billable per every successful API call.  _Supported account types_: \"checking\", \"savings\", \"moneyMarket\", \"cd\"  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Available Balance - Live
     */
    getAvailableBalanceLive(requestParameters: GetAvailableBalanceLiveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AvailableBalance>;
    /**
     * Return the loan payment details of the customer for a loan-type account.  Note: this is a premium service, billable per every successful API call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Loan Payment Details
     */
    getLoanPaymentDetailsRaw(requestParameters: GetLoanPaymentDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoanPaymentDetails>>;
    /**
     * Return the loan payment details of the customer for a loan-type account.  Note: this is a premium service, billable per every successful API call.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Loan Payment Details
     */
    getLoanPaymentDetails(requestParameters: GetLoanPaymentDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoanPaymentDetails>;
}
