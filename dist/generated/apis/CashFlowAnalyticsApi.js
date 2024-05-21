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
exports.CashFlowAnalyticsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class CashFlowAnalyticsApi extends runtime.BaseAPI {
    /**
     * Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Average transaction value by month over the requested time period * Net cash flow over the requested time period and broken down by month * Count and report of weeks in the requested time period where there   were zero transactions posted to the customer\'s accounts  * Minimum/maximum/average/sum/count of deposits by month * Minimum/maximum/average/sum/count of withdrawals by month * Estimated amount of deposits that can be classified as business   revenue  * Number of transactions posted incurring a non-sufficient funds (NSF)   fee, and net amount charged in NSF fees   This version of the API is intended for piloting and integration testing your application with the Cash Flow Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Cash Flow Analytics - FCRA_ for the FCRA compliant version of this API.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report_ (operation: _GetCashFlowAnalyticsReport_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Cash Flow Analytics
     */
    generateCashFlowAnalyticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling generateCashFlowAnalytics.');
            }
            if (requestParameters.balanceAndCashFlowAnalyticsReportConstraints === null || requestParameters.balanceAndCashFlowAnalyticsReportConstraints === undefined) {
                throw new runtime.RequiredError('balanceAndCashFlowAnalyticsReportConstraints', 'Required parameter requestParameters.balanceAndCashFlowAnalyticsReportConstraints was null or undefined when calling generateCashFlowAnalytics.');
            }
            const queryParameters = {};
            if (requestParameters.referenceNumber !== undefined) {
                queryParameters['reference-number'] = requestParameters.referenceNumber;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/analytics/cashflow/v1/customer/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.BalanceAndCashFlowAnalyticsReportConstraintsToJSON)(requestParameters.balanceAndCashFlowAnalyticsReportConstraints),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ObbAnalyticsReportAckFromJSON)(jsonValue));
        });
    }
    /**
     * Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Average transaction value by month over the requested time period * Net cash flow over the requested time period and broken down by month * Count and report of weeks in the requested time period where there   were zero transactions posted to the customer\'s accounts  * Minimum/maximum/average/sum/count of deposits by month * Minimum/maximum/average/sum/count of withdrawals by month * Estimated amount of deposits that can be classified as business   revenue  * Number of transactions posted incurring a non-sufficient funds (NSF)   fee, and net amount charged in NSF fees   This version of the API is intended for piloting and integration testing your application with the Cash Flow Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Cash Flow Analytics - FCRA_ for the FCRA compliant version of this API.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report_ (operation: _GetCashFlowAnalyticsReport_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Cash Flow Analytics
     */
    generateCashFlowAnalytics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.generateCashFlowAnalyticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Average transaction value by month over the requested time period * Net cash flow over the requested time period and broken down by month * Count and report of weeks in the requested time period where there   were zero transactions posted to the customer\'s accounts  * Minimum/maximum/average/sum/count of deposits by month * Minimum/maximum/average/sum/count of withdrawals by month * Estimated amount of deposits that can be classified as business   revenue  * Number of transactions posted incurring a non-sufficient funds (NSF)   fee, and net amount charged in NSF fees   This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report - FCRA_ (operation: _GetCashFlowAnalyticsReportFCRA_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Cash Flow Analytics - FCRA
     */
    generateCashFlowAnalyticsFcraRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling generateCashFlowAnalyticsFcra.');
            }
            if (requestParameters.balanceAndCashFlowAnalyticsReportConstraints === null || requestParameters.balanceAndCashFlowAnalyticsReportConstraints === undefined) {
                throw new runtime.RequiredError('balanceAndCashFlowAnalyticsReportConstraints', 'Required parameter requestParameters.balanceAndCashFlowAnalyticsReportConstraints was null or undefined when calling generateCashFlowAnalyticsFcra.');
            }
            const queryParameters = {};
            if (requestParameters.referenceNumber !== undefined) {
                queryParameters['reference-number'] = requestParameters.referenceNumber;
            }
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/analytics/cashflow/v1/customer/{customerId}/fcra`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.BalanceAndCashFlowAnalyticsReportConstraintsToJSON)(requestParameters.balanceAndCashFlowAnalyticsReportConstraints),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ObbAnalyticsReportAckFromJSON)(jsonValue));
        });
    }
    /**
     * Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.  Calculated metrics include: * Average transaction value by month over the requested time period * Net cash flow over the requested time period and broken down by month * Count and report of weeks in the requested time period where there   were zero transactions posted to the customer\'s accounts  * Minimum/maximum/average/sum/count of deposits by month * Minimum/maximum/average/sum/count of withdrawals by month * Estimated amount of deposits that can be classified as business   revenue  * Number of transactions posted incurring a non-sufficient funds (NSF)   fee, and net amount charged in NSF fees   This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report - FCRA_ (operation: _GetCashFlowAnalyticsReportFCRA_).  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Generate Cash Flow Analytics - FCRA
     */
    generateCashFlowAnalyticsFcra(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.generateCashFlowAnalyticsFcraRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    getObbAnalyticsReportRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.obbReportId === null || requestParameters.obbReportId === undefined) {
                throw new runtime.RequiredError('obbReportId', 'Required parameter requestParameters.obbReportId was null or undefined when calling getObbAnalyticsReport.');
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
                path: `/analytics/data/v1/{obb_report_id}`.replace(`{${"obb_report_id"}}`, encodeURIComponent(String(requestParameters.obbReportId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ObbAnalyticsReportFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report
     */
    getObbAnalyticsReport(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getObbAnalyticsReportRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    getObbAnalyticsReportFcraRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.obbReportId === null || requestParameters.obbReportId === undefined) {
                throw new runtime.RequiredError('obbReportId', 'Required parameter requestParameters.obbReportId was null or undefined when calling getObbAnalyticsReportFcra.');
            }
            if (requestParameters.purpose === null || requestParameters.purpose === undefined) {
                throw new runtime.RequiredError('purpose', 'Required parameter requestParameters.purpose was null or undefined when calling getObbAnalyticsReportFcra.');
            }
            const queryParameters = {};
            if (requestParameters.purpose !== undefined) {
                queryParameters['purpose'] = requestParameters.purpose;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/analytics/data/v1/{obb_report_id}/fcra`.replace(`{${"obb_report_id"}}`, encodeURIComponent(String(requestParameters.obbReportId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ObbAnalyticsReportFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.  Report data can either be retrieved as a JSON document or PDF file.  *Note:* this is a premium service, billable per every successful API call for non-testing customers.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get OBB Analytics Report - FCRA
     */
    getObbAnalyticsReportFcra(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getObbAnalyticsReportFcraRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.CashFlowAnalyticsApi = CashFlowAnalyticsApi;
//# sourceMappingURL=CashFlowAnalyticsApi.js.map