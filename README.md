# GlobalNomad

<div align="center">
  <br>
  
<img width="329" alt="image" src="https://github.com/user-attachments/assets/e0fe16bf-efd2-4c4c-85b1-58dee7577703">
  
</div>

<br>

# GlobalNomad

> **코드잇 프론트엔드 부트캠프 10기** <br/> **개발기간: 2024.12.17 ~ 2024.01.25**

## 배포 주소

> **배포 URL**: https://globalnomard.netlify.app/ <br/> > **테스트 ID**: player@gmail.com / PW: player1234

## 팀 소개

<div align="center">

| <img src="https://avatars.githubusercontent.com/u/96711699?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/115972184?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/166021800?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/176660375?v=4" width="150" height="150"/> |
| :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                   이수지<br/>[@mulddang2](https://github.com/mulddang2)                    |                     박지민<br/>[@jiminp00](https://github.com/jiminp00)                     |                  나승엽<br/>[@naseungyeop](https://github.com/naseungyeop)                  |                    오혁재<br/>[@duckjae12](https://github.com/duckjae12)                    |

</div>

## 프로젝트 소개

사용자가 판매자와 체험자 모두 될 수 있는 플랫폼으로, 캘린더, 지도 및 주소 관련 기능을 구현한 체험 상품 예약 프로젝트 입니다.

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
전체 시연 영상: https://youtu.be/Coqk3phuGlo?si=XpVh-IEul34dmNRg

---

## 아키텍쳐

### 디렉토리 구조

```
📦
├─ .eslintrc.js
├─ .gitattributes
├─ .github
│  ├─ pull_request_template.md
│  └─ workflows
│     └─ ci.yml
├─ .gitignore
├─ .husky
│  └─ pre-commit
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ README.md
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ public
│  ├─ fonts
│  │  └─ PretendardVariable.woff2
│  ├─ icons
│  │  ├─ .gitkeep
│  │  ├─ logo-big.svg
│  │  └─ logo.svg
│  └─ images
│     └─ .gitkeep
├─ src
│  ├─ apis : api 관련 폴더
│  │  ├─ .gitkeep
│  │  ├─ activities-api.ts
│  │  ├─ auth.ts
│  │  ├─ axios-instance.ts
│  │  ├─ get-activities.ts
│  │  ├─ get-current-page-activity.ts
│  │  ├─ get-popular-activity.ts
│  │  ├─ get-search-result.ts
│  │  ├─ my-activities.ts
│  │  ├─ my-activity-board.ts
│  │  ├─ my-reservations.ts
│  │  ├─ notifications.ts
│  │  ├─ oauth.ts
│  │  ├─ querykeys.ts
│  │  └─ users.ts
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ layout.css.ts
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  ├─ page.css.ts
│  │  │  └─ page.tsx
│  │  ├─ main
│  │  │  ├─ page.css.ts
│  │  │  └─ page.tsx
│  │  ├─ oauth
│  │  │  └─ page.tsx
│  │  ├─ page.css.ts
│  │  ├─ page.tsx
│  │  ├─ profile
│  │  │  ├─ layout.css.ts
│  │  │  ├─ layout.tsx : /profile/** 페이지에서 공통으로 포함됨.
│  │  │  ├─ my-activities
│  │  │  │  ├─ create : 체험 등록 페이지
│  │  │  │  │  ├─ page.css.ts
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ edit
│  │  │  │  │  └─ [id] : 체험 수정 페이지
│  │  │  │  │     ├─ page.css.ts
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ loading.css.ts
│  │  │  │  ├─ loading.tsx : loading 스피너
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx : 체험 관리 페이지
│  │  │  ├─ my-activity-board
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx
│  │  │  ├─ my-reservations
│  │  │  │  ├─ loading.css.ts
│  │  │  │  ├─ loading.tsx
│  │  │  │  ├─ page.css.ts
│  │  │  │  └─ page.tsx
│  │  │  └─ mypage
│  │  │     ├─ .gitkeep
│  │  │     ├─ page.css.ts
│  │  │     └─ page.tsx
│  │  └─ signup
│  │     ├─ kakao
│  │     │  └─ page.tsx
│  │     ├─ page.css.ts
│  │     └─ page.tsx
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ Arrow-Left.svg
│  │  │  ├─ Arrow-Right.svg
│  │  │  ├─ account-check-outline.svg
│  │  │  ├─ alarm.svg
│  │  │  ├─ arrow-down.svg
│  │  │  ├─ arrow.svg
│  │  │  ├─ bold_star.svg
│  │  │  ├─ btn-add-time.svg
│  │  │  ├─ btn-canceled.svg
│  │  │  ├─ btn-minus-time.svg
│  │  │  ├─ btn-x.svg
│  │  │  ├─ calendar-48px.svg
│  │  │  ├─ calendar-check-outline.svg
│  │  │  ├─ calendar-next.svg
│  │  │  ├─ calendar-prev.svg
│  │  │  ├─ check-mark.svg
│  │  │  ├─ check.svg
│  │  │  ├─ cog-outline.svg
│  │  │  ├─ double-arrow-left.svg
│  │  │  ├─ double-arrow-right.svg
│  │  │  ├─ empty.svg
│  │  │  ├─ facebook.svg
│  │  │  ├─ google.svg
│  │  │  ├─ instagram.svg
│  │  │  ├─ kakao.svg
│  │  │  ├─ meatball.svg
│  │  │  ├─ pen.svg
│  │  │  ├─ plus.svg
│  │  │  ├─ popular-arrow-left.svg
│  │  │  ├─ popular-arrow-right.svg
│  │  │  ├─ search.svg
│  │  │  ├─ star-empty.svg
│  │  │  ├─ star-fill.svg
│  │  │  ├─ text-box-check-outline.svg
│  │  │  ├─ twitter.svg
│  │  │  ├─ visibility-off.svg
│  │  │  ├─ visibility-on.svg
│  │  │  └─ youtube.svg
│  │  └─ images
│  │     ├─ .gitkeep
│  │     ├─ default-user.png
│  │     └─ test-image-experience1.png
│  ├─ components
│  │  ├─ .gitkeep
│  │  ├─ Input.css.ts
│  │  ├─ Input.tsx
│  │  ├─ alarm
│  │  │  ├─ AlarmModal.css.ts
│  │  │  └─ AlarmModal.tsx
│  │  ├─ button
│  │  │  ├─ Button.css.ts
│  │  │  └─ Button.tsx
│  │  ├─ drawer
│  │  │  ├─ CustomDrawer.css.ts
│  │  │  └─ CustomDrawer.tsx
│  │  ├─ dropdown
│  │  │  ├─ DropDownA.css.ts
│  │  │  ├─ DropDownA.tsx
│  │  │  ├─ DropDownB.css.ts
│  │  │  └─ DropDownB.tsx
│  │  ├─ dynamicportal
│  │  │  └─ DynamicPortal.tsx
│  │  ├─ footer
│  │  │  ├─ Footer.css.ts
│  │  │  └─ Footer.tsx
│  │  ├─ header
│  │  │  ├─ DropDown.css.ts
│  │  │  ├─ DropDown.tsx
│  │  │  ├─ Header.css.ts
│  │  │  └─ Header.tsx
│  │  ├─ mainpage
│  │  │  ├─ ActivityCard.css.ts
│  │  │  ├─ ActivityCard.tsx
│  │  │  ├─ ActivityCardList.css.ts
│  │  │  ├─ ActivityCardList.tsx
│  │  │  ├─ ActivitySearch.css.ts
│  │  │  ├─ ActivitySearch.tsx
│  │  │  ├─ CategoryFilter.css.ts
│  │  │  ├─ CategoryFilter.tsx
│  │  │  ├─ MainBanner.css.ts
│  │  │  ├─ MainBanner.tsx
│  │  │  ├─ PopularActivityButton.css.ts
│  │  │  ├─ PopularActivityButton.tsx
│  │  │  ├─ PopularActivityCard.css.ts
│  │  │  ├─ PopularActivityCard.tsx
│  │  │  ├─ PopularActivityList.css.ts
│  │  │  ├─ PopularActivityList.tsx
│  │  │  ├─ SearchResultList.css.ts
│  │  │  └─ SearchResultList.tsx
│  │  ├─ modal
│  │  │  ├─ Children.css.ts
│  │  │  ├─ Children.tsx
│  │  │  ├─ Dialog.css.ts
│  │  │  ├─ Dialog.tsx
│  │  │  ├─ Modal.css.ts
│  │  │  └─ Modal.tsx
│  │  ├─ pagination
│  │  │  ├─ Pagination.css.ts
│  │  │  └─ Pagination.tsx
│  │  ├─ profile
│  │  │  ├─ common
│  │  │  │  ├─ DropdownMenu.css.ts
│  │  │  │  ├─ DropdownMenu.tsx
│  │  │  │  ├─ ProfileSideNavMenu.css.ts
│  │  │  │  └─ ProfileSideNavMenu.tsx : /profile/** 페이지에 있는 공통 컴포넌트, 다른 프로필 메뉴 이름을 포함 (ex.내정보, 체험 내역, 체험 관리 등)
│  │  │  ├─ my-activities-create
│  │  │  │  ├─ MyActivitiesCreate.css.ts
│  │  │  │  └─ MyActivitiesCreate.tsx
│  │  │  ├─ my-activities
│  │  │  │  ├─ CardList.css.ts
│  │  │  │  └─ CardList.tsx
│  │  │  ├─ my-activity-board
│  │  │  │  ├─ EmptyCard.css.ts
│  │  │  │  ├─ EmptyCard.tsx
│  │  │  │  ├─ MyActivityCalendar.css
│  │  │  │  ├─ MyActivityCalendar.tsx
│  │  │  │  ├─ MyActivityCalendarMedia.css
│  │  │  │  ├─ MyActivityModal.css.ts
│  │  │  │  ├─ MyActivityModal.tsx
│  │  │  │  ├─ ReservationItem.css.ts
│  │  │  │  ├─ ReservationItem.tsx
│  │  │  │  └─ Toolbar.tsx
│  │  │  └─ my-reservations
│  │  │     ├─ CancelModal.css.ts
│  │  │     ├─ CancelModal.tsx
│  │  │     ├─ EmptyCard.css.ts
│  │  │     ├─ EmptyCard.tsx
│  │  │     ├─ RatingInput.css.ts
│  │  │     ├─ RatingInput.tsx
│  │  │     ├─ ReservationCard.css.ts
│  │  │     ├─ ReservationCard.tsx
│  │  │     ├─ ReviewModal.css.ts
│  │  │     └─ ReviewModal.tsx
│  │  ├─ rating
│  │  │  ├─ Rating.css.ts
│  │  │  └─ Rating.tsx
│  │  └─ skeletonui
│  │     ├─ Skeleton.css.ts
│  │     ├─ Skeleton.tsx
│  │     ├─ mainpage
│  │     │  ├─ ActivityCardSkeleton.css.ts
│  │     │  ├─ ActivityCardSkeleton.tsx
│  │     │  ├─ PopularCardSkeleton.css.ts
│  │     │  └─ PopularCardSkeleton.tsx
│  │     ├─ my-activity-board
│  │     │  ├─ ReservationItemSkeleton.css.ts
│  │     │  └─ ReservationItemSkeleton.tsx
│  │     └─ my-reservations
│  │        ├─ ReservationCardSkeleton.css.ts
│  │        └─ ReservationCardSkeleton.tsx
│  ├─ constants
│  │  ├─ .gitkeep
│  │  ├─ RESERVATION_STATUS.ts
│  │  └─ pagination_config.ts
│  ├─ hooks
│  │  ├─ .gitkeep
│  │  ├─ use-delete-activity.ts
│  │  ├─ use-detect-close.ts
│  │  ├─ use-multiple-image-upload.ts
│  │  ├─ use-my-activities-create.ts
│  │  ├─ use-my-activities-details.ts
│  │  ├─ use-my-activities-edit.ts
│  │  ├─ use-my-activities.ts
│  │  ├─ use-my-reservations.ts
│  │  ├─ use-single-image-upload.ts
│  │  └─ use-upload-image.ts
│  ├─ providers
│  │  └─ TanStackProvider.tsx
│  ├─ styles
│  │  ├─ .gitkeep
│  │  ├─ fontStyles.css.ts
│  │  ├─ global.css.ts
│  │  └─ reset.css
│  ├─ types
│  │  ├─ mainpage.ts
│  │  ├─ my-activities-create-data.ts
│  │  ├─ my-activities-edit-data.ts
│  │  ├─ my-activities-list.ts
│  │  ├─ my-activities.ts
│  │  └─ reservation-date-time.ts
│  └─ utils
│     ├─ .gitkeep
│     ├─ calculateoffsetlimit.ts
│     ├─ calculatepagegroupnumber.ts
│     ├─ format-to-kor.ts
│     ├─ pricetowon.ts
│     └─ recent-activities.ts
└─ tsconfig.json
```
