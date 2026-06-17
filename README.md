# GlobalNomad

<div align="center">
  <br>
  
<img width="329" alt="image" src="https://github.com/user-attachments/assets/e0fe16bf-efd2-4c4c-85b1-58dee7577703">
  
</div>

<br>

## 프로젝트 소개

사용자가 판매자와 체험자 모두 될 수 있는 플랫폼으로, 캘린더, 지도 및 주소 관련 기능을 구현한 체험 상품 예약 프로젝트 입니다.

## GlobalNomad Refactoring

팀 프로젝트를 개인 레포지토리로 포크 후, 메인페이지·상세페이지·공용 컴포넌트 중심으로 전반적인 UI/UX 개선과 성능 최적화를 진행했습니다.
반응형 레이아웃 리뉴얼, Swiper 기반 카테고리 슬라이드 구현, Skeleton·스피너를 통한 로딩 최적화, 카카오 지도 기능 추가 등 사용자 경험 개선에 집중했습니다.
또한 CDN 기반 이미지 경로 적용, fallback 이미지, 상수 분리, 커스텀 훅 분리 등 코드 구조를 정리하고, 불필요한 스타일·파일 제거 및 import order 정리 등을 통해 유지보수성을 크게 향상시켰습니다.

> **기간: 2025.11.17 ~ 2026.01.26**

## 배포 주소

> 개인 리펙토링: **배포 URL**: https://globalnomard.netlify.app/ <br/>  
> Legacy: **배포 URL**: https://codeit-globalnomad.vercel.app/main?page=1

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-ccfbf1?style=for-the-badge&logo=vanilla-extract&logoColor=white)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-00897B?style=for-the-badge&logo=Google%20Meet&logoColor=white)
![TanStack Query](https://img.shields.io/badge/react%20query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/react%20hook%20form-EC5990?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)

### Communication

![Discord](https://img.shields.io/badge/Discord-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

## 팀 소개

<div align="center">

| <img src="https://avatars.githubusercontent.com/u/96711699?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/115972184?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/166021800?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/176660375?v=4" width="150" height="150"/> |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                   이수지<br/>[@mulddang2](https://github.com/mulddang2)                    |                     박지민<br/>[@jiminp00](https://github.com/jiminp00)                     |                  나승엽<br/>[@naseungyeop](https://github.com/naseungyeop)                  |                    오혁재<br/>[@duckjae12](https://github.com/duckjae12)                    |

</div>

🔗 Notion 협업문서 바로가기: https://plucky-potential-23f.notion.site/1587db17f7ba8004b456ff9d6baae49c?v=1587db17f7ba80c19d89000cd81b7b30

---

## 담당 개발 및 기능 📦

### ⭐️ 체험 등록, 수정, 삭제 기능

- `react-daum-postcode`를 이용하여 실제 주소 추가 기능
- `react hook form`을 적용하여 입력값 변경시 리렌더링을 최소화하여 성능 향상

### ⭐️ 체험 관리

- `Intersection Observer`를 이용하여 무한스크롤 구현
- skeleton UI를 적용하여 사용자 경험 향상

### ⭐️ 공용컴포넌트 개발

- Input 컴포넌트, profile 페이지 공통 사이드 메뉴 및 레이아웃 개발, 모바일 Drawer 컴포넌트 개발

---

## 담당 개발 화면 구성 📺

| 체험 등록 페이지 |
| ---------------- |

| ![체험등록](https://github.com/user-attachments/assets/f196e6fa-356d-4651-8a20-00e9313d870f)

| 체험 관리 페이지 |
| ---------------- |

| ![gif-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/51e4c002-421f-480a-a12e-ca9f7ad6c9a9)

| 체험 수정 페이지 |
| ---------------- |

| ![체험수정](https://github.com/user-attachments/assets/f57ab707-dd72-4614-a257-9200d0608961)

| 반응형 (모바일 ~320px) |
| ---------------------- |

| ![모바일반응형](https://github.com/user-attachments/assets/f2fa514e-e628-4bd4-974a-482ce4bc1b34)

<br>

전체 시연: [▶YouTube ](https://youtu.be/Coqk3phuGlo?si=XpVh-IEul34dmNRg)

---

## 기술 검증 📐

### RHF vs useState 리렌더링 비용 직접 측정

> 통념에 의존한 기술 선택이 아닌, 프로파일링 도구를 통한 정량적 데이터로 기술 채택의 당위성 검증.
> 측정 과정과 raw 데이터는 [`src/app/benchmark/RESULTS.md`](src/app/benchmark/RESULTS.md)에 문서화. _(개인 리팩토링 단계에서 수행)_

#### 배경

- "비제어 방식이 리렌더링 최적화에 유리하다"는 통념을 기반으로 React Hook Form(RHF)을 채택했으나, 실제 프로젝트의 폼 규모에서 두 방식 간 성능 차이가 객관적으로 얼마나 발생하는지에 대한 수치적 근거 부재.
- 따라서 동일한 '체험 등록 폼'을 제어 방식(`useState`)과 비제어 방식(`RHF`) 두 버전으로 구현해 직접 비교.

#### 방법

- **환경 통제 및 프로파일링:** 프로덕션 빌드 환경(`next build --profile`)에서 **React Profiler**를 활용해 키 입력당 발생하는 리렌더링 비용을 정밀 측정.
- **극한 환경 시뮬레이션:** Chrome DevTools의 **CPU 4x Throttling**을 적용해 모바일·저사양 기기 환경에서의 성능 변화 추이를 교차 검증.

#### 결과

| 지표 (키 입력당)       | React Hook Form | useState                  |
| ---------------------- | --------------- | ------------------------- |
| 리렌더링 횟수          | **0회**         | 입력당 1회                |
| 리렌더링 비용 (1x)     | 0 (호출 없음)   | 약 **2.2ms**              |
| 리렌더링 비용 (CPU 4x) | 0 (호출 없음)   | 약 **9.1ms**              |
| P50 Paint Lag (CPU 4x) | **1.1ms**       | **14.6ms** (약 13배 격차) |

- 제어 방식은 키 입력당 **구조적으로 약 2.2ms의 리렌더링 비용**이 발생하는 반면, RHF는 메인 폼 **리렌더링 0회** 유지.
- CPU 스로틀링 환경에서 제어 방식의 렌더링 비용은 **약 9.1ms로 급증**, 화면 반영 지연(P50 Paint Lag) 기준 **두 방식 간 약 13배의 성능 격차** 발생.
- 현재 규모의 고사양 PC 환경에선 체감 차이가 미미할지라도, 입력 필드 수가 늘어나거나 사용자 기기 사양이 낮아질수록 비용이 기하급수적으로 확대되는 **구조적 잠재 한계**를 수치로 명시해 기술 채택 타당성 확보.

---

## Troubleshooting 🛠️

### 미디어쿼리 분기로 인한 SSR Hydration Mismatch

#### 문제

- **하이드레이션 결함:** Next.js App Router(SSR) 환경에서 `react-responsive` 라이브러리를 사용해 PC·태블릿·모바일 레이아웃을 자바스크립트 기반으로 분기하자, 서버와 클라이언트 간의 초기 렌더링 결과가 일치하지 않는 **Hydration Mismatch 에러 발생**.
- **원인 분석:** 서버 측에서는 브라우저의 실제 뷰포트(Viewport) 크기를 알 수 없어 기본값(Default) 상태로 html을 생성하는 반면, 클라이언트(브라우저)에서는 실제 화면 크기에 맞춰 렌더링을 시도하면서 DOM 트리 구조 붕괴.

#### 해결

- **IsMounted 가드 일원화:** 미디어쿼리 평가 및 컴포넌트 평가를 브라우저 마운트 이후로 강제 지연시키는 `isMounted` 상태 기반의 커스텀 훅(`useResponsiveQuery`)을 설계하여 프로젝트 전반의 분기 로직을 일원화. 이를 통해 초기 서버-클라이언트 간의 HTML 구조를 완벽히 통일.

#### 결과

- **에러 제로화:** 모바일·태블릿·PC 전 디바이스 환경에서 발생하던 Hydration 에러를 구조적으로 제거하여 렌더링 안정성 확보.
- **성능 및 가독성 개선:** 불필요한 자바스크립트 기반의 미디어쿼리 훅 사용을 줄이고 CSS 기반 분기로 부분 전환함으로써, 클라이언트 사이드 번들 크기 절감 및 마운트 시점의 렌더링 연산 비용 최적화.

---

## 아키텍쳐

### 디렉토리 구조

```
📦
├─ .eslintrc.js
├─ .gitattributes
├─ .github
│  ├─ pull_request_template.md
│  └─ workflows
│     └─ ci.yml
├─ .gitignore
├─ .husky
│  └─ pre-commit
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ README.md
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ fonts
│  │  └─ PretendardVariable.woff2
│  ├─ icons
│  │  ├─ .gitkeep
│  │  ├─ logo-big.svg
│  │  └─ logo.svg
│  └─ images
│     └─ .gitkeep
├─ src
│  ├─ apis : api 관련 폴더
│  │  ├─ .gitkeep
│  │  ├─ activities-api.ts
│  │  ├─ auth.ts
│  │  ├─ axios-instance.ts
│  │  ├─ get-activities.ts
│  │  ├─ get-current-page-activity.ts
│  │  ├─ get-popular-activity.ts
│  │  ├─ get-search-result.ts
│  │  ├─ my-activities.ts
│  │  ├─ my-activity-board.ts
│  │  ├─ my-reservations.ts
│  │  ├─ notifications.ts
│  │  ├─ oauth.ts
│  │  ├─ querykeys.ts
│  │  └─ users.ts
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ layout.css.ts
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  ├─ page.css.ts
│  │  │  └─ page.tsx
│  │  ├─ main
│  │  │  ├─ page.css.ts
│  │  │  └─ page.tsx
│  │  ├─ oauth
│  │  │  └─ page.tsx
│  │  ├─ page.css.ts
│  │  ├─ page.tsx
│  │  ├─ profile
│  │  │  ├─ layout.css.ts
│  │  │  ├─ layout.tsx : /profile/** 페이지에서 공통으로 포함됨.
│  │  │  ├─ my-activities
│  │  │  │  ├─ create : 체험 등록 페이지
│  │  │  │  │  ├─ page.css.ts
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ edit
│  │  │  │  │  └─ [id] : 체험 수정 페이지
│  │  │  │  │     ├─ page.css.ts
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ loading.css.ts
│  │  │  │  ├─ loading.tsx : loading 스피너
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx : 체험 관리 페이지
│  │  │  ├─ my-activity-board
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx
│  │  │  ├─ my-reservations
│  │  │  │  ├─ loading.css.ts
│  │  │  │  ├─ loading.tsx
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx
│  │  │  └─ mypage
│  │  │     ├─ .gitkeep
│  │  │     ├─ page.css.ts
│  │  │     └─ page.tsx
│  │  └─ signup
│  │     ├─ kakao
│  │     │  └─ page.tsx
│  │     ├─ page.css.ts
│  │     └─ page.tsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ arrow-left.svg
│  │  │  ├─ arrow-right.svg
│  │  │  ├─ account-check-outline.svg
│  │  │  ├─ alarm.svg
│  │  │  ├─ arrow-down.svg
│  │  │  ├─ arrow.svg
│  │  │  ├─ bold_star.svg
│  │  │  ├─ btn-add-time.svg
│  │  │  ├─ btn-canceled.svg
│  │  │  ├─ btn-minus-time.svg
│  │  │  ├─ btn-x.svg
│  │  │  ├─ calendar-48px.svg
│  │  │  ├─ calendar-check-outline.svg
│  │  │  ├─ calendar-next.svg
│  │  │  ├─ calendar-prev.svg
│  │  │  ├─ check-mark.svg
│  │  │  ├─ check.svg
│  │  │  ├─ cog-outline.svg
│  │  │  ├─ double-arrow-left.svg
│  │  │  ├─ double-arrow-right.svg
│  │  │  ├─ empty.svg
│  │  │  ├─ facebook.svg
│  │  │  ├─ google.svg
│  │  │  ├─ instagram.svg
│  │  │  ├─ kakao.svg
│  │  │  ├─ meatball.svg
│  │  │  ├─ pen.svg
│  │  │  ├─ plus.svg
│  │  │  ├─ popular-arrow-left.svg
│  │  │  ├─ popular-arrow-right.svg
│  │  │  ├─ search.svg
│  │  │  ├─ star-empty.svg
│  │  │  ├─ star-fill.svg
│  │  │  ├─ text-box-check-outline.svg
│  │  │  ├─ twitter.svg
│  │  │  ├─ visibility-off.svg
│  │  │  ├─ visibility-on.svg
│  │  │  └─ youtube.svg
│  │  └─ images
│  │     ├─ .gitkeep
│  │     ├─ default-user.png
│  │     └─ test-image-experience1.png
│  ├─ components
│  │  ├─ .gitkeep
│  │  ├─ Input.css.ts
│  │  ├─ Input.tsx
│  │  ├─ alarm
│  │  │  ├─ AlarmModal.css.ts
│  │  │  └─ AlarmModal.tsx
│  │  ├─ button
│  │  │  ├─ Button.css.ts
│  │  │  └─ Button.tsx
│  │  ├─ drawer
│  │  │  ├─ CustomDrawer.css.ts
│  │  │  └─ CustomDrawer.tsx
│  │  ├─ dropdown
│  │  │  ├─ DropDownA.css.ts
│  │  │  ├─ DropDownA.tsx
│  │  │  ├─ DropDownB.css.ts
│  │  │  └─ DropDownB.tsx
│  │  ├─ dynamicportal
│  │  │  └─ DynamicPortal.tsx
│  │  ├─ footer
│  │  │  ├─ Footer.css.ts
│  │  │  └─ Footer.tsx
│  │  ├─ header
│  │  │  ├─ DropDown.css.ts
│  │  │  ├─ DropDown.tsx
│  │  │  ├─ Header.css.ts
│  │  │  └─ Header.tsx
│  │  ├─ mainpage
│  │  │  ├─ ActivityCard.css.ts
│  │  │  ├─ ActivityCard.tsx
│  │  │  ├─ ActivityCardList.css.ts
│  │  │  ├─ ActivityCardList.tsx
│  │  │  ├─ ActivitySearch.css.ts
│  │  │  ├─ ActivitySearch.tsx
│  │  │  ├─ CategoryFilter.css.ts
│  │  │  ├─ CategoryFilter.tsx
│  │  │  ├─ MainBanner.css.ts
│  │  │  ├─ MainBanner.tsx
│  │  │  ├─ PopularActivityButton.css.ts
│  │  │  ├─ PopularActivityButton.tsx
│  │  │  ├─ PopularActivityCard.css.ts
│  │  │  ├─ PopularActivityCard.tsx
│  │  │  ├─ PopularActivityList.css.ts
│  │  │  ├─ PopularActivityList.tsx
│  │  │  ├─ SearchResultList.css.ts
│  │  │  └─ SearchResultList.tsx
│  │  ├─ modal
│  │  │  ├─ Children.css.ts
│  │  │  ├─ Children.tsx
│  │  │  ├─ Dialog.css.ts
│  │  │  ├─ Dialog.tsx
│  │  │  ├─ Modal.css.ts
│  │  │  └─ Modal.tsx
│  │  ├─ pagination
│  │  │  ├─ Pagination.css.ts
│  │  │  └─ Pagination.tsx
│  │  ├─ profile
│  │  │  ├─ common
│  │  │  │  ├─ DropdownMenu.css.ts
│  │  │  │  ├─ DropdownMenu.tsx
│  │  │  │  ├─ ProfileSideNavMenu.css.ts
│  │  │  │  └─ ProfileSideNavMenu.tsx : /profile/** 페이지에 있는 공통 컴포넌트, 다른 프로필 메뉴 이름을 포함 (ex.내정보, 체험 내역, 체험 관리 등)
│  │  │  ├─ my-activities-create
│  │  │  │  ├─ MyActivitiesCreate.css.ts
│  │  │  │  └─ MyActivitiesCreate.tsx
│  │  │  ├─ my-activities
│  │  │  │  ├─ CardList.css.ts
│  │  │  │  └─ CardList.tsx
│  │  │  ├─ my-activity-board
│  │  │  │  ├─ EmptyCard.css.ts
│  │  │  │  ├─ EmptyCard.tsx
│  │  │  │  ├─ MyActivityCalendar.css
│  │  │  │  ├─ MyActivityCalendar.tsx
│  │  │  │  ├─ MyActivityCalendarMedia.css
│  │  │  │  ├─ MyActivityModal.css.ts
│  │  │  │  ├─ MyActivityModal.tsx
│  │  │  │  ├─ ReservationItem.css.ts
│  │  │  │  ├─ ReservationItem.tsx
│  │  │  │  └─ Toolbar.tsx
│  │  │  └─ my-reservations
│  │  │     ├─ CancelModal.css.ts
│  │  │     ├─ CancelModal.tsx
│  │  │     ├─ EmptyCard.css.ts
│  │  │     ├─ EmptyCard.tsx
│  │  │     ├─ RatingInput.css.ts
│  │  │     ├─ RatingInput.tsx
│  │  │     ├─ ReservationCard.css.ts
│  │  │     ├─ ReservationCard.tsx
│  │  │     ├─ ReviewModal.css.ts
│  │  │     └─ ReviewModal.tsx
│  │  ├─ rating
│  │  │  ├─ Rating.css.ts
│  │  │  └─ Rating.tsx
│  │  └─ skeletonui
│  │     ├─ Skeleton.css.ts
│  │     ├─ Skeleton.tsx
│  │     ├─ mainpage
│  │     │  ├─ ActivityCardSkeleton.css.ts
│  │     │  ├─ ActivityCardSkeleton.tsx
│  │     │  ├─ PopularCardSkeleton.css.ts
│  │     │  └─ PopularCardSkeleton.tsx
│  │     ├─ my-activity-board
│  │     │  ├─ ReservationItemSkeleton.css.ts
│  │     │  └─ ReservationItemSkeleton.tsx
│  │     └─ my-reservations
│  │        ├─ ReservationCardSkeleton.css.ts
│  │        └─ ReservationCardSkeleton.tsx
│  ├─ constants
│  │  ├─ .gitkeep
│  │  ├─ RESERVATION_STATUS.ts
│  │  └─ pagination_config.ts
│  ├─ hooks
│  │  ├─ .gitkeep
│  │  ├─ use-delete-activity.ts
│  │  ├─ use-detect-close.ts
│  │  ├─ use-multiple-image-upload.ts
│  │  ├─ use-my-activities-create.ts
│  │  ├─ use-my-activities-details.ts
│  │  ├─ use-my-activities-edit.ts
│  │  ├─ use-my-activities.ts
│  │  ├─ use-my-reservations.ts
│  │  ├─ use-single-image-upload.ts
│  │  └─ use-upload-image.ts
│  ├─ providers
│  │  └─ TanStackProvider.tsx
│  ├─ styles
│  │  ├─ .gitkeep
│  │  ├─ fontStyles.css.ts
│  │  ├─ global.css.ts
│  │  └─ reset.css
│  ├─ types
│  │  ├─ mainpage.ts
│  │  ├─ my-activities-create-data.ts
│  │  ├─ my-activities-edit-data.ts
│  │  ├─ my-activities-list.ts
│  │  ├─ my-activities.ts
│  │  └─ reservation-date-time.ts
│  └─ utils
│     ├─ .gitkeep
│     ├─ calculateoffsetlimit.ts
│     ├─ calculatepagegroupnumber.ts
│     ├─ format-to-kor.ts
│     ├─ pricetowon.ts
│     └─ recent-activities.ts
└─ tsconfig.json
```
