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


import * as runtime from '../runtime';
import type {
  CustomerAccount,
  CustomerAccounts,
  ErrorMessage,
} from '../models/index';
import {
    CustomerAccountFromJSON,
    CustomerAccountToJSON,
    CustomerAccountsFromJSON,
    CustomerAccountsToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
} from '../models/index';

export interface DeleteCustomerAccountRequest {
    customerId: string;
    accountId: string;
}

export interface DeleteCustomerAccountsByInstitutionLoginRequest {
    customerId: string;
    institutionLoginId: string;
}

export interface GetCustomerAccountRequest {
    customerId: string;
    accountId: string;
}

export interface GetCustomerAccountsRequest {
    customerId: string;
    status?: string;
    accountType?: string;
}

export interface GetCustomerAccountsByInstitutionRequest {
    customerId: string;
    institutionId: number;
}

export interface GetCustomerAccountsByInstitutionLoginRequest {
    customerId: string;
    institutionLoginId: string;
}

export interface RefreshCustomerAccountsRequest {
    customerId: string;
}

export interface RefreshCustomerAccountsByInstitutionLoginRequest {
    customerId: string;
    institutionLoginId: string;
}

export interface RefreshCustomerAccountsByInstitutionLoginV2Request {
    customerId: string;
    institutionLoginId: string;
}

export interface RefreshCustomerAccountsV2Request {
    customerId: string;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Remove the given account from Finicity aggregation.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Account by ID
     */
    async deleteCustomerAccountRaw(requestParameters: DeleteCustomerAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling deleteCustomerAccount.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling deleteCustomerAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/accounts/{accountId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove the given account from Finicity aggregation.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Account by ID
     */
    async deleteCustomerAccount(requestParameters: DeleteCustomerAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomerAccountRaw(requestParameters, initOverrides);
    }

    /**
     * Remove from Finicity aggregation the set of accounts matching the institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Accounts by Institution Login ID
     */
    async deleteCustomerAccountsByInstitutionLoginRaw(requestParameters: DeleteCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling deleteCustomerAccountsByInstitutionLogin.');
        }

        if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
            throw new runtime.RequiredError('institutionLoginId','Required parameter requestParameters.institutionLoginId was null or undefined when calling deleteCustomerAccountsByInstitutionLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove from Finicity aggregation the set of accounts matching the institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Accounts by Institution Login ID
     */
    async deleteCustomerAccountsByInstitutionLogin(requestParameters: DeleteCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
    }

    /**
     * Get a customer account by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID
     */
    async getCustomerAccountRaw(requestParameters: GetCustomerAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccount>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccount.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getCustomerAccount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v2/customers/{customerId}/accounts/{accountId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountFromJSON(jsonValue));
    }

    /**
     * Get a customer account by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID
     */
    async getCustomerAccount(requestParameters: GetCustomerAccountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccount> {
        const response = await this.getCustomerAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all accounts owned by the given customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts
     */
    async getCustomerAccountsRaw(requestParameters: GetCustomerAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccounts>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccounts.');
        }

        const queryParameters: any = {};

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.accountType !== undefined) {
            queryParameters['account_type'] = requestParameters.accountType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsFromJSON(jsonValue));
    }

    /**
     * Get all accounts owned by the given customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts
     */
    async getCustomerAccounts(requestParameters: GetCustomerAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccounts> {
        const response = await this.getCustomerAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID
     */
    async getCustomerAccountsByInstitutionRaw(requestParameters: GetCustomerAccountsByInstitutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccounts>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitution.');
        }

        if (requestParameters.institutionId === null || requestParameters.institutionId === undefined) {
            throw new runtime.RequiredError('institutionId','Required parameter requestParameters.institutionId was null or undefined when calling getCustomerAccountsByInstitution.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionId"}}`, encodeURIComponent(String(requestParameters.institutionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsFromJSON(jsonValue));
    }

    /**
     * Get all active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID
     */
    async getCustomerAccountsByInstitution(requestParameters: GetCustomerAccountsByInstitutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccounts> {
        const response = await this.getCustomerAccountsByInstitutionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID
     */
    async getCustomerAccountsByInstitutionLoginRaw(requestParameters: GetCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccounts>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitutionLogin.');
        }

        if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
            throw new runtime.RequiredError('institutionLoginId','Required parameter requestParameters.institutionLoginId was null or undefined when calling getCustomerAccountsByInstitutionLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsFromJSON(jsonValue));
    }

    /**
     * Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID
     */
    async getCustomerAccountsByInstitutionLogin(requestParameters: GetCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccounts> {
        const response = await this.getCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh services repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts
     */
    async refreshCustomerAccountsRaw(requestParameters: RefreshCustomerAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccounts>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccounts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsFromJSON(jsonValue));
    }

    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh services repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts
     */
    async refreshCustomerAccounts(requestParameters: RefreshCustomerAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccounts> {
        const response = await this.refreshCustomerAccountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID
     */
    async refreshCustomerAccountsByInstitutionLoginRaw(requestParameters: RefreshCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccounts>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsByInstitutionLogin.');
        }

        if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
            throw new runtime.RequiredError('institutionLoginId','Required parameter requestParameters.institutionLoginId was null or undefined when calling refreshCustomerAccountsByInstitutionLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsFromJSON(jsonValue));
    }

    /**
     * Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID
     */
    async refreshCustomerAccountsByInstitutionLogin(requestParameters: RefreshCustomerAccountsByInstitutionLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccounts> {
        const response = await this.refreshCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh account and transaction data for all accounts associated with a given \'institutionLoginId` with a connection to the institution. Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID for Dynamic Billing
     */
    async refreshCustomerAccountsByInstitutionLoginV2Raw(requestParameters: RefreshCustomerAccountsByInstitutionLoginV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsByInstitutionLoginV2.');
        }

        if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
            throw new runtime.RequiredError('institutionLoginId','Required parameter requestParameters.institutionLoginId was null or undefined when calling refreshCustomerAccountsByInstitutionLoginV2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Refresh account and transaction data for all accounts associated with a given \'institutionLoginId` with a connection to the institution. Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID for Dynamic Billing
     */
    async refreshCustomerAccountsByInstitutionLoginV2(requestParameters: RefreshCustomerAccountsByInstitutionLoginV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.refreshCustomerAccountsByInstitutionLoginV2Raw(requestParameters, initOverrides);
    }

    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts For Dynamic Billing
     */
    async refreshCustomerAccountsV2Raw(requestParameters: RefreshCustomerAccountsV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsV2.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v2/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts For Dynamic Billing
     */
    async refreshCustomerAccountsV2(requestParameters: RefreshCustomerAccountsV2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.refreshCustomerAccountsV2Raw(requestParameters, initOverrides);
    }

}
