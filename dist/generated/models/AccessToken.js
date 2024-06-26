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
exports.AccessTokenToJSON = exports.AccessTokenFromJSONTyped = exports.AccessTokenFromJSON = exports.instanceOfAccessToken = void 0;
/**
 * Check if a given object implements the AccessToken interface.
 */
function instanceOfAccessToken(value) {
    let isInstance = true;
    isInstance = isInstance && "token" in value;
    return isInstance;
}
exports.instanceOfAccessToken = instanceOfAccessToken;
function AccessTokenFromJSON(json) {
    return AccessTokenFromJSONTyped(json, false);
}
exports.AccessTokenFromJSON = AccessTokenFromJSON;
function AccessTokenFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'token': json['token'],
    };
}
exports.AccessTokenFromJSONTyped = AccessTokenFromJSONTyped;
function AccessTokenToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token': value.token,
    };
}
exports.AccessTokenToJSON = AccessTokenToJSON;
//# sourceMappingURL=AccessToken.js.map