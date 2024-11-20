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
  CreateStudyDto,
  StudiesControllerCreateData,
  StudiesControllerFindAllData,
  StudiesControllerFindOneData,
  StudiesControllerRemoveData,
  StudiesControllerUpdateData,
  UpdateStudyDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Studies<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Studies
   * @name StudiesControllerCreate
   * @request POST:/studies
   * @response `201` `StudiesControllerCreateData`
   */
  studiesControllerCreate = (
    data: CreateStudyDto,
    params: RequestParams = {},
  ) =>
    this.request<StudiesControllerCreateData, any>({
      path: `/studies`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Studies
   * @name StudiesControllerFindAll
   * @request GET:/studies
   * @response `200` `StudiesControllerFindAllData`
   */
  studiesControllerFindAll = (params: RequestParams = {}) =>
    this.request<StudiesControllerFindAllData, any>({
      path: `/studies`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Studies
   * @name StudiesControllerFindOne
   * @request GET:/studies/{id}
   * @response `200` `StudiesControllerFindOneData`
   */
  studiesControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<StudiesControllerFindOneData, any>({
      path: `/studies/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Studies
   * @name StudiesControllerUpdate
   * @request PATCH:/studies/{id}
   * @response `200` `StudiesControllerUpdateData`
   */
  studiesControllerUpdate = (
    id: string,
    data: UpdateStudyDto,
    params: RequestParams = {},
  ) =>
    this.request<StudiesControllerUpdateData, any>({
      path: `/studies/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Studies
   * @name StudiesControllerRemove
   * @request DELETE:/studies/{id}
   * @response `200` `StudiesControllerRemoveData`
   */
  studiesControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<StudiesControllerRemoveData, any>({
      path: `/studies/${id}`,
      method: 'DELETE',
      ...params,
    });
}
