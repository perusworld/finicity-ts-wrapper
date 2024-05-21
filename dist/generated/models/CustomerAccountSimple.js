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
exports.CustomerAccountSimpleToJSON = exports.CustomerAccountSimpleFromJSONTyped = exports.CustomerAccountSimpleFromJSON = exports.instanceOfCustomerAccountSimple = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CustomerAccountSimple interface.
 */
function instanceOfCustomerAccountSimple(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "accountNumberDisplay" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "institutionId" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "institutionLoginId" in value;
    isInstance = isInstance && "displayPosition" in value;
    return isInstance;
}
exports.instanceOfCustomerAccountSimple = instanceOfCustomerAccountSimple;
function CustomerAccountSimpleFromJSON(json) {
    return CustomerAccountSimpleFromJSONTyped(json, false);
}
exports.CustomerAccountSimpleFromJSON = CustomerAccountSimpleFromJSON;
function CustomerAccountSimpleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'accountNumberDisplay': json['accountNumberDisplay'],
        'name': json['name'],
        'type': json['type'],
        'aggregationStatusCode': !(0, runtime_1.exists)(json, 'aggregationStatusCode') ? undefined : json['aggregationStatusCode'],
        'status': json['status'],
        'customerId': json['customerId'],
        'institutionId': json['institutionId'],
        'aggregationSuccessDate': !(0, runtime_1.exists)(json, 'aggregationSuccessDate') ? undefined : json['aggregationSuccessDate'],
        'aggregationAttemptDate': !(0, runtime_1.exists)(json, 'aggregationAttemptDate') ? undefined : json['aggregationAttemptDate'],
        'createdDate': json['createdDate'],
        'currency': json['currency'],
        'institutionLoginId': json['institutionLoginId'],
        'displayPosition': json['displayPosition'],
        'parentAccount': !(0, runtime_1.exists)(json, 'parentAccount') ? undefined : json['parentAccount'],
    };
}
exports.CustomerAccountSimpleFromJSONTyped = CustomerAccountSimpleFromJSONTyped;
function CustomerAccountSimpleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'accountNumberDisplay': value.accountNumberDisplay,
        'name': value.name,
        'type': value.type,
        'aggregationStatusCode': value.aggregationStatusCode,
        'status': value.status,
        'customerId': value.customerId,
        'institutionId': value.institutionId,
        'aggregationSuccessDate': value.aggregationSuccessDate,
        'aggregationAttemptDate': value.aggregationAttemptDate,
        'createdDate': value.createdDate,
        'currency': value.currency,
        'institutionLoginId': value.institutionLoginId,
        'displayPosition': value.displayPosition,
        'parentAccount': value.parentAccount,
    };
}
exports.CustomerAccountSimpleToJSON = CustomerAccountSimpleToJSON;
//# sourceMappingURL=CustomerAccountSimple.js.map