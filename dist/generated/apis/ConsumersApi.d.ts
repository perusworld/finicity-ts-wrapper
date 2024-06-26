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
import type { Consumer, ConsumerUpdate, CreatedConsumer, NewConsumer } from '../models/index';
export interface CreateConsumerRequest {
    customerId: string;
    newConsumer: NewConsumer;
}
export interface GetConsumerRequest {
    consumerId: string;
}
export interface GetConsumerForCustomerRequest {
    customerId: string;
}
export interface ModifyConsumerRequest {
    consumerId: string;
    consumerUpdate: ConsumerUpdate;
}
/**
 *
 */
export declare class ConsumersApi extends runtime.BaseAPI {
    /**
     * Create a consumer record associated with the given customer. A consumer persists as the owner of any reports that are generated, even after the original customer is deleted from the system.  A consumer must be created for the given customer before calling any of the Generate Report services.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Create Consumer
     */
    createConsumerRaw(requestParameters: CreateConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatedConsumer>>;
    /**
     * Create a consumer record associated with the given customer. A consumer persists as the owner of any reports that are generated, even after the original customer is deleted from the system.  A consumer must be created for the given customer before calling any of the Generate Report services.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Create Consumer
     */
    createConsumer(requestParameters: CreateConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatedConsumer>;
    /**
     * Get the details of a consumer record by consumer ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Consumer by ID
     */
    getConsumerRaw(requestParameters: GetConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Consumer>>;
    /**
     * Get the details of a consumer record by consumer ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Consumer by ID
     */
    getConsumer(requestParameters: GetConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Consumer>;
    /**
     * Get the details of a consumer record by customer ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Consumer For Customer
     */
    getConsumerForCustomerRaw(requestParameters: GetConsumerForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Consumer>>;
    /**
     * Get the details of a consumer record by customer ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Consumer For Customer
     */
    getConsumerForCustomer(requestParameters: GetConsumerForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Consumer>;
    /**
     * Modify an existing consumer. All fields are required for a consumer record, but individual fields for this call are optional because fields that are not specified will be left unchanged.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Modify Consumer by ID
     */
    modifyConsumerRaw(requestParameters: ModifyConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Modify an existing consumer. All fields are required for a consumer record, but individual fields for this call are optional because fields that are not specified will be left unchanged.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Modify Consumer by ID
     */
    modifyConsumer(requestParameters: ModifyConsumerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
