/* tslint:disable */
/* eslint-disable */
/**
 * todo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResultState
 */
export interface ResultState {
    /**
     * 
     * @type {string}
     * @memberof ResultState
     */
    state?: ResultStateStateEnum;
    /**
     * 
     * @type {string}
     * @memberof ResultState
     */
    message?: string;
}

export function ResultStateFromJSON(json: any): ResultState {
    return ResultStateFromJSONTyped(json, false);
}

export function ResultStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'state': !exists(json, 'state') ? undefined : json['state'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResultStateToJSON(value?: ResultState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'state': value.state,
        'message': value.message,
    };
}

/**
* @export
* @enum {string}
*/
export enum ResultStateStateEnum {
    OK = 'OK',
    Fail = 'Fail'
}


