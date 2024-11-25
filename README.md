# 공부의 숲 (Forest of Study)

공부의 숲은 올바른 학습 습관을 만들어가는 개인 학습 관리 및 커뮤니티 플랫폼입니다.

## 프로젝트 목표

"조금씩, 꾸준히" 라는 철학을 바탕으로 사용자들이 자신만의 학습 루틴을 만들고 지속할 수 있도록 돕습니다. 작은 성취들이 모여 큰 숲을 이루듯, 일상 속 작은 학습 습관이 모여 의미 있는 성장을 만들어냅니다.

## 주요 기능

- 🌱 개인 스터디 생성 및 관리
- ⏰ 집중력 향상을 위한 타이머 기능
- 🎯 일일 학습 목표 설정 및 트래킹
- 💫 학습 달성도에 따른 포인트 보상
- 👥 학습 커뮤니티를 통한 동기부여

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- Storybook

## 시작하기

### 필수 조건

- Node.js LTS 버전 (Iron)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# Storybook 실행
npm run storybook
```

### 스토리북 배포

<https://6738bbad6db7ed66b949ad4d-pnhtxuerkm.chromatic.com/>

### 백엔드에서 Swagger 타입 받아오기

- 먼저 백엔드 프로젝트 경로(forest-of-study-be) 루트에서 최신 커밋을 반영합니다.

```bash
git pull origin main
```

- 백엔드 프로젝트 경로(forest-of-study-be) 루트에서 아래 명령어로 백엔드 서버를 실행합니다.

```bash
npm run start:dev
```

- 아래 커맨드 실행 시 Swagger에 있는 타입들이 src/lib/types/api 디렉터리에 생성됩니다.

```bash
# swagger-typescript-api devDependency 설치와 동시에 Swagger 문서를 타입으로 추출함
npm run codegen
```

## 권장 VS Code 확장팩

<details>
<summary>프로젝트 개발에 도움이 되는 VS Code 확장팩들입니다:</summary>

- **코드 품질**

  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 코드 린팅 및 스타일 검사
  - [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors): TypeScript 에러 메시지를 더 읽기 쉽게 표시

- **스타일링**

  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind CSS 클래스 자동 완성 및 하이라이트
  - [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind): Tailwind CSS 클래스 자동 정렬

- **개발 생산성**

  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig): 일관된 코드 스타일 유지
  - [NVM for VSCode](https://marketplace.visualstudio.com/items?itemName=abumalick.vscode-nvm): VS Code 내에서 nvm 통합
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): 코드 내 영문 철자 검사 지원

- **TODO 관리**

  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): 코드 내 TODO 주석을 트리 형태로 표시
  - [Todo Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): TODO 주석 강조 표시

- **Git**

  - [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode): 커밋 메시지에 이모지 추가 지원

</details>

<br/>

> <br />
> 필요에 따라 추가하고 싶은 공동 작업용 확장팩이 있다면 알려주세요. 😊
> <br />
> <br />
