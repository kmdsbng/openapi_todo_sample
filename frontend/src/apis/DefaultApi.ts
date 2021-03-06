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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
} from '../models';

export interface DeleteTodoTodoTaskRequest {
    id: string;
}

export interface GetTodoTodoTaskRequest {
    id: string;
}

export interface PostTodoTodoTaskRequest {
    inlineObject?: InlineObject;
}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * delete_todo
     */
    async deleteTodoTodoTaskRaw(requestParameters: DeleteTodoTodoTaskRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTodoTodoTask.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/todo_task`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete_todo
     */
    async deleteTodoTodoTask(requestParameters: DeleteTodoTodoTaskRequest): Promise<void> {
        await this.deleteTodoTodoTaskRaw(requestParameters);
    }

    /**
     * get_todo
     */
    async getTodoTodoTaskRaw(requestParameters: GetTodoTodoTaskRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTodoTodoTask.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/todo_task`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * get_todo
     */
    async getTodoTodoTask(requestParameters: GetTodoTodoTaskRequest): Promise<void> {
        await this.getTodoTodoTaskRaw(requestParameters);
    }

    /**
     * post_todo
     */
    async postTodoTodoTaskRaw(requestParameters: PostTodoTodoTaskRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/todo_task`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.inlineObject),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * post_todo
     */
    async postTodoTodoTask(requestParameters: PostTodoTodoTaskRequest): Promise<void> {
        await this.postTodoTodoTaskRaw(requestParameters);
    }

}
