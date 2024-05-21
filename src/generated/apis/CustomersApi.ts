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
  CreatedCustomer,
  Customer,
  CustomerUpdate,
  CustomerWithAppData,
  Customers,
  ErrorMessage,
  NewCustomer,
} from '../models/index';
import {
    CreatedCustomerFromJSON,
    CreatedCustomerToJSON,
    CustomerFromJSON,
    CustomerToJSON,
    CustomerUpdateFromJSON,
    CustomerUpdateToJSON,
    CustomerWithAppDataFromJSON,
    CustomerWithAppDataToJSON,
    CustomersFromJSON,
    CustomersToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    NewCustomerFromJSON,
    NewCustomerToJSON,
} from '../models/index';

export interface AddCustomerRequest {
    newCustomer: NewCustomer;
}

export interface AddTestingCustomerRequest {
    newCustomer: NewCustomer;
}

export interface DeleteCustomerRequest {
    customerId: string;
}

export interface GetCustomerRequest {
    customerId: string;
}

export interface GetCustomerWithAppDataRequest {
    customerId: string;
}

export interface GetCustomersRequest {
    username?: string;
    type?: string;
    search?: string;
    start?: number;
    limit?: number;
}

export interface ModifyCustomerRequest {
    customerId: string;
    customerUpdate: CustomerUpdate;
}

/**
 * 
 */
export class CustomersApi extends runtime.BaseAPI {

    /**
     * Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.  Active customers must use the \"FinBank Billable\" profiles for testing purposes.   _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Add Customer
     */
    async addCustomerRaw(requestParameters: AddCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedCustomer>> {
        if (requestParameters.newCustomer === null || requestParameters.newCustomer === undefined) {
            throw new runtime.RequiredError('newCustomer','Required parameter requestParameters.newCustomer was null or undefined when calling addCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v2/customers/active`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewCustomerToJSON(requestParameters.newCustomer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatedCustomerFromJSON(jsonValue));
    }

    /**
     * Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.  Active customers must use the \"FinBank Billable\" profiles for testing purposes.   _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Add Customer
     */
    async addCustomer(requestParameters: AddCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedCustomer> {
        const response = await this.addCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Enroll a testing customer (Test Drive accounts).  For using testing customers with FinBank OAuth, you must register a test application with your systems engineer or account manager. Then, use that testing `applicationId` when creating testing customers.  Testing Customers can access FinBank profiles (except \"FinBank Billable\" profiles), and cannot access live financial institutions.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Add Testing Customer
     */
    async addTestingCustomerRaw(requestParameters: AddTestingCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedCustomer>> {
        if (requestParameters.newCustomer === null || requestParameters.newCustomer === undefined) {
            throw new runtime.RequiredError('newCustomer','Required parameter requestParameters.newCustomer was null or undefined when calling addTestingCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v2/customers/testing`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewCustomerToJSON(requestParameters.newCustomer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatedCustomerFromJSON(jsonValue));
    }

    /**
     * Enroll a testing customer (Test Drive accounts).  For using testing customers with FinBank OAuth, you must register a test application with your systems engineer or account manager. Then, use that testing `applicationId` when creating testing customers.  Testing Customers can access FinBank profiles (except \"FinBank Billable\" profiles), and cannot access live financial institutions.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Add Testing Customer
     */
    async addTestingCustomer(requestParameters: AddTestingCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedCustomer> {
        const response = await this.addTestingCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Completely remove a customer from the system. This will remove the customer and all associated accounts and transactions.  âš ï¸ Use this service carefully! It will not pause for confirmation before performing the operation!  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer by ID
     */
    async deleteCustomerRaw(requestParameters: DeleteCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling deleteCustomer.');
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
            path: `/aggregation/v1/customers/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Completely remove a customer from the system. This will remove the customer and all associated accounts and transactions.  âš ï¸ Use this service carefully! It will not pause for confirmation before performing the operation!  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer by ID
     */
    async deleteCustomer(requestParameters: DeleteCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomerRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a customer by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer by ID
     */
    async getCustomerRaw(requestParameters: GetCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomer.');
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
            path: `/aggregation/v1/customers/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Retrieve a customer by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer by ID
     */
    async getCustomer(requestParameters: GetCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.getCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a customer along with additional details about the OAuth application.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer With App Data by ID
     */
    async getCustomerWithAppDataRaw(requestParameters: GetCustomerWithAppDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerWithAppData>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerWithAppData.');
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
            path: `/aggregation/v1/customers/{customerId}/application`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerWithAppDataFromJSON(jsonValue));
    }

    /**
     * Retrieve a customer along with additional details about the OAuth application.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer With App Data by ID
     */
    async getCustomerWithAppData(requestParameters: GetCustomerWithAppDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerWithAppData> {
        const response = await this.getCustomerWithAppDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Find all customers enrolled by the current partner, where the search text is found in the customer\'s username or any combination of `firstName` and `lastName` fields. If no search text is provided, all customers will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customers
     */
    async getCustomersRaw(requestParameters: GetCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customers>> {
        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomersFromJSON(jsonValue));
    }

    /**
     * Find all customers enrolled by the current partner, where the search text is found in the customer\'s username or any combination of `firstName` and `lastName` fields. If no search text is provided, all customers will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customers
     */
    async getCustomers(requestParameters: GetCustomersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customers> {
        const response = await this.getCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modify an enrolled customer by ID.  You must specify either `firstName`, `lastName`, or both in the request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Modify Customer by ID
     */
    async modifyCustomerRaw(requestParameters: ModifyCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling modifyCustomer.');
        }

        if (requestParameters.customerUpdate === null || requestParameters.customerUpdate === undefined) {
            throw new runtime.RequiredError('customerUpdate','Required parameter requestParameters.customerUpdate was null or undefined when calling modifyCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/aggregation/v1/customers/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerUpdateToJSON(requestParameters.customerUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Modify an enrolled customer by ID.  You must specify either `firstName`, `lastName`, or both in the request.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Modify Customer by ID
     */
    async modifyCustomer(requestParameters: ModifyCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.modifyCustomerRaw(requestParameters, initOverrides);
    }

}
