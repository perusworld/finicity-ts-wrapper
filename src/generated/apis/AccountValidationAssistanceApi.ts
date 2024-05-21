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
  InitiatedMicroDeposit,
  MicroDepositDetails,
  MicroDepositInitiation,
  MicroDepositVerification,
  MicroDepositVerificationError,
  VerifiedMicroDeposit,
} from '../models/index';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    InitiatedMicroDepositFromJSON,
    InitiatedMicroDepositToJSON,
    MicroDepositDetailsFromJSON,
    MicroDepositDetailsToJSON,
    MicroDepositInitiationFromJSON,
    MicroDepositInitiationToJSON,
    MicroDepositVerificationFromJSON,
    MicroDepositVerificationToJSON,
    MicroDepositVerificationErrorFromJSON,
    MicroDepositVerificationErrorToJSON,
    VerifiedMicroDepositFromJSON,
    VerifiedMicroDepositToJSON,
} from '../models/index';

export interface GetMicroDepositsDetailsRequest {
    customerId: string;
    accountId: string;
}

export interface InitiateMicroAmountDepositsRequest {
    customerId: string;
    microDepositInitiation: MicroDepositInitiation;
}

export interface VerifyMicroAmountDepositsRequest {
    customerId: string;
    accountId: string;
    microDepositVerification: MicroDepositVerification;
}

/**
 * 
 */
export class AccountValidationAssistanceApi extends runtime.BaseAPI {

    /**
     * Fetch the micro entries details. `customerId` and `accountId` are the identifiers of the customer and account receiving the micro entries.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Micro Entries Details
     */
    async getMicroDepositsDetailsRaw(requestParameters: GetMicroDepositsDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MicroDepositDetails>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getMicroDepositsDetails.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getMicroDepositsDetails.');
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
            path: `/microentry/v1/customers/{customerId}/accounts/{accountId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MicroDepositDetailsFromJSON(jsonValue));
    }

    /**
     * Fetch the micro entries details. `customerId` and `accountId` are the identifiers of the customer and account receiving the micro entries.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Micro Entries Details
     */
    async getMicroDepositsDetails(requestParameters: GetMicroDepositsDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MicroDepositDetails> {
        const response = await this.getMicroDepositsDetailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Initiate the micro entries to customer\'s account.  Two random micro amounts less than a dollar each will be deposited to provided customer\'s account.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Initiate Micro Entries
     */
    async initiateMicroAmountDepositsRaw(requestParameters: InitiateMicroAmountDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InitiatedMicroDeposit>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling initiateMicroAmountDeposits.');
        }

        if (requestParameters.microDepositInitiation === null || requestParameters.microDepositInitiation === undefined) {
            throw new runtime.RequiredError('microDepositInitiation','Required parameter requestParameters.microDepositInitiation was null or undefined when calling initiateMicroAmountDeposits.');
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
            path: `/microentry/v1/customers/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MicroDepositInitiationToJSON(requestParameters.microDepositInitiation),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InitiatedMicroDepositFromJSON(jsonValue));
    }

    /**
     * Initiate the micro entries to customer\'s account.  Two random micro amounts less than a dollar each will be deposited to provided customer\'s account.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Initiate Micro Entries
     */
    async initiateMicroAmountDeposits(requestParameters: InitiateMicroAmountDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InitiatedMicroDeposit> {
        const response = await this.initiateMicroAmountDepositsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Verify the micro entries as received by customer in customer\'s account. Customer needs to verify the micro amounts received in customer\'s account. `customerId` and `accountId` are the identifiers of the customer and account  receiving the micro entries.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Verify Micro Entries
     */
    async verifyMicroAmountDepositsRaw(requestParameters: VerifyMicroAmountDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifiedMicroDeposit>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling verifyMicroAmountDeposits.');
        }

        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling verifyMicroAmountDeposits.');
        }

        if (requestParameters.microDepositVerification === null || requestParameters.microDepositVerification === undefined) {
            throw new runtime.RequiredError('microDepositVerification','Required parameter requestParameters.microDepositVerification was null or undefined when calling verifyMicroAmountDeposits.');
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
            path: `/microentry/v1/customers/{customerId}/accounts/{accountId}/amounts`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MicroDepositVerificationToJSON(requestParameters.microDepositVerification),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifiedMicroDepositFromJSON(jsonValue));
    }

    /**
     * Verify the micro entries as received by customer in customer\'s account. Customer needs to verify the micro amounts received in customer\'s account. `customerId` and `accountId` are the identifiers of the customer and account  receiving the micro entries.    _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Verify Micro Entries
     */
    async verifyMicroAmountDeposits(requestParameters: VerifyMicroAmountDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifiedMicroDeposit> {
        const response = await this.verifyMicroAmountDepositsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}