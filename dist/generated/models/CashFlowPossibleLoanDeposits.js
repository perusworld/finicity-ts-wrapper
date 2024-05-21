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
exports.CashFlowPossibleLoanDepositsToJSON = exports.CashFlowPossibleLoanDepositsFromJSONTyped = exports.CashFlowPossibleLoanDepositsFromJSON = exports.instanceOfCashFlowPossibleLoanDeposits = void 0;
const CashFlowPossibleLoanDepositsInstitutions_1 = require("./CashFlowPossibleLoanDepositsInstitutions");
/**
 * Check if a given object implements the CashFlowPossibleLoanDeposits interface.
 */
function instanceOfCashFlowPossibleLoanDeposits(value) {
    let isInstance = true;
    isInstance = isInstance && "institutions" in value;
    return isInstance;
}
exports.instanceOfCashFlowPossibleLoanDeposits = instanceOfCashFlowPossibleLoanDeposits;
function CashFlowPossibleLoanDepositsFromJSON(json) {
    return CashFlowPossibleLoanDepositsFromJSONTyped(json, false);
}
exports.CashFlowPossibleLoanDepositsFromJSON = CashFlowPossibleLoanDepositsFromJSON;
function CashFlowPossibleLoanDepositsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'institutions': (json['institutions'].map(CashFlowPossibleLoanDepositsInstitutions_1.CashFlowPossibleLoanDepositsInstitutionsFromJSON)),
    };
}
exports.CashFlowPossibleLoanDepositsFromJSONTyped = CashFlowPossibleLoanDepositsFromJSONTyped;
function CashFlowPossibleLoanDepositsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'institutions': (value.institutions.map(CashFlowPossibleLoanDepositsInstitutions_1.CashFlowPossibleLoanDepositsInstitutionsToJSON)),
    };
}
exports.CashFlowPossibleLoanDepositsToJSON = CashFlowPossibleLoanDepositsToJSON;
//# sourceMappingURL=CashFlowPossibleLoanDeposits.js.map