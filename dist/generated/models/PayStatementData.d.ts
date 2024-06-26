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
/**
 * Data to be included within the pay statement report
 * @export
 * @interface PayStatementData
 */
export interface PayStatementData {
    /**
     * A list of pay statement asset IDs
     * @type {Array<string>}
     * @memberof PayStatementData
     */
    assetIds: Array<string>;
    /**
     * Field to indicate whether to extract the earnings on all pay statements
     * @type {boolean}
     * @memberof PayStatementData
     */
    extractEarnings?: boolean;
    /**
     * Field to indicate whether to extract the deductions on all pay statements
     * @type {boolean}
     * @memberof PayStatementData
     */
    extractDeductions?: boolean;
    /**
     * Field to indicate whether to extract the direct deposits on all pay statements
     * @type {boolean}
     * @memberof PayStatementData
     */
    extractDirectDeposit?: boolean;
}
/**
 * Check if a given object implements the PayStatementData interface.
 */
export declare function instanceOfPayStatementData(value: object): boolean;
export declare function PayStatementDataFromJSON(json: any): PayStatementData;
export declare function PayStatementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayStatementData;
export declare function PayStatementDataToJSON(value?: PayStatementData | null): any;
