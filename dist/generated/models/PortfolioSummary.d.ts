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
import type { PortfolioReport } from './PortfolioReport';
/**
 *
 * @export
 * @interface PortfolioSummary
 */
export interface PortfolioSummary {
    /**
     * A unique identifier that will be consistent across all reports created for the same customer
     * @type {string}
     * @memberof PortfolioSummary
     */
    portfolioId: string;
    /**
     * A list of reports in the portfolio
     * @type {Array<PortfolioReport>}
     * @memberof PortfolioSummary
     */
    reports: Array<PortfolioReport>;
}
/**
 * Check if a given object implements the PortfolioSummary interface.
 */
export declare function instanceOfPortfolioSummary(value: object): boolean;
export declare function PortfolioSummaryFromJSON(json: any): PortfolioSummary;
export declare function PortfolioSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortfolioSummary;
export declare function PortfolioSummaryToJSON(value?: PortfolioSummary | null): any;
