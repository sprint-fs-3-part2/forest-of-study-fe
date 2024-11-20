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
  StudiesControllerDeleteStudyData,
  StudiesControllerGetRecentStudiesData,
  StudiesControllerGetStudiesData,
  StudiesControllerGetStudyByIdData,
  StudiesControllerSearchStudiesData,
  StudiesControllerUpdateStudyData,
  UpdateStudyDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Studies<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 스터디를 생성합니다. - 스터디 이름, 스터디 개설자 닉네임, 스터디 소개, 배경화면, 비밀번호를 입력받아 스터디를 생성합니다.
   *
   * @tags studies
   * @name StudiesControllerCreate
   * @summary 스터디 생성
   * @request POST:/studies
   * @response `200` `StudiesControllerCreateData`
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
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디 목록을 조회합니다. - 개설된 모든 스터디 목록을 조회합니다.
   *
   * @tags studies
   * @name StudiesControllerGetStudies
   * @summary 스터디 목록 조회
   * @request GET:/studies
   * @response `200` `StudiesControllerGetStudiesData`
   */
  studiesControllerGetStudies = (
    query?: {
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 현재 page 값 (page=1)
       * @example 1
       */
      page?: number;
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 스킵할 데이터 수 (skip=0)
       * @example 0
       */
      skip?: number;
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 가져올 데이터 수 (take=6), 한 번에 최대 60개
       * @example 6
       */
      take?: number;
      /**
       * 스터디 목록 조회 시 정렬 기준 (orderBy=createdAt)
       * @example "createdAt"
       */
      orderBy?: 'createdAt' | 'points';
      /**
       * 스터디 목록 조회 시 정렬 방식 (order=desc)
       * @example "desc"
       */
      order?: 'desc' | 'asc';
    },
    params: RequestParams = {},
  ) =>
    this.request<StudiesControllerGetStudiesData, any>({
      path: `/studies`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 최근 조회한 스터디 목록을 조회합니다. - 최근 조회한 스터디 목록을 조회합니다.
   *
   * @tags studies
   * @name StudiesControllerGetRecentStudies
   * @summary 최근 조회한 스터디 목록 조회
   * @request GET:/studies/recent
   * @response `200` `StudiesControllerGetRecentStudiesData`
   */
  studiesControllerGetRecentStudies = (params: RequestParams = {}) =>
    this.request<StudiesControllerGetRecentStudiesData, any>({
      path: `/studies/recent`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 스터디를 검색합니다. - 특정 키워드로 스터디를 검색합니다.
   *
   * @tags studies
   * @name StudiesControllerSearchStudies
   * @summary 스터디 검색
   * @request GET:/studies/search
   * @response `200` `StudiesControllerSearchStudiesData`
   */
  studiesControllerSearchStudies = (
    query?: {
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 현재 page 값 (page=1)
       * @example 1
       */
      page?: number;
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 스킵할 데이터 수 (skip=0)
       * @example 0
       */
      skip?: number;
      /**
       * 스터디 목록 조회 시 Offset 기반 페이지네이션 가져올 데이터 수 (take=6), 한 번에 최대 60개
       * @example 6
       */
      take?: number;
      /**
       * 스터디 목록 조회 시 정렬 기준 (orderBy=createdAt)
       * @example "createdAt"
       */
      orderBy?: 'createdAt' | 'points';
      /**
       * 스터디 목록 조회 시 정렬 방식 (order=desc)
       * @example "desc"
       */
      order?: 'desc' | 'asc';
      /**
       * 스터디 검색 키워드 (최대 50자, 한글/영문/숫자/공백만 허용)
       * @minLength 1
       * @maxLength 50
       * @example "개발"
       */
      keyword?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<StudiesControllerSearchStudiesData, any>({
      path: `/studies/search`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디 상세 정보를 조회합니다. - 특정 스터디의 상세 정보를 조회합니다.
   *
   * @tags studies
   * @name StudiesControllerGetStudyById
   * @summary 스터디 상세 조회
   * @request GET:/studies/{id}
   * @response `200` `StudiesControllerGetStudyByIdData`
   */
  studiesControllerGetStudyById = (id: string, params: RequestParams = {}) =>
    this.request<StudiesControllerGetStudyByIdData, any>({
      path: `/studies/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 스터디 정보를 수정합니다. - 특정 스터디의 정보를 수정합니다.
   *
   * @tags studies
   * @name StudiesControllerUpdateStudy
   * @summary 스터디 수정
   * @request PATCH:/studies/{id}
   * @response `200` `StudiesControllerUpdateStudyData`
   */
  studiesControllerUpdateStudy = (
    id: string,
    data: UpdateStudyDto,
    params: RequestParams = {},
  ) =>
    this.request<StudiesControllerUpdateStudyData, any>({
      path: `/studies/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description 스터디를 삭제합니다. - 특정 스터디를 삭제합니다.
   *
   * @tags studies
   * @name StudiesControllerDeleteStudy
   * @summary 스터디 삭제
   * @request DELETE:/studies/{id}
   * @response `200` `StudiesControllerDeleteStudyData`
   */
  studiesControllerDeleteStudy = (id: string, params: RequestParams = {}) =>
    this.request<StudiesControllerDeleteStudyData, any>({
      path: `/studies/${id}`,
      method: 'DELETE',
      ...params,
    });
}
