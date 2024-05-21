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
import type { CustomerAccountSimple, CustomerAccountsSimple } from '../models/index';
export interface GetCustomerAccountSimpleRequest {
    customerId: string;
    accountId: string;
}
export interface GetCustomerAccountsByInstitutionLoginSimpleRequest {
    customerId: string;
    institutionLoginId: string;
}
export interface GetCustomerAccountsByInstitutionSimpleRequest {
    customerId: string;
    institutionId: number;
}
export interface GetCustomerAccountsSimpleRequest {
    customerId: string;
}
/**
 *
 */
export declare class AccountsSimpleApi extends runtime.BaseAPI {
    /**
     * This API is a lighter version of Get Customer Accounts by ID, returning only basic information of a customer account.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID (Simple)
     */
    getCustomerAccountSimpleRaw(requestParameters: GetCustomerAccountSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountSimple>>;
    /**
     * This API is a lighter version of Get Customer Accounts by ID, returning only basic information of a customer account.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID (Simple)
     */
    getCustomerAccountSimple(requestParameters: GetCustomerAccountSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountSimple>;
    /**
     * This API is a lighter version of Get Customer Accounts by Institution Login ID, returning only basic information of all active accounts owned by the given customer at the given institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID (Simple)
     */
    getCustomerAccountsByInstitutionLoginSimpleRaw(requestParameters: GetCustomerAccountsByInstitutionLoginSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>>;
    /**
     * This API is a lighter version of Get Customer Accounts by Institution Login ID, returning only basic information of all active accounts owned by the given customer at the given institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID (Simple)
     */
    getCustomerAccountsByInstitutionLoginSimple(requestParameters: GetCustomerAccountsByInstitutionLoginSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple>;
    /**
     * This API is a lighter version of Get Customer Accounts by Institution ID, returning only basic information of active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID (Simple)
     */
    getCustomerAccountsByInstitutionSimpleRaw(requestParameters: GetCustomerAccountsByInstitutionSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>>;
    /**
     * This API is a lighter version of Get Customer Accounts by Institution ID, returning only basic information of active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID (Simple)
     */
    getCustomerAccountsByInstitutionSimple(requestParameters: GetCustomerAccountsByInstitutionSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple>;
    /**
     * This API is a lighter version of Get Customer Accounts, returning only basic information of all active customer accounts.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts (Simple)
     */
    getCustomerAccountsSimpleRaw(requestParameters: GetCustomerAccountsSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>>;
    /**
     * This API is a lighter version of Get Customer Accounts, returning only basic information of all active customer accounts.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts (Simple)
     */
    getCustomerAccountsSimple(requestParameters: GetCustomerAccountsSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple>;
}