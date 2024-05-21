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
exports.ObbNumWeeksAverageBalanceIncreasingToJSON = exports.ObbNumWeeksAverageBalanceIncreasingFromJSONTyped = exports.ObbNumWeeksAverageBalanceIncreasingFromJSON = exports.instanceOfObbNumWeeksAverageBalanceIncreasing = void 0;
const ObbAverageWeeklyBalance_1 = require("./ObbAverageWeeklyBalance");
/**
 * Check if a given object implements the ObbNumWeeksAverageBalanceIncreasing interface.
 */
function instanceOfObbNumWeeksAverageBalanceIncreasing(value) {
    let isInstance = true;
    isInstance = isInstance && "historicAverageWeeklyBalances" in value;
    isInstance = isInstance && "historicNumberOfWeeksAverageBalanceIncreasing" in value;
    isInstance = isInstance && "historicNumberOfWeeksWithDataAvailable" in value;
    return isInstance;
}
exports.instanceOfObbNumWeeksAverageBalanceIncreasing = instanceOfObbNumWeeksAverageBalanceIncreasing;
function ObbNumWeeksAverageBalanceIncreasingFromJSON(json) {
    return ObbNumWeeksAverageBalanceIncreasingFromJSONTyped(json, false);
}
exports.ObbNumWeeksAverageBalanceIncreasingFromJSON = ObbNumWeeksAverageBalanceIncreasingFromJSON;
function ObbNumWeeksAverageBalanceIncreasingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'historicAverageWeeklyBalances': (json['historicAverageWeeklyBalances'].map(ObbAverageWeeklyBalance_1.ObbAverageWeeklyBalanceFromJSON)),
        'historicNumberOfWeeksAverageBalanceIncreasing': json['historicNumberOfWeeksAverageBalanceIncreasing'],
        'historicNumberOfWeeksWithDataAvailable': json['historicNumberOfWeeksWithDataAvailable'],
    };
}
exports.ObbNumWeeksAverageBalanceIncreasingFromJSONTyped = ObbNumWeeksAverageBalanceIncreasingFromJSONTyped;
function ObbNumWeeksAverageBalanceIncreasingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'historicAverageWeeklyBalances': (value.historicAverageWeeklyBalances.map(ObbAverageWeeklyBalance_1.ObbAverageWeeklyBalanceToJSON)),
        'historicNumberOfWeeksAverageBalanceIncreasing': value.historicNumberOfWeeksAverageBalanceIncreasing,
        'historicNumberOfWeeksWithDataAvailable': value.historicNumberOfWeeksWithDataAvailable,
    };
}
exports.ObbNumWeeksAverageBalanceIncreasingToJSON = ObbNumWeeksAverageBalanceIncreasingToJSON;
//# sourceMappingURL=ObbNumWeeksAverageBalanceIncreasing.js.map