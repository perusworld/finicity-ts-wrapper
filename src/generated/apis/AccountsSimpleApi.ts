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
  CustomerAccountSimple,
  CustomerAccountsSimple,
  ErrorMessage,
} from '../models/index';
import {
    CustomerAccountSimpleFromJSON,
    CustomerAccountSimpleToJSON,
    CustomerAccountsSimpleFromJSON,
    CustomerAccountsSimpleToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
} from '../models/index';

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
export class AccountsSimpleApi extends runtime.BaseAPI {

    /**
     * This API is a lighter version of Get Customer Accounts by ID, returning only basic information of a customer account.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID (Simple)
     */
    async getCustomerAccountSimpleRaw(requestParameters: GetCustomerAccountSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountSimple>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountSimple.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getCustomerAccountSimple.');
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
            path: `/aggregation/v1/customers/{customerId}/accounts/{accountId}/simple`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountSimpleFromJSON(jsonValue));
    }

    /**
     * This API is a lighter version of Get Customer Accounts by ID, returning only basic information of a customer account.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID (Simple)
     */
    async getCustomerAccountSimple(requestParameters: GetCustomerAccountSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountSimple> {
        const response = await this.getCustomerAccountSimpleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is a lighter version of Get Customer Accounts by Institution Login ID, returning only basic information of all active accounts owned by the given customer at the given institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID (Simple)
     */
    async getCustomerAccountsByInstitutionLoginSimpleRaw(requestParameters: GetCustomerAccountsByInstitutionLoginSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitutionLoginSimple.');
        }

        if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
            throw new runtime.RequiredError('institutionLoginId','Required parameter requestParameters.institutionLoginId was null or undefined when calling getCustomerAccountsByInstitutionLoginSimple.');
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
            path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts/simple`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsSimpleFromJSON(jsonValue));
    }

    /**
     * This API is a lighter version of Get Customer Accounts by Institution Login ID, returning only basic information of all active accounts owned by the given customer at the given institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID (Simple)
     */
    async getCustomerAccountsByInstitutionLoginSimple(requestParameters: GetCustomerAccountsByInstitutionLoginSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple> {
        const response = await this.getCustomerAccountsByInstitutionLoginSimpleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is a lighter version of Get Customer Accounts by Institution ID, returning only basic information of active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID (Simple)
     */
    async getCustomerAccountsByInstitutionSimpleRaw(requestParameters: GetCustomerAccountsByInstitutionSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitutionSimple.');
        }

        if (requestParameters.institutionId === null || requestParameters.institutionId === undefined) {
            throw new runtime.RequiredError('institutionId','Required parameter requestParameters.institutionId was null or undefined when calling getCustomerAccountsByInstitutionSimple.');
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
            path: `/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts/simple`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionId"}}`, encodeURIComponent(String(requestParameters.institutionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsSimpleFromJSON(jsonValue));
    }

    /**
     * This API is a lighter version of Get Customer Accounts by Institution ID, returning only basic information of active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID (Simple)
     */
    async getCustomerAccountsByInstitutionSimple(requestParameters: GetCustomerAccountsByInstitutionSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple> {
        const response = await this.getCustomerAccountsByInstitutionSimpleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This API is a lighter version of Get Customer Accounts, returning only basic information of all active customer accounts.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts (Simple)
     */
    async getCustomerAccountsSimpleRaw(requestParameters: GetCustomerAccountsSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerAccountsSimple>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsSimple.');
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
            path: `/aggregation/v1/customers/{customerId}/accounts/simple`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerAccountsSimpleFromJSON(jsonValue));
    }

    /**
     * This API is a lighter version of Get Customer Accounts, returning only basic information of all active customer accounts.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts (Simple)
     */
    async getCustomerAccountsSimple(requestParameters: GetCustomerAccountsSimpleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerAccountsSimple> {
        const response = await this.getCustomerAccountsSimpleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}