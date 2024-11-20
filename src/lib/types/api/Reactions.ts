/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateReactionDto,
  ReactionsControllerCreateData,
  ReactionsControllerFindAllData,
  ReactionsControllerFindOneData,
  ReactionsControllerRemoveData,
  ReactionsControllerUpdateData,
  UpdateReactionDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Reactions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Reactions
   * @name ReactionsControllerCreate
   * @request POST:/reactions
   * @response `201` `ReactionsControllerCreateData`
   */
  reactionsControllerCreate = (
    data: CreateReactionDto,
    params: RequestParams = {},
  ) =>
    this.request<ReactionsControllerCreateData, any>({
      path: `/reactions`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Reactions
   * @name ReactionsControllerFindAll
   * @request GET:/reactions
   * @response `200` `ReactionsControllerFindAllData`
   */
  reactionsControllerFindAll = (params: RequestParams = {}) =>
    this.request<ReactionsControllerFindAllData, any>({
      path: `/reactions`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Reactions
   * @name ReactionsControllerFindOne
   * @request GET:/reactions/{id}
   * @response `200` `ReactionsControllerFindOneData`
   */
  reactionsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<ReactionsControllerFindOneData, any>({
      path: `/reactions/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Reactions
   * @name ReactionsControllerUpdate
   * @request PATCH:/reactions/{id}
   * @response `200` `ReactionsControllerUpdateData`
   */
  reactionsControllerUpdate = (
    id: string,
    data: UpdateReactionDto,
    params: RequestParams = {},
  ) =>
    this.request<ReactionsControllerUpdateData, any>({
      path: `/reactions/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Reactions
   * @name ReactionsControllerRemove
   * @request DELETE:/reactions/{id}
   * @response `200` `ReactionsControllerRemoveData`
   */
  reactionsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<ReactionsControllerRemoveData, any>({
      path: `/reactions/${id}`,
      method: 'DELETE',
      ...params,
    });
}
