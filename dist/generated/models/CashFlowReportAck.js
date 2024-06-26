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
exports.CashFlowReportAckToJSON = exports.CashFlowReportAckFromJSONTyped = exports.CashFlowReportAckFromJSON = exports.instanceOfCashFlowReportAck = void 0;
const runtime_1 = require("../runtime");
const CashFlowReportConstraintsOut_1 = require("./CashFlowReportConstraintsOut");
const ErrorMessage_1 = require("./ErrorMessage");
/**
 * Check if a given object implements the CashFlowReportAck interface.
 */
function instanceOfCashFlowReportAck(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "customerType" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "requestId" in value;
    isInstance = isInstance && "requesterName" in value;
    isInstance = isInstance && "createdDate" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "consumerId" in value;
    isInstance = isInstance && "consumerSsn" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "constraints" in value;
    return isInstance;
}
exports.instanceOfCashFlowReportAck = instanceOfCashFlowReportAck;
function CashFlowReportAckFromJSON(json) {
    return CashFlowReportAckFromJSONTyped(json, false);
}
exports.CashFlowReportAckFromJSON = CashFlowReportAckFromJSON;
function CashFlowReportAckFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'customerType': json['customerType'],
        'customerId': json['customerId'],
        'requestId': json['requestId'],
        'requesterName': json['requesterName'],
        'createdDate': json['createdDate'],
        'title': json['title'],
        'consumerId': json['consumerId'],
        'consumerSsn': json['consumerSsn'],
        'type': json['type'],
        'status': json['status'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(ErrorMessage_1.ErrorMessageFromJSON)),
        'constraints': (0, CashFlowReportConstraintsOut_1.CashFlowReportConstraintsOutFromJSON)(json['constraints']),
    };
}
exports.CashFlowReportAckFromJSONTyped = CashFlowReportAckFromJSONTyped;
function CashFlowReportAckToJSON(value) {
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
        'constraints': (0, CashFlowReportConstraintsOut_1.CashFlowReportConstraintsOutToJSON)(value.constraints),
    };
}
exports.CashFlowReportAckToJSON = CashFlowReportAckToJSON;
//# sourceMappingURL=CashFlowReportAck.js.map