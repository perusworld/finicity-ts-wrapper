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
import type { Asset, PayStatement } from '../models/index';
export interface StoreCustomerPayStatementRequest {
    customerId: string;
    payStatement: PayStatement;
}
/**
 *
 */
export declare class PayStatementsApi extends runtime.BaseAPI {
    /**
     * Upload pay statements for a customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Store Customer Pay Statement
     */
    storeCustomerPayStatementRaw(requestParameters: StoreCustomerPayStatementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Asset>>;
    /**
     * Upload pay statements for a customer.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Store Customer Pay Statement
     */
    storeCustomerPayStatement(requestParameters: StoreCustomerPayStatementRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Asset>;
}