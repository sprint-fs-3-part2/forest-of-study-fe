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
  CreatePointDto,
  PointsControllerCreateData,
  PointsControllerFindAllData,
  PointsControllerFindOneData,
  PointsControllerRemoveData,
  PointsControllerUpdateData,
  UpdatePointDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Points<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Points
   * @name PointsControllerCreate
   * @request POST:/points
   * @response `201` `PointsControllerCreateData`
   */
  pointsControllerCreate = (data: CreatePointDto, params: RequestParams = {}) =>
    this.request<PointsControllerCreateData, any>({
      path: `/points`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Points
   * @name PointsControllerFindAll
   * @request GET:/points
   * @response `200` `PointsControllerFindAllData`
   */
  pointsControllerFindAll = (params: RequestParams = {}) =>
    this.request<PointsControllerFindAllData, any>({
      path: `/points`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Points
   * @name PointsControllerFindOne
   * @request GET:/points/{id}
   * @response `200` `PointsControllerFindOneData`
   */
  pointsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<PointsControllerFindOneData, any>({
      path: `/points/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Points
   * @name PointsControllerUpdate
   * @request PATCH:/points/{id}
   * @response `200` `PointsControllerUpdateData`
   */
  pointsControllerUpdate = (
    id: string,
    data: UpdatePointDto,
    params: RequestParams = {},
  ) =>
    this.request<PointsControllerUpdateData, any>({
      path: `/points/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Points
   * @name PointsControllerRemove
   * @request DELETE:/points/{id}
   * @response `200` `PointsControllerRemoveData`
   */
  pointsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<PointsControllerRemoveData, any>({
      path: `/points/${id}`,
      method: 'DELETE',
      ...params,
    });
}
