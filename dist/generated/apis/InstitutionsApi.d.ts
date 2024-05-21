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
import type { BrandingWrapper, CertifiedInstitutions, InstitutionWrapper, Institutions } from '../models/index';
export interface GetCertifiedInstitutionsRequest {
    search?: string;
    start?: number;
    limit?: number;
    type?: string;
    supportedCountries?: Array<string>;
}
export interface GetCertifiedInstitutionsWithRSSDRequest {
    search?: string;
    start?: number;
    limit?: number;
    type?: string;
    supportedCountries?: Array<string>;
}
export interface GetInstitutionRequest {
    institutionId: number;
}
export interface GetInstitutionBrandingRequest {
    institutionId: number;
}
export interface GetInstitutionsRequest {
    search?: string;
    start?: number;
    limit?: number;
    type?: string;
    supportedCountries?: Array<string>;
}
/**
 *
 */
export declare class InstitutionsApi extends runtime.BaseAPI {
    /**
     * Search for financial institutions by certified product.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Certified Institutions
     */
    getCertifiedInstitutionsRaw(requestParameters: GetCertifiedInstitutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertifiedInstitutions>>;
    /**
     * Search for financial institutions by certified product.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Certified Institutions
     */
    getCertifiedInstitutions(requestParameters?: GetCertifiedInstitutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertifiedInstitutions>;
    /**
     * Search for certified financial institutions w/RSSD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Certified Institutions With RSSD
     */
    getCertifiedInstitutionsWithRSSDRaw(requestParameters: GetCertifiedInstitutionsWithRSSDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CertifiedInstitutions>>;
    /**
     * Search for certified financial institutions w/RSSD.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Certified Institutions With RSSD
     */
    getCertifiedInstitutionsWithRSSD(requestParameters?: GetCertifiedInstitutionsWithRSSDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CertifiedInstitutions>;
    /**
     * Get financial institution details by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institution by ID
     */
    getInstitutionRaw(requestParameters: GetInstitutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InstitutionWrapper>>;
    /**
     * Get financial institution details by ID.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institution by ID
     */
    getInstitution(requestParameters: GetInstitutionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InstitutionWrapper>;
    /**
     * Return the branding information for a financial institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institution Branding by ID
     */
    getInstitutionBrandingRaw(requestParameters: GetInstitutionBrandingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BrandingWrapper>>;
    /**
     * Return the branding information for a financial institution.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institution Branding by ID
     */
    getInstitutionBranding(requestParameters: GetInstitutionBrandingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BrandingWrapper>;
    /**
     * Search for financial institutions.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institutions
     */
    getInstitutionsRaw(requestParameters: GetInstitutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Institutions>>;
    /**
     * Search for financial institutions.  _Supported regions_: ![ðŸ‡ºðŸ‡¸](https://flagcdn.com/20x15/us.png)
     * Get Institutions
     */
    getInstitutions(requestParameters?: GetInstitutionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Institutions>;
}
