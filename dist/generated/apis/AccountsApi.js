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
exports.AccountsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class AccountsApi extends runtime.BaseAPI {
    /**
     * Remove the given account from Finicity aggregation.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Account by ID
     */
    deleteCustomerAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling deleteCustomerAccount.');
            }
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling deleteCustomerAccount.');
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
                path: `/aggregation/v1/customers/{customerId}/accounts/{accountId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Remove the given account from Finicity aggregation.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Account by ID
     */
    deleteCustomerAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCustomerAccountRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Remove from Finicity aggregation the set of accounts matching the institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Accounts by Institution Login ID
     */
    deleteCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling deleteCustomerAccountsByInstitutionLogin.');
            }
            if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
                throw new runtime.RequiredError('institutionLoginId', 'Required parameter requestParameters.institutionLoginId was null or undefined when calling deleteCustomerAccountsByInstitutionLogin.');
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
                path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Remove from Finicity aggregation the set of accounts matching the institution login ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Delete Customer Accounts by Institution Login ID
     */
    deleteCustomerAccountsByInstitutionLogin(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get a customer account by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID
     */
    getCustomerAccountRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccount.');
            }
            if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling getCustomerAccount.');
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
                path: `/aggregation/v2/customers/{customerId}/accounts/{accountId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountFromJSON)(jsonValue));
        });
    }
    /**
     * Get a customer account by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Account by ID
     */
    getCustomerAccount(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerAccountRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all accounts owned by the given customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts
     */
    getCustomerAccountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccounts.');
            }
            const queryParameters = {};
            if (requestParameters.status !== undefined) {
                queryParameters['status'] = requestParameters.status;
            }
            if (requestParameters.accountType !== undefined) {
                queryParameters['account_type'] = requestParameters.accountType;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Token"] = this.configuration.apiKey("Finicity-App-Token"); // FinicityAppToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Finicity-App-Key"] = this.configuration.apiKey("Finicity-App-Key"); // FinicityAppKey authentication
            }
            const response = yield this.request({
                path: `/aggregation/v1/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all accounts owned by the given customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts
     */
    getCustomerAccounts(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerAccountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID
     */
    getCustomerAccountsByInstitutionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitution.');
            }
            if (requestParameters.institutionId === null || requestParameters.institutionId === undefined) {
                throw new runtime.RequiredError('institutionId', 'Required parameter requestParameters.institutionId was null or undefined when calling getCustomerAccountsByInstitution.');
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
                path: `/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionId"}}`, encodeURIComponent(String(requestParameters.institutionId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all active accounts owned by the given customer at the given institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution ID
     */
    getCustomerAccountsByInstitution(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerAccountsByInstitutionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID
     */
    getCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling getCustomerAccountsByInstitutionLogin.');
            }
            if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
                throw new runtime.RequiredError('institutionLoginId', 'Required parameter requestParameters.institutionLoginId was null or undefined when calling getCustomerAccountsByInstitutionLogin.');
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
                path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Customer Accounts by Institution Login ID
     */
    getCustomerAccountsByInstitutionLogin(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh services repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts
     */
    refreshCustomerAccountsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccounts.');
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
                path: `/aggregation/v1/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh services repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts
     */
    refreshCustomerAccounts(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.refreshCustomerAccountsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID
     */
    refreshCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsByInstitutionLogin.');
            }
            if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
                throw new runtime.RequiredError('institutionLoginId', 'Required parameter requestParameters.institutionLoginId was null or undefined when calling refreshCustomerAccountsByInstitutionLogin.');
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
                path: `/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CustomerAccountsFromJSON)(jsonValue));
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.  Note: This service is not available for all tiers of dynamic billing.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID
     */
    refreshCustomerAccountsByInstitutionLogin(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.refreshCustomerAccountsByInstitutionLoginRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with a given \'institutionLoginId` with a connection to the institution. Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID for Dynamic Billing
     */
    refreshCustomerAccountsByInstitutionLoginV2Raw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsByInstitutionLoginV2.');
            }
            if (requestParameters.institutionLoginId === null || requestParameters.institutionLoginId === undefined) {
                throw new runtime.RequiredError('institutionLoginId', 'Required parameter requestParameters.institutionLoginId was null or undefined when calling refreshCustomerAccountsByInstitutionLoginV2.');
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
                path: `/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"institutionLoginId"}}`, encodeURIComponent(String(requestParameters.institutionLoginId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with a given \'institutionLoginId` with a connection to the institution. Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.  Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts by Institution Login ID for Dynamic Billing
     */
    refreshCustomerAccountsByInstitutionLoginV2(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshCustomerAccountsByInstitutionLoginV2Raw(requestParameters, initOverrides);
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts For Dynamic Billing
     */
    refreshCustomerAccountsV2Raw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
                throw new runtime.RequiredError('customerId', 'Required parameter requestParameters.customerId was null or undefined when calling refreshCustomerAccountsV2.');
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
                path: `/aggregation/v2/customers/{customerId}/accounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.  Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.  Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Refresh Customer Accounts For Dynamic Billing
     */
    refreshCustomerAccountsV2(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshCustomerAccountsV2Raw(requestParameters, initOverrides);
        });
    }
}
exports.AccountsApi = AccountsApi;
//# sourceMappingURL=AccountsApi.js.map