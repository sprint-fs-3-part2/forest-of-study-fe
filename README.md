# 공부의 숲 (Forest of Study)

## 프로젝트 소개
공부의 숲은 올바른 학습 습관을 만들어가는 개인 학습 관리 및 커뮤니티 플랫폼입니다.

**프로젝트 기간**: 2024. 11. 07 ~ 2024. 11. 27

## 팀원 소개
| 이름 | 역할 | Github |
|------|------|---------|
| 강대원 | FullStack | [Github](https://github.com/Daewony) |
| 이현우 | FullStack | [Github](https://github.com/gealot) |
| 김지연 | FullStack | [Github](https://github.com/dani784601) |
| 김태훈 | FullStack | [Github](https://github.com/Zero5338) |
| 최혜지 | FullStack | [Github](https://github.com/heziss) |

📎 [팀 협업 문서](https://www.notion.so/1372b1ba9a1780329a55d5a0b1554344?v=1372b1ba9a1781bcbcbf000cf959a184)

## 기술 스택

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Storybook

### Backend
- Nest.js
- PrismaORM
- PostgreSQL

### 공통 Tool
- Git & Github
- Discord
- Jira

### 팀원별 구현 기능 상세
(작성예정)

## 프로젝트 구조
- Next.js의 App Router 구조를 사용하고 있습니다

  ```
  src/
    ├── app/                    # 페이지 라우팅
    ├── components/            # 컴포넌트
    │   ├── common/           # 공통 컴포넌트
    │   ├── features/         # 도메인별 컴포넌트
    │   └── layout/          # 레이아웃 컴포넌트
    ├── services/            # 비즈니스 로직
    └──  lib/                # 유틸리티 & 설정
        ├── utils/         # 공통 유틸리티 함수
        ├── hooks/         # 커스텀 훅
        └── config/        # 환경 설정
  ```
