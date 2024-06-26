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
exports.PortfolioWithConsumerSummaryToJSON = exports.PortfolioWithConsumerSummaryFromJSONTyped = exports.PortfolioWithConsumerSummaryFromJSON = exports.instanceOfPortfolioWithConsumerSummary = void 0;
const PortfolioConsumer_1 = require("./PortfolioConsumer");
const PortfolioReport_1 = require("./PortfolioReport");
/**
 * Check if a given object implements the PortfolioWithConsumerSummary interface.
 */
function instanceOfPortfolioWithConsumerSummary(value) {
    let isInstance = true;
    isInstance = isInstance && "portfolioId" in value;
    isInstance = isInstance && "reports" in value;
    isInstance = isInstance && "consumer" in value;
    return isInstance;
}
exports.instanceOfPortfolioWithConsumerSummary = instanceOfPortfolioWithConsumerSummary;
function PortfolioWithConsumerSummaryFromJSON(json) {
    return PortfolioWithConsumerSummaryFromJSONTyped(json, false);
}
exports.PortfolioWithConsumerSummaryFromJSON = PortfolioWithConsumerSummaryFromJSON;
function PortfolioWithConsumerSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'portfolioId': json['portfolioId'],
        'reports': (json['reports'].map(PortfolioReport_1.PortfolioReportFromJSON)),
        'consumer': (0, PortfolioConsumer_1.PortfolioConsumerFromJSON)(json['consumer']),
    };
}
exports.PortfolioWithConsumerSummaryFromJSONTyped = PortfolioWithConsumerSummaryFromJSONTyped;
function PortfolioWithConsumerSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'portfolioId': value.portfolioId,
        'reports': (value.reports.map(PortfolioReport_1.PortfolioReportToJSON)),
        'consumer': (0, PortfolioConsumer_1.PortfolioConsumerToJSON)(value.consumer),
    };
}
exports.PortfolioWithConsumerSummaryToJSON = PortfolioWithConsumerSummaryToJSON;
//# sourceMappingURL=PortfolioWithConsumerSummary.js.map