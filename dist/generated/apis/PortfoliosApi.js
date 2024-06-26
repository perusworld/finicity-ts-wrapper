"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfoliosApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PortfoliosApi extends runtime.BaseAPI {
    /**
     * Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Consumer
     */
    getPortfolioByConsumerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.consumerId === null || requestParameters.consumerId === undefined) {
                throw new runtime.RequiredError('consumerId', 'Required parameter requestParameters.consumerId was null or undefined when calling getPortfolioByConsumer.');
            }
            if (requestParameters.portfolioId === null || requestParameters.portfolioId === undefined) {
                throw new runtime.RequiredError('portfolioId', 'Required parameter requestParameters.portfolioId was null or undefined when calling getPortfolioByConsumer.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/decisioning/v1/consumers/{consumerId}/portfolios/{portfolioId}`.replace(`{${"consumerId"}}`, encodeURIComponent(String(requestParameters.consumerId))).replace(`{${"portfolioId"}}`, encodeURIComponent(String(requestParameters.portfolioId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PortfolioWithConsumerSummaryFromJSON)(jsonValue));
        });
    }
    /**
     * Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Consumer
     */
    getPortfolioByConsumer(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPortfolioByConsumerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Customer
     */
    getPortfolioByCustomerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling getPortfolioByCustomer.');
            }
            if (requestParameters.portfolioId === null || requestParameters.portfolioId === undefined) {
                throw new runtime.RequiredError('portfolioId', 'Required parameter requestParameters.portfolioId was null or undefined when calling getPortfolioByCustomer.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/decisioning/v1/customers/{customerId}/portfolios/{portfolioId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"portfolioId"}}`, encodeURIComponent(String(requestParameters.portfolioId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PortfolioSummaryFromJSON)(jsonValue));
        });
    }
    /**
     * Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Portfolio by Customer
     */
    getPortfolioByCustomer(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPortfolioByCustomerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PortfoliosApi = PortfoliosApi;
//# sourceMappingURL=PortfoliosApi.js.map