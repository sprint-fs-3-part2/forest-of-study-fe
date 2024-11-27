# 공부의 숲 (Forest of Study)

## 🌳 프로젝트 소개
> <br/>"공부의 숲" 은 올바른 학습 습관 형성을 돕는 개인 학습 관리 및 커뮤니티 플랫폼입니다. <br/> 사용자들은 스터디 그룹을 통해 함께 학습하고, 개인 학습 습관을 효과적으로 관리하며,  잘 수행할 때마다 포인트를 획득하여 학습 동기를 부여받을 수 있습니다.
<br/>

#### 🗓️ 프로젝트 기간: 2024. 11. 07 ~ 2024. 11. 27

## 팀원 소개
| 이름 | 역할 | Github |
|------|------|---------|
| 🧭 강대원 | FullStack | [@Daewony](https://github.com/Daewony) |
| 🏗️ 이현우 | FullStack | [@gealot](https://github.com/gealot) |
| 🔎 김지연 | FullStack | [@dani784601](https://github.com/dani784601) |
| 🌱 김태훈 | FullStack | [@Zero5338](https://github.com/Zero5338) |
| 🚀 최혜지 | FullStack | [@heziss](https://github.com/heziss) |
| 🎨 함헌규 | FullStack | [@heonq](https://github.com/heonq) |

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

### Git Convention
커밋 메시지는 다음 형식을 따릅니다:
```
<type>(<scope>): <description>
```

#### Commit Types
- ✨ feat: 새로운 기능 추가
- 🐛 fix: 버그 수정
- 📝 docs: 문서 수정
- 🎨 style: 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
- ♻️ refactor: 코드 리팩토링
- ✅ test: 테스트 코드 추가
- 🔧 chore: 빌드 업무 수정, 패키지 매니저 수정 등

#### Scope (선택사항)
- api: API 관련 변경
- ui: UI 관련 변경
- auth: 인증 관련 변경
- store: 상태관리 관련 변경

#### 예시
```
✨ feat(api): 스터디 그룹 생성 API 추가
🐛 fix(ui): 모바일에서 버튼 클릭 안되는 문제 수정
📝 docs: README 업데이트
```

## 프로젝트 구조
- Next.js의 App Router 구조를 기반으로 사용


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


### 팀원별 구현 기능 상세
- **강대원**
  - Frontend
    - 오늘의 집중 페이지 UI 구현
    - 데스크탑/태블릿/모바일 반응형 레이아웃 최적화
    - 타이머 기능 및 포인트 시스템 UI
  - Backend
    - Focus API 구현 및 문서화
    - 포인트 시스템 로직 구현
    - 스터디 API points 속성 확장
      - 생성 시 points 속성 자동화
      - 조회 응답에 points 데이터 추가
- **이현우**
  - Frontend
    - 스터디 생성 페이지 UI 구현
  - Backend
    - NestJS 프로젝트 초기 설정 및 구조화
    - Prisma를 이용한 초기 스키마 모델링 및 마이그레이션
      - Study, Habit, CompletedHabit, Focus, Reaction 모델 정의
    - Swagger API 문서화 및 Render 배포
    - Study API 구현
      - [Swagger API 문서](https://forest-of-study-be.onrender.com/api/#studies) 참고
- **김지연**
  - Frontend
    - Next.js 14 프로젝트 초기 설정 및 구조화
    - Tailwind CSS 공통 스타일 및 색상 팔레트 정의
    - 메인 화면 스터디 목록 구현
      - React Suspense 및 서버 컴포넌트 활용
- **김태훈**
  - Frontend
    - 공통 컴포넌트 설계 참여
    - Tailwind CSS 학습 및 적용
  - Backend
    - 오늘의 습관 (Habit) API 구현
    - DB 설계 검토
- **최혜지**
  - Frontend
    - 스터디 상세 화면 UI 및 습관 관련 컴포넌트 (공유, 수정, 삭제) 구현
    - 습관 관련 컴포넌트 개발
    - Next.js 및 TypeScript 학습, 적용
  - Backend
    - 습관 API 연동 작업
- **함헌규**
  - Frontend
    - 재사용 가능한 공통 컴포넌트 설계 및 구현
    - Storybook 환경 구축 및 배포
    - Next.js App Router를 사용한 애플리케이션 라우팅 구조 설계
  - Backend
    - Habit API 구현 및 적용
