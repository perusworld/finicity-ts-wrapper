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
import type { AccountOwnerAddress } from './AccountOwnerAddress';
import type { AccountOwnerDocumentation } from './AccountOwnerDocumentation';
import type { AccountOwnerEmail } from './AccountOwnerEmail';
import type { AccountOwnerIdentityInsights } from './AccountOwnerIdentityInsights';
import type { AccountOwnerPhone } from './AccountOwnerPhone';
/**
 * Owner of a customer account
 * @export
 * @interface AccountOwnerDetails
 */
export interface AccountOwnerDetails {
    /**
     * The type of relationship to the account:
     * * "AUTHORIZED_USER"
     *
     * * "BUSINESS"
     *
     * * "FOR_BENEFIT_OF_PRIMARY"
     *
     * * "FOR_BENEFIT_OF_PRIMARY_JOINT_RESTRICTED"
     *
     * * "FOR_BENEFIT_OF_SECONDARY"
     *
     * * "FOR_BENEFIT_OF_SECONDARY_JOINT_RESTRICTED"
     *
     * * "FOR_BENEFIT_OF_SOLE_OWNER_RESTRICTED"
     *
     * * "POWER_OF_ATTORNEY"
     *
     * * "PRIMARY_JOINT_TENANTS"
     *
     * * "PRIMARY"
     *
     * * "PRIMARY_BORROWER"
     *
     * * "PRIMARY_JOINT"
     *
     * * "SECONDARY"
     *
     * * "SECONDARY_JOINT_TENANTS"
     *
     * * "SECONDARY_BORROWER"
     *
     * * "SECONDARY_JOINT"
     *
     * * "SOLE_OWNER"
     *
     * * "TRUSTEE"
     *
     * * "UNIFORM_TRANSFER_TO_MINOR"
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    relationship?: string;
    /**
     * The full name of the account owner. Multiple account owners are returned in one string per the source data from the institution.
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    ownerName: string;
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    firstName?: string;
    /**
     * The middle name of the account holder
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    middleName?: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    lastName?: string;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    suffix?: string;
    /**
     * The classification of the account holder:
     * * "person / personal / home"
     * * "business"
     * * "other"
     * @type {string}
     * @memberof AccountOwnerDetails
     */
    nameClassification?: string;
    /**
     * The confidence score 0-100 of the name classification.
     * @type {number}
     * @memberof AccountOwnerDetails
     */
    nameClassificationconfidencescore?: number;
    /**
     * List of addresses
     * @type {Array<AccountOwnerAddress>}
     * @memberof AccountOwnerDetails
     */
    addresses: Array<AccountOwnerAddress>;
    /**
     * List of emails
     * @type {Array<AccountOwnerEmail>}
     * @memberof AccountOwnerDetails
     */
    emails?: Array<AccountOwnerEmail>;
    /**
     * List of phones
     * @type {Array<AccountOwnerPhone>}
     * @memberof AccountOwnerDetails
     */
    phones?: Array<AccountOwnerPhone>;
    /**
     * List of account owner documentation
     * @type {Array<AccountOwnerDocumentation>}
     * @memberof AccountOwnerDetails
     */
    documentations?: Array<AccountOwnerDocumentation>;
    /**
     *
     * @type {AccountOwnerIdentityInsights}
     * @memberof AccountOwnerDetails
     */
    identityInsights?: AccountOwnerIdentityInsights;
}
/**
 * Check if a given object implements the AccountOwnerDetails interface.
 */
export declare function instanceOfAccountOwnerDetails(value: object): boolean;
export declare function AccountOwnerDetailsFromJSON(json: any): AccountOwnerDetails;
export declare function AccountOwnerDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOwnerDetails;
export declare function AccountOwnerDetailsToJSON(value?: AccountOwnerDetails | null): any;
