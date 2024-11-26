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
  CreateHabitsDto,
  HabitsControllerCompleteHabitData,
  HabitsControllerCreateHabitsData,
  HabitsControllerDeleteCompletedHabitData,
  HabitsControllerDeleteHabitsData,
  HabitsControllerGetHabitsData,
  HabitsControllerUpdateHabitsData,
  UpdateHabitsDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Habits<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 스터디에 등록된 습관을 조회합니다. - 현재 조회중인 스터디에 등록된 습관을 조회합니다.
   *
   * @tags habits
   * @name HabitsControllerGetHabits
   * @summary 습관 조회
   * @request GET:/habits/{studyId}
   * @response `200` `HabitsControllerGetHabitsData`
   */
  habitsControllerGetHabits = (studyId: string, params: RequestParams = {}) =>
    this.request<HabitsControllerGetHabitsData, any>({
      path: `/habits/${studyId}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디에 여러 습관을 한번에 생성합니다. - 중복된 이름의 습관은 생성할 수 없습니다.
   *
   * @tags habits
   * @name HabitsControllerCreateHabits
   * @summary 여러 습관 동시 생성
   * @request POST:/habits/{studyId}
   * @response `200` `HabitsControllerCreateHabitsData`
   */
  habitsControllerCreateHabits = (
    studyId: string,
    data: CreateHabitsDto,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerCreateHabitsData, any>({
      path: `/habits/${studyId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디의 여러 습관을 한번에 수정합니다. - 중복된 이름의 습관으로 수정할 수 없습니다.
   *
   * @tags habits
   * @name HabitsControllerUpdateHabits
   * @summary 여러 습관 동시 수정
   * @request PATCH:/habits/{studyId}
   * @response `200` `HabitsControllerUpdateHabitsData`
   */
  habitsControllerUpdateHabits = (
    studyId: string,
    data: UpdateHabitsDto,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerUpdateHabitsData, any>({
      path: `/habits/${studyId}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디의 습관을 삭제합니다. undefined
   *
   * @tags habits
   * @name HabitsControllerDeleteHabits
   * @summary 습관 삭제
   * @request DELETE:/habits/{studyId}/{habitId}
   * @response `200` `HabitsControllerDeleteHabitsData`
   */
  habitsControllerDeleteHabits = (
    studyId: string,
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerDeleteHabitsData, any>({
      path: `/habits/${studyId}/${habitId}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * @description 오늘의 습관을 완료 처리합니다. - 오늘 완료한 습관은 다시 완료할 수 없습니다.
   *
   * @tags habits
   * @name HabitsControllerCompleteHabit
   * @summary 습관 완료 처리
   * @request POST:/habits/{studyId}/{habitId}/complete
   * @response `200` `HabitsControllerCompleteHabitData`
   */
  habitsControllerCompleteHabit = (
    studyId: string,
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerCompleteHabitData, any>({
      path: `/habits/${studyId}/${habitId}/complete`,
      method: 'POST',
      format: 'json',
      ...params,
    });
  /**
   * @description 완료된 습관을 삭제합니다. - 오늘 완료된 습관만 삭제할 수 있습니다.
   *
   * @tags habits
   * @name HabitsControllerDeleteCompletedHabit
   * @summary 완료된 습관 삭제
   * @request DELETE:/habits/{studyId}/{habitId}/complete
   * @response `200` `HabitsControllerDeleteCompletedHabitData`
   */
  habitsControllerDeleteCompletedHabit = (
    studyId: string,
    habitId: string,
    params: RequestParams = {},
  ) =>
    this.request<HabitsControllerDeleteCompletedHabitData, any>({
      path: `/habits/${studyId}/${habitId}/complete`,
      method: 'DELETE',
      ...params,
    });
}
