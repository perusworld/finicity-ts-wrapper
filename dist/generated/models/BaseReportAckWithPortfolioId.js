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
exports.BaseReportAckWithPortfolioIdToJSON = exports.BaseReportAckWithPortfolioIdFromJSONTyped = exports.BaseReportAckWithPortfolioIdFromJSON = exports.instanceOfBaseReportAckWithPortfolioId = void 0;
const runtime_1 = require("../runtime");
const ErrorMessage_1 = require("./ErrorMessage");
/**
 * Check if a given object implements the BaseReportAckWithPortfolioId interface.
 */
function instanceOfBaseReportAckWithPortfolioId(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBaseReportAckWithPortfolioId = instanceOfBaseReportAckWithPortfolioId;
function BaseReportAckWithPortfolioIdFromJSON(json) {
    return BaseReportAckWithPortfolioIdFromJSONTyped(json, false);
}
exports.BaseReportAckWithPortfolioIdFromJSON = BaseReportAckWithPortfolioIdFromJSON;
function BaseReportAckWithPortfolioIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'customerType': !(0, runtime_1.exists)(json, 'customerType') ? undefined : json['customerType'],
        'customerId': !(0, runtime_1.exists)(json, 'customerId') ? undefined : json['customerId'],
        'requestId': !(0, runtime_1.exists)(json, 'requestId') ? undefined : json['requestId'],
        'requesterName': !(0, runtime_1.exists)(json, 'requesterName') ? undefined : json['requesterName'],
        'createdDate': !(0, runtime_1.exists)(json, 'createdDate') ? undefined : json['createdDate'],
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'consumerId': !(0, runtime_1.exists)(json, 'consumerId') ? undefined : json['consumerId'],
        'consumerSsn': !(0, runtime_1.exists)(json, 'consumerSsn') ? undefined : json['consumerSsn'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(ErrorMessage_1.ErrorMessageFromJSON)),
        'portfolioId': !(0, runtime_1.exists)(json, 'portfolioId') ? undefined : json['portfolioId'],
    };
}
exports.BaseReportAckWithPortfolioIdFromJSONTyped = BaseReportAckWithPortfolioIdFromJSONTyped;
function BaseReportAckWithPortfolioIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'customerType': value.customerType,
        'customerId': value.customerId,
        'requestId': value.requestId,
        'requesterName': value.requesterName,
        'createdDate': value.createdDate,
        'title': value.title,
        'consumerId': value.consumerId,
        'consumerSsn': value.consumerSsn,
        'type': value.type,
        'status': value.status,
        'errors': value.errors === undefined ? undefined : (value.errors.map(ErrorMessage_1.ErrorMessageToJSON)),
        'portfolioId': value.portfolioId,
    };
}
exports.BaseReportAckWithPortfolioIdToJSON = BaseReportAckWithPortfolioIdToJSON;
//# sourceMappingURL=BaseReportAckWithPortfolioId.js.map