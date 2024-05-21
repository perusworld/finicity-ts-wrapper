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
/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * A short description of the app. This will be visible to end users in the FI interface.
     * @type {string}
     * @memberof Application
     */
    appDescription: string;
    /**
     * The name of the application assigned to the customer
     * @type {string}
     * @memberof Application
     */
    appName: string;
    /**
     * An URL for the app. This will be visible to end users in the FI interface.
     * @type {string}
     * @memberof Application
     */
    appUrl: string;
    /**
     * Address line 1
     * @type {string}
     * @memberof Application
     */
    ownerAddressLine1: string;
    /**
     * Address line 2
     * @type {string}
     * @memberof Application
     */
    ownerAddressLine2: string;
    /**
     * City for the business entity that owns the app. Information for registration purposes only and not given to the end user.
     * @type {string}
     * @memberof Application
     */
    ownerCity: string;
    /**
     * Country for the  business entity that owns the app. Information for registration purposes only and not given to the end user.
     * @type {string}
     * @memberof Application
     */
    ownerCountry: string;
    /**
     * Business name for the business entity that owns the app. Information for registration purposes only and not given to the end user.
     * @type {string}
     * @memberof Application
     */
    ownerName: string;
    /**
     * Zip code for the business entity that owns the app. Information for registration purposes only and not given to the end user.
     * @type {string}
     * @memberof Application
     */
    ownerPostalCode: string;
    /**
     * State for the business entity that owns the app. Information for registration purposes only and not given to the end user.
     * @type {string}
     * @memberof Application
     */
    ownerState: string;
    /**
     * An app logo passed as a Base64 encoded image (1:1 SVG file, must be less than 50KB)
     * @type {string}
     * @memberof Application
     */
    image: string;
}

/**
 * Check if a given object implements the Application interface.
 */
export function instanceOfApplication(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appDescription" in value;
    isInstance = isInstance && "appName" in value;
    isInstance = isInstance && "appUrl" in value;
    isInstance = isInstance && "ownerAddressLine1" in value;
    isInstance = isInstance && "ownerAddressLine2" in value;
    isInstance = isInstance && "ownerCity" in value;
    isInstance = isInstance && "ownerCountry" in value;
    isInstance = isInstance && "ownerName" in value;
    isInstance = isInstance && "ownerPostalCode" in value;
    isInstance = isInstance && "ownerState" in value;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appDescription': json['appDescription'],
        'appName': json['appName'],
        'appUrl': json['appUrl'],
        'ownerAddressLine1': json['ownerAddressLine1'],
        'ownerAddressLine2': json['ownerAddressLine2'],
        'ownerCity': json['ownerCity'],
        'ownerCountry': json['ownerCountry'],
        'ownerName': json['ownerName'],
        'ownerPostalCode': json['ownerPostalCode'],
        'ownerState': json['ownerState'],
        'image': json['image'],
    };
}

export function ApplicationToJSON(value?: Application | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appDescription': value.appDescription,
        'appName': value.appName,
        'appUrl': value.appUrl,
        'ownerAddressLine1': value.ownerAddressLine1,
        'ownerAddressLine2': value.ownerAddressLine2,
        'ownerCity': value.ownerCity,
        'ownerCountry': value.ownerCountry,
        'ownerName': value.ownerName,
        'ownerPostalCode': value.ownerPostalCode,
        'ownerState': value.ownerState,
        'image': value.image,
    };
}
