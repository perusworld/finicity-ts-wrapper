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
  ObbAnalyticsReport,
  ObbAnalyticsReportAck,
  ObbErrorMessage,
} from '../models/index';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    ObbAnalyticsReportFromJSON,
    ObbAnalyticsReportToJSON,
    ObbAnalyticsReportAckFromJSON,
    ObbAnalyticsReportAckToJSON,
    ObbErrorMessageFromJSON,
    ObbErrorMessageToJSON,
} from '../models/index';
import { GetObbAnalyticsReportFcraRequest, GetObbAnalyticsReportRequest } from './common';

export interface GeneratePaymentHistoryRequest {
    customerId: string;
    referenceNumber?: string;
}

export interface GeneratePaymentHistoryFcraRequest {
    customerId: string;
    referenceNumber?: string;
}

/**
 * 
 */
export class PaymentHistoryApi extends runtime.BaseAPI {

    /**
     * Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.  Some of the highlights of calculated risk present in the report include: * Risk Score representing the likelihood of a missed payment   based on analysis of permissioned open-banking data  * Monthly average balance for all accounts by month in the requested   time period  * Total deposit amount by month for all accounts in the requested time   period  * Total withdrawal amounts by month for all accounts in the requested   time period  * Number of NSF counts and aggregate amount per month in the requested   time period  * Recurring loan payment amounts per month in the requested time period * Insurance payment amount per month in the requested time period * Tax payment amounts per month in the requested time period  This version of the API is intended for piloting and integration testing your application with the Payment History product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Payment History - FCRA_ for the FCRA compliant version of this API.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report_ (operation: _GetObbAnalyticsReport_). *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Payment History
     */
    async generatePaymentHistoryRaw(requestParameters: GeneratePaymentHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReportAck>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling generatePaymentHistory.');
        }

        const queryParameters: any = {};

        if (requestParameters.referenceNumber !== undefined) {
            queryParameters['reference-number'] = requestParameters.referenceNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/analytics/payment-history/v1/customer/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ObbAnalyticsReportAckFromJSON(jsonValue));
    }

    /**
     * Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.  Some of the highlights of calculated risk present in the report include: * Risk Score representing the likelihood of a missed payment   based on analysis of permissioned open-banking data  * Monthly average balance for all accounts by month in the requested   time period  * Total deposit amount by month for all accounts in the requested time   period  * Total withdrawal amounts by month for all accounts in the requested   time period  * Number of NSF counts and aggregate amount per month in the requested   time period  * Recurring loan payment amounts per month in the requested time period * Insurance payment amount per month in the requested time period * Tax payment amounts per month in the requested time period  This version of the API is intended for piloting and integration testing your application with the Payment History product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Payment History - FCRA_ for the FCRA compliant version of this API.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report_ (operation: _GetObbAnalyticsReport_). *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Payment History
     */
    async generatePaymentHistory(requestParameters: GeneratePaymentHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReportAck> {
        const response = await this.generatePaymentHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.  Some of the highlights of calculated risk present in the report include: * Risk Score representing the likelihood of a missed payment   based on analysis of permissioned open-banking data  * Monthly average balance for all accounts by month in the requested   time period  * Total deposit amount by month for all accounts in the requested time   period  * Total withdrawal amounts by month for all accounts in the requested   time period  * Number of NSF counts and aggregate amount per month in the requested   time period  * Recurring loan payment amounts per month in the requested time period * Insurance payment amount per month in the requested time period * Tax payment amounts per month in the requested time period  This version of the API is intended for production use. It maintains and  enforces all compliance iwth FCRA rules and requirements.   *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report - FCRA_  (operation: _GetObbAnalyticsReportFcra_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Payment History - FCRA
     */
    async generatePaymentHistoryFcraRaw(requestParameters: GeneratePaymentHistoryFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReportAck>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling generatePaymentHistoryFcra.');
        }

        const queryParameters: any = {};

        if (requestParameters.referenceNumber !== undefined) {
            queryParameters['reference-number'] = requestParameters.referenceNumber;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/analytics/payment-history/v1/customer/{customerId}/fcra`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ObbAnalyticsReportAckFromJSON(jsonValue));
    }

    /**
     * Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.  Some of the highlights of calculated risk present in the report include: * Risk Score representing the likelihood of a missed payment   based on analysis of permissioned open-banking data  * Monthly average balance for all accounts by month in the requested   time period  * Total deposit amount by month for all accounts in the requested time   period  * Total withdrawal amounts by month for all accounts in the requested   time period  * Number of NSF counts and aggregate amount per month in the requested   time period  * Recurring loan payment amounts per month in the requested time period * Insurance payment amount per month in the requested time period * Tax payment amounts per month in the requested time period  This version of the API is intended for production use. It maintains and  enforces all compliance iwth FCRA rules and requirements.   *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report - FCRA_  (operation: _GetObbAnalyticsReportFcra_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Payment History - FCRA
     */
    async generatePaymentHistoryFcra(requestParameters: GeneratePaymentHistoryFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReportAck> {
        const response = await this.generatePaymentHistoryFcraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    async getObbAnalyticsReportRaw(requestParameters: GetObbAnalyticsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReport>> {
        if (requestParameters.obbReportId === null || requestParameters.obbReportId === undefined) {
            throw new runtime.RequiredError('obbReportId','Required parameter requestParameters.obbReportId was null or undefined when calling getObbAnalyticsReport.');
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
            path: `/analytics/data/v1/{obb_report_id}`.replace(`{${"obb_report_id"}}`, encodeURIComponent(String(requestParameters.obbReportId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ObbAnalyticsReportFromJSON(jsonValue));
    }

    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    async getObbAnalyticsReport(requestParameters: GetObbAnalyticsReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReport> {
        const response = await this.getObbAnalyticsReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    async getObbAnalyticsReportFcraRaw(requestParameters: GetObbAnalyticsReportFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ObbAnalyticsReport>> {
        if (requestParameters.obbReportId === null || requestParameters.obbReportId === undefined) {
            throw new runtime.RequiredError('obbReportId','Required parameter requestParameters.obbReportId was null or undefined when calling getObbAnalyticsReportFcra.');
        }

        if (requestParameters.purpose === null || requestParameters.purpose === undefined) {
            throw new runtime.RequiredError('purpose','Required parameter requestParameters.purpose was null or undefined when calling getObbAnalyticsReportFcra.');
        }

        const queryParameters: any = {};

        if (requestParameters.purpose !== undefined) {
            queryParameters['purpose'] = requestParameters.purpose;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
        }

        const response = await this.request({
            path: `/analytics/data/v1/{obb_report_id}/fcra`.replace(`{${"obb_report_id"}}`, encodeURIComponent(String(requestParameters.obbReportId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ObbAnalyticsReportFromJSON(jsonValue));
    }

    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    async getObbAnalyticsReportFcra(requestParameters: GetObbAnalyticsReportFcraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ObbAnalyticsReport> {
        const response = await this.getObbAnalyticsReportFcraRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
