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

export interface CreateStudyDto {
  /**
   * 스터디 이름
   * @example "UX 스터디"
   */
  name: string;
  /**
   * 스터디 개설자의 닉네임
   * @example "K.K."
   */
  nickname: string;
  /**
   * 스터디 소개
   * @example "나비보벳따우"
   */
  intro: string;
  /**
   * 스터디 배경 이미지
   * @example "green"
   */
  background: string;
  /**
   * 스터디 비밀번호
   * @minLength 8
   * @maxLength 64
   * @example "1q2w3e4r"
   */
  password: string;
}

export interface CreateStudyResponseDto {
  /**
   * 스터디 ID (UUIDv4)
   * @example "64aa3ca4-65ed-460d-b100-7fc93829a07d"
   */
  id: string;
}

export interface RecentStudiesRequestDto {
  /**
   * 조회할 스터디 UUID(v4) 배열(0~3개)
   * @maxItems 3
   * @minItems 0
   * @uniqueItems true
   * @example ["f47ac10b-58cc-4372-a567-0e02b2c3d479","550e8400-e29b-41d4-a716-446655440000"]
   */
  uuids: string[];
}

export interface RecentStudiesResponseDto {
  /**
   * 스터디 이름
   * @example "UX 스터디"
   */
  name: string;
  /**
   * 스터디 개설자의 닉네임
   * @example "K.K."
   */
  nickname: string;
  /**
   * 스터디 소개
   * @example "나비보벳따우"
   */
  intro: string;
  /**
   * 스터디 배경 이미지
   * @example "green"
   */
  background: string;
}

export interface SearchKeywordResponseDto {
  /**
   * 스터디 이름
   * @example "UX 스터디"
   */
  name: string;
  /**
   * 스터디 개설자의 닉네임
   * @example "K.K."
   */
  nickname: string;
  /**
   * 스터디 소개
   * @example "나비보벳따우"
   */
  intro: string;
  /**
   * 스터디 배경 이미지
   * @example "green"
   */
  background: string;
}

export interface UpdateStudyDto {
  /**
   * 스터디 이름
   * @example "UX 스터디"
   */
  name?: string;
  /**
   * 스터디 개설자의 닉네임
   * @example "K.K."
   */
  nickname?: string;
  /**
   * 스터디 소개
   * @example "나비보벳따우"
   */
  intro?: string;
  /**
   * 스터디 배경 이미지
   * @example "green"
   */
  background?: string;
  /**
   * 스터디 비밀번호
   * @minLength 8
   * @maxLength 64
   * @example "1q2w3e4r"
   */
  password?: string;
}

export interface UpdateStudyResponseDto {
  /**
   * 스터디 ID (UUIDv4)
   * @example "64aa3ca4-65ed-460d-b100-7fc93829a07d"
   */
  id?: string;
}

export type CreateHabitDto = object;

export type UpdateHabitDto = object;

export type CreatePointDto = object;

export type UpdatePointDto = object;

export type CreateReactionDto = object;

export type UpdateReactionDto = object;

export type AppControllerGetHelloData = any;

export type StudiesControllerCreateStudyData = CreateStudyResponseDto;

export type StudiesControllerGetStudiesData = any;

export type StudiesControllerGetRecentStudiesData = RecentStudiesResponseDto;

export type StudiesControllerSearchStudiesData = SearchKeywordResponseDto;

export type StudiesControllerGetStudyByIdData = any;

export type StudiesControllerUpdateStudyData = UpdateStudyResponseDto;

export type StudiesControllerDeleteStudyData = any;

export type HabitsControllerCreateData = any;

export type HabitsControllerFindAllData = any;

export type HabitsControllerFindOneData = any;

export type HabitsControllerUpdateData = any;

export type HabitsControllerRemoveData = any;

export type PointsControllerCreateData = any;

export type PointsControllerFindAllData = any;

export type PointsControllerFindOneData = any;

export type PointsControllerUpdateData = any;

export type PointsControllerRemoveData = any;

export type ReactionsControllerCreateData = any;

export type ReactionsControllerFindAllData = any;

export type ReactionsControllerFindOneData = any;

export type ReactionsControllerUpdateData = any;

export type ReactionsControllerRemoveData = any;
