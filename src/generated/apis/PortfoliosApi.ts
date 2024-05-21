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
  ErrorMessage,
  PortfolioSummary,
  PortfolioWithConsumerSummary,
} from '../models/index';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    PortfolioSummaryFromJSON,
    PortfolioSummaryToJSON,
    PortfolioWithConsumerSummaryFromJSON,
    PortfolioWithConsumerSummaryToJSON,
} from '../models/index';

export interface GetPortfolioByConsumerRequest {
    consumerId: string;
    portfolioId: string;
}

export interface GetPortfolioByCustomerRequest {
    customerId: string;
    portfolioId: string;
}

/**
 * 
 */
export class PortfoliosApi extends runtime.BaseAPI {

    /**
     * Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Consumer
     */
    async getPortfolioByConsumerRaw(requestParameters: GetPortfolioByConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PortfolioWithConsumerSummary>> {
        if (requestParameters.consumerId === null || requestParameters.consumerId === undefined) {
            throw new runtime.RequiredError('consumerId','Required parameter requestParameters.consumerId was null or undefined when calling getPortfolioByConsumer.');
        }

        if (requestParameters.portfolioId === null || requestParameters.portfolioId === undefined) {
            throw new runtime.RequiredError('portfolioId','Required parameter requestParameters.portfolioId was null or undefined when calling getPortfolioByConsumer.');
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
            path: `/decisioning/v1/consumers/{consumerId}/portfolios/{portfolioId}`.replace(`{${"consumerId"}}`, encodeURIComponent(String(requestParameters.consumerId))).replace(`{${"portfolioId"}}`, encodeURIComponent(String(requestParameters.portfolioId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PortfolioWithConsumerSummaryFromJSON(jsonValue));
    }

    /**
     * Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Consumer
     */
    async getPortfolioByConsumer(requestParameters: GetPortfolioByConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PortfolioWithConsumerSummary> {
        const response = await this.getPortfolioByConsumerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png) 
     * Get Portfolio by Customer
     */
    async getPortfolioByCustomerRaw(requestParameters: GetPortfolioByCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PortfolioSummary>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getPortfolioByCustomer.');
        }

        if (requestParameters.portfolioId === null || requestParameters.portfolioId === undefined) {
            throw new runtime.RequiredError('portfolioId','Required parameter requestParameters.portfolioId was null or undefined when calling getPortfolioByCustomer.');
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
            path: `/decisioning/v1/customers/{customerId}/portfolios/{portfolioId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"portfolioId"}}`, encodeURIComponent(String(requestParameters.portfolioId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PortfolioSummaryFromJSON(jsonValue));
    }

    /**
     * Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png) 
     * Get Portfolio by Customer
     */
    async getPortfolioByCustomer(requestParameters: GetPortfolioByCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PortfolioSummary> {
        const response = await this.getPortfolioByCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}