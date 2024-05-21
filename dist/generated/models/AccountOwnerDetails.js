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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOwnerDetailsToJSON = exports.AccountOwnerDetailsFromJSONTyped = exports.AccountOwnerDetailsFromJSON = exports.instanceOfAccountOwnerDetails = void 0;
const runtime_1 = require("../runtime");
const AccountOwnerAddress_1 = require("./AccountOwnerAddress");
const AccountOwnerDocumentation_1 = require("./AccountOwnerDocumentation");
const AccountOwnerEmail_1 = require("./AccountOwnerEmail");
const AccountOwnerIdentityInsights_1 = require("./AccountOwnerIdentityInsights");
const AccountOwnerPhone_1 = require("./AccountOwnerPhone");
/**
 * Check if a given object implements the AccountOwnerDetails interface.
 */
function instanceOfAccountOwnerDetails(value) {
    let isInstance = true;
    isInstance = isInstance && "ownerName" in value;
    isInstance = isInstance && "addresses" in value;
    return isInstance;
}
exports.instanceOfAccountOwnerDetails = instanceOfAccountOwnerDetails;
function AccountOwnerDetailsFromJSON(json) {
    return AccountOwnerDetailsFromJSONTyped(json, false);
}
exports.AccountOwnerDetailsFromJSON = AccountOwnerDetailsFromJSON;
function AccountOwnerDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'relationship': !(0, runtime_1.exists)(json, 'relationship') ? undefined : json['relationship'],
        'ownerName': json['ownerName'],
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'middleName': !(0, runtime_1.exists)(json, 'middleName') ? undefined : json['middleName'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'suffix': !(0, runtime_1.exists)(json, 'suffix') ? undefined : json['suffix'],
        'nameClassification': !(0, runtime_1.exists)(json, 'nameClassification') ? undefined : json['nameClassification'],
        'nameClassificationconfidencescore': !(0, runtime_1.exists)(json, 'nameClassificationconfidencescore') ? undefined : json['nameClassificationconfidencescore'],
        'addresses': (json['addresses'].map(AccountOwnerAddress_1.AccountOwnerAddressFromJSON)),
        'emails': !(0, runtime_1.exists)(json, 'emails') ? undefined : (json['emails'].map(AccountOwnerEmail_1.AccountOwnerEmailFromJSON)),
        'phones': !(0, runtime_1.exists)(json, 'phones') ? undefined : (json['phones'].map(AccountOwnerPhone_1.AccountOwnerPhoneFromJSON)),
        'documentations': !(0, runtime_1.exists)(json, 'documentations') ? undefined : (json['documentations'].map(AccountOwnerDocumentation_1.AccountOwnerDocumentationFromJSON)),
        'identityInsights': !(0, runtime_1.exists)(json, 'identityInsights') ? undefined : (0, AccountOwnerIdentityInsights_1.AccountOwnerIdentityInsightsFromJSON)(json['identityInsights']),
    };
}
exports.AccountOwnerDetailsFromJSONTyped = AccountOwnerDetailsFromJSONTyped;
function AccountOwnerDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'relationship': value.relationship,
        'ownerName': value.ownerName,
        'firstName': value.firstName,
        'middleName': value.middleName,
        'lastName': value.lastName,
        'suffix': value.suffix,
        'nameClassification': value.nameClassification,
        'nameClassificationconfidencescore': value.nameClassificationconfidencescore,
        'addresses': (value.addresses.map(AccountOwnerAddress_1.AccountOwnerAddressToJSON)),
        'emails': value.emails === undefined ? undefined : (value.emails.map(AccountOwnerEmail_1.AccountOwnerEmailToJSON)),
        'phones': value.phones === undefined ? undefined : (value.phones.map(AccountOwnerPhone_1.AccountOwnerPhoneToJSON)),
        'documentations': value.documentations === undefined ? undefined : (value.documentations.map(AccountOwnerDocumentation_1.AccountOwnerDocumentationToJSON)),
        'identityInsights': (0, AccountOwnerIdentityInsights_1.AccountOwnerIdentityInsightsToJSON)(value.identityInsights),
    };
}
exports.AccountOwnerDetailsToJSON = AccountOwnerDetailsToJSON;
//# sourceMappingURL=AccountOwnerDetails.js.map