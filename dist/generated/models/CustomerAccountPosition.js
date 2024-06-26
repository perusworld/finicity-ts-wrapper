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
exports.CustomerAccountPositionToJSON = exports.CustomerAccountPositionFromJSONTyped = exports.CustomerAccountPositionFromJSON = exports.instanceOfCustomerAccountPosition = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CustomerAccountPosition interface.
 */
function instanceOfCustomerAccountPosition(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomerAccountPosition = instanceOfCustomerAccountPosition;
function CustomerAccountPositionFromJSON(json) {
    return CustomerAccountPositionFromJSONTyped(json, false);
}
exports.CustomerAccountPositionFromJSON = CustomerAccountPositionFromJSON;
function CustomerAccountPositionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'symbol': !(0, runtime_1.exists)(json, 'symbol') ? undefined : json['symbol'],
        'units': !(0, runtime_1.exists)(json, 'units') ? undefined : json['units'],
        'currentPrice': !(0, runtime_1.exists)(json, 'currentPrice') ? undefined : json['currentPrice'],
        'securityName': !(0, runtime_1.exists)(json, 'securityName') ? undefined : json['securityName'],
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : json['transactionType'],
        'marketValue': !(0, runtime_1.exists)(json, 'marketValue') ? undefined : json['marketValue'],
        'changePercent': !(0, runtime_1.exists)(json, 'changePercent') ? undefined : json['changePercent'],
        'dailyChange': !(0, runtime_1.exists)(json, 'dailyChange') ? undefined : json['dailyChange'],
        'costBasis': !(0, runtime_1.exists)(json, 'costBasis') ? undefined : json['costBasis'],
        'holdType': !(0, runtime_1.exists)(json, 'holdType') ? undefined : json['holdType'],
        'invSecurityType': !(0, runtime_1.exists)(json, 'invSecurityType') ? undefined : json['invSecurityType'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'currentPriceDate': !(0, runtime_1.exists)(json, 'currentPriceDate') ? undefined : json['currentPriceDate'],
        'securityType': !(0, runtime_1.exists)(json, 'securityType') ? undefined : json['securityType'],
        'mfType': !(0, runtime_1.exists)(json, 'mfType') ? undefined : json['mfType'],
        'posType': !(0, runtime_1.exists)(json, 'posType') ? undefined : json['posType'],
        'totalGLDollar': !(0, runtime_1.exists)(json, 'totalGLDollar') ? undefined : json['totalGLDollar'],
        'totalGLPercent': !(0, runtime_1.exists)(json, 'totalGLPercent') ? undefined : json['totalGLPercent'],
        'optionStrikePrice': !(0, runtime_1.exists)(json, 'optionStrikePrice') ? undefined : json['optionStrikePrice'],
        'optionType': !(0, runtime_1.exists)(json, 'optionType') ? undefined : json['optionType'],
        'optionSharesPerContract': !(0, runtime_1.exists)(json, 'optionSharesPerContract') ? undefined : json['optionSharesPerContract'],
        'optionExpireDate': !(0, runtime_1.exists)(json, 'optionExpireDate') ? undefined : (new Date(json['optionExpireDate'])),
        'fiAssetClass': !(0, runtime_1.exists)(json, 'fiAssetClass') ? undefined : json['fiAssetClass'],
        'assetClass': !(0, runtime_1.exists)(json, 'assetClass') ? undefined : json['assetClass'],
        'currencyRate': !(0, runtime_1.exists)(json, 'currencyRate') ? undefined : json['currencyRate'],
        'securityId': !(0, runtime_1.exists)(json, 'securityId') ? undefined : json['securityId'],
        'securityIdType': !(0, runtime_1.exists)(json, 'securityIdType') ? undefined : json['securityIdType'],
        'costBasisPerShare': !(0, runtime_1.exists)(json, 'costBasisPerShare') ? undefined : json['costBasisPerShare'],
        'subAccountType': !(0, runtime_1.exists)(json, 'subAccountType') ? undefined : json['subAccountType'],
        'securityCurrency': !(0, runtime_1.exists)(json, 'securityCurrency') ? undefined : json['securityCurrency'],
        'todayGLDollar': !(0, runtime_1.exists)(json, 'todayGLDollar') ? undefined : json['todayGLDollar'],
        'todayGLPercent': !(0, runtime_1.exists)(json, 'todayGLPercent') ? undefined : json['todayGLPercent'],
    };
}
exports.CustomerAccountPositionFromJSONTyped = CustomerAccountPositionFromJSONTyped;
function CustomerAccountPositionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'description': value.description,
        'symbol': value.symbol,
        'units': value.units,
        'currentPrice': value.currentPrice,
        'securityName': value.securityName,
        'transactionType': value.transactionType,
        'marketValue': value.marketValue,
        'changePercent': value.changePercent,
        'dailyChange': value.dailyChange,
        'costBasis': value.costBasis,
        'holdType': value.holdType,
        'invSecurityType': value.invSecurityType,
        'status': value.status,
        'currentPriceDate': value.currentPriceDate,
        'securityType': value.securityType,
        'mfType': value.mfType,
        'posType': value.posType,
        'totalGLDollar': value.totalGLDollar,
        'totalGLPercent': value.totalGLPercent,
        'optionStrikePrice': value.optionStrikePrice,
        'optionType': value.optionType,
        'optionSharesPerContract': value.optionSharesPerContract,
        'optionExpireDate': value.optionExpireDate === undefined ? undefined : (value.optionExpireDate.toISOString().substring(0, 10)),
        'fiAssetClass': value.fiAssetClass,
        'assetClass': value.assetClass,
        'currencyRate': value.currencyRate,
        'securityId': value.securityId,
        'securityIdType': value.securityIdType,
        'costBasisPerShare': value.costBasisPerShare,
        'subAccountType': value.subAccountType,
        'securityCurrency': value.securityCurrency,
        'todayGLDollar': value.todayGLDollar,
        'todayGLPercent': value.todayGLPercent,
    };
}
exports.CustomerAccountPositionToJSON = CustomerAccountPositionToJSON;
//# sourceMappingURL=CustomerAccountPosition.js.map