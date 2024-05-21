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
  ThirdPartyAccessKeyData,
  ThirdPartyAccessKeyReceiptData,
} from '../models/index';
import {
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    ThirdPartyAccessKeyDataFromJSON,
    ThirdPartyAccessKeyDataToJSON,
    ThirdPartyAccessKeyReceiptDataFromJSON,
    ThirdPartyAccessKeyReceiptDataToJSON,
} from '../models/index';

export interface GenerateThirdPartyAccessKeyRequest {
    thirdPartyAccessKeyData: ThirdPartyAccessKeyData;
}

export interface RevokeThirdPartyAccessKeyRequest {
    consentReceiptId: string;
}

export interface UpdateThirdPartyAccessKeyRequest {
    consentReceiptId: string;
    thirdPartyAccessKeyData: ThirdPartyAccessKeyData;
}

/**
 * 
 */
export class ThirdPartyAccessApi extends runtime.BaseAPI {

    /**
     * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
     * Generate Third Party Access Key
     */
    async generateThirdPartyAccessKeyRaw(requestParameters: GenerateThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThirdPartyAccessKeyReceiptData>> {
        if (requestParameters.thirdPartyAccessKeyData === null || requestParameters.thirdPartyAccessKeyData === undefined) {
            throw new runtime.RequiredError('thirdPartyAccessKeyData','Required parameter requestParameters.thirdPartyAccessKeyData was null or undefined when calling generateThirdPartyAccessKey.');
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
            path: `/aggregation/v1/partners/accessKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ThirdPartyAccessKeyDataToJSON(requestParameters.thirdPartyAccessKeyData),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThirdPartyAccessKeyReceiptDataFromJSON(jsonValue));
    }

    /**
     * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
     * Generate Third Party Access Key
     */
    async generateThirdPartyAccessKey(requestParameters: GenerateThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThirdPartyAccessKeyReceiptData> {
        const response = await this.generateThirdPartyAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Revoke access of third party partners
     * Revoke Third Party Access
     */
    async revokeThirdPartyAccessKeyRaw(requestParameters: RevokeThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.consentReceiptId === null || requestParameters.consentReceiptId === undefined) {
            throw new runtime.RequiredError('consentReceiptId','Required parameter requestParameters.consentReceiptId was null or undefined when calling revokeThirdPartyAccessKey.');
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
            path: `/aggregation/v1/partners/accessKey/{consentReceiptId}`.replace(`{${"consentReceiptId"}}`, encodeURIComponent(String(requestParameters.consentReceiptId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Revoke access of third party partners
     * Revoke Third Party Access
     */
    async revokeThirdPartyAccessKey(requestParameters: RevokeThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeThirdPartyAccessKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Update access for third party partners
     * Update Third Party Access
     */
    async updateThirdPartyAccessKeyRaw(requestParameters: UpdateThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThirdPartyAccessKeyReceiptData>> {
        if (requestParameters.consentReceiptId === null || requestParameters.consentReceiptId === undefined) {
            throw new runtime.RequiredError('consentReceiptId','Required parameter requestParameters.consentReceiptId was null or undefined when calling updateThirdPartyAccessKey.');
        }

        if (requestParameters.thirdPartyAccessKeyData === null || requestParameters.thirdPartyAccessKeyData === undefined) {
            throw new runtime.RequiredError('thirdPartyAccessKeyData','Required parameter requestParameters.thirdPartyAccessKeyData was null or undefined when calling updateThirdPartyAccessKey.');
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
            path: `/aggregation/v1/partners/accessKey/{consentReceiptId}`.replace(`{${"consentReceiptId"}}`, encodeURIComponent(String(requestParameters.consentReceiptId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ThirdPartyAccessKeyDataToJSON(requestParameters.thirdPartyAccessKeyData),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ThirdPartyAccessKeyReceiptDataFromJSON(jsonValue));
    }

    /**
     * Update access for third party partners
     * Update Third Party Access
     */
    async updateThirdPartyAccessKey(requestParameters: UpdateThirdPartyAccessKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThirdPartyAccessKeyReceiptData> {
        const response = await this.updateThirdPartyAccessKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
