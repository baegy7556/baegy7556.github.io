# 사이트 수정 가이드

코드 몰라도 됨. 사이트 내용은 전부 **데이터 파일**에 있고, 웹 편집 화면(Pages CMS)에서 폼으로 고치면 끝.
저장하면 자동으로 커밋되고, 1~2분 뒤 사이트에 반영됨.

- 사이트: https://baegy7556.github.io
- 편집 화면: https://app.pagescms.org

---

## 0. 뭘 어디서 고치나

| 고치고 싶은 것 | 편집 화면 메뉴 | 실제 파일 |
| --- | --- | --- |
| 이름, 소개, 이력서 PDF, GitHub/LinkedIn/이메일 | **프로필** | `src/data/profile.yml` |
| "What I can do" 3칸 | **강점** | `src/data/highlights.yml` |
| 기술 스택 | **기술 스택** | `src/data/skills.yml` |
| 경력 | **경력** | `src/data/experience.yml` |
| 학력·수상 | **학력·수상** | `src/data/education.yml` |
| 프로젝트 (추가/수정/삭제/숨기기/순서/대표) | **프로젝트** | `src/content/projects/*.md` (하나당 파일 하나) |
| 메뉴·버튼·섹션 제목 같은 고정 문구 | **사이트 문구 (고급)** | `src/data/site.yml` |
| 이미지·영상·PDF | **Media** (또는 각 폼의 업로드 칸) | `public/media/` |

**규칙 두 개만 기억하면 됨**

1. **비워두면 사이트에서 숨겨짐.** LinkedIn 칸이 비어 있으면 LinkedIn 버튼이 안 나오고, 경력 항목에서 '장소'를 비우면 장소만 빠짐. 항목이 하나도 없는 섹션은 통째로 안 보임.
2. **필수 칸은 비울 수 없음.** 비운 채로 저장하면 편집 화면이 에러를 띄우고 막음. 혹시 GitHub에서 직접 고치다 비워도 빌드가 실패할 뿐이고, 기존 사이트는 그대로 유지됨 (6번 참고).

---

## 1. 처음 한 번만 하는 설정

### 1-1. GitHub Pages 켜기

1. https://github.com/baegy7556/baegy7556.github.io → **Settings** → 왼쪽 **Pages**
2. **Build and deployment → Source**를 **GitHub Actions**로 바꾸기
3. 끝. 이제 `main` 브랜치에 뭐가 올라가면 자동 배포됨.

### 1-2. 편집 화면(Pages CMS) 연결

1. https://app.pagescms.org 접속 → **GitHub**로 로그인
2. 처음이면 **Install the GitHub App** 버튼이 나옴 → 누르기
3. GitHub 화면에서 **Only select repositories** → `baegy7556.github.io` 선택 → **Install**
   (이 저장소 하나에만 권한을 주는 거라 안전함)
4. Pages CMS로 돌아오면 저장소 목록에 `baegy7556.github.io`가 보임 → 클릭
5. 브랜치는 **main** 선택
6. 왼쪽에 **프로젝트 / 프로필 / 강점 / …** 메뉴가 보이면 성공

> PR을 머지하기 전에는 설정 파일(`.pages.yml`)이 `main`에 아직 없어서 메뉴가 안 보임.
> 머지 전에 미리 써보고 싶으면 5번에서 브랜치를 `claude/vibrant-hamilton-vvgxmw`로 고르면 됨
> (단, 그때 저장한 내용은 그 브랜치에 들어가고, 머지해야 사이트에 반영됨).

---

## 2. 편집 화면 쓰는 법

1. https://app.pagescms.org → 저장소 `baegy7556.github.io` → 브랜치 `main`
2. 왼쪽 메뉴에서 고칠 것 선택 (예: **경력**)
3. 칸 아래 회색 글씨가 **힌트**임. 뭘 쓰면 되는지 다 적혀 있음
4. 목록(경력 항목, 태그 등)은
   - 목록 아래 **+ (Add)** 버튼으로 추가
   - 항목 옆 **휴지통 / Remove** 로 삭제
   - 항목을 **드래그**해서 순서 변경 (위에 있는 게 사이트에서도 위)
5. 오른쪽 위 **Save** → 자동으로 GitHub에 커밋됨
6. 1~2분 기다렸다가 사이트 새로고침 (안 바뀌면 `Ctrl+Shift+R` / 모바일은 탭 닫았다 열기)

---

## 3. 자주 하는 작업

### 프로젝트 추가

1. **프로젝트** → 오른쪽 위 **+ (Add / New)** 버튼
2. **제목**, **한 줄 설명** 채우기 (필수)
3. **대표 이미지** 칸에서 이미지 업로드 (16:9, 예: 1200×675 추천)
4. **사용 기술 태그**: 한 칸에 하나씩. 앞의 4개가 카드에 보임
5. **본문**: Overview / My role / Process / Results 순서로 쓰기
   (기존 프로젝트 하나 열어보고 따라 쓰면 편함)
6. **Save**

제목이 파일 이름(=주소)이 됨. 예: 제목 `Line Follower` → `/projects/line-follower/`.
나중에 제목을 바꿔도 주소는 안 바뀜 (원하면 편집 화면에서 파일 이름 변경 가능).

### 순서 바꾸기 / 대표 프로젝트 고정

- **대표 프로젝트 (맨 앞에 고정)** 체크 → 목록 맨 앞에 ★ Featured로 고정
- **순서**: 작은 숫자가 먼저. 대표 프로젝트끼리, 나머지끼리 각각 정렬됨
  - 예: 2번과 3번 사이에 끼우고 싶으면 `25`
- 프로젝트 목록 화면에서 '순서' 열로 정렬해서 보면 한눈에 보임

### 숨기기 / 삭제

- **숨기기** 체크 → 사이트에서만 사라짐 (파일은 남아서 언제든 다시 켤 수 있음) ← 추천
- 완전 삭제: 프로젝트 목록에서 그 항목의 **⋯ 메뉴 → Delete**. GitHub 기록에는 남아서 되살릴 수는 있음
- 경력·학력·강점 항목에도 **숨기기** 체크가 있음

### 이미지 바꾸기

1. 해당 프로젝트 열기 → **대표 이미지** (또는 **미디어** 안의 **파일**) 칸
2. 기존 이미지 지우고 새 이미지 업로드 → **Save**
3. 이미지 아래 **설명 (alt)** 칸도 채우기 (예: "The finished robot on the competition course")

팁:
- 이미지는 **500KB 이하**가 좋음 (https://squoosh.app 에서 WebP로 줄이면 됨)
- **GIF는 금방 몇 MB가 됨** → 짧은 영상이면 mp4로 올리거나 유튜브 사용
- 지금 들어 있는 회색 격자 이미지(`.svg`)는 전부 **자리표시**임. 다 교체하셈
- 안 쓰는 옛날 파일은 **Media** 메뉴에서 삭제 가능

### 영상 넣기 (유튜브)

1. 유튜브에 업로드 (공개 범위 **일부 공개**도 됨)
2. 프로젝트 → **미디어** → **+ (Add)** → **유튜브 링크**에 주소 그대로 붙여넣기
   (`https://www.youtube.com/watch?v=...`, `https://youtu.be/...` 둘 다 됨)
3. **캡션** 채우고 **Save**

20MB 넘는 영상은 저장소에 올리지 말고 유튜브로.

### 이력서(CV) 교체

1. **프로필** → **이력서 PDF** 칸 → 기존 파일 지우고 새 PDF 업로드 → **Save**
2. ⚠️ 이 PDF는 **누구나 다운로드 가능**함. 전화번호·주소처럼 공개하기 싫은 건 빼고 올리셈
3. 회사마다 다른 버전 쓰면 파일 이름이 회사 이름이 아닌지 확인 (예: `Geonyi_Bae_CV.pdf` 추천)

### 문구 수정

- 소개 문장, 한 줄 소개 → **프로필**
- "What I can do" 내용 → **강점**
- 메뉴, 버튼, 섹션 제목 ("Projects", "Download CV (PDF)" 등) → **사이트 문구 (고급)**

### 남은 TODO 찾기

프로젝트 초안에 `TODO:`라고 적힌 곳이 채워야 할 자리임. 공유하기 전에 다 지우셈.
찾는 법: 저장소 페이지에서 키보드 `/` 누르고 `TODO` 검색 → **Code** 결과 확인.

---

## 4. 대안: GitHub 웹에서 파일 직접 고치기

편집 화면이 안 될 때 쓰는 방법.

1. https://github.com/baegy7556/baegy7556.github.io 에서 파일 열기 (위 0번 표의 '실제 파일')
2. 오른쪽 위 **연필 아이콘(Edit this file)**
3. 고치고 → **Commit changes…** → **Commit directly to the main branch** → **Commit changes**

YAML 파일 주의점:
- **들여쓰기(스페이스 개수)** 를 위아래 줄과 똑같이 맞추기. 탭 쓰면 안 됨
- 글자에 `: ` (콜론+공백) 이나 `#` 이 들어가면 큰따옴표로 감싸기
  예: `- "Coursework: Electrical & Digital Systems"`
- 목록 항목은 `- ` 로 시작

새 프로젝트 추가: `src/content/projects/` 폴더 → **Add file → Create new file** →
이름 `my-project.md` → 기존 프로젝트 파일 내용을 복사해서 고치기.

이미지 올리기: `public/media/projects/` 폴더 → **Add file → Upload files** →
그 다음 프로젝트 파일의 `cover:` 를 `/media/projects/파일이름.jpg` 로 (앞에 `public` 빼고).

---

## 5. 내 컴퓨터에서 미리보기 (선택)

배포 전에 미리 보고 싶을 때만. 안 해도 됨.

1. https://nodejs.org 에서 **Node.js 22 이상(LTS)** 설치
2. 저장소 받기: GitHub 저장소 페이지 → **Code → Download ZIP** 후 압축 풀기
   (git 쓸 줄 알면 `git clone https://github.com/baegy7556/baegy7556.github.io.git`)
3. 그 폴더에서 터미널 열기 (Windows: 폴더 주소창에 `cmd` 입력 후 Enter)
4. 처음 한 번:

   ```bash
   npm install
   ```

5. 미리보기 실행:

   ```bash
   npm run dev
   ```

6. 브라우저에서 http://localhost:4321 열기. 파일 고치면 바로 반영됨. 끝낼 땐 터미널에서 `Ctrl+C`
7. 배포랑 똑같이 검사하려면:

   ```bash
   npm run build
   ```

   에러가 없으면 실제 배포도 성공함.

---

## 6. 저장했는데 사이트가 안 바뀔 때

배포가 실패하면 **기존 사이트가 그대로 유지됨** (깨진 버전이 올라가는 일 없음).
편집 화면에서 저장한 경우엔 GitHub 실패 알림 메일이 안 올 수도 있으니, 중요한 수정 뒤엔 Actions 탭을 한 번 확인하는 게 좋음.

확인하는 법:

1. 저장소 → **Actions** 탭
2. 빨간 ❌ 실행 클릭 → **build** 클릭 → 빨간 단계 펼치기
3. 이런 메시지를 찾기:

   ```
   [데이터 오류] src/data/experience.yml
     • items[2번째].role: 비어 있음 — 필수 항목이라 채워야 함
   ```

   → `experience.yml`의 **2번째 경력 항목**의 **직책(role)** 이 비어 있다는 뜻

   프로젝트 파일 문제면:

   ```
   [InvalidContentEntryDataError] projects → vex-line-following data does not match collection schema.
     summary: 비어 있음 — 필수 항목이라 채워야 함
   ```

   → `vex-line-following.md` 프로젝트의 **한 줄 설명(summary)** 이 비어 있다는 뜻

4. 편집 화면에서 그 칸 채우고 다시 Save → 자동으로 다시 배포됨

| 메시지 | 뜻 |
| --- | --- |
| `비어 있음 — 필수 항목이라 채워야 함` | 필수 칸이 비었음 |
| `숫자여야 함` | '순서' 칸에 숫자가 아닌 게 들어감 |
| `YAML 문법이 깨짐` | GitHub에서 직접 고치다 들여쓰기·콜론이 꼬임 (4번 주의점 참고) |

**Actions가 초록색(✅)인데도 안 바뀌면**: 브라우저 캐시임. `Ctrl+Shift+R`로 강력 새로고침.

---

## 7. 개발자용 메모

- 데이터 검사 규칙: `src/lib/data.ts` (YAML 파일), `src/content.config.ts` (프로젝트)
- 편집 화면 폼 정의: `.pages.yml` — 데이터 파일에 칸을 추가하면 여기에도 추가해야 폼에 보임
- 화면 코드: `src/pages/`, `src/components/`, `src/layouts/` — 여기엔 문구가 없음 (전부 데이터 파일에서 읽음)
