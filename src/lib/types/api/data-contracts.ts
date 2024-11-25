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
   * @example "90fdb4be-3b14-45c4-a1d9-85d1990bddff"
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
   * @example "90fdb4be-3b14-45c4-a1d9-85d1990bddff"
   */
  id?: string;
}

export interface CompletedHabitDto {
  /**
   * 완료된 습관 ID
   * @format uuid
   */
  id: string;
  /**
   * 습관 ID
   * @format uuid
   */
  habitId: string;
  /**
   * 완료 날짜
   * @format date-time
   * @example "2024-11-21T15:30:00Z"
   */
  completedAt: string;
}

export interface HabitResponseDto {
  /**
   * 습관 ID
   * @format uuid
   * @example "ddb61bbb-2049-402a-a212-d7492ae60b53"
   */
  id: string;
  /**
   * 습관 이름
   * @format string
   * @example "물 1L 마시기"
   */
  name: string;
  /** 이번 주 완료 기록 목록 */
  completedHabitsThisWeek: CompletedHabitDto[];
  /**
   * 오늘 습관 완료 여부
   * @format boolean
   * @example true
   */
  completedToday: boolean;
}

export interface StudyHabitsResponseDto {
  /** 스터디의 모든 습관 목록 */
  habits: HabitResponseDto[];
}

export interface CreateHabitDto {
  /**
   * 습관 이름
   * @minLength 1
   * @example "물 1L 마시기"
   */
  name: string;
}

export interface CreateHabitsDto {
  /**
   * 생성할 습관 목록
   * @example [{"name":"물 1L 마시기"},{"name":"운동하기"}]
   */
  habits: CreateHabitDto[];
}

export interface CreateHabitResponseDto {
  /**
   * 습관 이름
   * @minLength 1
   * @example "물 1L 마시기"
   */
  name: string;
  /**
   * 습관 ID (UUIDv4)
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id: string;
}

export interface CreateHabitsResponseDto {
  /** 생성된 습관 목록 */
  habits: CreateHabitResponseDto[];
}

export interface UpdateHabitDto {
  /**
   * 습관 ID
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id: string;
  /**
   * 수정할 습관 이름
   * @minLength 1
   * @example "물 2L 마시기"
   */
  name: string;
}

export interface UpdateHabitsDto {
  /** 수정할 습관 목록 */
  habits: UpdateHabitDto[];
}

export interface UpdateHabitsResponseDto {
  /** 수정된 습관 목록 */
  habits: CreateHabitResponseDto[];
}

export interface CompletedHabitResponseDto {
  /**
   * 완료된 습관 ID (UUIDv4)
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id: string;
  /**
   * 습관 ID (UUIDv4)
   * @format uuid
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  habitId: string;
  /**
   * 완료된 시점
   * @format date
   * @example "2024-11-21T15:30:00Z"
   */
  completedAt: string;
}

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

export type HabitsControllerGetHabitsData = StudyHabitsResponseDto;

export type HabitsControllerCreateHabitsData = CreateHabitsResponseDto;

export type HabitsControllerUpdateHabitsData = UpdateHabitsResponseDto;

export type HabitsControllerDeleteHabitsData = any;

export type HabitsControllerCompleteHabitData = CompletedHabitResponseDto;

export type HabitsControllerDeleteCompletedHabitData = any;

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
