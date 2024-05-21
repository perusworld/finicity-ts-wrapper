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

import { exists, mapValues } from '../runtime';
import type { ThirdPartyAccessPeriod } from './ThirdPartyAccessPeriod';
import {
    ThirdPartyAccessPeriodFromJSON,
    ThirdPartyAccessPeriodFromJSONTyped,
    ThirdPartyAccessPeriodToJSON,
} from './ThirdPartyAccessPeriod';

/**
 * Product for which access token to be generated
 * @export
 * @interface ThirdPartyAccessProduct
 */
export interface ThirdPartyAccessProduct {
    /**
     * Third party access token can be generated for the following product types:
     * 
     * 
     * * "moneyTransferDetails": Retrieve account details for money transfer 
     * * "availableBalance": Retrieves the latest cached available and cleared
     *     account balances for an account. 
     * * "availableBalanceLive": Retrieves the available and cleared account
     * balances live from the financial institution 
     * * "accountOwner": Retrieves names and addresses of the account owner
     * from a financial institution. 
     * * "paymentIndicator": Get the Payment Success Indicator response,
     * scoring the likelihood of payment settlement 
     * * "paymentFeedback": Create feedback loop for Payment Success Indicator
     * (PSI) and/or Payment Routing Optimizer (PRO) 
     * * "paymentRouting": Product recommends the best rail to use as well as
     * the best time to initiate the payment
     * @type {string}
     * @memberof ThirdPartyAccessProduct
     */
    product: string;
    /**
     * The Finicity Partner ID who should be billed when the Requester requests data from Finicity. If no value specified, then the Recipient will be billed.
     * @type {string}
     * @memberof ThirdPartyAccessProduct
     */
    payorId?: string;
    /**
     * Max number of calls to the consented product (consented api)
     * @type {number}
     * @memberof ThirdPartyAccessProduct
     */
    maxCalls?: number;
    /**
     * An account ID
     * @type {string}
     * @memberof ThirdPartyAccessProduct
     */
    accountId: string;
    /**
     * 
     * @type {ThirdPartyAccessPeriod}
     * @memberof ThirdPartyAccessProduct
     */
    accessPeriod: ThirdPartyAccessPeriod;
}

/**
 * Check if a given object implements the ThirdPartyAccessProduct interface.
 */
export function instanceOfThirdPartyAccessProduct(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "product" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "accessPeriod" in value;

    return isInstance;
}

export function ThirdPartyAccessProductFromJSON(json: any): ThirdPartyAccessProduct {
    return ThirdPartyAccessProductFromJSONTyped(json, false);
}

export function ThirdPartyAccessProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThirdPartyAccessProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': json['product'],
        'payorId': !exists(json, 'payorId') ? undefined : json['payorId'],
        'maxCalls': !exists(json, 'maxCalls') ? undefined : json['maxCalls'],
        'accountId': json['accountId'],
        'accessPeriod': ThirdPartyAccessPeriodFromJSON(json['accessPeriod']),
    };
}

export function ThirdPartyAccessProductToJSON(value?: ThirdPartyAccessProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'product': value.product,
        'payorId': value.payorId,
        'maxCalls': value.maxCalls,
        'accountId': value.accountId,
        'accessPeriod': ThirdPartyAccessPeriodToJSON(value.accessPeriod),
    };
}

