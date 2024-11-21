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
  CreateHabitDto,
  HabitsControllerCreateData,
  HabitsControllerFindAllData,
  HabitsControllerFindOneData,
  HabitsControllerRemoveData,
  HabitsControllerUpdateData,
  UpdateHabitDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Habits<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Habits
   * @name HabitsControllerCreate
   * @request POST:/habits
   * @response `201` `HabitsControllerCreateData`
   */
  habitsControllerCreate = (data: CreateHabitDto, params: RequestParams = {}) =>
    this.request<HabitsControllerCreateData, any>({
      path: `/habits`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Habits
   * @name HabitsControllerFindAll
   * @request GET:/habits
   * @response `200` `HabitsControllerFindAllData`
   */
  habitsControllerFindAll = (params: RequestParams = {}) =>
    this.request<HabitsControllerFindAllData, any>({
      path: `/habits`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Habits
   * @name HabitsControllerFindOne
   * @request GET:/habits/{id}
   * @response `200` `HabitsControllerFindOneData`
   */
  habitsControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<HabitsControllerFindOneData, any>({
      path: `/habits/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Habits
   * @name HabitsControllerUpdate
   * @request PATCH:/habits/{id}
   * @response `200` `HabitsControllerUpdateData`
   */
  habitsControllerUpdate = (
    id: string,
    data: UpdateHabitDto,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerUpdateData, any>({
      path: `/habits/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Habits
   * @name HabitsControllerRemove
   * @request DELETE:/habits/{id}
   * @response `200` `HabitsControllerRemoveData`
   */
  habitsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<HabitsControllerRemoveData, any>({
      path: `/habits/${id}`,
      method: 'DELETE',
      ...params,
    });
}
